import React from 'react';

export default function ModeratorCaseQueue() {
  return (
    <>
      

<nav aria-label="Sidebar Navigation" className="hidden md:flex flex-col fixed left-0 top-0 h-full p-md bg-surface-container border-r border-outline-variant transition-all duration-200 ease-in-out w-64 z-50 shadow-sm">
<div className="flex items-center gap-sm mb-lg px-sm">
<span className="material-symbols-outlined text-primary text-[32px]" style="font-variation-settings: 'FILL' 1;">assured_workload</span>
<div>
<h1 className="font-headline-sm text-headline-sm font-black text-primary leading-tight">Admin Portal</h1>
<p className="font-label-md text-label-md text-on-surface-variant">City Governance</p>
</div>
</div>
<ul className="flex flex-col gap-xs flex-1">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
</li>
<li>
<a aria-current="page" className="flex items-center gap-md px-md py-sm rounded-lg bg-primary-container text-on-primary-container font-bold transition-colors duration-200" href="#">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">list_alt</span>
<span className="font-label-md text-label-md">Issue Queue</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">User Management</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</li>
</ul>
<div className="mt-auto pt-lg border-t border-outline-variant">
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[18px]">summarize</span>
                Generate Report
            </button>
<div className="flex items-center gap-sm mt-md px-sm">
<img alt="Admin User Avatar" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A small circular avatar image of a professional city governance administrator in a well-lit office setting. High quality, corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0XnygCSbuRJKDqYw5zn6bApWq9gXoRXNeFpwW2Rf8cpU2ppGVIR-UNUzD0uwMYuHiBa8P6o2ksXF4WsSwEOT2ZGsNok0l1dRFDHUVRK4UNiVPAcVoYs-z4HUZ_mnr8DQ-qaknkPZlMF5HqS7gzMdRO-ULH2zd-1E5r3nM1YfUZTORA6ihPGMzX4WGqUEFdUXWPTqpvihHudlzzXlE3HHZIypahsGTXwnH-PAqXMkkimVLLYpq-VVa"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Jane Doe</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Moderator</span>
</div>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col md:ml-64 h-screen overflow-hidden bg-background">

<header className="h-20 border-b border-outline-variant bg-surface px-gutter flex items-center justify-between shrink-0 shadow-sm z-10">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Moderator Case Queue</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Triage and verify incoming community reports.</p>
</div>
<div className="flex items-center gap-md">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-64 transition-all" placeholder="Search ID, Location..." type="text"/>
</div>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors relative">
<span className="material-symbols-outlined">filter_list</span>
</button>
<div className="h-6 w-px bg-outline-variant"></div>
<button className="bg-primary text-white font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow-md flex items-center gap-sm">
<span className="material-symbols-outlined text-[16px]">add</span>
                    New Case
                </button>
</div>
</header>

<div className="flex-1 overflow-x-auto p-gutter custom-scrollbar flex gap-lg items-start h-full pb-8">

<div className="flex-shrink-0 w-80 flex flex-col max-h-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm">
<div className="p-4 border-b border-outline-variant bg-surface-container-low rounded-t-xl flex items-center justify-between sticky top-0">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pending Review</h3>
</div>
<span className="bg-surface text-on-surface font-label-md text-label-md px-2 py-0.5 rounded-full border border-outline-variant">12</span>
</div>
<div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">

<div className="bg-surface rounded-lg p-4 shadow-[0px_4px_20px_rgba(30,58,95,0.08)] border border-outline-variant hover:border-outline hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">maps_ar</span>
</div>
<div>
<span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider block">#CP-2023-892</span>
<h4 className="font-headline-sm text-[16px] leading-tight text-on-surface group-hover:text-primary transition-colors">Severe Pothole on Main St.</h4>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Deep pothole reported in the right lane going northbound, causing significant damage to vehicles.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="font-body-sm text-[12px]">2 hrs ago</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-tertiary-container/15 text-tertiary-container font-label-md text-[11px]">
<span className="material-symbols-outlined text-[12px]">pending</span>
                                Triage
                            </span>
</div>
</div>

<div className="bg-surface rounded-lg p-4 shadow-[0px_4px_20px_rgba(30,58,95,0.08)] border border-outline-variant hover:border-outline hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">delete</span>
</div>
<div>
<span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider block">#CP-2023-895</span>
<h4 className="font-headline-sm text-[16px] leading-tight text-on-surface group-hover:text-primary transition-colors">Illegal Dumping in Park</h4>
</div>
</div>
</div>

<div className="mb-3 px-3 py-2 rounded-md bg-gradient-to-r from-primary/10 to-teal-500/10 border border-primary/20 flex items-start gap-2 shadow-[0px_0px_12px_rgba(46,156,219,0.1)]">
<span className="material-symbols-outlined text-primary text-[14px] mt-0.5">auto_awesome</span>
<span className="font-body-sm text-[12px] text-on-surface-variant leading-tight"><strong className="text-primary font-semibold">AI Summary:</strong> High likelihood of hazardous materials based on image analysis. Priority review suggested.</span>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span className="font-body-sm text-[12px] truncate w-24">Centennial Park</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-tertiary-container/15 text-tertiary-container font-label-md text-[11px]">
<span className="material-symbols-outlined text-[12px]">pending</span>
                                Triage
                            </span>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-80 flex flex-col max-h-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm">
<div className="p-4 border-b border-outline-variant bg-surface-container-low rounded-t-xl flex items-center justify-between sticky top-0">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-primary-container"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Verified</h3>
</div>
<span className="bg-surface text-on-surface font-label-md text-label-md px-2 py-0.5 rounded-full border border-outline-variant">8</span>
</div>
<div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">

<div className="bg-surface rounded-lg p-4 shadow-[0px_4px_20px_rgba(30,58,95,0.08)] border border-outline-variant hover:border-outline hover:shadow-md transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">lightbulb</span>
</div>
<div>
<span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider block">#CP-2023-880</span>
<h4 className="font-headline-sm text-[16px] leading-tight text-on-surface group-hover:text-primary transition-colors">Streetlight Outage</h4>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Entire block is dark. Verified by secondary reporter.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full border border-outline-variant" data-alt="Small avatar of a maintenance worker assigned to the ticket." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEtqE46cndPEQoNRGMMQguybZ_w8vwsN8PPw_Y8C4WmmTK3XbA_HOVamSIHsXz31d0Y-VAb_zUOq8AskPuSK3gZzAoPmAD1wUvVsR0xOD6dk5Rt9tN2uqFpL191kk41tmfPOyyciNX4WJNQgDnRMYrL1iZ9PMWpyP9IVP2UhFQ3sHvU_vuEYaymV0T4SSsmLbkIWJ28ROJ-FzBGWn8t1OuARzmxfXMW48fsN1NATlHSZnHYaBs47jc"/>
<span className="font-body-sm text-[12px] text-on-surface-variant">Assigned to DPW</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-primary-container/15 text-primary font-label-md text-[11px]">
<span className="material-symbols-outlined text-[12px]">check_circle</span>
                                Verified
                            </span>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-80 flex flex-col max-h-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm">
<div className="p-4 border-b border-outline-variant bg-surface-container-low rounded-t-xl flex items-center justify-between sticky top-0">
<div className="flex items-center gap-sm">
<div className="w-2 h-2 rounded-full bg-error"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Escalated</h3>
</div>
<span className="bg-surface text-on-surface font-label-md text-label-md px-2 py-0.5 rounded-full border border-outline-variant">3</span>
</div>
<div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">

<div className="bg-surface rounded-lg p-4 shadow-[0px_4px_20px_rgba(30,58,95,0.08)] border border-error/30 hover:border-error/60 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-error/5 -rotate-45 translate-x-8 -translate-y-8 rounded-full pointer-events-none"></div>
<div className="flex justify-between items-start mb-3 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined">water_drop</span>
</div>
<div>
<span className="font-label-md text-[10px] text-error uppercase tracking-wider block">#CP-2023-865</span>
<h4 className="font-headline-sm text-[16px] leading-tight text-on-surface group-hover:text-error transition-colors">Major Water Main Break</h4>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3 relative z-10">Flooding intersection of 4th and Elm. Immediate hazard to traffic and properties.</p>
<div className="flex items-center justify-between mt-auto relative z-10">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">warning</span>
<span className="font-body-sm text-[12px] text-error font-semibold">High Priority</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-error/15 text-error font-label-md text-[11px]">
<span className="material-symbols-outlined text-[12px]">error</span>
                                Escalated
                            </span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
