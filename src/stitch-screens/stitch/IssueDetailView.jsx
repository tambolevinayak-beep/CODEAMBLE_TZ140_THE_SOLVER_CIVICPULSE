import React from 'react';

export default function IssueDetailView() {
  return (
    <>
      

<header className="sticky top-0 z-50 flex items-center justify-between px-gutter w-full h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none bg-surface dark:bg-surface-dim">
<div className="flex items-center gap-md">
<a className="text-on-surface-variant hover:bg-surface-container-low transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center" href="#">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</a>
<span className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">CivicPulse</span>
</div>
<div className="flex items-center gap-sm">
<button className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
<main className="flex-grow w-full max-w-container-max mx-auto px-md md:px-gutter py-xl pb-24">

<div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-lg glass-card p-xs">
<div className="w-full h-full bg-cover bg-center rounded-lg" data-alt="A close-up, high-resolution photograph of a deep pothole on a suburban asphalt road during daytime. The lighting is bright and realistic, casting a subtle shadow inside the crater, emphasizing its depth and danger to vehicles. The surrounding asphalt is textured and slightly weathered. Modern, clean aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXNLs2ZNvwjGBoZY8hPk1EAScMWjflt28uCbrDGGXg2HjfJBtw9NgaBkp-vzzFkPNZ6bZnqPk6prv2YD49RjCVCNlCQstjM9oIiJIVTIpi7UMhR3p1IAUgrVpXFSaixYUneTT3UwUA5h-X9UyC9i0juRnXMExbs2-6afj2id23UtaCoHm2aDYuwwMEh44ujNfcoQ4eEoel8P6V7v6oMPBHzU7vNpcb6A7fFiyg6d5hMP-2seZlZvUH')"></div>

<div className="absolute top-md right-md bg-white/90 backdrop-blur-sm rounded-xl px-sm py-xs flex items-center gap-xs shadow-sm border border-outline-variant/30">
<span className="material-symbols-outlined text-tertiary-container text-[16px]" style="font-variation-settings: 'FILL' 1;">warning</span>
<span className="font-label-md text-label-md text-tertiary-container uppercase">Escalated</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">

<div className="lg:col-span-8 flex flex-col gap-lg">

<div className="glass-card rounded-xl p-lg">
<div className="flex items-start gap-md mb-md">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined">maps_ar</span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Massive Pothole on Elm St</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                4200 Block of Elm St, Near the intersection with Maple Ave.
                            </p>
</div>
</div>

<div className="ai-banner rounded-lg p-md mb-lg flex items-start gap-sm">
<span className="material-symbols-outlined text-primary-container">auto_awesome</span>
<div>
<p className="font-label-md text-label-md text-primary mb-xs">AI Assessment</p>
<p className="font-body-sm text-body-sm text-on-surface">This issue has been categorized as 'High Priority Road Hazard' due to its dimensions and location on a main arterial route. Typical resolution time is 3-5 business days.</p>
</div>
</div>
<div className="prose font-body-md text-body-md text-on-surface-variant mb-lg">
<p>There is a very deep and wide pothole that has formed over the last week. Several cars have hit it hard and I've seen at least two people pull over with flat tires. It's especially hard to see at night because the nearest street light is also flickering.</p>
</div>

<div className="flex items-center justify-between border-t border-outline-variant/30 pt-md mt-md">
<div className="flex items-center gap-sm">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-surface object-cover" data-alt="A small, circular avatar portrait of a diverse community member smiling, well-lit, modern corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgB0Tp91uKdw1rHDXDD4D7H4hyZLrkqflDUCYmvJ3gJ4YKSFqYKHTSVDJd-FYH9vbJHOoQHZFJIB9rxI0_dHAdq0RvZf3qm3PIaeMQwWIRc4vbtRUtou-tH1cEEuV2fcrTpk6IK7AKPWd-EJAPEJYOZbl1xiNZTnslNeJn0CLY6dV_tPTMLb1wt9-mN9NdLXymRrl9EEv0GIFRRs7Msklh3sFxff5aX34mKF56Rf1SMwR-M62DmJMy"/>
<img className="w-8 h-8 rounded-full border-2 border-surface object-cover" data-alt="A small, circular avatar portrait of another diverse community member, professionally lit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUQ8bwxm4PCD58XTQcu3EFeH2KuJE5UZptz6IrNZXSG_o4Yq3zM5ZdRi-Z4wMYC1ihQlmEqchj7SH2PDPmAInQYke9r5QM1Z6qRkooIGuaT8hJ4HQC8dNTEPCM3mcx_tsancgiv3LjrW8Pud-HIzkbnKuCRk40NUsiS1PomOrxTzVOz_SgpLsv1yztxzJyUZDtZRPuaEHxQRxOEYiLhcFoeTat6eH0JieSIvsLsTSSZFGKhgwLQDDd"/>
<img className="w-8 h-8 rounded-full border-2 border-surface object-cover" data-alt="A small, circular avatar portrait of a third community member, approachable and clear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXcZ9SClx1LsMaElUq88o3xodSYlxakWfPl5joSzKXK2_5OsFNoVNSPZTXO183wTq66YN5V2ZLAd8pFl6Udkq65oSgmgaIEpVov6_yxlhWg_7Rw9h4ZosTj7ekDuXuN29WObcExioYsFpDNRxtUjW6FALwh3fxe9Y0EW3HDokk1TLOqyZ92jHZU1r_8I1tnaHIFHEcmxkeo5F551K4rZcil55f-bmRkYusHi6WoRswYC1H5bBslypd"/>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">42 citizens support this</span>
</div>
<button className="pulse-btn bg-primary-container text-on-primary hover:bg-primary-container/90 active:translate-y-[1px] transition-all font-label-md text-label-md px-lg py-sm rounded-lg flex items-center gap-xs shadow-sm">
<span className="material-symbols-outlined text-[18px]">thumb_up</span>
                            Support This Issue
                        </button>
</div>
</div>

<div className="glass-card rounded-xl p-lg">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Community Comments (3)</h2>
<div className="flex flex-col gap-md mb-lg">

<div className="flex gap-md">
<img className="w-10 h-10 rounded-full bg-surface-container object-cover" data-alt="A small, circular avatar portrait of a concerned neighbor, modern minimal style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq6ydJsvc4dUcAFjTjRxRPGD4Gslr87IJBwa_V8WSgbpSWwijUjiSoo5RKQ_c6I_PW1rMSE6uEIKFWyOJZMQLKKoN7XcfDQowpIYn5J_VK9XK6mkuKdnHPIt94ulH7HGnUys5MwXsRpfmLuZtCuue40jDC8-r87ocfEvwFnxfUctFHZM8bAC_JtWjeic2QkqRhsWLCKKS0agBW0oH5zUQv-wYAC7wTnCjCjB-Qze4b-GdlSx6R0073"/>
<div className="bg-surface-container-low rounded-lg p-sm flex-grow">
<div className="flex justify-between items-start mb-xs">
<span className="font-label-md text-label-md text-on-surface">Sarah J.</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">2 days ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">I hit this yesterday, completely blew out my front right tire. Please fix ASAP!</p>
</div>
</div>

<div className="flex gap-md">
<img className="w-10 h-10 rounded-full bg-surface-container object-cover" data-alt="A small, circular avatar portrait of a local business owner, approachable lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi2-g_4lSMrF2k9Sti3XMgS9mavxijeOZri2dh0tpQJ9tf6xAA0xEu1lg2DK0pw-2Ce8C1e5PQAknFOT6OG7zU-KelR22NHw7Q4nO1wFdL8jRDmjit1IXgA2utZhCJ0XYaYd4YIeCSr3LOZ9K-XBUcvC_wREki8zfzKRmsGUjW9BaJyW-xmEBb5CDwYdL2rTxn5N1ZkHtc5q0BFAXMrH4MoSFPvngO8m6MYg-3cwK0WcVERj3HTXhz"/>
<div className="bg-surface-container-low rounded-lg p-sm flex-grow border border-tertiary-container/20">
<div className="flex justify-between items-start mb-xs">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
                                        City Public Works
                                        <span className="material-symbols-outlined text-primary text-[14px]" style="font-variation-settings: 'FILL' 1;">verified</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">1 day ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">A crew has been dispatched to assess the damage. Temporary patching will occur tomorrow weather permitting.</p>
</div>
</div>
</div>

<div className="flex gap-md mt-md">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined">person</span>
</div>
<div className="flex-grow relative">
<input className="w-full bg-white border border-outline-variant rounded-lg py-sm px-md font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Add a comment..." type="text"/>
<button className="absolute right-sm top-1/2 -translate-y-1/2 text-primary hover:text-primary-fixed-variant p-xs rounded-full">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-lg">

<div className="glass-card rounded-xl p-lg">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-lg">Status Timeline</h2>
<div className="relative pl-sm">

<div className="absolute left-[15px] top-2 bottom-6 w-[2px] bg-outline-variant/50"></div>

<div className="relative flex gap-md mb-lg">
<div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center z-10 flex-shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">check</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Reported</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023 - 09:41 AM</p>
</div>
</div>

<div className="relative flex gap-md mb-lg">
<div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center z-10 flex-shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">check</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Verified</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 25, 2023 - 11:30 AM</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] mt-xs text-primary">By Public Works Dept.</p>
</div>
</div>

<div className="relative flex gap-md mb-lg">
<div className="w-6 h-6 rounded-full bg-tertiary-container border-2 border-white flex items-center justify-center z-10 flex-shrink-0 shadow-[0_0_0_4px_rgba(202,134,13,0.2)]">
<span className="material-symbols-outlined text-[14px] text-on-tertiary" style="font-variation-settings: 'FILL' 1;">priority_high</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-tertiary-container font-bold">Escalated</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 26, 2023 - 08:15 AM</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] mt-xs">Assigned to Road Repair Crew Alpha.</p>
</div>
</div>

<div className="relative flex gap-md">
<div className="w-6 h-6 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center z-10 flex-shrink-0">
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface-variant">Resolved</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pending</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-xs overflow-hidden">
<div className="w-full h-48 bg-cover bg-center rounded-lg relative" data-alt="A clean, minimalist vector map of a suburban neighborhood in light mode, showing streets and a subtle blue path leading to a specific location pin on Elm Street. CivicPulse brand colors, bright and clear." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqm2afID0K7oOJcD7u943IOKIZooekCsD7vEWS9nCerzkMWOVbMXwnPdTDe-jZ3vuskyefsqOls1o7ZAAqCykAPdCQiBIDAwjEkb7Xn1Xq8mjhJHX-z8AC9nkLG1FgnCNXfRfqyYRrtya6yMu-a2Dph-MTVeDzdRwayzjdMSWzT9UIaSnCE403gQRFkkKubHZvfsVNqc_7ApyzC221rCaMIkBRuEvKGJgZ29mWUDkP_rgJunPdaf96')">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center drop-shadow-md">
<div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center border-2 border-white shadow-lg">
<span className="material-symbols-outlined text-white text-[16px]">maps_ar</span>
</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-tertiary-container -mt-[2px]"></div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
