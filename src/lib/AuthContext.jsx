'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, isDemoMode } from './supabase';
import { hasPermission, getDefaultPath, ROLES } from './permissions';

const AuthContext = createContext(null);

/** Set to false to re-enable real authentication */
export const AUTH_DISABLED = true;

const DEMO_USERS = {
  admin: {
    id: '00000000-0000-4000-a000-000000000001',
    email: 'admin@civicpulse.app',
    name: 'Commissioner Singh',
    role: 'super_admin',
    locality_id: null,
    assigned_locality_id: null,
    avatar_url: null,
    impact_score: 1200,
  },
  citizen_1: { id: '00000000-0000-4000-a000-000000000101', email: 'citizen1@civicpulse.app', name: 'Aarav Mehta', role: 'citizen', locality_id: 'kothrud', assigned_locality_id: null, avatar_url: null, impact_score: 450 },
  citizen_2: { id: '00000000-0000-4000-a000-000000000102', email: 'citizen2@civicpulse.app', name: 'Neha Sharma', role: 'citizen', locality_id: 'baner', assigned_locality_id: null, avatar_url: null, impact_score: 320 },
  citizen_3: { id: '00000000-0000-4000-a000-000000000103', email: 'citizen3@civicpulse.app', name: 'Rahul Desai', role: 'citizen', locality_id: 'viman_nagar', assigned_locality_id: null, avatar_url: null, impact_score: 150 },
  citizen_4: { id: '00000000-0000-4000-a000-000000000104', email: 'citizen4@civicpulse.app', name: 'Priya Patel', role: 'citizen', locality_id: 'kothrud', assigned_locality_id: null, avatar_url: null, impact_score: 50 },
  citizen_5: { id: '00000000-0000-4000-a000-000000000105', email: 'citizen5@civicpulse.app', name: 'Amit Kumar', role: 'citizen', locality_id: 'hadapsar', assigned_locality_id: null, avatar_url: null, impact_score: 800 },
  citizen_6: { id: '00000000-0000-4000-a000-000000000106', email: 'citizen6@civicpulse.app', name: 'Sneha Reddy', role: 'citizen', locality_id: 'baner', assigned_locality_id: null, avatar_url: null, impact_score: 210 },
  citizen_7: { id: '00000000-0000-4000-a000-000000000107', email: 'citizen7@civicpulse.app', name: 'Vikram Singh', role: 'citizen', locality_id: 'viman_nagar', assigned_locality_id: null, avatar_url: null, impact_score: 600 },
  citizen_8: { id: '00000000-0000-4000-a000-000000000108', email: 'citizen8@civicpulse.app', name: 'Ananya Joshi', role: 'citizen', locality_id: 'kothrud', assigned_locality_id: null, avatar_url: null, impact_score: 95 },
  citizen_9: { id: '00000000-0000-4000-a000-000000000109', email: 'citizen9@civicpulse.app', name: 'Rohan Gupta', role: 'citizen', locality_id: 'hadapsar', assigned_locality_id: null, avatar_url: null, impact_score: 410 },
  citizen_10: { id: '00000000-0000-4000-a000-000000000110', email: 'citizen10@civicpulse.app', name: 'Meera Iyer', role: 'citizen', locality_id: 'baner', assigned_locality_id: null, avatar_url: null, impact_score: 280 },
  citizen: { id: '00000000-0000-4000-a000-000000000100', email: 'citizen@civicpulse.app', name: 'Default Citizen', role: 'citizen', locality_id: 'kothrud', assigned_locality_id: null, avatar_url: null, impact_score: 450 },
  super_admin: { id: '00000000-0000-4000-a000-000000000002', email: 'legacy_admin@civicpulse.app', name: 'Legacy Admin', role: 'super_admin', locality_id: null, assigned_locality_id: null, avatar_url: null, impact_score: 0 },
};

