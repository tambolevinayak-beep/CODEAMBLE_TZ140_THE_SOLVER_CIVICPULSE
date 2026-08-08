'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CommunityFeed() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('recent'); // trending, recent, resolved
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchProblems() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      try {
        let query = supabase
          .from('problems')
          .select(`
            *,
            users ( name )
          `);

        if (filter === 'resolved') {
          query = query.eq('status', 'resolved');
        } else if (filter === 'trending') {
          // just order by support count if we had it, but for now we'll order by created_at
          query = query.order('created_at', { ascending: false });
        } else {
          query = query.order('created_at', { ascending: false });
        }

        if (searchQuery) {
          query = query.ilike('title', `%${searchQuery}%`);
        }

        const { data, error } = await query;
        if (error) throw error;
        setProblems(data || []);
      } catch (err) {
        console.error('Error fetching problems:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProblems();
  }, [filter, searchQuery]);

  return (
    <div className="stitch-page-content w-full min-h-[calc(100vh-4rem-100px)] p-lg lg:p-xl max-w-container-max mx-auto flex flex-col gap-lg">
      
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md pb-md border-b border-outline-variant/30">
        <div className="flex items-center gap-sm bg-surface-container-low p-1 rounded-lg border border-outline-variant/50">
          <button 
            onClick={() => setFilter('trending')}
            className={`px-md py-sm rounded-md font-label-md text-label-md transition-all ${filter === 'trending' ? 'bg-white ambient-shadow-level-1 text-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}
          >
            Trending
          </button>
          <button 
            onClick={() => setFilter('recent')}
            className={`px-md py-sm rounded-md font-label-md text-label-md transition-all ${filter === 'recent' ? 'bg-white ambient-shadow-level-1 text-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}
          >
            Recent
          </button>
          <button 
            onClick={() => setFilter('resolved')}
            className={`px-md py-sm rounded-md font-label-md text-label-md transition-all ${filter === 'resolved' ? 'bg-white ambient-shadow-level-1 text-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}
          >
            Resolved
          </button>
        </div>
        <div className="flex items-center gap-sm">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm group-focus-within:text-primary transition-colors">search</span>
            <input 
              className="pl-10 pr-4 py-2 rounded-lg border border-[#DDE3EA] bg-white font-body-sm text-body-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all w-64" 
              placeholder="Search issues..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {loading ? (
        <div className="text-center p-xl">Loading community feed...</div>
      ) : (
        <>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
            {problems.map(problem => (
              <article 
                key={problem.id}
                onClick={() => router.push(`/citizen/issue/${problem.id}`)}
                className="bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA] p-md flex flex-col gap-md hover:ambient-shadow-level-2 hover:border-[#DDE3EA] transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {problem.status === 'escalated' && (
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-tertiary-container/30 to-transparent px-md py-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-tertiary-container">warning</span>
                    <span className="font-label-md text-label-md text-[10px] text-tertiary-container uppercase tracking-wider">Escalated</span>
                  </div>
                )}
                <div className={`flex items-start justify-between ${problem.status === 'escalated' ? 'mt-4' : ''}`}>
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">{problem.category === 'pothole' ? 'warning' : problem.category === 'streetlight' ? 'lightbulb' : 'info'}</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">{problem.category.replace('_', ' ')}</p>
                      <div className="flex items-center gap-1 text-outline font-body-sm text-body-sm text-xs">
                        <span>Reported by</span>
                        <span className="font-semibold text-on-surface-variant">{problem.users?.name || 'Citizen'}</span>
                        <span>• {new Date(problem.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-auto">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">{problem.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{problem.description || 'No description provided.'}</p>
                </div>
                <div className="w-full h-32 rounded-md overflow-hidden bg-surface-container mt-auto flex items-center justify-center">
                   <span className="material-symbols-outlined text-4xl text-outline opacity-50">image</span>
                </div>
                <div className="flex items-center justify-between pt-sm border-t border-outline-variant/30 mt-sm">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-xl font-label-md text-label-md ${problem.status === 'resolved' ? 'bg-primary-container/15 text-primary' : 'bg-secondary-container/15 text-secondary'}`}>
                    <span className="material-symbols-outlined text-[12px]">{problem.status === 'resolved' ? 'check_circle' : 'schedule'}</span>
                    {problem.status.replace('_', ' ')}
                  </span>
                  <div className="flex items-center gap-3 text-outline">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">favorite</span>
                      <span className="font-label-md text-label-md text-xs">{problem.support_count || 0}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">chat_bubble</span>
                      <span className="font-label-md text-label-md text-xs">0</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
          
          {problems.length === 0 && (
            <section className="flex flex-col items-center justify-center py-xl mt-lg text-center bg-white rounded-lg ambient-shadow-level-1 border border-[#DDE3EA]">
              <span className="material-symbols-outlined text-6xl text-surface-variant mb-4">check_circle</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">All caught up!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6">There are currently no active issues reported matching your filters.</p>
              <Link href="/citizen/report" className="bg-[#2E9CDB] text-white font-label-md text-label-md px-lg py-sm rounded-lg hover:brightness-90 transition-all shadow-sm active:translate-y-[1px]">
                  Report New Issue
              </Link>
            </section>
          )}
        </>
      )}
    </div>
  );
}
