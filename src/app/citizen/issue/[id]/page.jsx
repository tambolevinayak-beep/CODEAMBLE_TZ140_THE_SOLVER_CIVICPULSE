'use client';
import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function IssueDetailView({ params }) {
  // Use React.use() to unwrap params in Next.js 15+
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  
  const { user } = useAuth();
  const [issue, setIssue] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      try {
        // Fetch Issue
        const { data: issueData, error: issueError } = await supabase
          .from('problems')
          .select(`
            *,
            users ( name, avatar_url )
          `)
          .eq('id', id)
          .single();

        if (issueError) throw issueError;
        setIssue(issueData);

        // Fetch Comments
        const { data: commentsData, error: commentsError } = await supabase
          .from('comments')
          .select(`
            *,
            users ( name, avatar_url, role )
          `)
          .eq('problem_id', id)
          .order('created_at', { ascending: true });

        if (commentsError) throw commentsError;
        setComments(commentsData || []);

      } catch (err) {
        console.error('Error fetching issue:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleAddComment = async () => {
    if (!newComment.trim() || !supabase) return;
    setSubmittingComment(true);
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([{
          problem_id: id,
          user_id: user?.id,
          text: newComment
        }])
        .select(`
          *,
          users ( name, avatar_url, role )
        `)
        .single();
      
      if (error) throw error;
      setComments([...comments, data]);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return <div className="p-xl text-center">Loading issue details...</div>;
  }

  if (!issue) {
    return <div className="p-xl text-center">Issue not found.</div>;
  }

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      
      <div className="flex items-center gap-md mb-lg">
        <Link href="/citizen" className="text-on-surface-variant hover:bg-surface-container-low transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <span className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">Back to Dashboard</span>
      </div>

      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-lg glass-card p-xs">
        <div className="w-full h-full bg-cover bg-center rounded-lg bg-surface-container-high flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-outline opacity-50">image</span>
        </div>
        <div className={`absolute top-md right-md bg-white/90 backdrop-blur-sm rounded-xl px-sm py-xs flex items-center gap-xs shadow-sm border border-outline-variant/30`}>
          <span className={`material-symbols-outlined text-[16px] ${issue.status === 'resolved' ? 'text-primary' : 'text-tertiary-container'}`}>
            {issue.status === 'resolved' ? 'check_circle' : 'warning'}
          </span>
          <span className={`font-label-md text-label-md uppercase ${issue.status === 'resolved' ? 'text-primary' : 'text-tertiary-container'}`}>
            {issue.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        <div className="lg:col-span-8 flex flex-col gap-lg">
          <div className="glass-card rounded-xl p-lg">
            <div className="flex items-start gap-md mb-md">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined">maps_ar</span>
              </div>
              <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">{issue.title}</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {issue.location_address || 'Location Details'}
                </p>
                <p className="font-body-sm text-body-sm text-outline mt-1">
                  Reported by {issue.users?.name || 'Citizen'} on {new Date(issue.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="ai-banner rounded-lg p-md mb-lg flex items-start gap-sm">
              <span className="material-symbols-outlined text-primary-container">auto_awesome</span>
              <div>
                <p className="font-label-md text-label-md text-primary mb-xs">AI Assessment</p>
                <p className="font-body-sm text-body-sm text-on-surface">Category: {issue.category.replace('_', ' ')}</p>
              </div>
            </div>
            
            <div className="prose font-body-md text-body-md text-on-surface-variant mb-lg">
              <p>{issue.description || 'No additional description provided.'}</p>
            </div>

            <div className="flex items-center justify-between border-t border-outline-variant/30 pt-md mt-md">
              <div className="flex items-center gap-sm">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{issue.support_count || 0} citizens support this</span>
              </div>
              <button className="pulse-btn bg-primary-container text-on-primary hover:bg-primary-container/90 active:translate-y-[1px] transition-all font-label-md text-label-md px-lg py-sm rounded-lg flex items-center gap-xs shadow-sm">
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                Support This Issue
              </button>
            </div>
          </div>

          <div className="glass-card rounded-xl p-lg">
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Community Comments ({comments.length})</h2>
            
            <div className="flex flex-col gap-md mb-lg">
              {comments.length === 0 ? (
                <p className="text-on-surface-variant text-sm">No comments yet. Be the first to add one!</p>
              ) : (
                comments.map(comment => (
                  <div key={comment.id} className="flex gap-md">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant">person</span>
                    </div>
                    <div className={`rounded-lg p-sm flex-grow ${comment.users?.role === 'moderator' ? 'bg-tertiary-container/10 border border-tertiary-container/20' : 'bg-surface-container-low'}`}>
                      <div className="flex justify-between items-start mb-xs">
                        <span className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
                          {comment.users?.name || 'Unknown'}
                          {comment.users?.role === 'moderator' && <span className="material-symbols-outlined text-primary text-[14px]">verified</span>}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                          {new Date(comment.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{comment.text}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-md mt-md">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div className="flex-grow relative">
                <input 
                  className="w-full bg-white border border-outline-variant rounded-lg py-sm px-md font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                  placeholder="Add a comment..." 
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                  disabled={submittingComment}
                />
                <button 
                  onClick={handleAddComment}
                  disabled={submittingComment}
                  className="absolute right-sm top-1/2 -translate-y-1/2 text-primary hover:text-primary-fixed-variant p-xs rounded-full"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-lg">
          <div className="glass-card rounded-xl p-lg">
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-lg">Status Timeline</h2>
            <div className="relative pl-sm">
              <div className="absolute left-[15px] top-2 bottom-6 w-[2px] bg-outline-variant/50"></div>

              <div className="relative flex gap-md mb-lg">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center z-10 flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-on-surface-variant">check</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface">Reported</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{new Date(issue.created_at).toLocaleString()}</p>
                </div>
              </div>

              {issue.status !== 'reported' && (
                <div className="relative flex gap-md mb-lg">
                  <div className="w-6 h-6 rounded-full bg-tertiary-container border-2 border-white flex items-center justify-center z-10 flex-shrink-0 shadow-[0_0_0_4px_rgba(202,134,13,0.2)]">
                    <span className="material-symbols-outlined text-[14px] text-on-tertiary">priority_high</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-tertiary-container font-bold">In Progress / Escalated</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Status Update</p>
                  </div>
                </div>
              )}
              
              <div className="relative flex gap-md">
                <div className={`w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center z-10 flex-shrink-0 ${issue.status === 'resolved' ? 'bg-primary border-primary text-white' : 'bg-surface'}`}>
                  {issue.status === 'resolved' && <span className="material-symbols-outlined text-[14px]">check</span>}
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface-variant">Resolved</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{issue.status === 'resolved' ? 'Completed' : 'Pending'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
