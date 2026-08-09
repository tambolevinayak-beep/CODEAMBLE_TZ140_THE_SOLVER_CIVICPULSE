'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  User, FileText, PlusCircle, Map as MapIcon,
  MessageCircle, ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  Activity, Video, Home
} from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';

/**
 * Citizen navigation in requested structure.
 */
const CITIZEN_NAV = [
  { to: '/citizen', label: 'Dashboard', icon: Home, end: true },
  { to: '/citizen/profile', label: 'Profile', icon: User },
  { to: '/citizen/feed', label: 'Issues', icon: FileText },
  { to: '/citizen/report', label: 'Add Issue', icon: PlusCircle, cta: true },
  {
    label: 'Explore',
    icon: MapIcon,
    isGroup: true,
    children: [
      { to: '/citizen/map', label: 'Map', icon: MapIcon },
      { to: '/citizen/reels', label: 'Reels', icon: Video },
    ],
  },
];

const CITIZEN_NAV_BOTTOM = [
  { to: '/citizen/profile', label: 'Edit Profile', icon: User },
  { to: '/citizen/my-issues', label: 'My Issues', icon: FileText },
  { to: '/citizen/community', label: 'Community Issues', icon: MessageCircle },
];

/**
 * CitizenSidebar — Collapsible left navigation for the Citizen dashboard.
 *
 * - Expanded: 260px with icons + labels
 * - Collapsed: 64px with icons only + tooltips
 * - Mobile (<768px): Off-canvas overlay with backdrop
 * - Scrollable when items exceed viewport
 * - Collapse state persisted in localStorage
 * - Grouped sub-menus with smooth animations
 */
export default function CitizenSidebar({ collapsed, onToggle, mobileOpen, onMobileClose }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState({ Explore: true });

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Citizen';
  const userInitials = userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  function toggleGroup(label) {
    setOpenGroups(prev => ({ ...prev, [label]: !prev[label] }));
  }

  function isGroupActive(group) {
    return group.children.some(child => pathname === child.to || pathname.startsWith(child.to + '/'));
  }

  function renderNavItem(link) {
    if (link.isGroup) {
      const groupOpen = openGroups[link.label] && !collapsed;
      const groupActive = isGroupActive(link);

      return (
        <div key={link.label} className="sidebar-nav-group">
          <button
            className={`sidebar-nav-item sidebar-nav-group-toggle ${collapsed ? 'collapsed' : ''} ${groupActive ? 'group-active' : ''}`}
            onClick={() => {
              if (collapsed) {
                onToggle();
                setOpenGroups(prev => ({ ...prev, [link.label]: true }));
              } else {
                toggleGroup(link.label);
              }
            }}
            title={collapsed ? `${link.label} (Click to expand)` : undefined}
          >
            <link.icon size={18} className="sidebar-nav-icon" />
            {!collapsed && (
              <>
                <span className="sidebar-nav-label">{link.label}</span>
                <span className="sidebar-nav-chevron">
                  {groupOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </span>
              </>
            )}
          </button>
          <div className={`sidebar-nav-children ${groupOpen ? 'open' : ''}`}>
            {link.children.map(child => (
              <Link
                key={child.to}
                href={child.to}
                className={`sidebar-nav-item sidebar-nav-child ${pathname === child.to || pathname.startsWith(child.to + '/') ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}
                onClick={onMobileClose}
                title={collapsed ? child.label : undefined}
              >
                <child.icon size={16} className="sidebar-nav-icon" />
                {!collapsed && <span className="sidebar-nav-label">{child.label}</span>}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={link.to}
        href={link.to}
        className={`sidebar-nav-item ${(link.end ? pathname === link.to : (pathname === link.to || pathname.startsWith(link.to + '/'))) ? 'active' : ''} ${collapsed ? 'collapsed' : ''} ${link.cta ? 'sidebar-nav-cta' : ''}`}
        onClick={onMobileClose}
        title={collapsed ? link.label : undefined}
      >
        <link.icon size={18} className="sidebar-nav-icon" />
        {!collapsed && <span className="sidebar-nav-label">{link.label}</span>}
      </Link>
    );
  }

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={`citizen-sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand header */}
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <Activity size={22} />
          </div>
          {!collapsed && <span className="sidebar-brand-text">CivicPulse</span>}
          <button
            className="sidebar-toggle-btn"
            onClick={onToggle}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Navigation items */}
        <nav className="sidebar-nav">
          <div className="sidebar-nav-section">
            {!collapsed && <div className="sidebar-section-label">Navigation</div>}
            {CITIZEN_NAV.map(link => renderNavItem(link))}
          </div>

          <div className="sidebar-nav-section sidebar-account-section">
            {!collapsed && <div className="sidebar-section-label">Account</div>}
            {CITIZEN_NAV_BOTTOM.map(link => renderNavItem(link))}
          </div>
        </nav>

        {/* User card at bottom */}
        <div className="sidebar-user-card">
          <div className="sidebar-user-avatar">{userInitials}</div>
          {!collapsed && (
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">{userName}</div>
              <div className="sidebar-user-role">Citizen</div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
