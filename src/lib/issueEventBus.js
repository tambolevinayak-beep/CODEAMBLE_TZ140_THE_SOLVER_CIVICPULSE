/**
 * Local event bus for real-time issue events in demo/auth-disabled mode.
 * When AUTH_DISABLED is true, Supabase writes are mocked, so Realtime
 * subscriptions won't fire. This bus fills that gap by emitting events
 * from the API layer that the useRealtimeIssues hook can listen to.
 */

const listeners = new Map();
let listenerIdCounter = 0;

// Setup BroadcastChannel for cross-tab sync in demo mode
let channel = null;
if (typeof window !== 'undefined' && window.BroadcastChannel) {
  channel = new BroadcastChannel('civicpulse_events');
  channel.onmessage = (event) => {
    const { eventType, payload } = event.data;
    // Trigger local listeners for the cross-tab event
    listeners.get(eventType)?.forEach((callback) => {
      try {
        callback(payload);
      } catch (err) {
        console.error('[IssueEventBus] Listener error on cross-tab msg:', err);
      }
    });
  };
}

export const IssueEventBus = {
  /**
   * Subscribe to issue events.
   * @param {'INSERT'|'UPDATE'|'DELETE'} eventType
   * @param {Function} callback - Receives the issue payload
   * @returns {number} Listener ID for unsubscribing
   */
  on(eventType, callback) {
    const id = ++listenerIdCounter;
    if (!listeners.has(eventType)) {
      listeners.set(eventType, new Map());
    }
    listeners.get(eventType).set(id, callback);
    return id;
  },

  /**
   * Unsubscribe a listener.
   * @param {'INSERT'|'UPDATE'|'DELETE'} eventType
   * @param {number} listenerId
   */
  off(eventType, listenerId) {
    listeners.get(eventType)?.delete(listenerId);
  },

  emit(eventType, payload, fromChannel = false) {
    listeners.get(eventType)?.forEach((callback) => {
      try {
        callback(payload);
      } catch (err) {
        console.error('[IssueEventBus] Listener error:', err);
      }
    });

    // Broadcast to other tabs
    if (!fromChannel && channel) {
      channel.postMessage({ eventType, payload });
    }
  },
};
