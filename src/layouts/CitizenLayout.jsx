'use client';
import CitizenNavbar from '@/components/CitizenNavbar';
import LegalAidAssistant from '@/components/LegalAidAssistant';

export default function CitizenLayout({ children }) {
  return (
    <div className="citizen-layout prism-bg relative">
      <CitizenNavbar />
      
      {/* Main Content Area - Full width, no sidebars */}
      <div className="w-full min-h-screen pt-24">
        <main id="main-content" className="citizen-page-content h-full">
          {children}
        </main>
      </div>

      <LegalAidAssistant />
    </div>
  );
}
