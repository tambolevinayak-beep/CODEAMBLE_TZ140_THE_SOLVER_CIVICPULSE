import React from 'react';

export default function Authentication() {
  return (
    <>
      

<div className="w-full max-w-[1000px] bg-surface rounded-xl shadow-[0_4px_20px_rgba(30,58,95,0.08)] overflow-hidden flex flex-col md:flex-row border border-surface-variant">

<div className="hidden md:flex md:w-1/2 relative bg-surface-container flex-col justify-between p-xl border-r border-surface-variant">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60" data-alt="A brightly lit, modern community center with large glass windows showing a bustling city park outside. The scene is shot from a slightly low angle, emphasizing the clean lines and transparent, approachable nature of local government. The lighting is bright and optimistic, reflecting a light-mode aesthetic with soft shadows. The overall mood is civic-minded, professional, yet welcoming and transparent." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr2lP_Wv6g95qdhSnIF1xMfnm0c0o-gtUnV410LLW7ITqYOdISgeHkpU9noK-0ZNbb3CUBTAOhCS1MuruinIFbf0H-v2lhzfxJ30a2LDAjR9kF0_VHo_SeseiwWy1Msk5Y9abRCn_Oi-gIAAalS_CyEDAoEvBYOVldru2N0ck5rELXLEQ8fSbBpM_TigVaS3IGhmys361W8u8F2IS0RhekEUI2HbjxMHWR74Z-1ar24ESw0FiIsW9a"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
</div>

<div className="relative z-10">
<h1 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
<span className="material-symbols-outlined filled text-primary" style="font-size: 32px;">account_balance</span>
                    CivicPulse
                </h1>
</div>
<div className="relative z-10 mt-auto">
<p className="font-headline-md text-headline-md text-on-surface mb-md">Institutional Transparency &amp; Efficiency.</p>
<p className="font-body-md text-body-md text-on-surface-variant">Join your community in improving local infrastructure and reporting issues efficiently.</p>
</div>
</div>

<div className="w-full md:w-1/2 p-lg md:p-xl flex flex-col justify-center bg-surface">

<div className="md:hidden flex items-center justify-center gap-sm mb-xl">
<span className="material-symbols-outlined filled text-primary" style="font-size: 28px;">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">CivicPulse</h1>
</div>
<div className="mb-lg text-center md:text-left">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Welcome Back</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Sign in to manage reports and engage with your local government.</p>
</div>

<div className="flex flex-col gap-sm mb-lg">
<button className="w-full flex items-center justify-center gap-md py-sm px-lg bg-surface border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors duration-200">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.78 15.72 17.56V20.31H19.28C21.36 18.39 22.56 15.58 22.56 12.25Z" fill="#4285F4"></path>
<path d="M12 23C14.97 23 17.46 22.02 19.28 20.31L15.72 17.56C14.74 18.22 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.09H2.17V16.94C3.99 20.53 7.71 23 12 23Z" fill="#34A853"></path>
<path d="M5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91V7.06H2.17C1.42 8.55 1 10.22 1 12C1 13.78 1.42 15.45 2.17 16.94L5.84 14.09Z" fill="#FBBC05"></path>
<path d="M12 5.38C13.62 5.38 15.07 5.93 16.21 7.02L19.35 3.88C17.45 2.1 14.97 1 12 1C7.71 1 3.99 3.47 2.17 7.06L5.84 9.91C6.71 7.3 9.14 5.38 12 5.38Z" fill="#EA4335"></path>
</svg>
                    Continue with Google
                </button>
</div>

<div className="flex items-center my-md">
<div className="flex-grow border-t border-surface-variant"></div>
<span className="px-md font-label-md text-label-md text-outline">OR</span>
<div className="flex-grow border-t border-surface-variant"></div>
</div>

<form className="flex flex-col gap-md" onsubmit="event.preventDefault();">

<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
<input className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" id="email" placeholder="official@domain.gov" required="" type="email"/>
</div>

<div className="flex flex-col gap-xs" id="password-container">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
<a className="font-label-md text-label-md text-primary hover:underline" href="#">Forgot password?</a>
</div>
<div className="relative">
<input className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" id="password" placeholder="••••••••" required="" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
</div>
</div>

<div className="flex items-center gap-sm mt-sm">
<button className="w-10 h-5 bg-surface-variant rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-container/20" id="magic-link-toggle" type="button">
<div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm transition-transform duration-300" id="magic-link-knob"></div>
</button>
<label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="magic-link-toggle">Send a magic link instead</label>
</div>

<button className="mt-md w-full bg-primary-container text-white font-label-md text-label-md py-sm px-lg rounded-lg shadow-sm hover:bg-primary hover:-translate-y-[1px] transition-all duration-200 flex justify-center items-center gap-sm" id="submit-btn" type="submit">
                    Sign In
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
<div className="mt-lg text-center">
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Don't have an account? <a className="font-label-md text-label-md text-primary hover:underline" href="#">Register here</a>
</p>
</div>
</div>
</div>

<script>
        document.addEventListener('DOMContentLoaded', () => {
            const magicLinkToggle = document.getElementById('magic-link-toggle');
            const magicLinkKnob = document.getElementById('magic-link-knob');
            const passwordContainer = document.getElementById('password-container');
            const passwordInput = document.getElementById('password');
            const submitBtn = document.getElementById('submit-btn');
            
            let isMagicLink = false;

            magicLinkToggle.addEventListener('click', () => {
                isMagicLink = !isMagicLink;
                
                if (isMagicLink) {
                    // Toggle ON state
                    magicLinkToggle.classList.replace('bg-surface-variant', 'bg-primary-container');
                    magicLinkKnob.style.transform = 'translateX(20px)';
                    
                    // Hide password, change button text
                    passwordContainer.style.opacity = '0';
                    setTimeout(() => {
                        passwordContainer.style.display = 'none';
                        passwordInput.removeAttribute('required');
                    }, 300);
                    
                    submitBtn.innerHTML = `Send Magic Link <span className="material-symbols-outlined text-[18px]">auto_awesome</span>`;
                } else {
                    // Toggle OFF state
                    magicLinkToggle.classList.replace('bg-primary-container', 'bg-surface-variant');
                    magicLinkKnob.style.transform = 'translateX(0)';
                    
                    // Show password, change button text
                    passwordContainer.style.display = 'flex';
                    passwordInput.setAttribute('required', 'true');
                    setTimeout(() => {
                        passwordContainer.style.opacity = '1';
                    }, 10);
                    
                    submitBtn.innerHTML = `Sign In <span className="material-symbols-outlined text-[18px]">arrow_forward</span>`;
                }
            });

            // Smooth transition for password container
            passwordContainer.style.transition = 'opacity 0.3s ease';
        });
    </script>

    </>
  );
}
