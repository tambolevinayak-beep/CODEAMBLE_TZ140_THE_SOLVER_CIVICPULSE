'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { fetchUserIssues } from '@/lib/api';
import { useAuth } from '@/lib/AuthContext';
import { useRealtimeIssues } from '@/hooks/useRealtimeIssues';

export default function MyIssuesPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState([]);
  const [status, setStatus] = useState('all');

  useRealtimeIssues({
    filterUserId: user?.id,
    onInsert: (newIssue) => setIssues(prev => [newIssue, ...prev]),
    onUpdate: (updated) => setIssues(prev => prev.map(i => i.id === updated.id ? { ...i, ...updated } : i)),
    onDelete: (deleted) => setIssues(prev => prev.filter(i => i.id !== deleted.id)),
  });

  useEffect(() => {
    async function loadMyIssues() {
      if (!user?.id) {
        setIssues([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      const { data } = await fetchUserIssues(user.id);
      setIssues(data || []);
      setLoading(false);
    }

    loadMyIssues();
  }, [user?.id]);

  const filtered = useMemo(() => {
    if (status === 'all') return issues;
    return issues.filter((item) => item.status === status);
  }, [issues, status]);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl max-w-full mx-auto w-full">
      <section className="mb-6 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl p-5 shadow-[0_20px_55px_rgba(20,30,55,0.08)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 flex items-center gap-2">
              Account
              <span className="flex items-center gap-1 text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full border border-sky-200">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500"></span>
                </span>
                LIVE
              </span>
            </p>
            <h1 className="text-2xl font-bold text-slate-900">My Issues</h1>
            <p className="text-sm text-slate-600">Issues that you created or reported.</p>
          </div>
          <Link href="/citizen/report" className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
            Add Issue
          </Link>
        </div>
      </section>

      <div className="mb-4 flex flex-wrap gap-2">
        {['all', 'reported', 'verified', 'in_progress', 'resolved', 'rejected'].map((option) => (
          <button
            key={option}
            onClick={() => setStatus(option)}
            className={`rounded-xl px-3 py-1.5 text-sm ${status === option ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
          >
            {option.replace('_', ' ')}
          </button>
        ))}
      </div>

      <section className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)]">
        {loading ? (
          <p className="text-slate-600">Loading your issues...</p>
        ) : filtered.length === 0 ? (
          <p className="text-slate-600">No matching issues found.</p>
        ) : (
          <div className="space-y-3">
            {filtered.map((issue) => (
              <Link key={issue.id} href={`/citizen/issue/${issue.id}`} className="block rounded-xl border border-slate-200 bg-white p-4 transition hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{issue.title}</h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">{issue.description}</p>
                    <p className="mt-2 text-xs text-slate-500">{issue.location_address || 'Location unavailable'}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 capitalize">{issue.status?.replace('_', ' ')}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
