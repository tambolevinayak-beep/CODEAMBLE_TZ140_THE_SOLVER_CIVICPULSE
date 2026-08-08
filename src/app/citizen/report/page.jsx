'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function AddIssueFlow() {
  const router = useRouter();
  const { user } = useAuth();
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('other');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    
    setSubmitting(true);
    setError(null);

    try {
      if (supabase) {
        const { error: insertError } = await supabase.from('problems').insert([
          {
            title,
            category,
            description,
            user_id: user?.id,
            locality_id: user?.locality_id || 'kothrud',
            status: 'reported',
            location_lat: 18.5204, // Mock Pune coordinates
            location_lng: 73.8567,
            location_address: 'Citizen Reported Location'
          }
        ]);
        if (insertError) throw insertError;
      }
      
      // Navigate back to dashboard on success
      router.push('/citizen');
    } catch (err) {
      console.error('Error submitting issue:', err);
      setError(err.message || 'Failed to submit issue');
      setSubmitting(false);
    }
  };

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      <div className="w-full max-w-2xl flex justify-between items-center mb-lg">
        <Link href="/citizen" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined">close</span>
          <span className="font-label-md text-label-md uppercase">Cancel</span>
        </Link>
        <div className="font-headline-sm text-headline-sm font-bold text-primary">CivicPulse</div>
      </div>

      <div className="glass-card w-full max-w-2xl rounded-xl p-lg md:p-xl flex flex-col gap-lg mx-auto">
        <div className="text-center mb-md">
          <h1 className="font-headline-md text-headline-md text-on-surface mb-xs">Describe the Issue</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Provide clear details so our municipal teams can resolve it efficiently.</p>
        </div>

        <div className="ai-banner rounded-lg p-sm flex items-center gap-sm mb-sm border border-primary/20">
          <span className="material-symbols-outlined text-primary">auto_awesome</span>
          <span className="font-body-sm text-body-sm text-primary-fixed-variant">AI has suggested categories based on your input.</span>
        </div>

        {error && (
          <div className="bg-error-container text-on-error-container p-sm rounded-lg text-sm mb-md">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="issue-title">Issue Title *</label>
            <input 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-shadow placeholder:text-outline" 
              id="issue-title" 
              placeholder="e.g. Broken Streetlight on Main St" 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="issue-category">Category *</label>
            <div className="relative">
              <select 
                className="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm pr-10 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-shadow" 
                id="issue-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="pothole">Pothole</option>
                <option value="garbage">Garbage & Sanitation</option>
                <option value="water_leakage">Water Leakage</option>
                <option value="electricity">Electricity</option>
                <option value="safety">Safety</option>
                <option value="drainage">Drainage</option>
                <option value="stray_animals">Stray Animals</option>
                <option value="streetlight">Streetlight</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface flex justify-between" htmlFor="issue-desc">
              <span>Description</span>
              <span className="text-outline font-normal">Optional</span>
            </label>
            <textarea 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-shadow resize-none" 
              id="issue-desc" 
              placeholder="Add any additional details that might help..." 
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-md mt-md">
            <Link href="/citizen" className="order-2 sm:order-1 flex-1 px-lg py-sm rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-primary-fixed hover:text-on-primary-container transition-colors focus:ring-2 focus:ring-primary-fixed text-center inline-block flex items-center justify-center">
              Cancel
            </Link>
            <button 
              className="order-1 sm:order-2 flex-[2] px-lg py-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint hover:-translate-y-[1px] transition-all shadow-sm flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2 disabled:opacity-50" 
              type="submit"
              disabled={submitting}
            >
              <span>{submitting ? 'Submitting...' : 'Submit Issue'}</span>
              {!submitting && <span className="material-symbols-outlined text-[18px]">send</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
