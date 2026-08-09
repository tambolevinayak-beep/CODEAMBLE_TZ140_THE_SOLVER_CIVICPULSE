'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { fetchIssues } from '@/lib/api';

export default function CommunityIssuesPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadCommunityIssues() {
      setLoading(true);
      const { data } = await fetchIssues({ limit: 120 });
      setIssues(data || []);
      setLoading(false);
    }

    loadCommunityIssues();
  }, []);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return issues
      .filter((item) => item.user_id !== user?.id)
      .filter((item) => {
        if (!normalizedQuery) return true;
        return (
          item.title?.toLowerCase().includes(normalizedQuery) ||
          item.description?.toLowerCase().includes(normalizedQuery) ||
          item.location_address?.toLowerCase().includes(normalizedQuery)
        );
      });
  }, [issues, query, user?.id]);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl max-w-full mx-auto w-full">
      <section className="mb-6 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl p-5 shadow-[0_20px_55px_rgba(20,30,55,0.08)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Account</p>
            <h1 className="text-2xl font-bold text-slate-900">Community Issues</h1>
            <p className="text-sm text-slate-600">Issues submitted by other members in your community.</p>
          </div>
          <Link href="/citizen/feed" className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700">
            Open Issues Board
          </Link>
        </div>
      </section>

      <div className="mb-4">
        <input
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
          placeholder="Search title, description, or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <section className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)]">
        {loading ? (
          <p className="text-slate-600">Loading community issues...</p>
        ) : filtered.length === 0 ? (
          <p className="text-slate-600">No community issues found.</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {filtered.map((issue) => (
              <Link key={issue.id} href={`/citizen/issue/${issue.id}`} className="rounded-xl border border-slate-200 bg-white p-4 transition hover:shadow-md">
                <h3 className="text-sm font-semibold text-slate-900">{issue.title}</h3>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2">{issue.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{issue.location_address || 'Location unavailable'}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 capitalize">{issue.status?.replace('_', ' ')}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
