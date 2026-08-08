import React from 'react';

export default function CitizenDashboard() {
  return (
    <>
      

<nav className="bg-secondary dark:bg-inverse-surface shadow-md h-full w-64 fixed left-0 top-0 flex flex-col p-md gap-md z-50 hidden md:flex">
<div className="flex items-center gap-sm mb-lg">
<span className="material-symbols-outlined text-white text-3xl" style="font-variation-settings: 'FILL' 1;">assured_workload</span>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md font-bold text-white">CivicPulse</span>
<span className="font-label-md text-label-md text-secondary-container opacity-80">Admin Console</span>
</div>
</div>
<div className="flex flex-col gap-sm flex-grow">

<a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg transition-all duration-200 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dash</span>
</a>

<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors transition-all duration-200 active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="forum">forum</span>
<span className="font-label-md text-label-md">Feed</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors transition-all duration-200 active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
<span className="font-label-md text-label-md">Add Issue</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors transition-all duration-200 active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="map">map</span>
<span className="font-label-md text-label-md">Map</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors transition-all duration-200 active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors transition-all duration-200 active:scale-95 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span className="font-label-md text-label-md">Control Panel</span>
</a>
</div>
<div className="mt-auto border-t border-on-secondary-fixed-variant pt-md">
<div className="flex items-center gap-sm">
<img alt="Moderator Profile Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-secondary-container" data-alt="A small circular avatar placeholder image showing a professional headshot of a person with a neutral expression on a plain background, suitable for an admin profile picture in a light modern UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8sU3bOhy-gLUIJC-qSc32sdWlAyNTlJu2e6KIHvxwQhZt640-LWWasBjobmKyFA7H7UxR9RmccjLhdKYQVf6nDUz7_uxxcOPONZIZaQJd4fFU6WaPA-Tt4pvO3tMiVbsINlVWBlH5tdsdWI8pdeNwbW0Ghekx_YhQUb9lYCkInAC77VhOYqzGPeBJAPjoKm31pFX1itdLLxqfiWAqSZof_ISCrLSqKQdhHFCX2gITKOzVtpnjoLL"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white">Jane Doe</span>
<span className="font-body-sm text-body-sm text-secondary-container opacity-80 text-xs">Citizen</span>
</div>
</div>
</div>
</nav>

<div className="flex-1 flex flex-col min-h-screen md:ml-64 w-full md:w-[calc(100%-16rem)]">

<header className="flex justify-between items-center h-16 px-lg bg-surface dark:bg-surface-dim border-b border-outline-variant sticky top-0 z-40">
<div className="flex items-center gap-sm md:hidden">
<span className="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">assured_workload</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">CivicPulse</span>
</div>

<div className="hidden md:flex items-center">
<h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">Dashboard</h1>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70 p-sm rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70 p-sm rounded-full hover:bg-surface-container hidden md:block">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img alt="Current user avatar" className="w-8 h-8 rounded-full object-cover md:hidden" data-alt="A small circular avatar placeholder image showing a professional headshot of a person with a neutral expression on a plain background, suitable for an admin profile picture in a light modern UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu3ej15XQclfsKh93sm0-qiTI6EfcC8mKGT2PtAymEKQsqcH1ZQuT3RYba9XT81XZqUT40kzOUPXe3hSkow5dXMrce_CzTVoNON465mRiujiFjK51CVoAZrhuIM6DjrkXyFqEJv9Fmd1AtjYoEJ7cZKey8H6dGWx7iur7QXuxBkMZD2Fah2vqT8lvXLmzXwkmGxnMfMexFFffGykq5uPBF5QG6i5aFwymlwSzkBPvO4QIwsUoz3FUL"/>
</div>
</header>

<main className="p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">

<div className="mb-xl">
<h2 className="font-display-lg text-display-lg text-on-surface mb-xs">Good morning, Citizen.</h2>
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
<a className="font-label-md text-label-md text-primary hover:underline" href="#">View All</a>
</div>
<div className="flex flex-col gap-md">

<div className="bg-surface rounded-lg shadow-level-1 p-md border border-surface-container-highest hover:shadow-level-2 hover:border-[#DDE3EA] transition-all cursor-pointer group">
<div className="flex items-start gap-md">
<div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-error-container">warning</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-xs group-hover:text-primary transition-colors">Large Pothole on Main St.</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Reported 2 days ago • 1200 Block Main St.</p>
<div className="flex flex-wrap items-center justify-between gap-y-sm">

<div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm">schedule</span>
                                                SLA: Due in 3 days
                                            </div>

<div className="rounded-xl bg-tertiary-container/15 px-3 py-1 flex items-center gap-xs">
<span className="material-symbols-outlined text-[12px] text-tertiary-container" style="font-variation-settings: 'FILL' 1;">hourglass_top</span>
<span className="font-label-md text-label-md text-tertiary-container">IN PROGRESS</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface rounded-lg shadow-level-1 p-md border border-surface-container-highest hover:shadow-level-2 hover:border-[#DDE3EA] transition-all cursor-pointer group">
<div className="flex items-start gap-md">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container">lightbulb</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-xs group-hover:text-primary transition-colors">Streetlight Outage</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Reported 1 week ago • Maple &amp; 5th Ave</p>
<div className="flex flex-wrap items-center justify-between gap-y-sm">
<div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm">schedule</span>
                                                SLA: Reviewing
                                            </div>

<div className="rounded-xl bg-primary-container/15 px-3 py-1 flex items-center gap-xs">
<span className="material-symbols-outlined text-[12px] text-primary" style="font-variation-settings: 'FILL' 1;">pending_actions</span>
<span className="font-label-md text-label-md text-primary">UNDER REVIEW</span>
</div>
</div>
</div>
</div>

<div className="mt-sm rounded-md ai-banner-gradient p-sm flex items-start gap-xs">
<span className="material-symbols-outlined text-primary text-sm mt-0.5">auto_awesome</span>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">AI Note: Similar issues reported nearby. Consolidating work order.</p>
</div>
</div>
</div>
</section>

<section className="bg-surface rounded-lg shadow-level-1 border border-surface-container-highest p-lg">
<div className="flex justify-between items-end mb-lg">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-xs">
<span className="material-symbols-outlined text-primary">timeline</span>
                                    Impact Score Timeline
                                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Your community contribution points over the last 6 months.</p>
</div>
<div className="text-right">
<span className="font-metric-lg text-metric-lg text-primary">850</span>
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
<div className="absolute -top-8 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">120</div>
</div>
<div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
<div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[45%] group-hover:bg-primary-container transition-colors"></div>
<span className="font-label-md text-label-md text-on-surface-variant text-[10px]">Feb</span>
<div className="absolute -top-8 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">180</div>
</div>
<div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
<div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[20%] group-hover:bg-primary-container transition-colors"></div>
<span className="font-label-md text-label-md text-on-surface-variant text-[10px]">Mar</span>
<div className="absolute -top-8 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">80</div>
</div>
<div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
<div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[60%] group-hover:bg-primary-container transition-colors"></div>
<span className="font-label-md text-label-md text-on-surface-variant text-[10px]">Apr</span>
<div className="absolute -top-8 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">240</div>
</div>
<div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
<div className="w-full bg-secondary-container rounded-t-sm chart-bar h-[85%] group-hover:bg-primary-container transition-colors"></div>
<span className="font-label-md text-label-md text-on-surface-variant text-[10px]">May</span>
<div className="absolute -top-8 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">340</div>
</div>
<div className="w-1/6 flex flex-col items-center gap-2 z-10 group relative">
<div className="w-full bg-primary rounded-t-sm chart-bar h-[70%] shadow-level-2"></div>
<span className="font-label-md text-label-md text-primary text-[10px]">Jun</span>
<div className="absolute -top-8 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-100 transition-opacity">280</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 flex flex-col gap-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs hidden lg:block">Command Center</h3>

<button className="w-full bg-primary-container hover:bg-[#2083bc] transition-colors rounded-xl p-lg flex flex-col items-center justify-center gap-sm shadow-level-1 hover:shadow-level-2 hover:-translate-y-[1px] text-on-primary-container group">
<div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-xs group-active:scale-95 transition-transform">
<span className="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">add_location_alt</span>
</div>
<span className="font-headline-md text-headline-md">Report Issue</span>
<span className="font-body-sm text-body-sm opacity-80">Help improve your neighborhood</span>
</button>

<button className="w-full bg-surface hover:bg-surface-container-low border border-surface-container-highest transition-colors rounded-xl p-lg flex items-center gap-md shadow-level-1 hover:shadow-level-2 group text-left">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 group-active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-secondary-fixed text-2xl">forum</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block mb-1">Community Feed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">See what others are reporting</span>
</div>
</button>

<button className="w-full bg-surface hover:bg-surface-container-low border border-surface-container-highest transition-colors rounded-xl p-lg flex items-center gap-md shadow-level-1 hover:shadow-level-2 group text-left">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 group-active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-tertiary-fixed text-2xl">emoji_events</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block mb-1">Leaderboard</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">You are ranked #42 this week</span>
</div>
</button>

<div className="mt-md rounded-xl overflow-hidden shadow-level-1 border border-surface-container-highest h-48 relative group cursor-pointer">
<div className="bg-cover bg-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A stylized, light-mode minimalist map of a generic city neighborhood with clean roads, subtle terrain variations in off-white and pale blue, and small subtle blue pin markers indicating reported issues. Modern corporate aesthetic." data-location="City Map" style="background-image: url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')"></div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 to-transparent flex items-end p-md">
<span className="font-label-md text-label-md text-white flex items-center gap-xs">
<span className="material-symbols-outlined text-sm">explore</span>
                                Explore Local Map
                            </span>
</div>
</div>
</div>
</div>
</main>

<footer className="flex flex-col md:flex-row justify-between items-center px-lg py-lg mt-auto bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant gap-md">
<span className="font-label-md text-label-md font-bold text-on-surface-variant">© 2024 CivicPulse. Institutional Transparency &amp; Efficiency.</span>
<div className="flex gap-md">
<a className="font-label-md text-label-md text-outline hover:text-on-surface transition-colors transition-opacity duration-200" href="#">Privacy Policy</a>
<a className="font-label-md text-label-md text-outline hover:text-on-surface transition-colors transition-opacity duration-200" href="#">Contact Support</a>
<a className="font-label-md text-label-md text-outline hover:text-on-surface transition-colors transition-opacity duration-200" href="#">Terms of Service</a>
</div>
</footer>
</div>
<script>
        // Simple entry animation for chart bars
        document.addEventListener("DOMContentLoaded", () => {
            const bars = document.querySelectorAll('.chart-bar');
            bars.forEach(bar => {
                const targetHeight = bar.style.height || bar.classList.value.match(/h-\[(\d+)%\]/)[1] + '%';
                bar.style.height = '0%';
                setTimeout(() => {
                    bar.style.height = targetHeight;
                }, 100);
            });
        });
    </script>

    </>
  );
}
