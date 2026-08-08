import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LogOut, Menu, UserCheck } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { isStaff } from '../lib/permissions';
import CitizenSidebar from '../components/CitizenSidebar';
import BottomNav from '../components/BottomNav';

const SIDEBAR_KEY = 'civicpulse_sidebar_collapsed';

/**
 * CitizenLayout — Public/Citizen dashboard with collapsible left sidebar + mobile drawer/bottom nav.
 * Connects directly to CitizenSidebar with user-requested menu order.
 */
export default function CitizenLayout() {
  const { user, role, signOut, switchRole } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem(SIDEBAR_KEY) === 'true');
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleSidebar() {
    setCollapsed(prev => {
      const next = !prev;
      localStorage.setItem(SIDEBAR_KEY, String(next));
      return next;
    });
  }

  async function handleLogout() {
    await signOut();
    navigate('/auth');
  }

  useEffect(() => {
    setMobileOpen(false);
  }, [navigate]);

  return (
    <div className="citizen-layout">
      <a href="#main-content" className="skip-nav">Skip to content</a>

      {/* Citizen Sidebar (Desktop + Mobile drawer) */}
      <CitizenSidebar
        collapsed={collapsed}
        onToggle={toggleSidebar}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* ── Main Content Area ── */}
      <div className={`citizen-main ${collapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Top bar (mobile / desktop header with role & sign out) */}
        <header className="citizen-topbar">
          <div className="citizen-topbar-left">
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>
            <span style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary)' }} className="show-mobile">
              CivicPulse
            </span>
          </div>
          <div className="citizen-topbar-right">
            {/* Interactive Ward / Locality Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--color-primary-50)', border: '1px solid var(--color-primary-200)', borderRadius: 'var(--radius-lg)', padding: '2px 8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ward:</span>
                <select
                  value={user?.locality_id || 'kothrud'}
                  onChange={e => {
                    const newLocality = e.target.value;
                    if (user) {
                      user.locality_id = newLocality;
                    }
                    localStorage.setItem('civicpulse_user_locality', newLocality);
                    window.dispatchEvent(new CustomEvent('localityChanged', { detail: newLocality }));
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-primary-800)',
                    cursor: 'pointer',
                    outline: 'none',
                    padding: '2px 4px',
                  }}
                >
                  <option value="kothrud">📍 Kothrud (Ward 12)</option>
                  <option value="viman_nagar">📍 Viman Nagar (Ward 4)</option>
                  <option value="baner">📍 Baner & Balewadi (Ward 9)</option>
                  <option value="hadapsar">📍 Hadapsar (Ward 21)</option>
                  <option value="shivajinagar">📍 Shivajinagar (Ward 14)</option>
                  <option value="aundh">📍 Aundh (Ward 8)</option>
                </select>
              </div>

              {/* Quick Role Switcher */}
              <select
                className="form-input btn-sm"
                value={role || 'citizen'}
                onChange={e => {
                  switchRole(e.target.value);
                  if (isStaff(e.target.value)) navigate('/control-panel');
                }}
                style={{ padding: '4px 8px', fontSize: '12px', height: 'auto', background: 'var(--bg-tertiary)' }}
              >
                <option value="citizen">👤 Citizen Role</option>
                <option value="moderator">🛡️ Sub-Admin (Verifier)</option>
                <option value="super_admin">🏛️ Admin (Officer)</option>
              </select>

              <button className="btn btn-ghost btn-sm" onClick={handleLogout} title="Sign out">
                <LogOut size={16} />
                <span className="hide-mobile">Sign Out</span>
              </button>
            </div>
          </div>
        </header>

        <main id="main-content" className="citizen-page-content">
          <Outlet />
        </main>

        {/* ── Mobile Bottom Nav ── */}
        <BottomNav />
      </div>
    </div>
  );
}
