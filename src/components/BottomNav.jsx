'use client';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

import { Home, Map, Plus, Video, User, Activity } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';

/**
 * PAGE 3: CITIZEN DASHBOARD BOTTOM NAVIGATION
 * Navigation Psychology (Fitts's Law & Miller's Law — 5 Items Max):
 * 1. Feed (Home) — Hyperlocal issue stream
 * 2. Map — Real-time spatial view
 * 3. Add Issue (CENTER FAB) — Elevated primary conversion CTA placed in peak thumb-reach
 * 4. Reels — Vertical full-bleed video reports
 * 5. Profile — User reports & notifications
 */
export default function BottomNav() {
  const navigate = useRouter();
  const pathname = usePathname();

  const navItems = [
    { path: '/citizen', icon: Home, label: 'Dash', end: true },
    { path: '/citizen/feed', icon: Activity, label: 'Feed' },
    { path: '/citizen/report', icon: Plus, label: 'Add Issue', isFab: true },
    { path: '/citizen/map', icon: Map, label: 'Map' },
    { path: '/citizen/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="bottom-nav md:hidden lg:hidden" aria-label="Mobile Navigation" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000,
      height: '68px', background: 'rgba(11, 25, 44, 0.96)', backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center',
      justifyContent: 'space-around', padding: '0 12px'
    }}>
      {navItems.map(item => {
        const isActive = item.end
          ? pathname === item.path
          : pathname?.startsWith(item.path);

        if (item.isFab) {
          return (
            <button
              key={item.path}
              onClick={() => navigate.push(item.path)}
              aria-label="Add Issue"
              style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
                color: '#ffffff', border: '4px solid #0B192C', display: 'flex',
                alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(220, 38, 38, 0.4)',
                transform: 'translateY(-14px)', cursor: 'pointer', transition: 'all 0.2s ease'
              }}
            >
              <Plus size={28} strokeWidth={2.8} />
            </button>
          );
        }

        return (
          <Link
            key={item.path}
            href={item.path}
            end={item.end}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              textDecoration: 'none', color: isActive ? '#10B981' : '#94A3B8',
              fontSize: '11px', fontWeight: isActive ? 700 : 500, transition: 'all 0.2s ease'
            }}
          >
            <item.icon size={22} color={isActive ? '#10B981' : '#94A3B8'} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
