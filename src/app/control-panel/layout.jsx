
'use client';
import ControlPanelLayout from '@/layouts/ControlPanelLayout';

export default function Layout({ children }) {
  return (
    <ControlPanelLayout>
      {children}
    </ControlPanelLayout>
  );
}
