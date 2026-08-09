'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Bell, Check, CheckCheck, MapPin, Clock } from 'lucide-react';
import { fetchNotifications, markNotificationRead, markAllNotificationsRead as markAllRead } from '@/lib/api';
import { useAuth } from '@/lib/AuthContext';

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.floor(hours / 24)}d`;
}

const TYPE_ICONS = {
  status_change: '🔄',
  support_milestone: '🎯',
  comment: '💬',
  escalated: '📤',
  verified: '✅',
  resolved: '🎉',
  flagged: '🚩',
};

/**
 * Notifications page — status changes, comments, verification updates.
 */
export default function Notifications() {
  const { user } = useAuth();
  const navigate = useRouter();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, [user?.id]);

  async function loadNotifications() {
    setLoading(true);
    const userId = user?.id || 'user-citizen-demo';
    const { data } = await fetchNotifications(userId);
    setNotifications(data || []);
    setLoading(false);
  }

  async function handleMarkAllRead() {
    await markAllRead(user?.id || 'user-citizen-demo');
    await loadNotifications();
  }

  async function handleClick(notif) {
    if (!notif.read) {
      await markNotificationRead(notif.id);
      // Optimistically update
      setNotifications(prev =>
        prev.map(n => n.id === notif.id ? { ...n, read: true } : n)
      );
    }
    if (notif.related_problem_id) {
      navigate.push(`/citizen/issue/${notif.related_problem_id}`);
    }
  }

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <h2 className="notifications-title">
          <Bell size={22} /> Notifications
          {unreadCount > 0 && (
            <span className="notifications-unread-badge">{unreadCount}</span>
          )}
        </h2>
        {unreadCount > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={handleMarkAllRead}>
            <CheckCheck size={14} /> Mark all read
          </button>
        )}
      </div>

      <div className="notifications-list">
        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Loading notifications...</div>
        ) : notifications.length > 0 ? (
          notifications.map(notif => (
            <div
              key={notif.id}
              className={`notification-item ${notif.read ? '' : 'unread'}`}
              onClick={() => handleClick(notif)}
            >
              <div className="notification-icon">
                {TYPE_ICONS[notif.type] || '📢'}
              </div>
              <div className="notification-content">
                <p className="notification-message">{notif.message}</p>
                <span className="notification-time">
                  <Clock size={10} /> {timeAgo(notif.created_at)}
                </span>
              </div>
              {!notif.read && <div className="notification-dot" />}
            </div>
          ))
        ) : (
          <div className="notifications-empty">
            <div className="notifications-empty-icon">🔔</div>
            <h3>All caught up!</h3>
            <p>You'll see updates here when problems you reported or supported change status.</p>
          </div>
        )}
      </div>
    </div>
  );
}
