'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchIssues, toggleSupport, hasUserSupported } from '@/lib/api';
import { useAuth } from '@/lib/AuthContext';
import { useRealtimeIssues } from '@/hooks/useRealtimeIssues';
import RealtimeToast from '@/components/RealtimeToast';

const STATUS_LABELS = {
  reported: { label: 'Reported', color: 'bg-error-container/15 text-error', icon: 'error' },
  verified: { label: 'Verified', color: 'bg-primary-container/15 text-primary', icon: 'check_circle' },
  in_progress: { label: 'In Progress', color: 'bg-tertiary-container/15 text-tertiary-container', icon: 'engineering' },
  resolved: { label: 'Resolved', color: 'bg-[#E6F4EA] text-[#137333]', icon: 'done_all' },
};

const CATEGORY_ICONS = {
  pothole: { icon: 'warning', bg: 'bg-error-container text-on-error-container' },
  lighting: { icon: 'lightbulb', bg: 'bg-secondary-container text-on-secondary-container' },
  sanitation: { icon: 'delete', bg: 'bg-tertiary-container text-on-tertiary-container' },
  water: { icon: 'water_drop', bg: 'bg-primary-container/30 text-primary' },
  road: { icon: 'road', bg: 'bg-error-container text-on-error-container' },
  other: { icon: 'report', bg: 'bg-surface-container text-on-surface-variant' },
};

export default function CommunityFeed() {
  const { user } = useAuth();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // all, reported, in_progress, resolved
  const [search, setSearch] = useState('');
  const [supportedIds, setSupportedIds] = useState(new Set());
  const [toastIssue, setToastIssue] = useState(null);

  useRealtimeIssues({
    onInsert: (newIssue) => {
      setIssues(prev => {
        // Avoid duplicates if fetch just happened
        if (prev.some(i => i.id === newIssue.id)) return prev;
        return [newIssue, ...prev];
      });
      // Don't show toast for own issues
      if (newIssue.user_id !== user?.id) {
        setToastIssue(newIssue);
      }
    },
    onUpdate: (updatedIssue) => {
      setIssues(prev => prev.map(i => i.id === updatedIssue.id ? { ...i, ...updatedIssue } : i));
    },
    onDelete: (deletedIssue) => {
      setIssues(prev => prev.filter(i => i.id !== deletedIssue.id));
    },
  });

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const statusFilter = filter === 'all' ? undefined : filter;
        const { data, error: fetchError } = await fetchIssues({
          status: statusFilter,
          search: search || undefined,
          limit: 30,
        });
        if (fetchError) throw fetchError;
        setIssues(data);

        // Check which issues the user has supported
        if (user?.id && data.length > 0) {
          const supported = new Set();
          for (const issue of data.slice(0, 10)) {
            const has = await hasUserSupported(issue.id, user.id);
            if (has) supported.add(issue.id);
          }
          setSupportedIds(supported);
        }
      } catch (err) {
        setError(err?.message || 'Failed to load issues');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [filter, search, user?.id]);

  async function handleSupport(issueId, e) {
    e.preventDefault();
    e.stopPropagation();
    if (!user?.id) return;

    const result = await toggleSupport(issueId, user.id);
    if (!result.error) {
      setSupportedIds(prev => {
        const next = new Set(prev);
        if (result.supported) next.add(issueId);
        else next.delete(issueId);
        return next;
      });
      // Update local count
      setIssues(prev => prev.map(issue => {
        if (issue.id === issueId) {
          return {
            ...issue,
            support_count: (issue.support_count || 0) + (result.supported ? 1 : -1),
          };
        }
        return issue;
      }));
    }
  }

  function timeAgo(dateStr) {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
  }

  const getCategoryInfo = (cat) => CATEGORY_ICONS[cat] || CATEGORY_ICONS.other;
  const getStatusInfo = (status) => STATUS_LABELS[status] || STATUS_LABELS.reported;

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-full mx-auto w-full">

<section className="mb-6 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl p-5 shadow-[0_20px_55px_rgba(20,30,55,0.08)]">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 flex items-center gap-2">
        Issues
        <span className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          LIVE
        </span>
      </p>
      <h1 className="text-2xl font-bold text-slate-900">Community Issue Board</h1>
      <p className="text-sm text-slate-600">Track live reports from citizens and quickly add a new civic issue.</p>
    </div>
    <Link href="/citizen/report" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
      Add Issue
    </Link>
  </div>
</section>

