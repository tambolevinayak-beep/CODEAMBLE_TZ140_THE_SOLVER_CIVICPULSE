'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Activity, Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

/**
 * Standalone Navbar - used in non-layout contexts if needed.
 * The main layouts (CitizenLayout, AdminLayout) have their own navbars.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  let auth;
  try {
    auth = useAuth();
  } catch {
    // If not wrapped in AuthProvider, render a basic public nav
    auth = null;
  }

  const role = auth?.role || 'citizen';
  const isAdmin = role === 'admin' || role === 'sub_admin';

  const navLinks = role === 'citizen'
    ? [
        { to: '/citizen', label: 'Issues' },
        { to: '/citizen/leaderboard', label: 'Leaderboard' },
        { to: '/citizen/profile', label: 'Profile' },
      ]
    : [
        { to: isAdmin && role === 'admin' ? '/admin' : '/subadmin', label: 'Dashboard' },
        { to: isAdmin && role === 'admin' ? '/admin/issues' : '/subadmin/issues', label: 'Issues' },
        ...(role === 'admin' ? [{ to: '/admin/equity', label: 'Equity' }] : []),
      ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          <Activity size={24} />
          <span>CivicPulse</span>
        </Link>

        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                href={link.to}
                className={pathname === link.to || pathname.startsWith(link.to + '/') ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="notification-btn" title="Notifications">
            <Bell size={16} />
            <span className="notification-badge">3</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--navbar-height)',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border)',
          padding: 'var(--space-md)',
          zIndex: 'var(--z-fixed)',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              href={link.to}
              className="sidebar-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
