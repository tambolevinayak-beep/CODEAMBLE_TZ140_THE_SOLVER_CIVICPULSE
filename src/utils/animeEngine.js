import { animate } from 'animejs';

/**
 * Reusable Anime.js v4 Animation Engine for CivicPulse
 * Provides 3D tilt effects, particle bursts, and counter micro-interactions.
 */

// 1. Particle Burst Effect on Support / Upvote
export function triggerParticleBurst(element, count = 12) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const container = document.body;

  const particles = [];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'anime-particle';
    p.style.position = 'fixed';
    p.style.left = `${rect.left + rect.width / 2}px`;
    p.style.top = `${rect.top + rect.height / 2}px`;
    p.style.width = '8px';
    p.style.height = '8px';
    p.style.borderRadius = '50%';
    p.style.backgroundColor = i % 2 === 0 ? '#D4AF37' : '#138808';
    p.style.pointerEvents = 'none';
    p.style.zIndex = '9999';
    container.appendChild(p);
    particles.push(p);
  }

  try {
    animate(particles, {
      translateX: () => (Math.random() - 0.5) * 120,
      translateY: () => (Math.random() - 0.5) * 120,
      scale: [1, 0],
      opacity: [1, 0],
      duration: 700,
      onComplete: () => {
        particles.forEach(p => p.remove());
      }
    });
  } catch (e) {
    // Graceful cleanup
    setTimeout(() => particles.forEach(p => p.remove()), 700);
  }
}

// 2. 3D Card Tilt Interaction
export function apply3DTilt(element) {
  if (!element) return;
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;

    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    element.style.transition = 'transform 0.15s ease-out';
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    element.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
}

// 3. Counter Animation for Dashboard Stats
export function animateCounter(element, targetValue) {
  if (!element) return;
  const numVal = parseInt(targetValue) || 0;
  let current = 0;
  const step = Math.ceil(numVal / 20) || 1;

  const timer = setInterval(() => {
    current += step;
    if (current >= numVal) {
      current = numVal;
      clearInterval(timer);
    }
    element.innerText = current;
  }, 30);
}
