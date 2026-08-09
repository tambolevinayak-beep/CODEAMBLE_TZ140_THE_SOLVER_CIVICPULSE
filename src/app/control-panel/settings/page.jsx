'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';

export default function AdminSettingsPage() {
  const { user } = useAuth();
  
  // Local state for toggles
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);
  const [autoAssign, setAutoAssign] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl max-w-full mx-auto w-full">
      {/* Header */}
      <section className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl p-5 shadow-[0_20px_55px_rgba(20,30,55,0.08)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Admin Control Panel</p>
          <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
          <p className="text-sm text-slate-600 mt-1">Configure global preferences, notifications, and platform behaviors.</p>
        </div>
        <Link href="/control-panel" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Dashboard
        </Link>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Navigation/Tabs */}
        <div className="space-y-4 lg:col-span-1">
          <div className="rounded-2xl border border-white/60 bg-white/60 p-2 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)]">
            <nav className="flex flex-col gap-1">
              <button className="flex items-center gap-3 rounded-xl bg-fuchsia-50 px-4 py-3 text-left text-sm font-semibold text-fuchsia-700 transition">
                <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
                Account Profile
              </button>
              <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
                <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                Notifications
              </button>
              <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
                <span className="material-symbols-outlined text-[20px]">shield_person</span>
                Security & Access
              </button>
              <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
                <span className="material-symbols-outlined text-[20px]">tune</span>
                System Preferences
              </button>
            </nav>
          </div>
        </div>

        {/* Right Column: Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Profile Section */}
          <div className="rounded-2xl border border-white/60 bg-white/60 p-6 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)]">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-fuchsia-600">manage_accounts</span>
              Admin Profile
            </h2>
            
            <div className="flex items-center gap-5 mb-6">
              <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-fuchsia-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-fuchsia-200">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'S'}
              </div>
              <div>
                <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm mb-2">
                  Change Avatar
                </button>
                <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  defaultValue={user?.name || "Super Admin"}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  defaultValue={user?.email || "admin@civicpulse.org"}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-500 bg-slate-50 focus:outline-none"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="rounded-2xl border border-white/60 bg-white/60 p-6 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)]">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-fuchsia-600">tune</span>
              System Preferences
            </h2>

            <div className="space-y-4">
              {/* Toggle 1 */}
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Email Notifications</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Receive daily digests of pending issues.</p>
                </div>
                <button 
                  onClick={() => setEmailNotifs(!emailNotifs)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifs ? 'bg-fuchsia-600' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifs ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              {/* Toggle 2 */}
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">SMS Alerts</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Get immediate texts for high-priority 'safety' category reports.</p>
                </div>
                <button 
                  onClick={() => setSmsNotifs(!smsNotifs)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${smsNotifs ? 'bg-fuchsia-600' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${smsNotifs ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              {/* Toggle 3 */}
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Auto-Assign Departments</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Automatically route issues to departments based on AI category predictions.</p>
                </div>
                <button 
                  onClick={() => setAutoAssign(!autoAssign)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${autoAssign ? 'bg-fuchsia-600' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoAssign ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              {/* Toggle 4 */}
              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-semibold text-red-600">Maintenance Mode</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Temporarily disable citizen submissions. Admins can still access the dashboard.</p>
                </div>
                <button 
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${maintenanceMode ? 'bg-red-500' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${maintenanceMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition">
              Cancel
            </button>
            <button className="rounded-xl bg-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-200 transition hover:bg-fuchsia-700 hover:shadow-fuchsia-300 active:scale-95">
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
