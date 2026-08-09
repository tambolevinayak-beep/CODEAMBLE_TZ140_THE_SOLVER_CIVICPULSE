// ============================================
// CivicPulse — RBAC Permissions System
// Single source of truth for all role-based access control
// ============================================

/**
 * Role definitions with display metadata
 */
export const ROLES = {
  citizen: {
    key: 'citizen',
    label: 'Citizen',
    icon: '👤',
    description: 'Report problems, support issues, track resolution',
  },
  super_admin: {
    key: 'super_admin',
    label: 'Super Admin',
    icon: '⚙️',
    description: 'Platform-wide management and configuration',
  },
};

/**
 * Permission actions mapped to which roles can perform them.
 * This is the SINGLE place permissions are defined.
 */
export const PERMISSIONS = {
  // Citizen actions
  'problem:create':         ['citizen', 'super_admin'],
  'problem:support':        ['citizen', 'super_admin'],
  'problem:comment':        ['citizen', 'super_admin'],
  'problem:flag':           ['citizen', 'super_admin'],
  'problem:view':           ['citizen', 'super_admin'],

  // Moderator/Admin actions
  'problem:verify':         ['super_admin'],
  'problem:reject':         ['super_admin'],
  'problem:merge_duplicate': ['super_admin'],
  'problem:escalate':       ['super_admin'],
  'problem:update_status':  ['super_admin'],

  // Control panel access
  'cp:access':              ['super_admin'],
  'cp:view_queue':          ['super_admin'],
  'cp:view_analytics':      ['super_admin'],
  'cp:view_map':            ['super_admin'],

  // Super admin only
  'cp:manage_departments':  ['super_admin'],
  'cp:manage_officers':     ['super_admin'],
  'cp:manage_settings':     ['super_admin'],
  'cp:view_all_localities': ['super_admin'],
  'cp:view_audit_log':      ['super_admin'],
  'user:ban':               ['super_admin'],
  'user:assign_role':       ['super_admin'],
};

/**
 * Check if a role has a specific permission
 */
export function hasPermission(role, action) {
  const allowedRoles = PERMISSIONS[action];
  if (!allowedRoles) return false;
  return allowedRoles.includes(role);
}

/**
 * Get all permissions for a role
 */
export function getPermissionsForRole(role) {
  const perms = {};
  for (const [action, roles] of Object.entries(PERMISSIONS)) {
    perms[action] = roles.includes(role);
  }
  return perms;
}

/**
 * Route access control — which roles can access which route prefixes
 */
const ROUTE_ACCESS = {
  '/':                  ['citizen', 'super_admin'],
  '/map':               ['citizen', 'super_admin'],
  '/post':              ['citizen', 'super_admin'],
  '/problem':           ['citizen', 'super_admin'],
  '/notifications':     ['citizen', 'super_admin'],
  '/profile':           ['citizen', 'super_admin'],
  '/onboarding':        ['citizen', 'super_admin'],
  '/control-panel':     ['super_admin'],
};

/**
 * Check if a role can access a given route
 */
export function canAccessRoute(role, path) {
  // Find the most specific matching route
  const sortedRoutes = Object.keys(ROUTE_ACCESS).sort((a, b) => b.length - a.length);
  for (const route of sortedRoutes) {
    if (path === route || path.startsWith(route + '/') || path.startsWith(route)) {
      return ROUTE_ACCESS[route]?.includes(role) ?? false;
    }
  }
  return true; // default allow for unmatched routes
}

/**
 * Navigation items for the Control Panel sidebar.
 * Items are conditionally rendered based on permissions.
 */
export const CP_NAV_ITEMS = [
  {
    path: '/control-panel',
    label: 'Overview',
    icon: 'LayoutDashboard',
    permission: 'cp:access',
    end: true,
  },
  {
    path: '/control-panel/queue',
    label: 'Case Queue',
    icon: 'ClipboardList',
    permission: 'cp:view_queue',
  },
  {
    path: '/control-panel/map',
    label: 'Map Heatmap',
    icon: 'Map',
    permission: 'cp:view_map',
  },
  {
    path: '/control-panel/departments',
    label: 'Departments',
    icon: 'Building2',
    permission: 'cp:manage_departments',
  },
  {
    path: '/control-panel/officers',
    label: 'Officers',
    icon: 'Users',
    permission: 'cp:manage_officers',
  },
  {
    path: '/control-panel/settings',
    label: 'Settings',
    icon: 'Settings',
    permission: 'cp:manage_settings',
  },
];

/**
 * Get visible nav items for a role
 */
export function getVisibleNavItems(role) {
  return CP_NAV_ITEMS.filter(item => hasPermission(role, item.permission));
}

export function getScopeFilter(role, assignedLocalityId) {
  if (role === 'super_admin') return null; // no filter — sees all
  return null; // citizens see all in feed (ranked by proximity)
}

export function isStaff(role) {
  return role === 'super_admin';
}

export function getDefaultPath(role) {
  if (role === 'super_admin') return '/control-panel';
  return '/';
}
