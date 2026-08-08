import React from 'react';

export default function AddIssueFlow() {
  return (
    <>
      

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-fixed opacity-30 blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary-fixed opacity-20 blur-[150px]"></div>
</div>

<main className="w-full max-w-container-max px-md md:px-gutter py-xl flex flex-col items-center justify-center relative z-10">

<div className="w-full max-w-2xl flex justify-between items-center mb-lg">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="close">close</span>
<span className="font-label-md text-label-md uppercase">Cancel</span>
</button>
<div className="font-headline-sm text-headline-sm font-bold text-primary">CivicPulse</div>
</div>

<div className="glass-card w-full max-w-2xl rounded-xl p-lg md:p-xl flex flex-col gap-lg">

<div className="w-full flex items-center justify-between mb-sm">

<div className="flex flex-col items-center gap-xs relative z-10">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[16px]" data-icon="check">check</span>
</div>
<span className="font-label-md text-label-md text-primary">Type</span>
</div>

<div className="flex-1 h-0.5 bg-primary -mt-6 mx-2 relative z-0"></div>

<div className="flex flex-col items-center gap-xs relative z-10">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container border-2 border-primary flex items-center justify-center font-label-md text-label-md shadow-md ring-4 ring-primary-fixed/50">
                        2
                    </div>
<span className="font-label-md text-label-md text-primary font-bold">Details</span>
</div>

<div className="flex-1 h-0.5 bg-outline-variant -mt-6 mx-2 relative z-0"></div>

<div className="flex flex-col items-center gap-xs relative z-10">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-md text-label-md">
                        3
                    </div>
<span className="font-label-md text-label-md text-on-surface-variant">Location</span>
</div>
</div>

<div className="text-center mb-md">
<h1 className="font-headline-md text-headline-md text-on-surface mb-xs">Describe the Issue</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Provide clear details so our municipal teams can resolve it efficiently.</p>
</div>

<div className="ai-banner rounded-lg p-sm flex items-center gap-sm mb-sm border border-primary/20">
<span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
<span className="font-body-sm text-body-sm text-primary-fixed-variant">AI has suggested categories based on your photo.</span>
</div>

<form className="flex flex-col gap-lg">

<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="issue-title">Issue Title</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-shadow placeholder:text-outline" id="issue-title" placeholder="e.g. Broken Streetlight on Main St" type="text" value="Massive Pothole on Elm"/>
</div>

<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="issue-category">Category</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm pr-10 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-shadow" id="issue-category">
<option selected="" value="infrastructure">Infrastructure &amp; Roads</option>
<option value="sanitation">Waste &amp; Sanitation</option>
<option value="parks">Parks &amp; Recreation</option>
<option value="utilities">Public Utilities</option>
<option value="other">Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>

<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface flex justify-between" htmlFor="issue-desc">
<span>Description</span>
<span className="text-outline font-normal">Optional</span>
</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-shadow resize-none" id="issue-desc" placeholder="Add any additional details that might help..." rows="4"></textarea>
</div>

<div className="flex flex-col sm:flex-row gap-md mt-md">
<button className="order-2 sm:order-1 flex-1 px-lg py-sm rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-primary-fixed hover:text-on-primary-container transition-colors focus:ring-2 focus:ring-primary-fixed" type="button">
                        Back
                    </button>
<button className="order-1 sm:order-2 flex-[2] px-lg py-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint hover:-translate-y-[1px] transition-all shadow-sm flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2" type="button">
<span>Continue to Location</span>
<span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</form>
</div>
</main>

    </>
  );
}
