import React from 'react';

export default function CommunityFeed() {
  return (
    <>
      

<nav className="bg-secondary dark:bg-inverse-surface shadow-md h-full w-64 fixed left-0 top-0 flex flex-col p-md gap-md z-50">
<div className="mb-lg px-md">
<h1 className="font-headline-md text-headline-md font-bold text-white">CivicPulse</h1>
<p className="font-body-sm text-body-sm text-surface-dim opacity-80">Admin Console</p>
</div>
<div className="flex-1 flex flex-col gap-sm">
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-all duration-200 active:scale-95 rounded-lg group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
<span className="font-label-md text-label-md">Dash</span>
</a>
<a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg transition-all duration-200 active:scale-95 group" href="#">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">forum</span>
<span className="font-label-md text-label-md">Feed</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-all duration-200 active:scale-95 rounded-lg group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
<span className="font-label-md text-label-md">Add Issue</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-all duration-200 active:scale-95 rounded-lg group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">map</span>
<span className="font-label-md text-label-md">Map</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-all duration-200 active:scale-95 rounded-lg group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">account_circle</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-secondary hover:bg-on-secondary-fixed-variant transition-all duration-200 active:scale-95 rounded-lg group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">admin_panel_settings</span>
<span className="font-label-md text-label-md">Control Panel</span>
</a>
</div>
<div className="mt-auto px-md py-md border-t border-secondary-fixed/20 flex items-center gap-sm">
<img alt="Moderator Profile Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-surface" data-alt="A small, professional headshot photo of a community moderator smiling slightly against a neutral background. Modern corporate style, well lit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARe7XgpTcIhDZEsQy9ZdE9enzZW4cB40UsBP3f6J8xDxZmcS14adsgOUKhUh5geUQSP6Fah2BXiYNCTGN5aRv_OniO3cQ0uZTYrp0qGaIBnOVhorha6UVT_fxDnvtWWUtxPJ2XbBM3CmrSToaiiqSCgtPIknyzVdFjbQm1jeDSDWKUU-MVitI0hS0VFAHW0R2H3jpU09XSaBybM3TXNdRDnVW66g941S4g4SBDvSCXafAKcge_GtEl"/>
<div>
<p className="font-label-md text-label-md text-white">Jane Doe</p>
<p className="font-body-sm text-body-sm text-surface-dim opacity-70">Moderator</p>
</div>
</div>
</nav>

<header className="bg-surface dark:bg-surface-dim docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center h-16 px-lg ml-64 w-[calc(100%-16rem)] sticky z-40">
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed tracking-tight">Community Feed</h2>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70 p-sm rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70 p-sm rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined">settings</span>
</button>
<img alt="Current user avatar" className="w-8 h-8 rounded-full object-cover border border-outline-variant ml-sm cursor-pointer" data-alt="A small, professional headshot photo of a community moderator smiling slightly against a neutral background. Modern corporate style, well lit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARxzdakNxOCQw7-9txCXgNt4k9e65rbi1k-O9yolv80azQP6Xv-eGU0pRte3dUQcNuiUfwjRQi9JDqB_6kZrY5fuZdR9fB5hjGPOGzfUsO5lCq1i1l0pvROfZhDfm3kwQR798auYGzi9EJMpzC8v77eQlXk6TYMFJZg_IOJCqlc4_nhGq2slq3dhiwHFyylia_7rSsdC9TfEszbTcnosVADlTf87Xa4LrsaYDa-hSuLrNBQEew4xkf"/>
</div>
</header>

<main className="ml-64 w-[calc(100%-16rem)] min-h-[calc(100vh-4rem-100px)] p-lg lg:p-xl max-w-container-max mx-auto flex flex-col gap-lg">

<section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md pb-md border-b border-outline-variant/30">
<div className="flex items-center gap-sm bg-surface-container-low p-1 rounded-lg border border-outline-variant/50">
<button className="px-md py-sm rounded-md bg-white ambient-shadow-level-1 text-primary font-label-md text-label-md transition-all">Trending</button>
<button className="px-md py-sm rounded-md text-on-surface-variant hover:bg-surface-variant font-label-md text-label-md transition-all">Recent</button>
<button className="px-md py-sm rounded-md text-on-surface-variant hover:bg-surface-variant font-label-md text-label-md transition-all">Resolved</button>
</div>
<div className="flex items-center gap-sm">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm group-focus-within:text-primary transition-colors">search</span>
<input className="pl-10 pr-4 py-2 rounded-lg border border-[#DDE3EA] bg-white font-body-sm text-body-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all w-64" placeholder="Search issues..." type="text"/>
</div>
<button className="flex items-center justify-center w-10 h-10 rounded-lg border border-[#DDE3EA] bg-white text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">

<article className="bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA] p-md flex flex-col gap-md hover:ambient-shadow-level-2 hover:border-[#DDE3EA] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">warning</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Pothole</p>
<div className="flex items-center gap-1 text-outline font-body-sm text-body-sm text-xs">
<span>Reported by</span>
<span className="font-semibold text-on-surface-variant">Alex R.</span>
<span>• 2h ago</span>
</div>
</div>
</div>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">Massive pothole on Elm Street</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Deep pothole in the right lane going southbound. Several cars have hit it hard already today. Needs urgent filling before someone pops a tire.</p>
</div>
<div className="w-full h-32 rounded-md overflow-hidden bg-surface-container mt-auto">
<div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A photograph of a large, deep pothole in an asphalt road during daytime. Modern, realistic lighting, clear focus on the damaged pavement." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAELJA08VuTyCEBme1yiNbWxr_w7j-eL5coiDFANwqrZz-wezl5n-rhrCPPjkUpe4nsM8LdhXXt0ZIWmtq4c8LxHzyhcJfsy_5A__crYfX96aWSS-uLNpvuee3Uf_ZB3eoEyhF4PMNwQEPICv_h3916Rm-vDsXEMVlXmTwbUsV1lvytmgey_tgwv0M7xM_yxlTurXNbuCciR9bXVgel8jTpaK229d3fE2ngFv3wQ74I3YTg4ruHGics')"></div>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/30 mt-sm">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-error-container/15 text-error font-label-md text-label-md">
<span className="material-symbols-outlined text-[12px]">error</span>
                        Reported
                    </span>
<div className="flex items-center gap-3 text-outline">
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">favorite</span>
<span className="font-label-md text-label-md text-xs">24</span>
</button>
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
<span className="font-label-md text-label-md text-xs">5</span>
</button>
</div>
</div>
</article>

<article className="bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA] p-md flex flex-col gap-md hover:ambient-shadow-level-2 hover:border-[#DDE3EA] transition-all duration-300 group cursor-pointer relative overflow-hidden">

<div className="absolute top-0 left-0 w-full ai-banner-gradient px-md py-1 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px] text-primary-container">auto_awesome</span>
<span className="font-label-md text-label-md text-[10px] text-on-surface-variant uppercase tracking-wider">AI Verified Priority</span>
</div>
<div className="flex items-start justify-between mt-4">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">lightbulb</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Lighting</p>
<div className="flex items-center gap-1 text-outline font-body-sm text-body-sm text-xs">
<span>Reported by</span>
<span className="font-semibold text-on-surface-variant">Sarah M.</span>
<span>• 5h ago</span>
</div>
</div>
</div>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">Streetlight out near park entrance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">The main streetlight at the north entrance of Centennial Park has been out for three days. It's very dark and feels unsafe for evening walkers.</p>
</div>
<div className="w-full h-32 rounded-md overflow-hidden bg-surface-container mt-auto">
<div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A nighttime photograph of a dark park entrance with a broken streetlight pole silhouetted against the sky. Moody lighting, modern aesthetic, emphasizing the lack of illumination." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQHjbUThcPCeaCJolETKxCl_vmKPDooGqGVGefjJM07eK_P7gAwJJ5oKYHq0VCRXH4jn-Bj5YRT1OhjtXNmhnC_PUeczk3_KFROPqfvzJXjBNanlFUDerDppos6NIvFmgqZ1xgWxyYXx2CiDbMMb4cV3JsArTJEoA_G_9VLFbK9dmY2yf-PCvpTU6a-flukxJR3cKk3Zt216xidQy_NqnyCFT6s-u2ynHZY5J0Wa6WdtdOdJts2oQM')"></div>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/30 mt-sm">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-primary-container/15 text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[12px]">check_circle</span>
                        Verified
                    </span>
<div className="flex items-center gap-3 text-outline">
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">favorite</span>
<span className="font-label-md text-label-md text-xs">89</span>
</button>
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
<span className="font-label-md text-label-md text-xs">12</span>
</button>
</div>
</div>
</article>

<article className="bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA] p-md flex flex-col gap-md hover:ambient-shadow-level-2 hover:border-[#DDE3EA] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">delete</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Sanitation</p>
<div className="flex items-center gap-1 text-outline font-body-sm text-body-sm text-xs">
<span>Reported by</span>
<span className="font-semibold text-on-surface-variant">David K.</span>
<span>• 1d ago</span>
</div>
</div>
</div>
</div>
<div className="mb-auto">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">Missed trash collection</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Whole block of Maple Ave didn't get trash picked up yesterday. Bins are overflowing and it's starting to smell given the heatwave.</p>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/30 mt-sm">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-error-container/15 text-error font-label-md text-label-md">
<span className="material-symbols-outlined text-[12px]">schedule</span>
                        Pending Review
                    </span>
<div className="flex items-center gap-3 text-outline">
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">favorite</span>
<span className="font-label-md text-label-md text-xs">45</span>
</button>
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
<span className="font-label-md text-label-md text-xs">2</span>
</button>
</div>
</div>
</article>
</section>

<section className="hidden flex flex-col items-center justify-center py-xl mt-lg text-center bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA]">
<span className="material-symbols-outlined text-6xl text-surface-variant mb-4">check_circle</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">All caught up!</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6">There are currently no active issues reported in this category. Enjoy the smooth sailing.</p>
<button className="bg-[#2E9CDB] text-white font-label-md text-label-md px-lg py-sm rounded-lg hover:brightness-90 transition-all shadow-sm active:translate-y-[1px]">
                Report New Issue
            </button>
</section>
</main>

<footer className="bg-surface-container-low dark:bg-surface-container-lowest py-lg mt-auto ml-64 w-[calc(100%-16rem)] border-t border-outline-variant flat no shadows flex flex-col md:flex-row justify-between items-center px-lg gap-md z-40 relative">
<p className="font-label-md text-label-md text-outline dark:text-outline-variant">© 2024 CivicPulse. Institutional Transparency &amp; Efficiency.</p>
<div className="flex gap-md font-label-md text-label-md text-outline dark:text-outline-variant">
<a className="text-outline hover:text-on-surface transition-colors hover:text-on-surface transition-opacity duration-200" href="#">Privacy Policy</a>
<a className="text-outline hover:text-on-surface transition-colors hover:text-on-surface transition-opacity duration-200" href="#">Contact Support</a>
<a className="text-outline hover:text-on-surface transition-colors hover:text-on-surface transition-opacity duration-200" href="#">Terms of Service</a>
</div>
</footer>

    </>
  );
}
