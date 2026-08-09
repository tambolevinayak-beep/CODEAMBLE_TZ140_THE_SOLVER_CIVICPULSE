
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { isStaff } from '@/lib/permissions';

export default function RootPage() {
  const router = useRouter();
  const { isAuthenticated, role, loading, authDisabled } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (authDisabled || !isAuthenticated) {
      router.replace('/intro');
    } else if (isStaff(role)) {
      router.replace('/control-panel');
    } else {
      router.replace('/citizen');
    }
  }, [isAuthenticated, role, loading, authDisabled, router]);

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
}
