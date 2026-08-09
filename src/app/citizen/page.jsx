'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { fetchIssues, fetchUserIssues } from '@/lib/api';
import { useRealtimeIssues } from '@/hooks/useRealtimeIssues';
import RealtimeToast from '@/components/RealtimeToast';

export default function CitizenDashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [myIssues, setMyIssues] = useState([]);
  const [communityIssues, setCommunityIssues] = useState([]);
  const [toastIssue, setToastIssue] = useState(null);

  useEffect(() => {
    async function loadDashboardData() {
      setLoading(true);

      const [mine, community] = await Promise.all([
        user?.id ? fetchUserIssues(user.id) : Promise.resolve({ data: [] }),
        fetchIssues({ limit: 40 }),
      ]);

      setMyIssues(mine.data || []);
      setCommunityIssues((community.data || []).filter((item) => item.user_id !== user?.id));
      setLoading(false);
    }

    loadDashboardData();
  }, [user?.id]);

  useRealtimeIssues({
    onInsert: (newIssue) => {
      if (newIssue.user_id === user?.id) {
        setMyIssues(prev => [newIssue, ...prev]);
      } else {
        setCommunityIssues(prev => [newIssue, ...prev]);
        setToastIssue(newIssue);
      }
    },
    onUpdate: (updatedIssue) => {
      if (updatedIssue.user_id === user?.id) {
        setMyIssues(prev => prev.map(i => i.id === updatedIssue.id ? updatedIssue : i));
      } else {
        setCommunityIssues(prev => prev.map(i => i.id === updatedIssue.id ? updatedIssue : i));
      }
    },
    onDelete: (deletedIssue) => {
      setMyIssues(prev => prev.filter(i => i.id !== deletedIssue.id));
      setCommunityIssues(prev => prev.filter(i => i.id !== deletedIssue.id));
    },
  });

  const activeMine = useMemo(
    () => myIssues.filter((item) => item.status !== 'resolved' && item.status !== 'rejected'),
    [myIssues]
  );

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl max-w-full mx-auto w-full">
      <section className="mb-6 rounded-3xl border border-white/70 bg-white/60 p-6 backdrop-blur-xl shadow-[0_24px_65px_rgba(12,18,35,0.12)] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-fuchsia-300/25 blur-3xl" />

        <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 flex items-center gap-2">
          Citizens Dashboard
          <span className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            LIVE
          </span>
        </p>
        <h1 className="relative mt-1 text-3xl font-bold text-slate-900">Welcome back, {user?.name || 'Citizen'}</h1>
        <p className="relative mt-2 max-w-2xl text-sm text-slate-700">Manage your profile, track your issue reports, explore civic hotspots on the map, and post video reels from one place.</p>

        <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">My Issues</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{myIssues.length}</p>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">Active</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{activeMine.length}</p>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">Community</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{communityIssues.length}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3 mb-6">
        <Link href="/citizen/profile" className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg transition hover:shadow-lg">
          <h3 className="text-base font-semibold text-slate-900">Profile</h3>
          <p className="mt-1 text-sm text-slate-600">View and edit your account details.</p>
        </Link>
        <Link href="/citizen/feed" className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg transition hover:shadow-lg">
          <h3 className="text-base font-semibold text-slate-900">Issues</h3>
          <p className="mt-1 text-sm text-slate-600">Browse issue board and create a new issue.</p>
        </Link>
        <Link href="/citizen/map" className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg transition hover:shadow-lg">
          <h3 className="text-base font-semibold text-slate-900">Map</h3>
          <p className="mt-1 text-sm text-slate-600">Explore issues on an interactive Leaflet map.</p>
        </Link>
      </section>

      <section className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)]">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Recent My Issues</h2>
          <Link href="/citizen/my-issues" className="text-sm font-medium text-emerald-700">View all</Link>
        </div>

        {loading ? (
          <p className="text-slate-600">Loading dashboard...</p>
        ) : myIssues.length === 0 ? (
          <p className="text-slate-600">No issues reported yet.</p>
        ) : (
          <div className="space-y-2">
            {myIssues.slice(0, 5).map((issue) => (
              <Link key={issue.id} href={`/citizen/issue/${issue.id}`} className="block rounded-xl border border-slate-200 bg-white p-3 transition hover:shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{issue.title}</p>
                    <p className="text-xs text-slate-600 line-clamp-1">{issue.location_address || 'Location unavailable'}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 capitalize">{issue.status?.replace('_', ' ')}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {toastIssue && (
        <RealtimeToast 
          issue={toastIssue} 
          onClose={() => setToastIssue(null)} 
        />
      )}
    </div>
  );
}
