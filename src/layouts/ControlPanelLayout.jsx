'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  Activity, LayoutDashboard, ClipboardList, Map, Building2, Users,
  Settings, LogOut, Shield
} from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { getVisibleNavItems } from '@/lib/permissions';
import { getRoleLabel } from '@/lib/supabase';

const ICON_MAP = {
  LayoutDashboard, ClipboardList, Map, Building2, Users, Settings,
};

export default function ControlPanelLayout({ children }) {
  const { user, role, signOut, switchRole } = useAuth();
  const navigate = useRouter();
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const navItems = getVisibleNavItems(role);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  async function handleLogout() {
    await signOut();
    navigate.push('/auth');
  }

  const userName = user?.name || user?.email || 'User';

  return (
    <div className="citizen-layout prism-bg relative">
      
      {/* Floating Pill Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <nav className="pointer-events-auto bg-[#1a1a1a] rounded-full p-2 flex items-center shadow-xl shadow-black/20 border border-white/5 max-w-full">
          
          {/* Left Icon */}
          <Link href="/control-panel" className="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform mr-4 sm:mr-6">
            <Activity size={20} className="text-[#1a1a1a]" />
          </Link>

          {/* Center Links */}
          <div className="flex items-center gap-4 sm:gap-6 px-2 shrink-0">
            {navItems.map(item => {
              const isActive = item.end ? pathname === item.path : pathname?.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-[14px] font-medium transition-colors whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right User Pill */}
          <div className="relative ml-4 sm:ml-6 shrink-0" ref={profileRef}>
            <button 
              onClick={() => setProfileOpen(!profileOpen)}
              className="h-[42px] px-4 sm:px-5 bg-white rounded-full flex items-center gap-2 text-[14px] font-medium text-[#1a1a1a] hover:bg-gray-100 transition-colors"
            >
              <Shield size={16} className="text-error" />
              {getRoleLabel(role)}
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute top-full right-0 mt-3 w-48 bg-surface rounded-2xl shadow-xl border border-outline-variant overflow-hidden p-2 text-on-surface">
                <div className="p-3 text-xs text-on-surface-variant font-medium border-b border-outline-variant mb-1 truncate">
                  {userName}
                </div>
                
                <div className="h-[1px] bg-outline-variant my-1" />
                <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 hover:bg-error/10 hover:text-error rounded-lg text-sm transition-colors text-left">
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Main Content Area - Full width, no sidebars */}
      <div className="w-full min-h-screen pt-28">
        <main id="cp-main" className="cp-page-content h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
