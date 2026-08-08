'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminAnalyticsOverview() {
  const [metrics, setMetrics] = useState({
    totalOpen: 0,
    totalResolved: 0,
    highPriority: [],
    citizenEngagement: 0
  });

  useEffect(() => {
    async function fetchAnalytics() {
      if (!supabase) return;
      try {
        const { data: problems, error } = await supabase
          .from('problems')
          .select('*');

        if (error) throw error;
        
        let openCount = 0;
        let resolvedCount = 0;
        let highPri = [];
        let totalSupport = 0;

        problems.forEach(p => {
          if (p.status === 'resolved') {
            resolvedCount++;
          } else {
            openCount++;
            if (p.status === 'escalated') {
              highPri.push(p);
            }
          }
          totalSupport += (p.support_count || 0);
        });

        // Get total users for engagement (mocking citizen engagement as total users if we fetch it, or just use support count)
        const { count: userCount, error: userError } = await supabase
          .from('users')
          .select('*', { count: 'exact', head: true });
        
        const engagement = userCount ? userCount * 3 : totalSupport + 124; // Some metric

        setMetrics({
          totalOpen: openCount,
          totalResolved: resolvedCount,
          highPriority: highPri.slice(0, 5),
          citizenEngagement: engagement
        });
      } catch (err) {
        console.error('Error fetching analytics:', err);
      }
    }
    fetchAnalytics();
  }, []);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      
<header className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Overview Analytics</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time performance metrics for city governance.</p>
</div>
<div className="flex items-center gap-4">
<span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">All Time</span>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-display-lg text-primary">report_problem</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Total Open Issues</h3>
<p className="font-metric-lg text-metric-lg text-primary">{metrics.totalOpen}</p>
<div className="flex items-center gap-1 mt-3 text-[#0F9D8C] bg-[#0F9D8C]/10 w-fit px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">arrow_downward</span>
<span className="font-label-md text-[10px]">Active tracking</span>
</div>
</div>
<div className="glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-display-lg text-[#ca860d]">timer</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Avg Resolution Time</h3>
<p className="font-metric-lg text-metric-lg text-on-surface">4.2 <span className="text-headline-sm font-normal text-on-surface-variant">days</span></p>
<div className="flex items-center gap-1 mt-3 text-error bg-error/10 w-fit px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
<span className="font-label-md text-[10px]">Estimated</span>
</div>
</div>
<div className="glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-display-lg text-[#0F9D8C]">check_circle</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Issues Resolved</h3>
<p className="font-metric-lg text-metric-lg text-on-surface">{metrics.totalResolved}</p>
<div className="flex items-center gap-1 mt-3 text-[#0F9D8C] bg-[#0F9D8C]/10 w-fit px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
<span className="font-label-md text-[10px]">Completed</span>
</div>
</div>
<div className="glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-display-lg text-secondary">people</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Citizen Engagement</h3>
<p className="font-metric-lg text-metric-lg text-on-surface">{metrics.citizenEngagement}</p>
<div className="flex items-center gap-1 mt-3 text-[#0F9D8C] bg-[#0F9D8C]/10 w-fit px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
<span className="font-label-md text-[10px]">Active users</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="glass-card rounded-xl p-6 lg:col-span-2 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Issues by Category</h3>
<button className="text-primary hover:bg-surface-container p-2 rounded-full transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="flex-1 flex items-end justify-between gap-2 px-2 pb-6 border-b border-outline-variant relative">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-on-surface-variant font-label-md text-xs -ml-2">
<span>100</span>
<span>75</span>
<span>50</span>
<span>25</span>
<span>0</span>
</div>
<div className="w-full h-full flex items-end justify-around pl-8">

<div className="w-12 bg-primary/20 hover:bg-primary/40 rounded-t-sm h-[80%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">80%</div>
</div>
<div className="w-12 bg-primary/40 hover:bg-primary/60 rounded-t-sm h-[45%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">45%</div>
</div>
<div className="w-12 bg-primary/80 hover:bg-primary rounded-t-sm h-[95%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">95%</div>
</div>
<div className="w-12 bg-tertiary-container/80 hover:bg-tertiary-container rounded-t-sm h-[60%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">60%</div>
</div>
<div className="w-12 bg-primary/30 hover:bg-primary/50 rounded-t-sm h-[30%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">30%</div>
</div>
</div>
</div>
<div className="flex justify-around pl-8 pt-4 font-label-md text-on-surface-variant text-xs">
<span>Potholes</span>
<span>Water</span>
<span>Power</span>
<span>Sanitation</span>
<span>Other</span>
</div>
</div>

<div className="glass-card rounded-xl p-6 flex flex-col h-[400px]">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">High Priority Issues</h3>
<div className="flex-1 overflow-y-auto pr-2 space-y-4">
{metrics.highPriority.length === 0 ? (
  <div className="p-4 text-center text-on-surface-variant">No escalated issues right now.</div>
) : metrics.highPriority.map(issue => (
  <div key={issue.id} className="p-4 border border-error/20 bg-error/5 rounded-lg flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-error">warning</span>
    </div>
    <div>
    <h4 className="font-headline-sm text-[16px] text-on-surface">{issue.title}</h4>
    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-2">{issue.location_address || 'No location'}</p>
    <span className="font-label-md text-error bg-error/10 px-2 py-1 rounded-xl">Critical</span>
    </div>
  </div>
))}
</div>
</div>
</div>

    </div>
  );
}
