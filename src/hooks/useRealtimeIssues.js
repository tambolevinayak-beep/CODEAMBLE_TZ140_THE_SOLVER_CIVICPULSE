'use client';
import { useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { AUTH_DISABLED } from '@/lib/AuthContext';
import { IssueEventBus } from '@/lib/issueEventBus';

/**
 * Hook that subscribes to real-time issue changes.
 *
 * In production mode — uses Supabase Realtime (postgres_changes).
 * In demo/auth-disabled mode — uses the local IssueEventBus so
 * mocked writes still trigger UI updates.
 *
 * @param {Object} options
 * @param {(issue: Object) => void} [options.onInsert] - Called when a new issue is created
 * @param {(issue: Object) => void} [options.onUpdate] - Called when an issue is updated
 * @param {(issue: Object) => void} [options.onDelete] - Called when an issue is deleted
 * @param {string} [options.filterUserId] - Only receive events for this user_id
 */
export function useRealtimeIssues({ onInsert, onUpdate, onDelete, filterUserId } = {}) {
  // Keep stable references to callbacks
  const callbacksRef = useRef({ onInsert, onUpdate, onDelete });
  callbacksRef.current = { onInsert, onUpdate, onDelete };

  useEffect(() => {
    const listenerIds = [];

    if (AUTH_DISABLED) {
      // Demo mode: subscribe via local event bus
      if (onInsert) {
        const id = IssueEventBus.on('INSERT', (payload) => {
          if (filterUserId && payload.user_id !== filterUserId) return;
          callbacksRef.current.onInsert?.(payload);
        });
        listenerIds.push({ type: 'INSERT', id });
      }

      if (onUpdate) {
        const id = IssueEventBus.on('UPDATE', (payload) => {
          if (filterUserId && payload.user_id !== filterUserId) return;
          callbacksRef.current.onUpdate?.(payload);
        });
        listenerIds.push({ type: 'UPDATE', id });
      }

      if (onDelete) {
        const id = IssueEventBus.on('DELETE', (payload) => {
          if (filterUserId && payload.user_id !== filterUserId) return;
          callbacksRef.current.onDelete?.(payload);
        });
        listenerIds.push({ type: 'DELETE', id });
      }

      return () => {
        listenerIds.forEach(({ type, id }) => IssueEventBus.off(type, id));
      };
    }

    // Production mode: Supabase Realtime
    if (!supabase) return;

    const channelName = filterUserId
      ? `problems-user-${filterUserId}`
      : 'problems-all';

    const filterConfig = filterUserId
      ? { event: '*', schema: 'public', table: 'problems', filter: `user_id=eq.${filterUserId}` }
      : { event: '*', schema: 'public', table: 'problems' };

    const channel = supabase
      .channel(channelName)
      .on('postgres_changes', filterConfig, (payload) => {
        const { eventType, new: newRecord, old: oldRecord } = payload;

        switch (eventType) {
          case 'INSERT':
            callbacksRef.current.onInsert?.(newRecord);
            break;
          case 'UPDATE':
            callbacksRef.current.onUpdate?.(newRecord);
            break;
          case 'DELETE':
            callbacksRef.current.onDelete?.(oldRecord);
            break;
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [filterUserId]); // Only re-subscribe if the filter changes
}
