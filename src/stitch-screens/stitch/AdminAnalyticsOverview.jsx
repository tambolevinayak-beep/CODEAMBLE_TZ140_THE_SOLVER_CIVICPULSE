import React from 'react';

export default function AdminAnalyticsOverview() {
  return (
    <>
      
<nav className="bg-surface-container dark:bg-inverse-surface border-r border-outline-variant flat no shadows hidden lg:flex flex-col fixed left-0 top-0 h-full p-md w-64 z-40 transition-all duration-200 ease-in-out">
<div className="mb-8 px-4 mt-4">
<h1 className="font-headline-sm text-headline-sm font-black text-primary">CivicPulse</h1>
<div className="flex items-center mt-6 p-3 bg-surface rounded-lg shadow-sm border border-outline-variant">
<img alt="Admin User Avatar" className="w-10 h-10 rounded-full object-cover mr-3" data-alt="A professional headshot of an administrative city official, wearing a sharp business suit, looking approachable yet authoritative, set against a bright, modern office background with soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGJ088azmxBaRV4-UFDMctAOSNr3LUM1pTIglxMQOC47eTIjRstfX-cxvejNDwG_UbzNTHTDHWSS9-4lF65NBEI_4DahiFJmAg7kVUNfNzHov-GJ8d1xe83i2bVIclOGgjBGQewk17j3kOUGmXpWzqNTYq7naL3AZWMuDaB-DjtLrIXU6Pc2Ydt0kz51lD9hykgPmyGsmHTWyJzBfUkW-RdVyKjtGpUaJpGpWiZ1Odr1ctP7-5Vdn_"/>
<div>
<p className="font-headline-sm text-[16px] font-semibold text-on-surface">Admin Portal</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">City Governance</p>
</div>
</div>
</div>
<ul className="flex-1 space-y-2">
<li>
<a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container font-bold rounded-lg transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface dark:text-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-lg transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">list_alt</span>
<span className="font-label-md text-label-md">Issue Queue</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface dark:text-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-lg transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface dark:text-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-lg transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">User Management</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface dark:text-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-lg transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</li>
</ul>
<div className="mt-auto pt-4">
<button className="w-full bg-[#2E9CDB] text-white font-label-md text-label-md py-3 rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
                Generate Report
            </button>
</div>
</nav>

<main className="flex-1 lg:ml-64 p-lg lg:p-xl w-full max-w-container-max mx-auto overflow-y-auto h-screen">
<header className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Overview Analytics</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time performance metrics for city governance.</p>
</div>
<div className="flex items-center gap-4">
<span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Last 30 Days</span>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-display-lg text-primary">report_problem</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Total Open Issues</h3>
<p className="font-metric-lg text-metric-lg text-primary">1,248</p>
<div className="flex items-center gap-1 mt-3 text-[#0F9D8C] bg-[#0F9D8C]/10 w-fit px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">arrow_downward</span>
<span className="font-label-md text-[10px]">5% from last month</span>
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
<span className="font-label-md text-[10px]">12% from last month</span>
</div>
</div>
<div className="glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-display-lg text-[#0F9D8C]">check_circle</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Issues Resolved</h3>
<p className="font-metric-lg text-metric-lg text-on-surface">892</p>
<div className="flex items-center gap-1 mt-3 text-[#0F9D8C] bg-[#0F9D8C]/10 w-fit px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
<span className="font-label-md text-[10px]">8% from last month</span>
</div>
</div>
<div className="glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-display-lg text-secondary">people</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Citizen Engagement</h3>
<p className="font-metric-lg text-metric-lg text-on-surface">3.4k</p>
<div className="flex items-center gap-1 mt-3 text-[#0F9D8C] bg-[#0F9D8C]/10 w-fit px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
<span className="font-label-md text-[10px]">22% from last month</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="glass-card rounded-xl p-6 lg:col-span-2 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Issues by Ward</h3>
<button className="text-primary hover:bg-surface-container p-2 rounded-full transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="flex-1 flex items-end justify-between gap-2 px-2 pb-6 border-b border-outline-variant relative">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-on-surface-variant font-label-md text-xs -ml-2">
<span>400</span>
<span>300</span>
<span>200</span>
<span>100</span>
<span>0</span>
</div>
<div className="w-full h-full flex items-end justify-around pl-8">

<div className="w-12 bg-primary/20 hover:bg-primary/40 rounded-t-sm h-[80%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">320</div>
</div>
<div className="w-12 bg-primary/40 hover:bg-primary/60 rounded-t-sm h-[45%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">180</div>
</div>
<div className="w-12 bg-primary/80 hover:bg-primary rounded-t-sm h-[95%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">380</div>
</div>
<div className="w-12 bg-tertiary-container/80 hover:bg-tertiary-container rounded-t-sm h-[60%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">240</div>
</div>
<div className="w-12 bg-primary/30 hover:bg-primary/50 rounded-t-sm h-[30%] transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">120</div>
</div>
</div>
</div>
<div className="flex justify-around pl-8 pt-4 font-label-md text-on-surface-variant text-xs">
<span>Ward 1</span>
<span>Ward 2</span>
<span>Ward 3</span>
<span>Ward 4</span>
<span>Ward 5</span>
</div>
</div>

<div className="glass-card rounded-xl p-6 flex flex-col h-[400px]">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">High Priority Issues</h3>
<div className="flex-1 overflow-y-auto pr-2 space-y-4">
<div className="p-4 border border-error/20 bg-error/5 rounded-lg flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-error">water_drop</span>
</div>
<div>
<h4 className="font-headline-sm text-[16px] text-on-surface">Major Water Main Break</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-2">Downtown Commercial District</p>
<span className="font-label-md text-error bg-error/10 px-2 py-1 rounded-xl">Critical</span>
</div>
</div>
<div className="p-4 border border-tertiary-container/20 bg-tertiary-container/5 rounded-lg flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary-container">traffic</span>
</div>
<div>
<h4 className="font-headline-sm text-[16px] text-on-surface">Traffic Signal Failure</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-2">Intersection of 5th &amp; Main</p>
<span className="font-label-md text-tertiary-container bg-tertiary-container/10 px-2 py-1 rounded-xl">High</span>
</div>
</div>
<div className="p-4 border border-tertiary-container/20 bg-tertiary-container/5 rounded-lg flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary-container">maps_ar</span>
</div>
<div>
<h4 className="font-headline-sm text-[16px] text-on-surface">Severe Sinkhole</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-2">Residential Area - Elm St.</p>
<span className="font-label-md text-tertiary-container bg-tertiary-container/10 px-2 py-1 rounded-xl">High</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
