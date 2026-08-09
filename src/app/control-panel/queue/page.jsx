'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useRealtimeIssues } from '@/hooks/useRealtimeIssues';
import { assignDepartment } from '@/lib/api';

export default function AdminCaseQueue() {
  const [problems, setProblems] = useState([]);
  const [departments, setDepartments] = useState([
    { id: 'dept-1', name: 'Roads & Infrastructure' },
    { id: 'dept-2', name: 'Water & Sanitation' },
    { id: 'dept-3', name: 'Electricity & Power' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useRealtimeIssues({
    onInsert: (newIssue) => setProblems(prev => [newIssue, ...prev]),
    onUpdate: (updated) => setProblems(prev => prev.map(p => p.id === updated.id ? { ...p, ...updated } : p)),
    onDelete: (deleted) => setProblems(prev => prev.filter(p => p.id !== deleted.id)),
  });

  useEffect(() => {
    async function fetchProblems() {
      if (!supabase) return;
      try {
        let query = supabase.from('problems').select('*').order('support_count', { ascending: false }).order('created_at', { ascending: false });
        if (searchQuery) {
          query = query.ilike('title', `%${searchQuery}%`);
        }
        const { data, error } = await query;
        if (!error && data) {
          setProblems(data);
        }
      } catch (err) {
        console.error('Error fetching problems:', err);
      }
    }
    fetchProblems();
  }, [searchQuery]);

  const pendingIssues = problems.filter(p => p.status !== 'resolved' && p.status !== 'escalated');
  const verifiedIssues = problems.filter(p => p.status === 'resolved');
  const escalatedIssues = problems.filter(p => p.status === 'escalated');

  const getIconForCategory = (cat) => {
    if (cat === 'pothole') return 'warning';
    if (cat === 'streetlight') return 'lightbulb';
    return 'info';
  };

  const getSeverityBadge = (supportCount) => {
    const likes = supportCount || 0;
    if (likes >= 100) return { label: 'Critical', color: 'error', bg: 'bg-error', text: 'text-error', icon: 'error' };
    if (likes >= 20) return { label: 'High', color: 'secondary', bg: 'bg-secondary', text: 'text-secondary', icon: 'warning' };
    return { label: 'Normal', color: 'primary', bg: 'bg-primary-container', text: 'text-primary', icon: 'info' };
  };

  const handleAssign = async (issueId, deptId, e) => {
    e.stopPropagation();
    if (!deptId) return;
    try {
      await assignDepartment(issueId, deptId);
      // Optimistic update
      setProblems(prev => prev.map(p => 
        p.id === issueId ? { ...p, status: 'in_progress', assigned_department_id: deptId } : p
      ));
    } catch (err) {
      console.error('Failed to assign department', err);
    }
  };

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full h-[calc(100vh-4rem)] flex flex-col">
      
<header className="h-20 border-b border-outline-variant bg-surface px-gutter flex items-center justify-between shrink-0 shadow-sm z-10 rounded-t-xl">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Admin Case Queue</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Triage and verify incoming community reports prioritized by citizen support.</p>
</div>
<div className="flex items-center gap-md">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input 
  className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-64 transition-all" 
  placeholder="Search issues..." 
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
</div>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors relative">
<span className="material-symbols-outlined">filter_list</span>
</button>
<div className="h-6 w-px bg-outline-variant"></div>
<button onClick={() => router.push('/citizen/report')} className="bg-primary text-white font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow-md flex items-center gap-sm">
<span className="material-symbols-outlined text-[16px]">add</span>
                    New Case
                </button>
</div>
</header>

<div className="flex-1 overflow-x-auto p-gutter custom-scrollbar flex gap-lg items-start pb-8 mt-4">

<div className="flex-shrink-0 w-80 flex flex-col max-h-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm h-full">
<div className="p-4 border-b border-outline-variant bg-surface-container-low rounded-t-xl flex items-center justify-between sticky top-0">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pending Review</h3>
</div>
<span className="bg-surface text-on-surface font-label-md text-label-md px-2 py-0.5 rounded-full border border-outline-variant">{pendingIssues.length}</span>
</div>
<div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">

{pendingIssues.map(issue => (
<div key={issue.id} onClick={() => router.push(`/citizen/issue/${issue.id}`)} className="bg-surface rounded-lg p-4 shadow-[0px_4px_20px_rgba(30,58,95,0.08)] border border-outline-variant hover:border-outline hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined">{getIconForCategory(issue.category)}</span>
</div>
<div>
<span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider block">#{issue.id.slice(0, 8)}</span>
<h4 className="font-headline-sm text-[16px] leading-tight text-on-surface group-hover:text-primary transition-colors">{issue.title}</h4>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">{issue.description || 'No description'}</p>

<div className="mb-3">
  <select 
    onClick={(e) => e.stopPropagation()}
    onChange={(e) => handleAssign(issue.id, e.target.value, e)}
    value={issue.assigned_department_id || ""}
    className="w-full text-xs font-label-md px-2 py-1.5 rounded bg-surface-container-low border border-outline-variant focus:outline-none focus:border-primary cursor-pointer text-on-surface-variant"
  >
    <option value="" disabled>Assign Department...</option>
    {departments.map(dept => (
      <option key={dept.id} value={dept.id}>{dept.name}</option>
    ))}
  </select>
</div>

<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">thumb_up</span>
<span className="font-body-sm text-[12px] font-bold">{issue.support_count || 0}</span>
</div>
<span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-${getSeverityBadge(issue.support_count).color}/10 ${getSeverityBadge(issue.support_count).text} font-label-md text-[11px]`}>
<span className="material-symbols-outlined text-[12px]">{getSeverityBadge(issue.support_count).icon}</span>
                                {getSeverityBadge(issue.support_count).label}
                            </span>
</div>
</div>
))}

{pendingIssues.length === 0 && (
  <div className="text-center text-on-surface-variant p-4">No pending issues.</div>
)}

</div>
</div>


<div className="flex-shrink-0 w-80 flex flex-col max-h-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm h-full">
<div className="p-4 border-b border-outline-variant bg-surface-container-low rounded-t-xl flex items-center justify-between sticky top-0">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-primary-container"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Resolved / Verified</h3>
</div>
<span className="bg-surface text-on-surface font-label-md text-label-md px-2 py-0.5 rounded-full border border-outline-variant">{verifiedIssues.length}</span>
</div>
<div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">

{verifiedIssues.map(issue => (
<div key={issue.id} onClick={() => router.push(`/citizen/issue/${issue.id}`)} className="bg-surface rounded-lg p-4 shadow-[0px_4px_20px_rgba(30,58,95,0.08)] border border-outline-variant hover:border-outline hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined">{getIconForCategory(issue.category)}</span>
</div>
<div>
<span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider block">#{issue.id.slice(0, 8)}</span>
<h4 className="font-headline-sm text-[16px] leading-tight text-on-surface group-hover:text-primary transition-colors">{issue.title}</h4>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">{issue.description}</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-2">
<span className="font-body-sm text-[12px] text-on-surface-variant">Closed</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-primary-container/15 text-primary font-label-md text-[11px]">
<span className="material-symbols-outlined text-[12px]">check_circle</span>
                                Resolved
                            </span>
</div>
</div>
))}

{verifiedIssues.length === 0 && (
  <div className="text-center text-on-surface-variant p-4">No resolved issues.</div>
)}

</div>
</div>

<div className="flex-shrink-0 w-80 flex flex-col max-h-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm h-full">
<div className="p-4 border-b border-outline-variant bg-surface-container-low rounded-t-xl flex items-center justify-between sticky top-0">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-error"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Escalated</h3>
</div>
<span className="bg-surface text-on-surface font-label-md text-label-md px-2 py-0.5 rounded-full border border-outline-variant">{escalatedIssues.length}</span>
</div>
<div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">

{escalatedIssues.map(issue => (
<div key={issue.id} onClick={() => router.push(`/citizen/issue/${issue.id}`)} className="bg-surface rounded-lg p-4 shadow-[0px_4px_20px_rgba(30,58,95,0.08)] border border-error/30 hover:border-error/60 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-error/5 -rotate-45 translate-x-8 -translate-y-8 rounded-full pointer-events-none"></div>
<div className="flex justify-between items-start mb-3 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">{getIconForCategory(issue.category)}</span>
</div>
<div>
<span className="font-label-md text-[10px] text-error uppercase tracking-wider block">#{issue.id.slice(0, 8)}</span>
<h4 className="font-headline-sm text-[16px] leading-tight text-on-surface group-hover:text-error transition-colors">{issue.title}</h4>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3 relative z-10">{issue.description}</p>
<div className="flex items-center justify-between mt-auto relative z-10">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">thumb_up</span>
<span className="font-body-sm text-[12px] text-error font-bold">{issue.support_count || 0}</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-error/15 text-error font-label-md text-[11px]">
<span className="material-symbols-outlined text-[12px]">{getSeverityBadge(issue.support_count).icon}</span>
                                {getSeverityBadge(issue.support_count).label}
                            </span>
</div>
</div>
))}

{escalatedIssues.length === 0 && (
  <div className="text-center text-on-surface-variant p-4">No escalated issues.</div>
)}

</div>
</div>
</div>

    </div>
  );
}
