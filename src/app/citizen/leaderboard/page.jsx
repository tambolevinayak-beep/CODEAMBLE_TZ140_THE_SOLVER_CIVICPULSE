'use client';
import { useState, useEffect } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { fetchLeaderboard } from '@/lib/api';
import { useAuth } from '@/lib/AuthContext';

export default function Leaderboard() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const { data, error: fetchError } = await fetchLeaderboard(20);
        if (fetchError) throw fetchError;
        setUsers(data);
      } catch (err) {
        setError(err?.message || 'Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const getRankIcon = (index) => {
    if (index === 0) return <Trophy size={20} className="text-[#FFD700]" />;
    if (index === 1) return <Medal size={20} className="text-[#C0C0C0]" />;
    if (index === 2) return <Medal size={20} className="text-[#CD7F32]" />;
    return <span className="font-label-md text-label-md text-on-surface-variant">{index + 1}</span>;
  };

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-full mx-auto w-full">
      <div className="flex items-center gap-sm mb-xl">
        <Trophy size={28} className="text-primary" />
        <h2 className="font-display-lg text-display-lg text-on-surface">Community Leaderboard</h2>
      </div>

      {loading && (
        <div className="space-y-md">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="bg-white rounded-lg border border-[#DDE3EA] p-md flex items-center gap-md animate-pulse">
              <div className="w-10 h-10 rounded-full bg-surface-container"></div>
              <div className="flex-1"><div className="h-4 bg-surface-container rounded w-1/3"></div></div>
              <div className="h-4 bg-surface-container rounded w-16"></div>
            </div>
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="bg-white rounded-lg border border-[#DDE3EA] p-lg text-center">
          <span className="material-symbols-outlined text-4xl text-error mb-2">error</span>
          <p className="text-on-surface-variant">{error}</p>
        </div>
      )}

      {!loading && !error && users.length === 0 && (
        <div className="bg-white rounded-lg border border-[#DDE3EA] p-lg text-center">
          <Star size={48} className="mx-auto text-surface-variant mb-4" />
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">No data yet</h3>
          <p className="text-on-surface-variant">Start reporting issues to earn impact points!</p>
        </div>
      )}

      {!loading && !error && users.length > 0 && (
        <div className="space-y-sm">
          {users.map((u, index) => {
            const isCurrentUser = u.id === user?.id;
            return (
              <div
                key={u.id}
                className={`bg-white rounded-lg ambient-shadow-level-1 border p-md flex items-center gap-md transition-all hover:ambient-shadow-level-2 ${
                  isCurrentUser ? 'border-primary bg-primary-container/5' : 'border-[#DDE3EA]'
                } ${index < 3 ? 'py-lg' : ''}`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  {getRankIcon(index)}
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary font-bold">
                  {(u.name || u.email || '?')[0].toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className={`font-headline-sm text-headline-sm ${isCurrentUser ? 'text-primary' : 'text-on-surface'}`}>
                    {u.name || u.email?.split('@')[0] || 'Anonymous'}
                    {isCurrentUser && <span className="ml-2 text-xs text-primary font-label-md">(You)</span>}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant capitalize">{u.locality_id || 'Community'}</p>
                </div>
                <div className="text-right">
                  <span className={`font-metric-lg text-metric-lg ${index < 3 ? 'text-primary' : 'text-on-surface'}`}>
                    {u.impact_score || 0}
                  </span>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase text-xs">pts</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
