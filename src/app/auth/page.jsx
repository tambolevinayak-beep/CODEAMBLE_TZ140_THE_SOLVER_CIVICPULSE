'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';
import { USERS } from '@/data/mockData';

export default function Authentication() {
  const [isMagicLink, setIsMagicLink] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signIn, signUp, isDemoMode, authDisabled } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn(email, password);
      if (result.error) {
        setError(result.error);
      } else {
        // Redirect based on role
        const userRole = result.user?.role;
        if (userRole === 'super_admin' || userRole === 'moderator') {
          router.push('/control-panel');
        } else {
          router.push('/citizen');
        }
      }
    } catch (err) {
      setError(err.message || 'Sign in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // In demo mode, just sign in as citizen
    if (isDemoMode || authDisabled) {
      router.push('/citizen');
      return;
    }
    // TODO: Wire up supabase.auth.signInWithOAuth({ provider: 'google' })
    setError('Google sign-in requires Supabase OAuth configuration.');
  };

  const handleForgotPassword = () => {
    if (!email) {
      setError('Please enter your email address first.');
      return;
    }
    // TODO: Wire up supabase.auth.resetPasswordForEmail(email)
    setError('Password reset is not configured yet. Contact support.');
  };

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full h-[calc(100vh-4rem)] flex items-center justify-center">
      
<div className="w-full max-w-[1000px] bg-surface rounded-xl shadow-[0_4px_20px_rgba(30,58,95,0.08)] overflow-hidden flex flex-col md:flex-row border border-surface-variant">

<div className="hidden md:flex md:w-1/2 relative bg-surface-container flex-col justify-between p-xl border-r border-surface-variant">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60" alt="Civic Center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr2lP_Wv6g95qdhSnIF1xMfnm0c0o-gtUnV410LLW7ITqYOdISgeHkpU9noK-0ZNbb3CUBTAOhCS1MuruinIFbf0H-v2lhzfxJ30a2LDAjR9kF0_VHo_SeseiwWy1Msk5Y9abRCn_Oi-gIAAalS_CyEDAoEvBYOVldru2N0ck5rELXLEQ8fSbBpM_TigVaS3IGhmys361W8u8F2IS0RhekEUI2HbjxMHWR74Z-1ar24ESw0FiIsW9a"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
</div>

<div className="relative z-10">
<h1 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
<span className="material-symbols-outlined filled text-primary">account_balance</span>
                    CivicPulse
                </h1>
</div>
<div className="relative z-10 mt-auto">
<p className="font-headline-md text-headline-md text-on-surface mb-md">Institutional Transparency &amp; Efficiency.</p>
<p className="font-body-md text-body-md text-on-surface-variant">Join your community in improving local infrastructure and reporting issues efficiently.</p>
</div>
</div>

<div className="w-full md:w-1/2 p-lg md:p-xl flex flex-col justify-center bg-surface relative z-10">

<div className="md:hidden flex items-center justify-center gap-sm mb-xl">
<span className="material-symbols-outlined filled text-primary">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">CivicPulse</h1>
</div>
<div className="mb-lg text-center md:text-left">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Welcome Back</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Sign in to manage reports and engage with your local government.</p>
</div>

{/* Error display */}
{error && (
  <div className="mb-md p-sm rounded-lg bg-error-container/20 border border-error/30 text-error font-body-sm text-body-sm flex items-center gap-sm">
    <span className="material-symbols-outlined text-sm">error</span>
    {error}
    <button onClick={() => setError(null)} className="ml-auto text-error hover:text-on-error-container">
      <span className="material-symbols-outlined text-sm">close</span>
    </button>
  </div>
)}

{/* Demo mode indicator */}
{(isDemoMode || authDisabled) && (
  <div className="mb-md p-sm rounded-lg bg-secondary-fixed/20 border border-secondary/30 font-body-sm text-body-sm text-secondary flex items-center gap-sm">
    <span className="material-symbols-outlined text-sm">info</span>
    Demo Mode Active
  </div>
)}

<div className="flex flex-col gap-sm mb-sm">
<button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-md py-sm px-lg bg-surface border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors duration-200">
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.78 15.72 17.56V20.31H19.28C21.36 18.39 22.56 15.58 22.56 12.25Z" fill="#4285F4"></path>
<path d="M12 23C14.97 23 17.46 22.02 19.28 20.31L15.72 17.56C14.74 18.22 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.09H2.17V16.94C3.99 20.53 7.71 23 12 23Z" fill="#34A853"></path>
<path d="M5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91V7.06H2.17C1.42 8.55 1 10.22 1 12C1 13.78 1.42 15.45 2.17 16.94L5.84 14.09Z" fill="#FBBC05"></path>
<path d="M12 5.38C13.62 5.38 15.07 5.93 16.21 7.02L19.35 3.88C17.45 2.1 14.97 1 12 1C7.71 1 3.99 3.47 2.17 7.06L5.84 9.91C6.71 7.3 9.14 5.38 12 5.38Z" fill="#EA4335"></path>
</svg>
                    Continue with Google
                </button>
</div>

{(isDemoMode || authDisabled) && (
  <div className="w-full overflow-hidden mb-4">
    <p className="font-label-sm text-on-surface-variant mb-2">Quick Login (Demo Accounts)</p>
    <div className="flex gap-3 overflow-x-auto pb-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {USERS.map(u => (
        <button 
          key={u.id}
          type="button"
          onClick={() => {
            setEmail(u.email);
            setPassword('password');
          }}
          className="snap-start shrink-0 flex items-center gap-3 p-2 pr-4 border border-outline-variant rounded-full hover:bg-surface-container transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">
            {u.avatar}
          </div>
          <div className="flex flex-col items-start">
            <span className="font-label-sm text-on-surface whitespace-nowrap">{u.name}</span>
            <span className="text-[10px] text-on-surface-variant capitalize leading-tight">{u.role.replace('_', ' ')}</span>
          </div>
        </button>
      ))}
    </div>
  </div>
)}