/**
 * AuthProvider manages authentication state.
 *
 * In DEMO MODE / AUTH_DISABLED:
 *   - Uses open access with switchable roles
 *   - No real auth required
 *
 * In PRODUCTION MODE:
 *   - Uses Supabase auth
 *   - Role comes from the users table
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('citizen');
  const [assignedLocalityId, setAssignedLocalityId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state
  useEffect(() => {
    if (AUTH_DISABLED || isDemoMode) {
      const savedSession = typeof window !== 'undefined' ? localStorage.getItem('civicpulse_demo_session') : null;
      if (savedSession) {
        try {
          const session = JSON.parse(savedSession);
          const demoUser = DEMO_USERS[session.role] || DEMO_USERS.citizen;
          setUser(demoUser);
          setRole(demoUser.role);
          setAssignedLocalityId(demoUser.assigned_locality_id);
          setLoading(false);
          return;
        } catch {
          (typeof window !== 'undefined' && localStorage.removeItem('civicpulse_demo_session'));
        }
      }
      // Default to citizen
      setUser(DEMO_USERS.citizen);
      setRole('citizen');
      setAssignedLocalityId(null);
      setLoading(false);
      return;
    }

    // Production: Supabase auth
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadUserProfile(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        loadUserProfile(session.user.id);
      } else {
        setUser(null);
        setRole('citizen');
        setAssignedLocalityId(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function loadUserProfile(userId) {
    if (!supabase) return;
    try {
      const { data, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (fetchError || !data) {
        setRole('citizen');
        return;
      }

      setUser(data);
      setRole(data.role || 'citizen');
      setAssignedLocalityId(data.assigned_locality_id);
    } catch {
      setRole('citizen');
    }
  }

  // Sign in with email + password
  const signIn = useCallback(async (email, password) => {
    setError(null);

    if (AUTH_DISABLED || isDemoMode) {
      // In demo mode, determine role from email
      let demoRole = 'citizen';
      if (email.includes('admin')) demoRole = 'admin';
      else if (email.includes('citizen')) {
        const match = email.match(/citizen(\d+)/);
        if (match && parseInt(match[1]) >= 1 && parseInt(match[1]) <= 10) {
          demoRole = `citizen_${match[1]}`;
        }
      }

      const demoUser = DEMO_USERS[demoRole] || DEMO_USERS.citizen;
      (typeof window !== 'undefined' && localStorage.setItem('civicpulse_demo_session', JSON.stringify({ role: demoRole })));
      setUser(demoUser);
      setRole(demoUser.role);
      setAssignedLocalityId(demoUser.assigned_locality_id);
      return { user: demoUser, error: null };
    }

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) {
        setError(authError.message);
        return { user: null, error: authError.message };
      }
      return { user: data.user, error: null };
    } catch (err) {
      setError(err.message);
      return { user: null, error: err.message };
    }
  }, []);

  // Sign up
  const signUp = useCallback(async (email, password, name) => {
    setError(null);

    if (AUTH_DISABLED || isDemoMode) {
      const demoUser = { ...DEMO_USERS.citizen, name: name || 'New User', email };
      (typeof window !== 'undefined' && localStorage.setItem('civicpulse_demo_session', JSON.stringify({ role: 'citizen' })));
      setUser(demoUser);
      setRole('citizen');
      return { user: demoUser, error: null };
    }

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } },
      });
      if (authError) {
        setError(authError.message);
        return { user: null, error: authError.message };
      }
      return { user: data.user, error: null };
    } catch (err) {
      setError(err.message);
      return { user: null, error: err.message };
    }
  }, []);

  // Sign in with phone OTP
  const signInWithPhone = useCallback(async (phone) => {
    setError(null);
    if (!supabase) {
      setError('Phone auth requires Supabase credentials.');
      return { error: 'Phone auth requires Supabase credentials.' };
    }
    try {
      const { error: authError } = await supabase.auth.signInWithOtp({ phone });
      if (authError) {
        setError(authError.message);
        return { error: authError.message };
      }
      return { error: null };
    } catch (err) {
      setError(err.message);
      return { error: err.message };
    }
  }, []);

  // Verify phone OTP
  const verifyPhoneOTP = useCallback(async (phone, token) => {
    setError(null);
    if (!supabase) {
      setError('Phone auth requires Supabase credentials.');
      return { error: 'Phone auth requires Supabase credentials.' };
    }
    try {
      const { data, error: authError } = await supabase.auth.verifyOtp({
        phone, token, type: 'sms',
      });
      if (authError) {
        setError(authError.message);
        return { error: authError.message };
      }
      return { user: data.user, error: null };
    } catch (err) {
      setError(err.message);
      return { error: err.message };
    }
  }, []);

  // Sign out
  const signOut = useCallback(async () => {
    if (AUTH_DISABLED || isDemoMode) {
      (typeof window !== 'undefined' && localStorage.removeItem('civicpulse_demo_session'));
      setUser(DEMO_USERS.citizen);
      setRole('citizen');
      setAssignedLocalityId(null);
      return;
    }
    await supabase.auth.signOut();
    setUser(null);
    setRole('citizen');
    setAssignedLocalityId(null);
  }, []);

  // Switch role (demo mode only)
  const switchRole = useCallback((newRole) => {
    const validRoles = ['citizen', 'super_admin'];
    if (!validRoles.includes(newRole)) return;

    const demoUser = DEMO_USERS[newRole];
    setUser(demoUser);
    setRole(demoUser.role);
    setAssignedLocalityId(demoUser.assigned_locality_id);
    (typeof window !== 'undefined' && localStorage.setItem('civicpulse_demo_session', JSON.stringify({ role: newRole })));
  }, []);

  /**
   * Permission helper — check if current user can do an action
   */
  const can = useCallback((action) => {
    return hasPermission(role, action);
  }, [role]);

  const value = {
    user: user || (AUTH_DISABLED ? DEMO_USERS.citizen : null),
    role: role || 'citizen',
    assignedLocalityId,
    loading: AUTH_DISABLED ? false : loading,
    error,
    isAuthenticated: AUTH_DISABLED ? true : !!user,
    isDemoMode: AUTH_DISABLED || isDemoMode,
    authDisabled: AUTH_DISABLED,
    can,
    signUp,
    signIn,
    signInWithPhone,
    verifyPhoneOTP,
    signOut,
    switchRole,
    clearError: () => setError(null),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}

export default AuthContext;
