import { supabase, isDemoMode } from './supabase';
import { AUTH_DISABLED } from './AuthContext';
import { IssueEventBus } from './issueEventBus';

/** Check if writes should be mocked (auth disabled but Supabase still connected for reads) */
const shouldMockWrites = () => AUTH_DISABLED || isDemoMode;

/** Generate a fake UUID for demo-mode inserts */
const fakeUUID = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });

// --- Local Mock Storage Helpers ---
function getMockIssues() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('civicpulse_mock_issues') || '[]');
  } catch {
    return [];
  }
}

function saveMockIssue(issue) {
  if (typeof window === 'undefined') return;
  const issues = getMockIssues();
  issues.unshift(issue);
  localStorage.setItem('civicpulse_mock_issues', JSON.stringify(issues));
}

function updateMockIssue(id, updates) {
  if (typeof window === 'undefined') return;
  const issues = getMockIssues();
  const index = issues.findIndex(i => i.id === id);
  if (index !== -1) {
    issues[index] = { ...issues[index], ...updates };
    localStorage.setItem('civicpulse_mock_issues', JSON.stringify(issues));
  }
}
// ----------------------------------

/**
 * Supabase query helpers for the CivicPulse app.
 * Since there is no FastAPI backend, all data operations go through Supabase directly.
 */

// ─── Issues / Problems ───────────────────────────────────────────────

/** Fetch all issues, optionally filtered */
export async function fetchIssues({ status, category, search, limit = 50, orderBy = 'created_at', ascending = false } = {}) {
  if (!supabase) return { data: [], error: null };

  let query = supabase
    .from('problems')
    .select('*, users(name, avatar_url)')
    .order(orderBy, { ascending })
    .limit(limit);

  if (status) query = query.eq('status', status);
  if (category) query = query.eq('category', category);
  if (search) query = query.ilike('title', `%${search}%`);

  const { data, error } = await query;

  let combinedData = data || [];
  if (shouldMockWrites()) {
    let mockData = getMockIssues();
    if (status) mockData = mockData.filter(i => i.status === status);
    if (category) mockData = mockData.filter(i => i.category === category);
    if (search) mockData = mockData.filter(i => i.title?.toLowerCase().includes(search.toLowerCase()));
    
    // De-duplicate if somehow a mock matches a real DB record
    const realIds = new Set(combinedData.map(i => i.id));
    mockData = mockData.filter(i => !realIds.has(i.id));

    combinedData = [...mockData, ...combinedData]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, limit);
  }

  return { data: combinedData, error };
}

/** Fetch a single issue by ID */
export async function fetchIssueById(id) {
  if (shouldMockWrites()) {
    const mock = getMockIssues().find(i => i.id === id);
    if (mock) return { data: mock, error: null };
  }

  if (!supabase) return { data: null, error: null };

  const { data, error } = await supabase
    .from('problems')
    .select('*')
    .eq('id', id)
    .single();

  return { data, error };
}