{/* Filter bar */}
<section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md pb-md border-b border-outline-variant/30">
<div className="flex items-center gap-sm bg-surface-container-low p-1 rounded-lg border border-outline-variant/50">
  {[
    { key: 'all', label: 'All' },
    { key: 'reported', label: 'Reported' },
    { key: 'in_progress', label: 'In Progress' },
    { key: 'resolved', label: 'Resolved' },
  ].map(tab => (
    <button
      key={tab.key}
      onClick={() => setFilter(tab.key)}
      className={`px-md py-sm rounded-md font-label-md text-label-md transition-all ${
        filter === tab.key
          ? 'bg-white ambient-shadow-level-1 text-primary'
          : 'text-on-surface-variant hover:bg-surface-variant'
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>
<div className="flex items-center gap-sm">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm group-focus-within:text-primary transition-colors">search</span>
<input
  className="pl-10 pr-4 py-2 rounded-lg border border-[#DDE3EA] bg-white font-body-sm text-body-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all w-64"
  placeholder="Search issues..."
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
</div>
</div>
</section>

{/* Loading state */}
{loading && (
  <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter mt-md">
    {[1, 2, 3].map(i => (
      <div key={i} className="bg-white rounded-lg border border-[#DDE3EA] p-md animate-pulse">
        <div className="flex items-center gap-sm mb-md">
          <div className="w-10 h-10 rounded-full bg-surface-container"></div>
          <div className="flex-1"><div className="h-4 bg-surface-container rounded w-3/4"></div></div>
        </div>
        <div className="h-4 bg-surface-container rounded w-full mb-2"></div>
        <div className="h-4 bg-surface-container rounded w-2/3 mb-4"></div>
        <div className="h-32 bg-surface-container rounded"></div>
      </div>
    ))}
  </section>
)}

{/* Error state */}
{error && !loading && (
  <section className="flex flex-col items-center justify-center py-xl mt-lg text-center bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA]">
    <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Something went wrong</h3>
    <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6">{error}</p>
    <button onClick={() => setFilter(filter)} className="bg-primary-container text-white font-label-md text-label-md px-lg py-sm rounded-lg hover:brightness-90 transition-all shadow-sm">
      Try Again
    </button>
  </section>
)}

{/* Empty state */}
{!loading && !error && issues.length === 0 && (
  <section className="flex flex-col items-center justify-center py-xl mt-lg text-center bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA]">
    <span className="material-symbols-outlined text-6xl text-surface-variant mb-4">check_circle</span>
    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">No issues found</h3>
    <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6">
      {search ? `No results for "${search}".` : 'There are no issues in this category. Be the first to report!'}
    </p>
    <Link href="/citizen/report" className="bg-primary-container text-white font-label-md text-label-md px-lg py-sm rounded-lg hover:brightness-90 transition-all shadow-sm active:translate-y-[1px]">
      Report New Issue
    </Link>
  </section>
)}

{/* Issue cards */}
{!loading && !error && issues.length > 0 && (
  <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter mt-md">
    {issues.map(issue => {
      const catInfo = getCategoryInfo(issue.category);
      const statusInfo = getStatusInfo(issue.status);
      const isSupported = supportedIds.has(issue.id);

      return (
        <Link href={`/citizen/issue/${issue.id}`} key={issue.id}>
          <article className="bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA] p-md flex flex-col gap-md hover:ambient-shadow-level-2 hover:border-[#DDE3EA] transition-all duration-300 group cursor-pointer relative overflow-hidden h-full">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-sm">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${catInfo.bg}`}>
                  <span className="material-symbols-outlined">{catInfo.icon}</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface capitalize">{issue.category || 'Issue'}</p>
                  <div className="flex items-center gap-1 text-outline font-body-sm text-body-sm text-xs">
                    <span>Reported by</span>
                    <span className="font-semibold text-on-surface-variant">{issue.reporter_name || 'Citizen'}</span>
                    <span>• {timeAgo(issue.created_at)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">{issue.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{issue.description}</p>
            </div>
            {issue.media_urls?.[0] && (
              <div className="w-full h-32 rounded-md overflow-hidden bg-surface-container mt-auto">
                <img src={issue.media_urls[0]} alt={issue.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            )}
            <div className="flex items-center justify-between pt-sm border-t border-outline-variant/30 mt-auto">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-xl font-label-md text-label-md ${statusInfo.color}`}>
                <span className="material-symbols-outlined text-[12px]">{statusInfo.icon}</span>
                {statusInfo.label}
              </span>
              <div className="flex items-center gap-3 text-outline">
                <button
                  onClick={(e) => handleSupport(issue.id, e)}
                  className={`flex items-center gap-1 transition-colors ${isSupported ? 'text-primary' : 'hover:text-primary'}`}
                >
                  <span className="material-symbols-outlined text-sm">{isSupported ? 'favorite' : 'favorite_border'}</span>
                  <span className="font-label-md text-label-md text-xs">{issue.support_count || 0}</span>
                </button>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">chat_bubble</span>
                  <span className="font-label-md text-label-md text-xs">{issue.comment_count || 0}</span>
                </span>
              </div>
            </div>
          </article>
        </Link>
      );
    })}
  </section>
)}

  {toastIssue && (
    <RealtimeToast 
      issue={toastIssue} 
      onClose={() => setToastIssue(null)} 
    />
  )}
</div>
  );
}
