'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { fetchIssues } from '@/lib/api';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

export default function CitizenMapPage() {
  const router = useRouter();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadIssues() {
      setLoading(true);
      const { data, error } = await fetchIssues({ limit: 200 });
      if (!error) {
        setIssues(data || []);
      }
      setLoading(false);
    }

    loadIssues();
  }, []);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl max-w-full mx-auto w-full">
      <section className="mb-6 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl p-5 shadow-[0_20px_55px_rgba(20,30,55,0.08)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Explore</p>
            <h1 className="text-2xl font-bold text-slate-900">Global Civic Issues Map</h1>
            <p className="text-sm text-slate-600">Interactive Leaflet map with real world geography, including India and all reported issue locations.</p>
          </div>
          <Link href="/citizen/report" className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700">
            Report from Map
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-white/60 bg-white/55 p-3 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.12)] min-h-[72vh]">
        {loading ? (
          <div className="h-[68vh] flex items-center justify-center text-slate-600">Loading map and issue markers...</div>
        ) : (
          <MapView
            issues={issues}
            center={[20, 78]}
            zoom={3}
            onMarkerClick={(issueId) => router.push(`/citizen/issue/${issueId}`)}
            showCustomizer
          />
        )}
      </section>
    </div>
  );
}
