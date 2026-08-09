import { createClient } from '@/utils/supabase/client';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

export const supabase = createClient();

// Allow the app to work even without Supabase credentials (demo mode)
export const isDemoMode = !supabaseUrl || supabaseUrl === 'https://your-project.supabase.co';

/**
 * Get role label for display.
 */
export function getRoleLabel(role) {
  switch (role) {
    case 'super_admin': return 'Super Admin';
    case 'moderator': return 'Locality Moderator';
    default: return 'Citizen';
  }
}

/**
 * Get role icon emoji.
 */
export function getRoleIcon(role) {
  switch (role) {
    case 'super_admin': return '⚙️';
    case 'moderator': return '🛡️';
    default: return '👤';
  }
}

/**
 * Auto-detect role from email address (for demo / quick login).
 */
export function detectRoleFromEmail(email) {
  if (!email) return 'citizen';
  const lower = email.toLowerCase();
  if (lower.includes('admin')) return 'super_admin';
  if (lower.includes('mod') || lower.includes('subadmin')) return 'moderator';
  return 'citizen';
}
