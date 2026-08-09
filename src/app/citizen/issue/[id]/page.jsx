'use client';
import React, { useEffect, useState, use } from 'react';
import { fetchIssueById, fetchComments, addComment, toggleSupport, hasUserSupported, updateIssueStatus, assignDepartment } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabase';
import { useRealtimeIssues } from '@/hooks/useRealtimeIssues';
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
  const [isSupported, setIsSupported] = useState(false);
  const [supportCount, setSupportCount] = useState(0);
  const [departments, setDepartments] = useState([
    { id: 'dept-1', name: 'Roads & Infrastructure' },
    { id: 'dept-2', name: 'Water & Sanitation' },
    { id: 'dept-3', name: 'Electricity & Power' }
  ]);

  useRealtimeIssues({
    onUpdate: (updatedIssue) => {
      if (updatedIssue.id === id) {
        setIssue(prev => ({ ...prev, ...updatedIssue }));
        setSupportCount(updatedIssue.support_count || 0);
      }
    }
  });

  useEffect(() => {
    async function loadData() {
      const { data: issueData, error: issueError } = await fetchIssueById(id);
      if (issueError || !issueData) {
        setLoading(false);
        return;
      }
      setIssue(issueData);
      setSupportCount(issueData.support_count || 0);

      const { data: commentsData } = await fetchComments(id);
      setComments(commentsData || []);

      if (user?.id) {
        const supported = await hasUserSupported(id, user.id);
        setIsSupported(supported);
      }
      
      setLoading(false);
    }
    loadData();
  }, [id, user]);

  const handleAddComment = async () => {
    if (!newComment.trim() || !user?.id) return;
    setSubmittingComment(true);
    try {
      await addComment(id, user.id, newComment.trim());
      setNewComment('');
      // Reload comments
      const { data: commentsData } = await fetchComments(id);
      setComments(commentsData || []);
    } catch (err) {
      console.error('Error adding comment:', err);
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleSupport = async () => {
    if (!user?.id) return;
    try {
      const success = await toggleSupport(id, user.id);
      if (success) {
        setIsSupported(!isSupported);
        setSupportCount(prev => isSupported ? prev - 1 : prev + 1);
      }
    } catch (err) {
      console.error('Error toggling support:', err);
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      await updateIssueStatus(id, newStatus);
      // Real-time hook will handle the UI update
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleAssignDept = async (deptId) => {
    if (!deptId) return;
    try {
      await assignDepartment(id, deptId);
      // Real-time hook will handle the UI update
    } catch (err) {
      console.error('Error assigning department:', err);
    }
  };

  const role = user?.role;

  if (loading) {
    return <div className="p-xl text-center">Loading issue details...</div>;
  }

  if (!issue) {
    return <div className="p-xl text-center">Issue not found.</div>;
  }

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-full mx-auto w-full">
      
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
                <span className="font-body-sm text-body-sm text-on-surface-variant">{supportCount} citizens support this</span>
              </div>
              <button 
                onClick={handleSupport}
                className={`pulse-btn transition-all font-label-md text-label-md px-lg py-sm rounded-lg flex items-center gap-xs shadow-sm ${isSupported ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary-container text-on-primary hover:bg-primary-container/90'} active:translate-y-[1px]`}
              >
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                {isSupported ? 'Supported' : 'Support This Issue'}
              </button>
            </div>
            
            {(role === 'moderator' || role === 'super_admin') && (
              <div className="flex items-center justify-end gap-sm border-t border-outline-variant/30 pt-md mt-md">
                 <button onClick={() => handleStatusUpdate('resolved')} className="bg-primary text-white font-label-md text-label-md px-4 py-2 rounded-lg shadow-sm hover:bg-primary/90">
                    Resolve
                 </button>
                 <button onClick={() => handleStatusUpdate('escalated')} className="bg-error text-white font-label-md text-label-md px-4 py-2 rounded-lg shadow-sm hover:bg-error/90">
                    Escalate
                 </button>
              </div>
            )}
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
          {(role === 'moderator' || role === 'super_admin') && (
            <div className="glass-card rounded-xl p-lg bg-surface-container-low border border-primary/20">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">assignment_ind</span>
                Department Assignment
              </h2>
              <p className="font-body-sm text-xs text-on-surface-variant mb-md">Assign this issue to a specific municipal department for resolution.</p>
              
              <div className="mb-md">
                {issue.assigned_department_id ? (
                  <div className="flex items-center gap-2 bg-primary-container/20 text-on-primary-container px-3 py-2 rounded-lg text-sm border border-primary/30">
                    <span className="material-symbols-outlined text-[16px]">domain_verification</span>
                    Assigned to: <span className="font-semibold">{departments.find(d => d.id === issue.assigned_department_id)?.name || 'Unknown Dept'}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-surface-container-highest text-on-surface-variant px-3 py-2 rounded-lg text-sm">
                    <span className="material-symbols-outlined text-[16px]">pending_actions</span>
                    Not yet assigned
                  </div>
                )}
              </div>

              <select 
                onChange={(e) => handleAssignDept(e.target.value)}
                value={issue.assigned_department_id || ""}
                className="w-full font-body-sm text-sm px-3 py-2 rounded-lg bg-white border border-outline-variant focus:outline-none focus:border-primary cursor-pointer text-on-surface-variant"
              >
                <option value="" disabled>Assign to Department...</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
          )}

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
