import React from 'react';

export default function MapView() {
  return (
    <>
      

<header className="hidden md:flex sticky top-0 z-50 items-center justify-between px-gutter w-full h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm dark:shadow-none">
<div className="flex items-center gap-4">
<h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">CivicPulse</h1>
</div>
<div className="flex-1 flex justify-center max-w-xl mx-auto px-lg">

</div>
<div className="flex items-center gap-4">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
<div className="flex flex-1 overflow-hidden relative">

<nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full p-md bg-surface-container w-64 border-r border-outline-variant z-40">
<div className="mb-8 mt-20">
<h2 className="font-headline-sm text-headline-sm font-black text-primary px-4">Admin Portal</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant px-4 mt-1">City Governance</p>
</div>
<ul className="flex-1 space-y-2">
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                        Dashboard
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-bold transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
                        Issue Queue
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                        Analytics
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                        User Management
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                        Settings
                    </a>
</li>
</ul>
<button className="mt-auto w-full py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all duration-200">
                Generate Report
            </button>
</nav>

<main className="flex-1 relative lg:ml-64 h-full w-full">

<div className="absolute inset-0 map-bg z-0" data-alt="An expansive, high-resolution aerial map view of a modern urban city center. The map style is clean and minimalist, utilizing the CivicPulse brand palette of cool blues, crisp whites, and soft grays. The roads and waterways are subtly distinguished, reflecting a clear daytime 'light mode' aesthetic. Generous whitespace and a modern corporate feel pervade the cartography." data-location="Chicago" style=""></div>

<div className="absolute top-md left-md right-md md:left-lg md:right-auto md:w-[400px] z-20">
<div className="glass-panel rounded-xl shadow-lg border border-outline-variant/30 p-2 flex items-center focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<span className="material-symbols-outlined text-outline ml-2 mr-2" data-icon="search">search</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-outline p-2 outline-none" placeholder="Search locations or issue IDs..." type="text"/>
<button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="tune">tune</span>
</button>
</div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none">

<div className="absolute top-[30%] left-[45%] pointer-events-auto transform hover:scale-110 transition-transform cursor-pointer group">
<div className="w-10 h-10 bg-tertiary-container rounded-full rounded-br-none rotate-45 flex items-center justify-center pin-glow-amber border border-surface">
<div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center -rotate-45 shadow-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" data-icon="warning">warning</span>
</div>
</div>
</div>

<div className="absolute top-[55%] left-[60%] pointer-events-auto transform hover:scale-110 transition-transform cursor-pointer group">
<div className="w-10 h-10 bg-[#0F9D8C] rounded-full rounded-br-none rotate-45 flex items-center justify-center pin-glow-green border border-surface">
<div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center -rotate-45 shadow-sm">
<span className="material-symbols-outlined text-[16px] text-[#0F9D8C]" data-icon="check_circle">check_circle</span>
</div>
</div>
</div>

<div className="absolute top-[40%] left-[25%] pointer-events-auto transform scale-125 transition-transform cursor-pointer z-30">
<div className="w-12 h-12 bg-tertiary-container rounded-full rounded-br-none rotate-45 flex items-center justify-center pin-glow-amber border-2 border-surface shadow-[0_4px_20px_rgba(30,58,95,0.2)]">
<div className="w-9 h-9 bg-surface rounded-full flex items-center justify-center -rotate-45 shadow-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container" data-icon="construction">construction</span>
</div>
</div>

<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-surface-on shadow-lg rounded-full opacity-50 blur-[2px]"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 md:left-auto md:right-lg md:bottom-lg md:w-[420px] md:top-auto md:h-auto z-30 bottom-sheet md:transform-none" id="issue-bottom-sheet">

<div className="w-full flex justify-center py-2 md:hidden glass-panel rounded-t-2xl border-t border-outline-variant cursor-grab active:cursor-grabbing" onclick="toggleSheet()">
<div className="w-12 h-1.5 bg-outline-variant rounded-full"></div>
</div>
<div className="glass-panel p-lg md:rounded-xl shadow-[0px_-4px_20px_rgba(30,58,95,0.08)] border border-outline-variant md:border-b">

<div className="flex justify-between items-start mb-4">
<div className="inline-flex items-center gap-2 bg-tertiary-container/15 rounded-xl px-3 py-1">
<span className="material-symbols-outlined text-[12px] text-tertiary-container" data-icon="warning">warning</span>
<span className="font-label-md text-label-md text-tertiary-container">Reported</span>
</div>
<button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors md:hidden" onclick="toggleSheet()">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>

<div className="flex gap-4">

<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/30">
<img className="w-full h-full object-cover" data-alt="A close-up view of a deep, jagged pothole in a city street asphalt during daytime. The image reflects a clear, well-lit urban environment adhering to the light mode aesthetic. Colors are natural but subtly muted to maintain the modern corporate feel, emphasizing the structural damage needing repair." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1kuchL-O3jftfRgNo3PD6Q6wZaOCw0ByYUrVsBFWIhrAVIC11HbrQm39WlOR4OI0h49uR94FVedv6a7BM07JSRx5Ru2ixN5TVIRFkEzcK01nMj1NQmA950BgaZ73wLbQwWbLp5xeufKSCqpQvER4a6lIdmDvHv9CHOQOWM0t0uHJVvrn65jTsIYIrjaoM6bxMrjl7QGbcKSuaPSK2fO_8FrV6AgTJlKtVMMWoTrYE-jiWP390em7b"/>
</div>
<div className="flex-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Deep Pothole on Main St.</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">123 Main Street Intersection</p>
<div className="flex items-center gap-4 text-outline font-body-sm text-body-sm">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
                                    2h ago
                                </div>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]" data-icon="thumb_up">thumb_up</span>
<span className="font-label-md">24 supports</span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex gap-3">
<button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-sm active:translate-y-px">
                            Support Issue
                        </button>
<button className="px-4 py-2.5 border border-secondary text-secondary font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-all">
                            Details
                        </button>
</div>
</div>
</div>
</main>
</div>

<nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 shadow-[0px_-4px_20px_rgba(30,58,95,0.08)] bg-surface/90 backdrop-blur-lg rounded-t-xl">
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed active:scale-90 transition-transform w-16">
<span className="material-symbols-outlined mb-1" data-icon="home_storage">home_storage</span>
<span className="font-label-md-mobile text-[10px] leading-tight font-semibold tracking-wide">Feed</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform w-16">
<span className="material-symbols-outlined mb-1" data-icon="map" style="font-variation-settings: 'FILL' 1;">map</span>
<span className="font-label-md-mobile text-[10px] leading-tight font-semibold tracking-wide">Map</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed active:scale-90 transition-transform w-16">
<span className="material-symbols-outlined mb-1" data-icon="add_circle">add_circle</span>
<span className="font-label-md-mobile text-[10px] leading-tight font-semibold tracking-wide">Report</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed active:scale-90 transition-transform w-16">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-label-md-mobile text-[10px] leading-tight font-semibold tracking-wide">Profile</span>
</button>
</nav>
<script>
        function toggleSheet() {
            const sheet = document.getElementById('issue-bottom-sheet');
            sheet.classList.toggle('expanded');
        }
        
        // Micro-interactions for map pins
        document.querySelectorAll('.pin-glow-amber, .pin-glow-green').forEach(pin => {
            pin.addEventListener('mouseenter', () => {
                pin.style.transform = 'translateY(-2px)';
            });
            pin.addEventListener('mouseleave', () => {
                pin.style.transform = 'translateY(0)';
            });
        });
    </script>

    </>
  );
}
