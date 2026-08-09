import React from 'react';

export default function LandingPage() {
  return (
    <>
      

<header className="w-full fixed top-0 left-0 z-50 py-md px-lg transition-all duration-300" id="main-header">
<div className="max-w-[1280px] mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md rounded-full px-lg py-sm border border-[#DDE3EA] shadow-[0px_4px_20px_rgba(30,58,95,0.08)]">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary-container text-3xl">radar</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">CivicPulse</span>
</div>
<div className="flex items-center gap-md">
<a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#login">Log In</a>
<a className="bg-primary-container text-white px-md py-sm rounded-lg font-label-md text-label-md font-bold hover:bg-[#257db0] transition-colors shadow-sm transform hover:-translate-y-[1px]" href="#signup">Get Started</a>
</div>
</div>
</header>
<main className="flex-grow pt-[120px]">

<section className="relative w-full min-h-[870px] flex items-center justify-center overflow-hidden px-lg pt-xl pb-xl">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 hero-pattern"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
<div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply z-0 filter blur-sm" data-alt="A highly detailed, soft-focus abstract visualization of a glowing city grid network at twilight. The scene is illuminated by crisp blue and teal light paths representing data flow, set against a predominantly bright, modern light-mode background (#f6f9ff). The mood is efficient, connected, and technologically advanced, fitting a civic technology platform." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAV7t4Uv4xf4YV94MM3GnRfFPT8PWSXoddDv7Pd0zQFOg7DtoH_5Qxi2MSb6papj-Vck_iDqIOidlPnYjOXV6ra1HUHN-_7rVedTaifsgHc5NKMoFAOO9Az84qVPTHY3lyF45_ITKXCS3JTNu63sXZs89ZYiIzsNaT7X2Pkb-2BX8pmjmcqTPNRRDokkFtvwY6GjOUEJPRStpMWmwdMrTgnYG-Ooan_jx6Yidz4k-W70VLiRbgICevY')"></div>
</div>
<div className="relative z-20 max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">

<div className="lg:col-span-7 flex flex-col gap-lg">
<div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-secondary-fixed/30 border border-secondary-fixed text-primary w-fit">
<span className="material-symbols-outlined text-[14px]">bolt</span>
<span className="font-label-md text-label-md uppercase tracking-wider">AI-Powered Civic Reporting</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface">
<span className="block">Report.</span>
<span className="block text-primary-container">Track.</span>
<span className="block text-primary">Resolve.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Empower your community with a seamless, AI-driven reporting loop. CivicPulse connects citizens directly to local government, turning observations into automated action.
                    </p>
<div className="flex flex-col sm:flex-row gap-md pt-sm">
<a className="bg-primary-container text-white px-xl py-sm rounded-lg font-headline-sm text-headline-sm text-center hover:bg-[#257db0] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-[1px] flex items-center justify-center gap-sm" href="#signup">
                            Join CivicPulse
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</a>
<a className="bg-transparent border border-secondary text-secondary px-xl py-sm rounded-lg font-headline-sm text-headline-sm text-center hover:bg-surface-container transition-all duration-300 flex items-center justify-center gap-sm" href="#how-it-works">
                            See How It Works
                        </a>
</div>
<div className="flex items-center gap-md mt-lg pt-lg border-t border-outline-variant/30">
<div className="flex -space-x-sm">
<img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" data-alt="A professional headshot of a diverse citizen, well-lit, smiling softly against a light grey background. Modern corporate photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn-PM6gBmCIb52fkdRJuE0YvXee8sJWnNpohwCQyiOsLZSqOvj1oZahB3tem12o5qKdpTAx8vvxDNSDg1c9y-SjevEvreO0rpvRqXSGA_GjJO9UH1VBExHyIB38fSNGtE0C-VKvUG-lzdQsyU3alv6vtGwP1gvyGOaQHoKys2FsTPwR8I2eoSWapApu4groYJ1bNytSS0DPTIWjQSnD8f5EKgN5dEYZcClQiK9AzatRP6O-s4mDHdx"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" data-alt="A professional headshot of a diverse city worker in uniform, well-lit, looking confident against a light grey background. Modern corporate photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQlZENEr5J9qyPSdAKfDq_8yIZd3Pb36b0bkLJKfhBXXqdccodDmmrfxks3bt3Dj1oJHGfgQMlBac8W1agRrLPE8HzepkptIfAlECZN58UmAkAZzOeYL7ZJvkrV6qzM5bbBqTHLA9o5botVvRDpBks7u3-w1lB-YSKRymABlLFfbXjYaGRMYjMR_L5fOIRDvDgspEldhj6lULapWPuYGhLC3au-68_1QUUUPc7zQCsVGFaSwus2nd1"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" data-alt="A professional headshot of a diverse local business owner, well-lit, smiling against a light grey background. Modern corporate photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe72KYsobTgkn5AG7ezJmm76-SdJC_9fg2CPDVn8EnN9jrkOn-BTR-C5YGtQmcXJUXuXmACrA5FA3tHyXLP7wY1TaYR2op0pahzqojdGNdtGItJ5nAehYv6TFuGvqDzChXVVWMcgjBpq_jz4ibFv_Prz4pGkLYXvaQB2AivEudaqdoaRaUXHlwqscyohHfJvkM8b3hs4CTeOjoHRd8o3nxrI4R_ps9F5RzKXMEfh2bh3Ffs-PdvTiN"/>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-bold text-primary">10,000+</span> issues resolved this month.
                        </div>
</div>
</div>

<div className="lg:col-span-5 relative h-full min-h-[500px] hidden md:block">

<div className="absolute top-[10%] right-[5%] w-72 glass-card rounded-lg p-md z-30 animate-[float_6s_ease-in-out_infinite]">
<div className="flex items-start gap-sm mb-sm">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">warning</span>
</div>
<div>
<h3 className="font-headline-sm text-[16px] text-on-surface leading-tight">Pothole Reported</h3>
<p className="font-body-sm text-body-sm text-outline">5th Ave &amp; Elm St • 2m ago</p>
</div>
</div>
<div className="inline-flex items-center gap-xs px-sm py-[2px] rounded-xl bg-surface-container text-on-surface-variant font-label-md text-[10px]">
<span className="material-symbols-outlined text-[12px]">schedule</span>
                            Pending Analysis
                        </div>
</div>

<div className="absolute top-[40%] left-[5%] w-64 glass-card rounded-lg p-md z-20 ai-gradient animate-[float_7s_ease-in-out_infinite_reverse]">
<div className="flex items-center gap-sm mb-xs">
<span className="material-symbols-outlined text-primary-container">auto_awesome</span>
<span className="font-label-md text-label-md text-primary-container">AI Assessment</span>
</div>
<div className="space-y-xs font-body-sm text-[13px]">
<div className="flex justify-between border-b border-[#DDE3EA] pb-xs">
<span className="text-outline">Severity:</span>
<span className="text-error font-bold">High</span>
</div>
<div className="flex justify-between border-b border-[#DDE3EA] pb-xs">
<span className="text-outline">Department:</span>
<span className="text-primary font-bold">Public Works</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Est. Fix:</span>
<span className="text-on-surface font-bold">48 Hours</span>
</div>
</div>
</div>

<div className="absolute bottom-[15%] right-[15%] w-64 glass-card rounded-lg p-md z-10 animate-[float_5s_ease-in-out_infinite]">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-[#E6F4EA] text-[#137333] flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">check_circle</span>
</div>
<div>
<h3 className="font-headline-sm text-[16px] text-on-surface leading-tight">Issue Resolved</h3>
<p className="font-body-sm text-[12px] text-outline">Public Works Team</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-xl px-lg" id="how-it-works">
<div className="max-w-[1280px] mx-auto text-center mb-xl">
<h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-sm">The Civic AI Loop</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">From community observation to institutional resolution in four automated steps.</p>
</div>
<div className="max-w-[1000px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-lg relative">

<div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary-container/20 via-primary-container to-[#0F9D8C]/20 -translate-y-1/2 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#DDE3EA] flex items-center justify-center shadow-md mb-md group-hover:border-primary-container group-hover:shadow-[0_0_15px_rgba(46,156,219,0.3)] transition-all duration-300">
<span className="material-symbols-outlined text-[28px] text-secondary">add_location_alt</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Citizen Report</h4>
<p className="font-body-sm text-body-sm text-outline">Snap a photo and pinpoint the location on the map.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group mt-lg md:mt-0">
<div className="w-16 h-16 rounded-full bg-white border-2 border-primary-container flex items-center justify-center shadow-md mb-md ai-gradient group-hover:scale-110 transition-all duration-300">
<span className="material-symbols-outlined text-[28px] text-primary-container">auto_awesome</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs">AI Analysis</h4>
<p className="font-body-sm text-body-sm text-outline">Our AI instantly categorizes the issue and assesses urgency.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group mt-lg md:mt-0">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#DDE3EA] flex items-center justify-center shadow-md mb-md group-hover:border-secondary transition-all duration-300">
<span className="material-symbols-outlined text-[28px] text-secondary">assignment_ind</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Escalation</h4>
<p className="font-body-sm text-body-sm text-outline">Automatically routed to the correct local department queue.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group mt-lg md:mt-0">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#DDE3EA] flex items-center justify-center shadow-md mb-md group-hover:border-[#137333] transition-all duration-300">
<span className="material-symbols-outlined text-[28px] text-secondary">done_all</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Resolution</h4>
<p className="font-body-sm text-body-sm text-outline">Real-time updates to the reporter as the work is completed.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full py-lg mt-auto border-t border-outline-variant flex flex-col md:flex-row justify-between items-center px-lg gap-md flat no shadows transition-opacity duration-200">
<div className="font-label-md text-label-md font-bold text-on-surface-variant">
            © 2024 CivicPulse. Institutional Transparency &amp; Efficiency.
        </div>
<div className="flex gap-md font-label-md text-label-md md:font-body-sm md:text-body-sm">
<a className="text-outline hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
<a className="text-outline hover:text-on-surface transition-colors" href="#">Contact Support</a>
<a className="text-outline hover:text-on-surface transition-colors" href="#">Terms of Service</a>
</div>
</footer>
<style>
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
    </style>
<script>
        // Simple header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.classList.add('py-sm');
                header.classList.remove('py-md');
            } else {
                header.classList.add('py-md');
                header.classList.remove('py-sm');
            }
        });
    </script>

    </>
  );
}
