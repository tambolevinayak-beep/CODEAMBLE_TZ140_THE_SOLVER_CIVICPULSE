'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function CitizenDashboard() {
  const { user } = useAuth();
  const [activeReports, setActiveReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from('problems')
          .select('*')
          .eq('user_id', user?.id)
          .neq('status', 'resolved')
          .order('created_at', { ascending: false })
          .limit(3);

        if (!error && data) {
          setActiveReports(data);
        }
      } catch (err) {
        console.error('Error fetching reports:', err);
      } finally {
        setLoading(false);
      }
    }
    if (user) {
      fetchReports();
    }
  }, [user]);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      
      <div className="mb-xl">
        <h2 className="font-display-lg text-display-lg text-on-surface mb-xs">Good morning, {user?.name || 'Citizen'}.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Here is your local impact overview for today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 flex flex-col gap-xl">
          <section>
            <div className="flex justify-between items-center mb-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary">report</span>
                My Active Reports
              </h3>
              <Link className="font-label-md text-label-md text-primary hover:underline" href="/citizen/my-issues">View All</Link>
            </div>
            
            <div className="flex flex-col gap-md">
              {loading ? (
                <div className="p-md text-center text-on-surface-variant">Loading reports...</div>
              ) : activeReports.length === 0 ? (
                <div className="bg-surface rounded-lg shadow-level-1 p-lg border border-surface-container-highest text-center text-on-surface-variant">
                  You don't have any active reports. Help your community by reporting an issue!
                </div>
              ) : (
                activeReports.map(report => (
                  <Link href={`/citizen/issue/${report.id}`} key={report.id}>
                    <div className="bg-surface rounded-lg shadow-level-1 p-md border border-surface-container-highest hover:shadow-level-2 hover:border-[#DDE3EA] transition-all cursor-pointer group">
                      <div className="flex items-start gap-md">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${report.status === 'in_progress' ? 'bg-tertiary-container' : 'bg-error-container'}`}>
                          <span className={`material-symbols-outlined ${report.status === 'in_progress' ? 'text-on-tertiary-container' : 'text-on-error-container'}`}>
                            {report.status === 'in_progress' ? 'engineering' : 'warning'}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-xs group-hover:text-primary transition-colors">{report.title}</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                            Reported on {new Date(report.created_at).toLocaleDateString()} • {report.location_address || 'Unknown Location'}
                          </p>
                          <div className="flex flex-wrap items-center justify-between gap-y-sm">
                            <div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm">
                              <span className="material-symbols-outlined text-sm">schedule</span>
                              SLA: {report.status === 'reported' ? 'Reviewing' : 'In Progress'}
                            </div>
                            <div className={`rounded-xl px-3 py-1 flex items-center gap-xs ${report.status === 'reported' ? 'bg-primary-container/15' : 'bg-tertiary-container/15'}`}>
                              <span className={`material-symbols-outlined text-[12px] ${report.status === 'reported' ? 'text-primary' : 'text-tertiary-container'}`}>pending_actions</span>
                              <span className={`font-label-md text-label-md uppercase ${report.status === 'reported' ? 'text-primary' : 'text-tertiary-container'}`}>{report.status.replace('_', ' ')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}

              {!loading && activeReports.length > 0 && (
                <div className="mt-sm rounded-md ai-banner-gradient p-sm flex items-start gap-xs">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">auto_awesome</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">AI Note: Tracking {activeReports.length} issues in your area.</p>
                </div>
              )}
            </div>
          </section>

          <section className="bg-surface rounded-lg shadow-level-1 border border-surface-container-highest p-lg">
            <div className="flex justify-between items-end mb-lg">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary">timeline</span>
                  Impact Score Timeline
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Your community contribution points.</p>
              </div>
              <div className="text-right">
                <span className="font-metric-lg text-metric-lg text-primary">{user?.impact_score || 0}</span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase">Total Pts</p>
              </div>
            </div>

            <div className="h-48 flex items-end justify-between gap-2 border-b border-outline-variant pb-2 relative mt-xl">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="w-full h-px bg-outline-variant"></div>
                <div className="w-full h-px bg-outline-variant"></div>
                <div className="w-full h-px bg-outline-variant"></div>
              </div>

              <div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
                <div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[30%] group-hover:bg-primary-container transition-colors"></div>
                <span className="font-label-md text-label-md text-on-surface-variant text-[10px]">Jan</span>
              </div>
              <div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
                <div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[45%] group-hover:bg-primary-container transition-colors"></div>
                <span className="font-label-md text-label-md text-on-surface-variant text-[10px]">Feb</span>
              </div>
              <div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
                <div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[20%] group-hover:bg-primary-container transition-colors"></div>
                <span className="font-label-md text-label-md text-on-surface-variant text-[10px]">Mar</span>
              </div>
              <div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
                <div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[60%] group-hover:bg-primary-container transition-colors"></div>
                <span className="font-label-md text-label-md text-on-surface-variant text-[10px]">Apr</span>
              </div>
              <div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
                <div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[85%] group-hover:bg-primary-container transition-colors"></div>
                <span className="font-label-md text-label-md text-on-surface-variant text-[10px]">May</span>
              </div>
              <div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
                <div className="w-full bg-primary rounded-t-sm chart-bar h-[70%] shadow-level-2"></div>
                <span className="font-label-md text-label-md text-primary text-[10px]">Jun</span>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-md">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs hidden lg:block">Command Center</h3>

          <Link href="/citizen/report" className="w-full bg-primary-container hover:bg-[#2083bc] transition-colors rounded-xl p-lg flex flex-col items-center justify-center gap-sm shadow-level-1 hover:shadow-level-2 hover:-translate-y-[1px] text-on-primary-container group">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-xs group-active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-4xl">add_location_alt</span>
            </div>
            <span className="font-headline-md text-headline-md">Report Issue</span>
            <span className="font-body-sm text-body-sm opacity-80">Help improve your neighborhood</span>
          </Link>

          <Link href="/citizen/community" className="w-full bg-surface hover:bg-surface-container-low border border-surface-container-highest transition-colors rounded-xl p-lg flex items-center gap-md shadow-level-1 hover:shadow-level-2 group text-left">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 group-active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-on-secondary-fixed text-2xl">forum</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface block mb-1">Community Feed</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">See what others are reporting</span>
            </div>
          </Link>

          <Link href="/citizen/leaderboard" className="w-full bg-surface hover:bg-surface-container-low border border-surface-container-highest transition-colors rounded-xl p-lg flex items-center gap-md shadow-level-1 hover:shadow-level-2 group text-left">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 group-active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-on-tertiary-fixed text-2xl">emoji_events</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface block mb-1">Leaderboard</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Top contributors this week</span>
            </div>
          </Link>

          <Link href="/citizen/map" className="mt-md rounded-xl overflow-hidden shadow-level-1 border border-surface-container-highest h-48 relative group cursor-pointer block">
            <div className="bg-cover bg-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" style={{backgroundImage: "url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 to-transparent flex items-end p-md">
              <span className="font-label-md text-label-md text-white flex items-center gap-xs">
                <span className="material-symbols-outlined text-sm">explore</span>
                Explore Local Map
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
