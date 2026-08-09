'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';

const CATEGORY_ICONS = {
  pothole: { icon: 'warning', bg: 'bg-error-container text-on-error-container' },
  lighting: { icon: 'lightbulb', bg: 'bg-secondary-container text-on-secondary-container' },
  sanitation: { icon: 'delete', bg: 'bg-tertiary-container text-on-tertiary-container' },
  water: { icon: 'water_drop', bg: 'bg-primary-container/30 text-primary' },
  road: { icon: 'road', bg: 'bg-error-container text-on-error-container' },
  other: { icon: 'report', bg: 'bg-surface-container text-on-surface-variant' },
};

export default function RealtimeToast({ issue, onClose }) {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Trigger entrance animation
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Auto-dismiss after 6 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // wait for exit animation
    }, 6000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isClient || !issue) return null;

  const catInfo = CATEGORY_ICONS[issue.category] || CATEGORY_ICONS.other;

  const toastContent = (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#DDE3EA] p-4 flex items-start gap-4 max-w-sm w-[350px]">
        
        {/* Icon */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${catInfo.bg}`}>
          <span className="material-symbols-outlined">{catInfo.icon}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <span className="font-label-md text-xs text-primary font-bold tracking-wider uppercase flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New Issue Reported
            </span>
            <button onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }} className="text-on-surface-variant hover:text-on-surface bg-transparent border-none cursor-pointer">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          
          <h4 className="font-headline-sm text-sm text-on-surface line-clamp-1 mb-1">{issue.title}</h4>
          <p className="font-body-sm text-xs text-on-surface-variant line-clamp-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            {issue.location_address || 'Location Details'}
          </p>
          
          <Link href={`/citizen/issue/${issue.id}`} className="inline-block mt-3 font-label-md text-xs text-primary hover:underline" onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}>
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );

  return createPortal(toastContent, document.body);
}
