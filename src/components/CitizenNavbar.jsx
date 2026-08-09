'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Activity, PlusCircle, User, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';

const CITIZEN_NAV = [
  { to: '/citizen', label: 'Dashboard', end: true },
  { to: '/citizen/feed', label: 'Issues' },
  { to: '/citizen/map', label: 'Map' },
  { to: '/citizen/reels', label: 'Reels' },
];

export default function CitizenNavbar() {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

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
    window.location.href = '/auth';
  }

  // Use email or name for the right pill
  const displayName = user?.email || user?.user_metadata?.full_name || 'Citizen';

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <nav className="pointer-events-auto bg-[#1a1a1a] rounded-full p-2 flex items-center shadow-xl shadow-black/20 border border-white/5">
        
        {/* Left Icon (White Circle) */}
        <Link href="/citizen" className="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform mr-4 sm:mr-8">
          <Activity size={20} className="text-[#1a1a1a]" />
        </Link>

        {/* Center Links */}
        <div className="flex items-center gap-4 sm:gap-6 px-2">
          {CITIZEN_NAV.map((link) => {
            const isActive = link.end ? pathname === link.to : pathname?.startsWith(link.to);
            return (
              <Link
                key={link.to}
                href={link.to}
                className={`text-[14px] font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right User Pill */}
        <div className="relative ml-4 sm:ml-8" ref={profileRef}>
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="h-[42px] px-5 sm:px-6 bg-white rounded-full flex items-center gap-2 text-[14px] font-medium text-[#1a1a1a] hover:bg-gray-100 transition-colors"
          >
            {displayName}
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute top-full right-0 mt-3 w-48 bg-surface rounded-2xl shadow-xl border border-outline-variant overflow-hidden p-2 text-on-surface">
              <Link href="/citizen/report" className="flex items-center gap-3 p-3 hover:bg-surface-container rounded-lg text-sm transition-colors" onClick={() => setProfileOpen(false)}>
                <PlusCircle size={16} /> Add Issue
              </Link>
              <Link href="/citizen/profile" className="flex items-center gap-3 p-3 hover:bg-surface-container rounded-lg text-sm transition-colors" onClick={() => setProfileOpen(false)}>
                <User size={16} /> Edit Profile
              </Link>
              <div className="h-[1px] bg-outline-variant my-1" />
              <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 hover:bg-error/10 hover:text-error rounded-lg text-sm transition-colors text-left">
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
