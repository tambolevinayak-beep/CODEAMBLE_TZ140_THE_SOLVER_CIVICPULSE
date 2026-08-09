'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { fetchIssues } from '@/lib/api';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

export default function AdminMapPage() {
  const router = useRouter();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadIssues() {
      setLoading(true);
      const { data, error } = await fetchIssues({ limit: 1000 }); // Admin views more points
      if (!error) {
        setIssues(data || []);
      }
      setLoading(false);
    }

    loadIssues();
  }, []);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      <header className="flex justify-between items-end mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Analytics</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Map Heatmap</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Geospatial overview of all reported civic issues.</p>
        </div>
      </header>

      <section className="rounded-2xl border border-white/60 bg-white/55 p-3 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.12)] min-h-[75vh]">
        {loading ? (
          <div className="h-[70vh] flex items-center justify-center text-slate-600">Loading map and geographical data...</div>
        ) : (
          <MapView
            issues={issues}
            center={[20, 78]}
            zoom={4}
            onMarkerClick={(issueId) => router.push(`/citizen/issue/${issueId}`)}
            showCustomizer
          />
        )}
      </section>
    </div>
  );
}
