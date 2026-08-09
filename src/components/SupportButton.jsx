'use client';
import { useState, useCallback, useRef } from 'react';
import { Flame } from 'lucide-react';
import { triggerParticleBurst } from '../utils/animeEngine';

/**
 * SIGNATURE MOTIF: LocalPulse Validation Ripple Fill Button
 * Fills up visually with a glowing teal-to-emerald gradient wave as community supports approach auto-escalation threshold (50 votes).
 */
export default function SupportButton({
  count = 0,
  supported = false,
  disabled = false,
  ownPost = false,
  onToggle,
  size = 'default',
  threshold = 50,
}) {
  const [animating, setAnimating] = useState(false);
  const btnRef = useRef(null);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (disabled || ownPost) return;

    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);

    if (!supported && btnRef.current) {
      triggerParticleBurst(btnRef.current, 16);
    }

    onToggle?.();
  }, [disabled, ownPost, supported, onToggle]);

  const isSmall = size === 'small';
  const iconSize = isSmall ? 14 : 18;

  // LocalPulse validation fill percentage (0 - 100%)
  const fillPercent = Math.min(Math.round((count / threshold) * 100), 100);

  return (
    <button
      ref={btnRef}
      className={`support-btn ${supported ? 'supported' : ''} ${animating ? 'animating' : ''} ${disabled || ownPost ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      title={ownPost ? "You cannot validate your own report" : supported ? 'Remove validation' : 'I face this too!'}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '6px' : '8px',
        padding: isSmall ? '6px 12px' : '8px 16px',
        border: supported ? '1px solid #10B981' : '1px solid #CBD5E1',
        borderRadius: '20px',
        fontSize: isSmall ? '12px' : '13px',
        fontWeight: 700,
        cursor: disabled || ownPost ? 'default' : 'pointer',
        transition: 'all 0.25s ease',
        background: '#ffffff',
        color: supported ? '#005F73' : '#334155',
        transform: animating ? 'scale(1.12)' : 'scale(1)',
        opacity: disabled || ownPost ? 0.6 : 1,
        outline: 'none',
        overflow: 'hidden',
        boxShadow: supported ? '0 4px 14px rgba(16, 185, 129, 0.25)' : 'var(--shadow-sm)',
      }}
    >
      {/* Signature LocalPulse Ripple Fill Background Wave */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${fillPercent}%`,
          background: supported
            ? 'linear-gradient(90deg, rgba(16, 185, 129, 0.2), rgba(0, 95, 115, 0.25))'
            : 'linear-gradient(90deg, rgba(0, 95, 115, 0.1), rgba(2, 132, 199, 0.15))',
          transition: 'width 0.4s ease',
          pointerEvents: 'none',
        }}
      />

      <Flame
        size={iconSize}
        color={supported ? '#10B981' : '#F59E0B'}
        fill={supported ? '#10B981' : 'none'}
        style={{ position: 'relative', zIndex: 1 }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>
        {supported ? 'Facing This Too' : 'I Face This Too'}
      </span>
      <span style={{
        position: 'relative',
        zIndex: 1,
        background: supported ? '#10B981' : '#005F73',
        color: '#ffffff',
        fontSize: '11px',
        padding: '2px 7px',
        borderRadius: '10px',
        fontWeight: 800,
      }}>
        {count}
      </span>
    </button>
  );
}
