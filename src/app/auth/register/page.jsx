'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    setLoading(true);

    try {
      const result = await signUp(email, password, name);
      if (result.error) {
        setError(result.error);
      } else {
        // Redirect to citizen dashboard after successful registration
        router.push('/citizen');
      }
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full h-[calc(100vh-4rem)] flex items-center justify-center">
      
      <div className="w-full max-w-[1000px] bg-surface rounded-xl shadow-[0_4px_20px_rgba(30,58,95,0.08)] overflow-hidden flex flex-col md:flex-row border border-surface-variant">

        <div className="hidden md:flex md:w-1/2 relative bg-surface-container flex-col justify-between p-xl border-r border-surface-variant">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-60" alt="Civic Center" src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h1 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined filled text-primary">account_balance</span>
              CivicPulse
            </h1>
          </div>
          <div className="relative z-10 mt-auto">
            <p className="font-headline-md text-headline-md text-on-surface mb-md">Join the Movement.</p>
            <p className="font-body-md text-body-md text-on-surface-variant">Create an account to report issues, track resolutions, and help build a better community for everyone.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-lg md:p-xl flex flex-col justify-center bg-surface relative z-10">

          <div className="md:hidden flex items-center justify-center gap-sm mb-xl">
            <span className="material-symbols-outlined filled text-primary">account_balance</span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">CivicPulse</h1>
          </div>
          
          <div className="mb-lg text-center md:text-left">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Create an Account</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Register as a citizen to start reporting and engaging.</p>
          </div>

          {error && (
            <div className="mb-md p-sm rounded-lg bg-error-container/20 border border-error/30 text-error font-body-sm text-body-sm flex items-center gap-sm">
              <span className="material-symbols-outlined text-sm">error</span>
              {error}
              <button onClick={() => setError(null)} className="ml-auto text-error hover:text-on-error-container">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          )}

          <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
            
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="name">Full Name</label>
              <input 
                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" 
                id="name" 
                placeholder="Aarav Mehta" 
                required 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
              <input 
                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" 
                id="email" 
                placeholder="citizen@domain.com" 
                required 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
              <input 
                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" 
                id="password" 
                placeholder="••••••••" 
                required 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="confirm-password">Confirm Password</label>
              <input 
                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-outline" 
                id="confirm-password" 
                placeholder="••••••••" 
                required 
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
              />
            </div>

            <button 
              className="mt-md w-full bg-primary-container text-white font-label-md text-label-md py-sm px-lg rounded-lg shadow-sm hover:bg-primary hover:-translate-y-[1px] transition-all duration-200 flex justify-center items-center gap-sm disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Registering...
                </>
              ) : (
                <>
                  Create Account
                  <span className="material-symbols-outlined text-[18px]">person_add</span>
                </>
              )}
            </button>
          </form>
          
          <div className="mt-lg text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Already have an account? <Link className="font-label-md text-label-md text-primary hover:underline" href="/auth">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
