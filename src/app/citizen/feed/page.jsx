'use client';
import React from 'react';

export default function CommunityFeed() {
  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      

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
<div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A photograph of a large, deep pothole in an asphalt road during daytime. Modern, realistic lighting, clear focus on the damaged pavement."></div>
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
<div className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A nighttime photograph of a dark park entrance with a broken streetlight pole silhouetted against the sky. Moody lighting, modern aesthetic, emphasizing the lack of illumination."></div>
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

    </div>
  );
}