<div className="flex items-center my-md">
<div className="flex-grow border-t border-surface-variant"></div>
<span className="px-md font-label-md text-label-md text-outline">OR</span>
<div className="flex-grow border-t border-surface-variant"></div>
</div>

<form className="flex flex-col gap-md" onSubmit={handleSubmit}>

<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
<input 
  className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" 
  id="email" 
  placeholder="official@domain.gov" 
  required 
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
</div>

<div className={`flex flex-col gap-xs transition-opacity duration-300 ${isMagicLink ? 'opacity-0 hidden' : 'opacity-100 flex'}`}>
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
<button type="button" onClick={handleForgotPassword} className="font-label-md text-label-md text-primary hover:underline bg-transparent border-none cursor-pointer">Forgot password?</button>
</div>
<div className="relative">
<input 
  className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" 
  id="password" 
  placeholder="••••••••" 
  required={!isMagicLink} 
  type={showPassword ? 'text' : 'password'}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility' : 'visibility_off'}</span>
</button>
</div>
</div>

<div className="flex items-center gap-sm mt-sm">
<button onClick={() => setIsMagicLink(!isMagicLink)} className={`w-10 h-5 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-container/20 ${isMagicLink ? 'bg-primary-container' : 'bg-surface-variant'}`} type="button">
<div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 shadow-sm transition-all duration-300 ${isMagicLink ? 'left-[22px]' : 'left-[2px]'}`}></div>
</button>
<label onClick={() => setIsMagicLink(!isMagicLink)} className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none">Send a magic link instead</label>
</div>

<button 
  className="mt-md w-full bg-primary-container text-white font-label-md text-label-md py-sm px-lg rounded-lg shadow-sm hover:bg-primary hover:-translate-y-[1px] transition-all duration-200 flex justify-center items-center gap-sm disabled:opacity-50 disabled:cursor-not-allowed" 
  type="submit"
  disabled={loading}
>
  {loading ? (
    <>
      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      Signing in...
    </>
  ) : (
    <>
      {isMagicLink ? 'Send Magic Link' : 'Sign In'}
      <span className="material-symbols-outlined text-[18px]">{isMagicLink ? 'auto_awesome' : 'arrow_forward'}</span>
    </>
  )}
</button>
</form>
<div className="mt-lg text-center">
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Don&apos;t have an account? <Link className="font-label-md text-label-md text-primary hover:underline" href="/auth/register">Register here</Link>
</p>
</div>
</div>
</div>

    </div>
  );
}