/** Fetch issues for a specific user */
export async function fetchUserIssues(userId) {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('problems')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  let combinedData = data || [];
  if (shouldMockWrites()) {
    const mockData = getMockIssues().filter(i => i.user_id === userId);
    combinedData = [...mockData, ...combinedData]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  return { data: combinedData, error };
}

/** Create a new issue */
export async function createIssue(issueData) {
  if (!supabase) return { data: null, error: 'Demo mode — Supabase not connected' };

  if (shouldMockWrites()) {
    const mockIssue = {
      id: fakeUUID(),
      ...issueData,
      users: { name: 'Demo Citizen', avatar_url: null },
      support_count: 0,
      comment_count: 0,
      is_hidden: false,
      flag_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    saveMockIssue(mockIssue);
    IssueEventBus.emit('INSERT', mockIssue);
    return { data: mockIssue, error: null };
  }

  const { data, error } = await supabase
    .from('problems')
    .insert([issueData])
    .select()
    .single();

  return { data, error };
}

/** Upload issue/reel media to Supabase Storage */
export async function uploadIssueMedia(file, userId) {
  if (!supabase) return { data: null, error: 'Demo mode — Supabase not connected' };

  if (shouldMockWrites()) {
    // Return a temporary local object URL to bypass RLS in demo mode
    const publicUrl = typeof window !== 'undefined' ? URL.createObjectURL(file) : '';
    return { data: { path: `mock/${file.name}`, publicUrl }, error: null };
  }

  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const filePath = `${userId || 'anonymous'}/${Date.now()}-${sanitizedName}`;

  const { error: uploadError } = await supabase.storage
    .from('evidence')
    .upload(filePath, file, { upsert: false, contentType: file.type || undefined });

  if (uploadError) {
    return { data: null, error: uploadError.message || 'Failed to upload file' };
  }

  const { data } = supabase.storage.from('evidence').getPublicUrl(filePath);
  return { data: { path: filePath, publicUrl: data.publicUrl }, error: null };
}

/** Save confirmed verification evidence and its capture location. */
export async function createVerificationSubmission(submission) {
  if (!supabase) return { data: null, error: 'Supabase is not connected' };

  if (shouldMockWrites()) {
    const saved = { id: fakeUUID(), ...submission, status: 'received', created_at: new Date().toISOString() };
    if (typeof window !== 'undefined') {
      const records = JSON.parse(localStorage.getItem('civicpulse_mock_verifications') || '[]');
      localStorage.setItem('civicpulse_mock_verifications', JSON.stringify([saved, ...records]));
    }
    return { data: saved, error: null };
  }

  const { data, error } = await supabase.from('verification_submissions').insert([submission]).select().single();
  return { data, error };
}

/** Fetch issues that contain playable media for reels */
export async function fetchReelIssues(limit = 60) {
  const { data, error } = await fetchIssues({ limit, orderBy: 'created_at', ascending: false });
  if (error) return { data: [], error };

  const reels = (data || []).filter((item) =>
    Array.isArray(item.media_urls) &&
    item.media_urls.some((url) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url))
  );

  return { data: reels, error: null };
}

/** Update issue status (for moderator/admin actions) */
export async function updateIssueStatus(issueId, status, updateData = {}) {
  if (!supabase) return { data: null, error: 'Demo mode' };

  if (shouldMockWrites()) {
    const updated = { id: issueId, status, ...updateData, updated_at: new Date().toISOString() };
    updateMockIssue(issueId, updated);
    IssueEventBus.emit('UPDATE', updated);
    return { data: updated, error: null };
  }

  const { data, error } = await supabase
    .from('problems')
    .update({ status, ...updateData, updated_at: new Date().toISOString() })
    .eq('id', issueId)
    .select()
    .single();

  return { data, error };
}

/**
 * Assign a department to an issue (Admin/Moderator only)
 */
export async function assignDepartment(issueId, departmentId) {
  if (shouldMockWrites()) {
    console.log(`[MOCK] Assigned dept ${departmentId} to issue ${issueId}`);
    const updated = { id: issueId, assigned_department_id: departmentId, status: 'in_progress', updated_at: new Date().toISOString() };
    updateMockIssue(issueId, updated);
    IssueEventBus.emit('UPDATE', updated);
    return { data: updated, error: null };
  }

  const { data, error } = await supabase
    .from('problems')
    .update({ 
      assigned_department_id: departmentId,
      status: 'in_progress' 
    })
    .eq('id', issueId)
    .select()
    .single();

  return { data, error };
}

// ─── Support / Votes ─────────────────────────────────────────────────

/** Toggle support on an issue */
export async function toggleSupport(issueId, userId) {
  if (!supabase) return { supported: false, count: 0, error: 'Demo mode' };

  if (shouldMockWrites()) {
    // In demo mode, just toggle locally
    return { supported: true, count: 1, error: null };
  }

  // Check if user already supports
  const { data: existing } = await supabase
    .from('problem_support')
    .select('id')
    .eq('problem_id', issueId)
    .eq('user_id', userId)
    .maybeSingle();

  if (existing) {
    // Remove support
    await supabase.from('problem_support').delete().eq('id', existing.id);
  } else {
    // Add support
    await supabase.from('problem_support').insert([{ problem_id: issueId, user_id: userId }]);
  }

  const { count } = await supabase
    .from('problem_support')
    .select('*', { count: 'exact', head: true })
    .eq('problem_id', issueId);

  await supabase
    .from('problems')
    .update({ support_count: count || 0, updated_at: new Date().toISOString() })
    .eq('id', issueId);

  return { supported: !existing, count: count || 0, error: null };
}

/** Get support count for an issue */
export async function getSupportCount(issueId) {
  if (!supabase) return { count: 0, error: null };

  const { count, error } = await supabase
    .from('problem_support')
    .select('*', { count: 'exact', head: true })
    .eq('problem_id', issueId);

  return { count: count || 0, error };
}

/** Check if user has supported an issue */
export async function hasUserSupported(issueId, userId) {
  if (!supabase) return false;

  const { data } = await supabase
    .from('problem_support')
    .select('id')
    .eq('problem_id', issueId)
    .eq('user_id', userId)
    .maybeSingle();

  return !!data;
}

// ─── Comments ────────────────────────────────────────────────────────

/** Fetch comments for an issue */
export async function fetchComments(issueId) {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('problem_id', issueId)
    .order('created_at', { ascending: true });

  return { data: data || [], error };
}

/** Add a comment */
export async function addComment(issueId, userId, text) {
  if (!supabase) return { data: null, error: 'Demo mode' };

  if (shouldMockWrites()) {
    return {
      data: { id: fakeUUID(), problem_id: issueId, user_id: userId, text, created_at: new Date().toISOString() },
      error: null,
    };
  }

  const { data, error } = await supabase
    .from('comments')
    .insert([{ problem_id: issueId, user_id: userId, text }])
    .select()
    .single();

  return { data, error };
}

// ─── Users / Profiles ────────────────────────────────────────────────

/** Fetch user profile */
export async function fetchUserProfile(userId) {
  if (!supabase) return { data: null, error: null };

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  return { data, error };
}

/** Fetch leaderboard — top users by impact_score */
export async function fetchLeaderboard(limit = 20) {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('users')
    .select('id, name, email, role, impact_score, avatar_url, locality_id')
    .order('impact_score', { ascending: false })
    .limit(limit);

  return { data: data || [], error };
}

// ─── Notifications ───────────────────────────────────────────────────

/** Fetch notifications for a user */
export async function fetchNotifications(userId) {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(50);

  return { data: data || [], error };
}

/** Mark a notification as read */
export async function markNotificationRead(notificationId) {
  if (!supabase) return { error: 'Demo mode' };
  if (shouldMockWrites()) return { error: null };

  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', notificationId);

  return { error };
}

// ─── Admin / Analytics ───────────────────────────────────────────────

/** Fetch all departments */
export async function fetchDepartments() {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('departments')
    .select('*')
    .order('name');

  return { data: data || [], error };
}

/** Fetch all moderators/staff */
export async function fetchModerators() {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .in('role', ['moderator', 'super_admin'])
    .order('name');

  return { data: data || [], error };
}

/** Fetch all users */
export async function fetchAllUsers() {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('name');

  return { data: data || [], error };
}

/** Fetch all localities */
export async function fetchLocalities() {
  if (!supabase) return { data: [], error: null };

  const { data, error } = await supabase
    .from('localities')
    .select('*')
    .order('name');

  return { data: data || [], error };
}

/** Mark all notifications read for a user */
export async function markAllNotificationsRead(userId) {
  if (!supabase) return { error: 'Demo mode' };
  if (shouldMockWrites()) return { error: null };

  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('user_id', userId)
    .eq('read', false);

  return { error };
}

/** Update user profile */
export async function updateUserProfile(userId, updates) {
  if (!supabase) return { data: null, error: 'Demo mode' };
  if (shouldMockWrites()) return { data: { id: userId, ...updates }, error: null };

  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  return { data, error };
}

/** Create a department */
export async function createDepartment(deptData) {
  if (!supabase) return { data: null, error: 'Demo mode' };
  if (shouldMockWrites()) return { data: { id: fakeUUID(), ...deptData, created_at: new Date().toISOString() }, error: null };

  const { data, error } = await supabase
    .from('departments')
    .insert([deptData])
    .select()
    .single();

  return { data, error };
}
