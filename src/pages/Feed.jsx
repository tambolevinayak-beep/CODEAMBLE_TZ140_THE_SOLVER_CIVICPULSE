import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Filter, Sparkles, Search, TrendingUp, AlertTriangle, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProblemCard from '../components/ProblemCard';
import { SkeletonList } from '../components/SkeletonCard';
import { getFeedProblems, getAllLocalities, events } from '../data/store';
import { useAuth } from '../lib/AuthContext';
import { CATEGORIES } from '../data/mockData';

/**
 * Feed — High Performance, Instagram-style scrollable card feed.
 * Features:
 * - O(1) Indexed memoized filters & zero latency locality re-ranking.
 * - Stitch Aesthetic Glassmorphism headers & animated tab switchers.
 * - Dynamic search & instant category pill filters.
 */
export default function Feed() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentLocality, setCurrentLocality] = useState(() => {
    return localStorage.getItem('civicpulse_user_locality') || user?.locality_id || 'kothrud';
  });

  const [rawProblems, setRawProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'urgent', 'resolved'
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const localities = useMemo(() => getAllLocalities(), []);
  const localityData = useMemo(() => localities.find(l => l.id === currentLocality), [localities, currentLocality]);
  const localityName = localityData?.name || 'Pune';

  // O(1) Load feed with score caching
  const loadFeed = useCallback(() => {
    const feed = getFeedProblems(
      currentLocality,
      localityData?.center?.lat,
      localityData?.center?.lng
    );
    setRawProblems(feed);
    setLoading(false);
  }, [currentLocality, localityData]);

  useEffect(() => {
    loadFeed();
    const unsub1 = events.on('problemCreated', loadFeed);
    const unsub2 = events.on('problemUpdated', loadFeed);
    const unsub3 = events.on('storeReset', loadFeed);

    const handleLocalityChange = (e) => {
      setCurrentLocality(e.detail);
    };
    window.addEventListener('localityChanged', handleLocalityChange);

    return () => {
      unsub1(); unsub2(); unsub3();
      window.removeEventListener('localityChanged', handleLocalityChange);
    };
  }, [loadFeed]);

  // Memoized O(N) single-pass filtering & search computation
  const filteredProblems = useMemo(() => {
    let result = rawProblems;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    // Quick tab filters
    if (activeTab === 'urgent') {
      result = result.filter(p => p.support_count >= 3 || p.status === 'escalated');
    } else if (activeTab === 'resolved') {
      result = result.filter(p => p.status === 'resolved' || p.status === 'verified');
    }

    // Dropdown/pill category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Status filter
    if (statusFilter !== 'all') {
      result = result.filter(p => p.status === statusFilter);
    }

    return result;
  }, [rawProblems, searchQuery, activeTab, categoryFilter, statusFilter]);

  return (
    <div className="feed-page">
      {/* ── Stitch-inspired Glassmorphic Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="feed-locality-header glass"
        style={{
          borderRadius: 'var(--radius-2xl)',
          padding: '16px 20px',
          marginBottom: '20px',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="feed-locality-info">
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: 'var(--shadow-glow-primary)',
          }}>
            <MapPin size={20} />
          </div>
          <div>
            <div className="feed-locality-name" style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>
              {localityName} Ward Feed
            </div>
            <div className="feed-locality-sub" style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
              Real-time civic updates & community reports
            </div>
          </div>
        </div>

        <div className="feed-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            className={`feed-filter-btn ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(f => !f)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: 'var(--radius-lg)',
              background: showFilters ? 'var(--color-primary-600)' : 'var(--bg-tertiary)',
              color: showFilters ? 'white' : 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '13px',
              transition: 'all 0.2s ease',
            }}
          >
            <SlidersHorizontal size={15} />
            <span className="hide-mobile">Filters</span>
          </button>
          <span className="feed-count-badge" style={{
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-primary-50)',
            color: 'var(--color-primary-700)',
            fontWeight: 700,
            fontSize: '12px',
            border: '1px solid var(--color-primary-200)',
          }}>
            {filteredProblems.length} issues
          </span>
        </div>
      </motion.div>

      {/* ── Fast Search & Dynamic Tabs ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Quick Search Bar */}
          <div style={{
            flex: 1,
            minWidth: '220px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-neutral-0)',
            border: '1px solid var(--color-neutral-200)',
            borderRadius: 'var(--radius-xl)',
            padding: '8px 16px',
            boxShadow: 'var(--shadow-xs)',
          }}>
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search potholes, streetlights, garbage..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: '14px',
                color: 'var(--text-primary)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Dynamic Feed Tabs */}
          <div style={{ display: 'flex', gap: '6px', background: 'var(--color-neutral-100)', padding: '4px', borderRadius: 'var(--radius-xl)' }}>
            {[
              { id: 'all', label: 'All Issues', icon: TrendingUp },
              { id: 'urgent', label: 'High Urgency', icon: AlertTriangle },
              { id: 'resolved', label: 'Resolved', icon: CheckCircle2 },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    background: isActive ? 'var(--color-primary-600)' : 'transparent',
                    color: isActive ? 'white' : 'var(--text-secondary)',
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Quick Chips */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
          <button
            onClick={() => setCategoryFilter('all')}
            className={`filter-chip ${categoryFilter === 'all' ? 'active' : ''}`}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: categoryFilter === 'all' ? '1px solid var(--color-primary-500)' : '1px solid var(--color-neutral-200)',
              background: categoryFilter === 'all' ? 'var(--color-primary-50)' : 'var(--color-neutral-0)',
              color: categoryFilter === 'all' ? 'var(--color-primary-700)' : 'var(--text-secondary)',
            }}
          >
            🌟 All Categories
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id === categoryFilter ? 'all' : cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                border: categoryFilter === cat.id ? '1px solid var(--color-primary-500)' : '1px solid var(--color-neutral-200)',
                background: categoryFilter === cat.id ? 'var(--color-primary-50)' : 'var(--color-neutral-0)',
                color: categoryFilter === cat.id ? 'var(--color-primary-700)' : 'var(--text-secondary)',
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Expandable Filter Drawer ── */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="feed-filters glass"
            style={{
              borderRadius: 'var(--radius-xl)',
              padding: '16px',
              marginBottom: '20px',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="feed-filter-group">
              <label className="feed-filter-label" style={{ fontWeight: 700, fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Filter by Status</label>
              <div className="feed-filter-chips" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                {['all', 'reported', 'verified', 'escalated', 'in_progress', 'resolved'].map(s => (
                  <button
                    key={s}
                    className={`filter-chip ${statusFilter === s ? 'active' : ''}`}
                    onClick={() => setStatusFilter(s)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: statusFilter === s ? '1px solid var(--color-primary-500)' : '1px solid var(--color-neutral-200)',
                      background: statusFilter === s ? 'var(--color-primary-600)' : 'var(--color-neutral-0)',
                      color: statusFilter === s ? 'white' : 'var(--text-secondary)',
                    }}
                  >
                    {s === 'all' ? 'All Statuses' : s.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Feed Content List ── */}
      <div className="feed-content">
        {loading ? (
          <SkeletonList count={3} type="feed" />
        ) : filteredProblems.length > 0 ? (
          filteredProblems.map(problem => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              onUpdate={loadFeed}
            />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="feed-empty-state card-farm-glass text-center"
            style={{ padding: '40px 20px', borderRadius: 'var(--radius-2xl)' }}
          >
            <div className="feed-empty-illustration" style={{ fontSize: '48px', marginBottom: '12px' }}>🏘️</div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)' }}>No civic issues match your filter</h3>
            <p style={{ color: 'var(--text-tertiary)', marginTop: '4px' }}>Try switching wards or clearing category filters to view more local reports.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
              <button
                className="btn-farm btn-farm-primary"
                onClick={() => { setSearchQuery(''); setCategoryFilter('all'); setStatusFilter('all'); setActiveTab('all'); }}
              >
                Reset Filters
              </button>
              <button
                className="btn-farm btn-farm-secondary"
                onClick={() => navigate('/citizen/report')}
              >
                <Sparkles size={16} /> Report New Issue
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
