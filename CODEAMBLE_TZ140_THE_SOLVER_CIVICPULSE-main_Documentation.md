### 📄 c:\Users\Omkar\Downloads\CODEAMBLE_TZ140_THE_SOLVER_CIVICPULSE-main\src\styles\localvoice.css
*Saved at: 8/9/2026, 10:09:50 AM*

**[REMOVED]**
```
(from line ~1)
/* ============================================
   CivicPulse — Component Styles
   New styles for the CivicPulse rebuild
   ============================================ */

/* ========================
   VERIFICATION CAPTURE
   ======================== */
.verification-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 20px;
  color: #16302b;
  background:
    radial-gradient(circle at 12% 12%, rgba(251, 191, 36, 0.22), transparent 30%),
    radial-gradient(circle at 90% 88%, rgba(16, 185, 129, 0.22), transparent 34%),
    linear-gradient(135deg, #f4fbf6 0%, #e4f4eb 48%, #fff8e8 100%);
  font-family: var(--font-body);
}
.verification-card {
  width: min(100%, 720px);
  padding: clamp(24px, 5vw, 52px);
  border: 1px solid rgba(255, 255, 255, 0.82);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 24px 70px rgba(25, 78, 54, 0.14);
  backdrop-filter: blur(18px);
}
.verification-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}
.verification-kicker {
  margin: 0 0 10px;
  color: #bf7b09;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.verification-card h1 {
  max-width: 520px;
  margin: 0;
  color: #16302b;
  font-family: var(--font-heading);
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1.05;
}
.verification-subtitle {
  margin: 14px 0 0;
  color: #58716a;
  font-size: 16px;
  line-height: 1.6;
}
.location-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
  padding: 8px 11px;
  border: 1px solid #f5d6a1;
  border-radius: 999px;
  color: #9a670e;
  background: #fff9eb;
  font-size: 12px;
  font-weight: 700;
}
.location-status.ready {
  border-color: #b7e2ca;
  color: #08734c;
  background: #effbf4;
}
.verification-location-note {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin: 30px 0 24px;
  padding: 13px 15px;
  border-left: 3px solid #10b981;
  color: #4b6960;
  background: rgba(231, 248, 238, 0.72);
  font-size: 13px;
  line-height: 1.5;
}
.verification-location-note svg { flex-shrink: 0; color: #0b9b68; }
.verification-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.verification-option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  min-height: 158px;
  padding: 18px;
  border: 1px solid #dbe9e1;
  border-radius: 16px;
  color: #16302b;
  text-align: left;
  background: rgba(255, 255, 255, 0.76);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}
.verification-option:hover { transform: translateY(-3px); box-shadow: 0 12px 24px rgba(25, 78, 54, 0.1); border-color: #8bd2af; }
.verification-option.recording { border-color: #ed8c86; background: #fff4f2; }
.option-icon {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 13px;
  color: #08734c;
  background: #e8f8ee;
}
.verification-option.video .option-icon { color: #b4770c; background: #fff4d9; }
.verification-option.audio .option-icon { color: #9e4c65; background: #fbe9ed; }
.verification-option strong, .verification-option small { display: block; }
.verification-option strong { font-size: 15px; }
.verification-option small { margin-top: 5px; color: #6d827a; font-size: 12px; }
.recording-dot { width: 14px; height: 14px; border-radius: 50%; background: #e4574f; box-shadow: 0 0 0 6px rgba(228, 87, 79, 0.14); }
.verification-review { margin-top: 6px; }
.camera-capture-panel { margin-top: 6px; }
.camera-live-preview { display: block; width: 100%; max-height: 460px; min-height: 280px; border-radius: 16px; object-fit: cover; background: #10221c; }
.camera-capture-actions { display: flex; justify-content: space-between; gap: 12px; margin-top: 14px; }
.capture-button { box-shadow: 0 0 0 7px rgba(8, 115, 76, 0.1); }
.recording-action { background: #bd4842; }
.media-preview { display: grid; min-height: 250px; place-items: center; gap: 18px; overflow: hidden; border-radius: 16px; color: #08734c; background: #edf7f0; }
.media-preview img, .media-preview video { display: block; width: 100%; max-height: 420px; object-fit: contain; background: #10221c; }
.media-preview audio { width: min(90%, 440px); }
.review-label { margin: 14px 0; color: #58716a; font-size: 13px; }
.review-actions { display: flex; justify-content: space-between; gap: 12px; }
.primary-action, .secondary-action { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer; }
.primary-action { border: 0; color: #fff; background: #08734c; }
.primary-action:disabled { opacity: 0.55; cursor: not-allowed; }
.secondary-action { border: 1px solid #d4e3db; color: #58716a; background: transparent; }
.verification-error { margin: 18px 0 0; color: #b33f3a; font-size: 13px; }
.verification-coordinates { display: flex; align-items: center; gap: 5px; margin: 18px 0 0; color: #6d827a; font-size: 11px; }
.verification-address { display: flex; align-items: flex-start; gap: 5px; margin: 7px 0 0; color: #385d50; font-size: 12px; line-height: 1.45; }
.verification-address svg { flex-shrink: 0; margin-top: 2px; color: #08734c; }
.reset-link { display: flex; align-items: center; gap: 5px; margin: 14px auto 0; border: 0; color: #08734c; font-size: 12px; background: transparent; cursor: pointer; }
.verification-success { text-align: center; }
.verification-success h1 { margin: 0 auto; font-size: clamp(28px, 5vw, 42px); }
.verification-success > p:last-child { max-width: 430px; margin: 16px auto 0; color: #58716a; line-height: 1.6; }
.verification-icon { display: grid; width: 62px; height: 62px; margin: 0 auto 20px; place-items: center; border-radius: 50%; }
.verification-icon.success { color: #08734c; background: #d9f5e4; }
.spin { animation: verification-spin 900ms linear infinite; }
@keyframes verification-spin { to { transform: rotate(360deg); } }
@media (max-width: 620px) {
  .verification-page { padding: 16px; }
  .verification-card { padding: 25px 18px; border-radius: 18px; }
  .verification-header { display: block; }
  .location-status { margin-top: 18px; }
  .verification-options { grid-template-columns: 1fr; }
  .verification-option { min-height: 94px; flex-direction: row; align-items: center; gap: 14px; }
  .verification-option .option-icon { flex-shrink: 0; }
  .verification-option span:last-child { flex: 1; }
  .review-actions { flex-direction: column-reverse; }
}

/* ========================
   SKELETON LOADERS
   ======================== */
.skeleton-shimmer {
  background: var(--bg-tertiary);
  position: relative;
  overflow: hidden;
}
.skeleton-shimmer::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}
@keyframes skeleton-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* ========================
   SUPPORT BUTTON PARTICLES
   ======================== */
@keyframes support-particle {
  0% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-30px) scale(0);
    opacity: 0;
  }
}

.support-btn:hover:not(.disabled) {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.2);
}
.support-btn.supported {
  box-shadow: 0 2px 12px rgba(245, 158, 11, 0.3);
}

/* ========================
   BOTTOM NAVIGATION
   ======================== */
.bottom-nav {
  display: none !important;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--bg-primary);
  border-top: 1px solid var(--border);
  z-index: 1000;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  box-shadow: 0 -2px 10px rgba(0,0,0,0.06);
}
@media (max-width: 768px) {
  .bottom-nav { display: none !important; }
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  text-decoration: none;
  color: var(--text-muted);
  transition: all 0.2s ease;
  position: relative;
  border-radius: 12px;
}
.bottom-nav-item.active {
  color: var(--brand-teal);
}
.bottom-nav-label {
  font-size: 10px;
  font-weight: 600;
  font-family: var(--font-caption);
}
.bottom-nav-icon-wrap {
  position: relative;
}
.bottom-nav-badge {
  position: absolute;
  top: -4px;
  right: -8px;
  background: var(--danger);
  color: white;
  font-size: 9px;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
}
.bottom-nav-fab {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(13, 148, 136, 0.35);
  transform: translateY(-8px);
  transition: all 0.2s ease;
}
.bottom-nav-fab:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 6px 20px rgba(13, 148, 136, 0.45);
}

/* ========================
   PROBLEM CARD (Instagram-style)
   ======================== */
.problem-card {
  background: var(--bg-card);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto var(--space-md);
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s ease;
}
.problem-card:hover {
  box-shadow: var(--shadow-card-hover);
}
.problem-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
}
.problem-card-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}
.problem-card-user-info {
  flex: 1;
  min-width: 0;
}
.problem-card-username {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-heading);
}
.problem-card-location {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--text-muted);
}
.problem-card-time {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--text-muted);
  flex-shrink: 0;
}

/* Media */
.problem-card-media {
  position: relative;
  background: #000;
  min-height: 280px;
  overflow: hidden;
}
.problem-card-media img {
  display: block;
}
.problem-card-media-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  background: var(--bg-tertiary);
  gap: 8px;
}

/* Overlays */
.problem-card-category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 2;
}
.problem-card-status-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--status-color, #6b7280);
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
}

/* Media nav */
.media-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: background 0.2s;
}
.media-nav-btn:hover { background: rgba(0,0,0,0.8); }
.media-nav-left { left: 10px; }
.media-nav-right { right: 10px; }
.media-dots {
  position: absolute;
  bottom: 10px;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  gap: 5px;
  z-index: 3;
}
.media-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: all 0.2s;
}
.media-dot.active {
  background: white;
  transform: scale(1.2);
}

/* Actions */
.problem-card-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--border-light);
}
.problem-card-action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 8px;
  transition: all 0.2s;
}
.problem-card-action-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

/* Body */
.problem-card-body {
  padding: 8px 16px 14px;
}
.problem-card-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
  cursor: pointer;
  font-family: var(--font-heading);
}
.problem-card-title:hover { color: var(--brand-teal); }
.problem-card-desc {
  font-size: 13px;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}

/* ========================
   FEED PAGE
   ======================== */
.feed-page {
  min-height: 100%;
}
.feed-locality-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}
.feed-locality-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.feed-locality-icon {
  color: var(--brand-teal);
}
.feed-locality-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-heading);
}
.feed-locality-sub {
  font-size: 11px;
  color: var(--text-muted);
}
.feed-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.feed-filter-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.feed-filter-btn.active {
  background: var(--brand-teal-50);
  border-color: var(--brand-teal);
  color: var(--brand-teal);
}
.feed-count-badge {
  font-size: 11px;
  font-weight: 700;
  background: var(--primary-bg);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 12px;
}
.feed-filters {
  padding: 12px 20px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
}
.feed-filter-group {
  margin-bottom: 10px;
}
.feed-filter-group:last-child { margin-bottom: 0; }
.feed-filter-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  display: block;
}
.feed-filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.filter-chip {
  padding: 4px 12px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--bg-primary);
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-chip.active {
  background: var(--brand-teal);
  color: white;
  border-color: var(--brand-teal);
}
.filter-chip:hover:not(.active) {
  border-color: var(--brand-teal);
  color: var(--brand-teal);
}
.feed-content {
  padding: 16px 20px;
  max-width: 680px;
  margin: 0 auto;
}
.feed-empty-state {
  text-align: center;
  padding: 60px 20px;
}
.feed-empty-illustration {
  font-size: 64px;
  margin-bottom: 16px;
}
.feed-empty-state h3 {
  font-family: var(--font-heading);
  font-size: 18px;
  margin-bottom: 8px;
}
.feed-empty-state p {
  color: var(--text-muted);
  font-size: 14px;
}

/* ========================
   POST CREATE PAGE
   ======================== */
.post-create-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--bg-primary);
}
.post-create-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}
.post-create-title {
  font-size: 16px;
  font-weight: 700;
  font-family: var(--font-heading);
}
.post-create-step-label {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 600;
}
.post-create-progress {
  height: 3px;
  background: var(--bg-tertiary);
}
.post-create-progress-fill {
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
  border-radius: 0 2px 2px 0;
}
.post-create-body {
  flex: 1;
  padding: 24px 20px;
  overflow-y: auto;
}
.post-step-title {
  font-size: 20px;
  font-weight: 700;
  font-family: var(--font-heading);
  margin-bottom: 8px;
}
.post-step-desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}
.post-media-upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px;
  border: 2px dashed var(--border);
  border-radius: 16px;
  background: var(--bg-secondary);
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-muted);
  font-size: 14px;
}
.post-media-upload-area:hover {
  border-color: var(--brand-teal);
  background: var(--brand-teal-50);
  color: var(--brand-teal);
}
.post-media-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 8px;
  margin-bottom: 16px;
}
.post-media-preview-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
}
.post-media-preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-media-remove {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.post-location-map-placeholder {
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 32px;
  margin-bottom: 20px;
  background: var(--bg-secondary);
}
.post-location-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.post-location-coords {
  display: flex;
  gap: 16px;
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  color: var(--text-muted);
}
.post-location-locality {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-heading);
}
.post-location-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
}
.post-category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 10px;
}
.post-category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 12px;
  border: 2px solid var(--border);
  border-radius: 14px;
  background: var(--bg-primary);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.post-category-item:hover {
  border-color: var(--cat-color, var(--brand-teal));
  background: var(--bg-secondary);
}
.post-category-item.selected {
  border-color: var(--cat-color, var(--brand-teal));
  background: color-mix(in srgb, var(--cat-color, var(--brand-teal)) 8%, white);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--cat-color, var(--brand-teal)) 15%, transparent);
}
.post-category-icon { font-size: 28px; }
.post-category-label { font-size: 12px; font-weight: 600; color: var(--text-primary); }
.post-category-check {
  position: absolute;
  top: 8px;
  right: 8px;
  color: var(--cat-color, var(--brand-teal));
}
.post-duplicate-warning {
  display: flex;
  gap: 12px;
  padding: 14px;
  background: var(--warning-bg);
  border: 1px solid var(--warning-border);
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
  color: var(--warning);
}
.post-duplicate-warning p { font-size: 12px; margin: 4px 0 8px; color: var(--text-secondary); }
.post-duplicate-item {
  display: block;
  padding: 6px 10px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 12px;
  color: var(--text-primary);
  cursor: pointer;
  margin-bottom: 4px;
  width: 100%;
  text-align: left;
  transition: background 0.2s;
}
.post-duplicate-item:hover { background: var(--bg-secondary); }
.post-review-summary {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}
.post-review-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.post-review-details { padding: 16px; }
.post-review-row {
  display: flex;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
  font-size: 13px;
}
.post-review-row:last-child { border-bottom: none; }
.post-review-label {
  font-weight: 700;
  color: var(--text-muted);
  min-width: 80px;
  font-size: 11px;
  text-transform: uppercase;
}
.post-error {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--danger-bg);
  border: 1px solid var(--danger-border);
  border-radius: 10px;
  color: var(--danger);
  font-size: 13px;
  margin-top: 12px;
}
.post-create-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border);
  background: var(--bg-primary);
}

/* ========================
   DETAIL PAGE
   ======================== */
.detail-page {
  background: var(--bg-primary);
  min-height: 100%;
}
.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg-primary);
  z-index: 10;
}
.detail-header-actions { display: flex; gap: 4px; }
.detail-media {
  position: relative;
  background: #000;
}
.detail-media-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}
.detail-media-dots {
  position: absolute;
  bottom: 10px;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  gap: 5px;
}
.detail-content { padding: 16px 20px; max-width: 700px; margin: 0 auto; }
.detail-badges { display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
.detail-category-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: color-mix(in srgb, var(--cat-color, var(--brand-teal)) 10%, white);
  color: var(--cat-color, var(--brand-teal));
  border: 1px solid color-mix(in srgb, var(--cat-color, var(--brand-teal)) 20%, transparent);
}
.detail-locality-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: var(--text-muted);
  background: var(--bg-tertiary);
}
.detail-title {
  font-size: 22px;
  font-weight: 800;
  font-family: var(--font-heading);
  margin-bottom: 12px;
  color: var(--text-primary);
}
.detail-reporter {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.detail-reporter-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}
.detail-reporter-name { font-size: 13px; font-weight: 600; }
.detail-reporter-time { font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 3px; }
.detail-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 20px;
}
.detail-actions-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
  margin-bottom: 24px;
}
.detail-stat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: var(--text-muted);
}
.detail-section {
  margin-bottom: 28px;
}
.detail-section-title {
  font-size: 15px;
  font-weight: 700;
  font-family: var(--font-heading);
  margin-bottom: 14px;
  color: var(--text-primary);
}

/* Comments */
.detail-comments-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}
.detail-comment {
  display: flex;
  gap: 10px;
}
.detail-comment-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
}
.detail-comment-body { flex: 1; }
.detail-comment-header {
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin-bottom: 2px;
}
.detail-comment-name { font-size: 12px; font-weight: 700; color: var(--text-primary); }
.detail-comment-time { font-size: 10px; color: var(--text-muted); }
.detail-comment-text { font-size: 13px; color: var(--text-secondary); line-height: 1.5; }
.detail-comment-form {
  display: flex;
  gap: 8px;
  align-items: center;
}
.detail-comment-form .form-input {
  flex: 1;
  height: 38px;
  font-size: 13px;
}

/* ========================
   NOTIFICATIONS PAGE
   ======================== */
.notifications-page { padding: 20px; max-width: 700px; margin: 0 auto; }
.notifications-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.notifications-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
}
.notifications-unread-badge {
  background: var(--danger);
  color: white;
  font-size: 11px;
  font-weight: 700;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
}
.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;
  position: relative;
}
.notification-item:hover { background: var(--bg-secondary); }
.notification-item.unread { background: var(--brand-teal-50); }
.notification-icon { font-size: 20px; flex-shrink: 0; padding-top: 2px; }
.notification-content { flex: 1; }
.notification-message { font-size: 13px; color: var(--text-primary); margin-bottom: 4px; line-height: 1.4; }
.notification-time { font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 3px; }
.notification-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand-teal);
  flex-shrink: 0;
  margin-top: 6px;
}
.notifications-empty {
  text-align: center;
  padding: 60px 20px;
}
.notifications-empty-icon { font-size: 48px; margin-bottom: 12px; }
.notifications-empty h3 { font-family: var(--font-heading); margin-bottom: 8px; }
.notifications-empty p { color: var(--text-muted); font-size: 13px; }

/* ========================
   CONTROL PANEL LAYOUT
   ======================== */
.cp-layout {
  display: flex;
  min-height: 100vh;
}
.cp-sidebar {
  width: 260px;
  background: var(--gradient-sidebar);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: width 0.2s ease;
  overflow-y: auto;
}
.cp-sidebar.collapsed { width: 64px; }
.cp-main {
  flex: 1;
  margin-left: 260px;
  transition: margin-left 0.2s ease;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.cp-main.sidebar-collapsed { margin-left: 64px; }
.cp-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  min-height: 52px;
}
.cp-topbar-left, .cp-topbar-right { display: flex; align-items: center; gap: 10px; }
.cp-role-switcher {
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 12px;
  background: var(--bg-primary);
  cursor: pointer;
}
.cp-page-content {
  flex: 1;
  padding: 24px;
  background: var(--bg-page);
  overflow-y: auto;
}
.cp-role-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 16px 16px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  background: rgba(13, 148, 136, 0.15);
  color: var(--brand-teal-light);
}
.cp-role-badge[data-role="super_admin"] {
  background: rgba(244, 63, 94, 0.15);
  color: #fb7185;
}
.cp-role-locality {
  font-weight: 400;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .cp-sidebar { transform: translateX(-100%); width: 260px !important; }
  .cp-sidebar.mobile-open { transform: translateX(0); }
  .cp-main { margin-left: 0 !important; }
}

/* ========================
   CONTROL PANEL PAGES
   ======================== */
.cp-page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
}
.cp-page-title {
  font-size: 22px;
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--text-primary);
}
.cp-page-subtitle {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
}
.cp-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.cp-charts-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 900px) { .cp-charts-row { grid-template-columns: 1fr; } }
.cp-chart-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
}
.cp-chart-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
  font-family: var(--font-heading);
  color: var(--text-primary);
}

/* Filters bar */
.cp-filters-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding: 12px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.cp-search-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  flex: 1;
  min-width: 180px;
  max-width: 280px;
  color: var(--text-muted);
}
.cp-search-input {
  border: none;
  background: none;
  outline: none;
  font-size: 13px;
  width: 100%;
  color: var(--text-primary);
}
.cp-filter-select {
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 12px;
  background: var(--bg-primary);
  color: var(--text-secondary);
  cursor: pointer;
}
.cp-sort-btns { display: flex; gap: 4px; }
.cp-sort-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg-primary);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
}
.cp-sort-btn.active {
  background: var(--brand-teal);
  color: white;
  border-color: var(--brand-teal);
}

/* Table */
.cp-table-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow-x: auto;
}
.cp-table {
  width: 100%;
  border-collapse: collapse;
}
.cp-table th {
  padding: 10px 14px;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--border);
  white-space: nowrap;
}
.cp-table td {
  padding: 10px 14px;
  font-size: 13px;
  border-bottom: 1px solid var(--border-light);
  vertical-align: middle;
}
.cp-table tr:hover td { background: var(--bg-secondary); }
.cp-case-title {
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cp-case-title:hover { color: var(--brand-teal); }
.cp-category-badge {
  font-size: 12px;
  white-space: nowrap;
}
.cp-locality-tag {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  color: var(--text-muted);
}
.cp-support-count {
  font-weight: 700;
  color: var(--brand-saffron);
}
.cp-status-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  background: var(--status-color, #6b7280);
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}
.cp-time-cell {
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
}
.cp-action-btns {
  display: flex;
  gap: 4px;
}
.cp-action-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.cp-action-btn.verify { color: var(--success); }
.cp-action-btn.verify:hover { background: var(--success); color: white; border-color: var(--success); }
.cp-action-btn.reject { color: var(--danger); }
.cp-action-btn.reject:hover { background: var(--danger); color: white; border-color: var(--danger); }
.cp-action-btn.escalate { color: var(--brand-teal); }
.cp-action-btn.escalate:hover { background: var(--brand-teal); color: white; border-color: var(--brand-teal); }
.cp-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 40px;
  color: var(--text-muted);
  text-align: center;
}

/* Modal */
.cp-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.cp-modal {
  background: var(--bg-primary);
  border-radius: 16px;
  padding: 24px;
  max-width: 520px;
  width: 100%;
  box-shadow: var(--shadow-2xl);
}
.cp-modal-title {
  font-size: 18px;
  font-weight: 700;
  font-family: var(--font-heading);
  margin-bottom: 8px;
}
.cp-modal-desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 16px; }
.cp-escalation-payload {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 20px;
}
.cp-payload-row {
  font-size: 13px;
  padding: 6px 0;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  gap: 8px;
}
.cp-payload-row:last-child { border-bottom: none; }
.cp-payload-row span:first-child { color: var(--text-muted); min-width: 80px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
.cp-modal-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* Departments */
.cp-departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.cp-dept-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
}
.cp-dept-header { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
.cp-dept-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--primary-bg);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cp-dept-name { font-size: 14px; font-weight: 700; font-family: var(--font-heading); }
.cp-dept-category { font-size: 12px; color: var(--text-muted); }
.cp-dept-details { margin-bottom: 12px; }
.cp-dept-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-secondary);
  padding: 4px 0;
}
.cp-dept-actions { display: flex; gap: 8px; }

/* Moderators */
.cp-section { margin-bottom: 24px; }
.cp-section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  font-family: var(--font-heading);
  margin-bottom: 14px;
}
.cp-moderators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
}
.cp-mod-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.cp-mod-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
}
.cp-mod-info { flex: 1; }
.cp-mod-name { font-size: 14px; font-weight: 700; }
.cp-mod-email { font-size: 11px; color: var(--text-muted); }
.cp-mod-locality {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--brand-teal);
  margin-top: 4px;
}
.cp-mod-ward {
  font-size: 10px;
  background: var(--brand-teal-50);
  padding: 1px 6px;
  border-radius: 6px;
  font-weight: 600;
}
.cp-locality-coverage {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}
.cp-locality-item {
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg-card);
}
.cp-locality-item.covered {
  border-color: var(--brand-teal);
  background: var(--brand-teal-50);
}
.cp-locality-name { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
.cp-locality-ward { font-size: 11px; color: var(--text-muted); margin-bottom: 6px; }
.cp-locality-assigned { font-size: 11px; color: var(--brand-teal); display: flex; align-items: center; gap: 4px; font-weight: 600; }
.cp-locality-unassigned { font-size: 11px; color: var(--warning); font-weight: 600; }

/* Role switcher in sidebar */
.sidebar-role-switcher {
  width: 100%;
  padding: 3px 6px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px;
  font-size: 11px;
  background: rgba(255,255,255,0.08);
  color: var(--text-sidebar);
  cursor: pointer;
  margin-top: 4px;
}

```
**[ADDED]**
```
1     /* ============================================
2        CivicPulse — Component Styles
3        New styles for the CivicPulse rebuild
4        ============================================ */
5     
6     /* ========================
7       VERIFICATION CAPTURE
8       ======================== */
9     .verification-page { min-height: 100vh; display: grid; place-items: center; padding: 32px 20px; color: #16302b; background: radial-gradient(circle at 12% 12%, rgba(251,191,36,.22), transparent 30%), radial-gradient(circle at 90% 88%, rgba(16,185,129,.22), transparent 34%), linear-gradient(135deg, #f4fbf6 0%, #e4f4eb 48%, #fff8e8 100%); font-family: var(--font-body); }
10    .verification-card { width: min(100%, 720px); padding: clamp(24px, 5vw, 52px); border: 1px solid rgba(255,255,255,.82); border-radius: 24px; background: rgba(255,255,255,.82); box-shadow: 0 24px 70px rgba(25,78,54,.14); backdrop-filter: blur(18px); }
11    .verification-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; }
12    .verification-kicker { margin: 0 0 10px; color: #bf7b09; font-size: 12px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
13    .verification-card h1 { max-width: 520px; margin: 0; color: #16302b; font-family: var(--font-heading); font-size: clamp(30px, 5vw, 48px); line-height: 1.05; }
14    .verification-subtitle { margin: 14px 0 0; color: #58716a; font-size: 16px; line-height: 1.6; }
15    .location-status { display: inline-flex; align-items: center; gap: 7px; flex-shrink: 0; padding: 8px 11px; border: 1px solid #f5d6a1; border-radius: 999px; color: #9a670e; background: #fff9eb; font-size: 12px; font-weight: 700; }
16    .location-status.ready { border-color: #b7e2ca; color: #08734c; background: #effbf4; }
17    .verification-location-note { display: flex; gap: 10px; align-items: flex-start; margin: 30px 0 24px; padding: 13px 15px; border-left: 3px solid #10b981; color: #4b6960; background: rgba(231,248,238,.72); font-size: 13px; line-height: 1.5; }
18    .verification-location-note svg { flex-shrink: 0; color: #0b9b68; }
19    .verification-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
20    .verification-option { display: flex; flex-direction: column; align-items: flex-start; gap: 22px; min-height: 158px; padding: 18px; border: 1px solid #dbe9e1; border-radius: 16px; color: #16302b; text-align: left; background: rgba(255,255,255,.76); cursor: pointer; transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease; }
21    .verification-option:hover { transform: translateY(-3px); box-shadow: 0 12px 24px rgba(25,78,54,.1); border-color: #8bd2af; }
22    .option-icon { display: grid; width: 46px; height: 46px; place-items: center; border-radius: 13px; color: #08734c; background: #e8f8ee; }
23    .verification-option.video .option-icon { color: #b4770c; background: #fff4d9; }
24    .verification-option.audio .option-icon { color: #9e4c65; background: #fbe9ed; }
25    .verification-option strong, .verification-option small { display: block; }
26    .verification-option strong { font-size: 15px; }
27    .verification-option small { margin-top: 5px; color: #6d827a; font-size: 12px; }
28    .camera-capture-panel { margin-top: 6px; }
29    .camera-live-preview { display: block; width: 100%; max-height: 460px; min-height: 280px; border-radius: 16px; object-fit: cover; background: #10221c; }
30    .camera-capture-actions, .review-actions { display: flex; justify-content: space-between; gap: 12px; margin-top: 14px; }
31    .audio-recording-panel { display: flex; align-items: center; gap: 14px; padding: 22px; border-radius: 16px; color: #7d3531; background: #fff1ef; }
32    .audio-recording-panel span { margin-right: auto; font-variant-numeric: tabular-nums; }
33    .recording-dot { width: 14px; height: 14px; flex-shrink: 0; border-radius: 50%; background: #e4574f; box-shadow: 0 0 0 6px rgba(228,87,79,.14); }
34    .media-preview { display: grid; min-height: 250px; place-items: center; gap: 18px; overflow: hidden; border-radius: 16px; color: #08734c; background: #edf7f0; }
35    .media-preview img, .media-preview video { display: block; width: 100%; max-height: 420px; object-fit: contain; background: #10221c; }
36    .media-preview audio { width: min(90%, 440px); }
37    .review-label { margin: 14px 0; color: #58716a; font-size: 13px; }
38    .primary-action, .secondary-action { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer; }
39    .primary-action { border: 0; color: #fff; background: #08734c; }
40    .primary-action:disabled { opacity: .55; cursor: not-allowed; }
41    .secondary-action { border: 1px solid #d4e3db; color: #58716a; background: transparent; }
42    .recording-action { background: #bd4842; }
43    .verification-error { margin: 18px 0 0; color: #b33f3a; font-size: 13px; }
44    .verification-location-details { margin-top: 18px; }
45    .verification-coordinates, .verification-address { display: flex; align-items: flex-start; gap: 5px; margin: 0; color: #6d827a; font-size: 11px; line-height: 1.45; }
46    .verification-address { margin-top: 7px; color: #385d50; font-size: 12px; }
47    .verification-address svg { flex-shrink: 0; margin-top: 2px; color: #08734c; }
48    .reset-link { display: flex; align-items: center; gap: 5px; margin: 14px auto 0; border: 0; color: #08734c; font-size: 12px; background: transparent; cursor: pointer; }
49    .verification-success { text-align: center; }
50    .verification-success h1 { margin: 0 auto; font-size: clamp(28px, 5vw, 42px); }
51    .verification-success > p:last-child { max-width: 430px; margin: 16px auto 0; color: #58716a; line-height: 1.6; }
52    .verification-icon { display: grid; width: 62px; height: 62px; margin: 0 auto 20px; place-items: center; border-radius: 50%; }
53    .verification-icon.success { color: #08734c; background: #d9f5e4; }
54    .spin { animation: verification-spin 900ms linear infinite; }
55    @keyframes verification-spin { to { transform: rotate(360deg); } }
56    @media (max-width: 620px) { .verification-page { padding: 16px; } .verification-card { padding: 25px 18px; border-radius: 18px; } .verification-header { display: block; } .location-status { margin-top: 18px; } .verification-options { grid-template-columns: 1fr; } .verification-option { min-height: 94px; flex-direction: row; align-items: center; gap: 14px; } .verification-option .option-icon { flex-shrink: 0; } .verification-option span:last-child { flex: 1; } .camera-capture-actions, .review-actions { flex-direction: column-reverse; } .audio-recording-panel { flex-wrap: wrap; } .audio-recording-panel span { margin-right: 0; } }
57    
58    /* ========================
59       SKELETON LOADERS
60       ======================== */
61    .skeleton-shimmer {
62      background: var(--bg-tertiary);
63      position: relative;
64      overflow: hidden;
65    }
66    .skeleton-shimmer::after {
67      content: '';
68      position: absolute;
69      top: 0; left: 0; right: 0; bottom: 0;
70      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
71      animation: skeleton-shimmer 1.5s ease-in-out infinite;
72    }
73    @keyframes skeleton-shimmer {
74      0% { transform: translateX(-100%); }
75      100% { transform: translateX(100%); }
76    }
77    
78    /* ========================
79       SUPPORT BUTTON PARTICLES
80       ======================== */
81    @keyframes support-particle {
82      0% {
83        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1);
84        opacity: 1;
85      }
86      100% {
87        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-30px) scale(0);
88        opacity: 0;
89      }
90    }
91    
92    .support-btn:hover:not(.disabled) {
93      transform: scale(1.05);
94      box-shadow: 0 2px 8px rgba(245, 158, 11, 0.2);
95    }
96    .support-btn.supported {
97      box-shadow: 0 2px 12px rgba(245, 158, 11, 0.3);
98    }
99    
100   /* ========================
101      BOTTOM NAVIGATION
102      ======================== */
103   .bottom-nav {
104     display: none !important;
105     position: fixed;
106     bottom: 0;
107     left: 0;
108     right: 0;
109     height: 64px;
110     background: var(--bg-primary);
111     border-top: 1px solid var(--border);
112     z-index: 1000;
113     align-items: center;
114     justify-content: space-around;
115     padding: 0 8px;
116     padding-bottom: env(safe-area-inset-bottom, 0px);
117     box-shadow: 0 -2px 10px rgba(0,0,0,0.06);
118   }
119   @media (max-width: 768px) {
120     .bottom-nav { display: none !important; }
121   }
122   
123   .bottom-nav-item {
124     display: flex;
125     flex-direction: column;
126     align-items: center;
127     gap: 2px;
128     padding: 6px 12px;
129     text-decoration: none;
130     color: var(--text-muted);
131     transition: all 0.2s ease;
132     position: relative;
133     border-radius: 12px;
134   }
135   .bottom-nav-item.active {
136     color: var(--brand-teal);
137   }
138   .bottom-nav-label {
139     font-size: 10px;
140     font-weight: 600;
141     font-family: var(--font-caption);
142   }
143   .bottom-nav-icon-wrap {
144     position: relative;
145   }
146   .bottom-nav-badge {
147     position: absolute;
148     top: -4px;
149     right: -8px;
150     background: var(--danger);
151     color: white;
152     font-size: 9px;
153     font-weight: 700;
154     min-width: 16px;
155     height: 16px;
156     border-radius: 8px;
157     display: flex;
158     align-items: center;
159     justify-content: center;
160     padding: 0 3px;
161   }
162   .bottom-nav-fab {
163     width: 48px;
164     height: 48px;
165     border-radius: 50%;
166     background: var(--gradient-primary);
167     color: white;
168     border: none;
169     display: flex;
170     align-items: center;
171     justify-content: center;
172     cursor: pointer;
173     box-shadow: 0 4px 14px rgba(13, 148, 136, 0.35);
174     transform: translateY(-8px);
175     transition: all 0.2s ease;
176   }
177   .bottom-nav-fab:hover {
178     transform: translateY(-10px) scale(1.05);
179     box-shadow: 0 6px 20px rgba(13, 148, 136, 0.45);
180   }
181   
182   /* ========================
183      PROBLEM CARD (Instagram-style)
184      ======================== */
185   .problem-card {
186     background: var(--bg-card);
187     border-radius: 16px;
188     border: 1px solid var(--border);
189     overflow: hidden;
190     max-width: 600px;
191     margin: 0 auto var(--space-md);
192     box-shadow: var(--shadow-card);
193     transition: box-shadow 0.2s ease;
194   }
195   .problem-card:hover {
196     box-shadow: var(--shadow-card-hover);
197   }
198   .problem-card-header {
199     display: flex;
200     align-items: center;
201     gap: 10px;
202     padding: 12px 16px;
203   }
204   .problem-card-avatar {
205     width: 36px;
206     height: 36px;
207     border-radius: 50%;
208     background: var(--gradient-primary);
209     color: white;
210     display: flex;
211     align-items: center;
212     justify-content: center;
213     font-size: 12px;
214     font-weight: 700;
215     flex-shrink: 0;
216   }
217   .problem-card-user-info {
218     flex: 1;
219     min-width: 0;
220   }
221   .problem-card-username {
222     font-size: 13px;
223     font-weight: 700;
224     color: var(--text-primary);
225     font-family: var(--font-heading);
226   }
227   .problem-card-location {
228     display: flex;
229     align-items: center;
230     gap: 3px;
231     font-size: 11px;
232     color: var(--text-muted);
233   }
234   .problem-card-time {
235     display: flex;
236     align-items: center;
237     gap: 3px;
238     font-size: 11px;
239     color: var(--text-muted);
240     flex-shrink: 0;
241   }
242   
243   /* Media */
244   .problem-card-media {
245     position: relative;
246     background: #000;
247     min-height: 280px;
248     overflow: hidden;
249   }
250   .problem-card-media img {
251     display: block;
252   }
253   .problem-card-media-placeholder {
254     display: flex;
255     flex-direction: column;
256     align-items: center;
257     justify-content: center;
258     min-height: 280px;
259     background: var(--bg-tertiary);
260     gap: 8px;
261   }
262   
263   /* Overlays */
264   .problem-card-category-badge {
265     position: absolute;
266     top: 12px;
267     left: 12px;
268     background: rgba(0,0,0,0.65);
269     backdrop-filter: blur(8px);
270     color: white;
271     font-size: 11px;
272     font-weight: 600;
273     padding: 3px 10px;
274     border-radius: 12px;
275     display: flex;
276     align-items: center;
277     gap: 4px;
278     z-index: 2;
279   }
280   .problem-card-status-badge {
281     position: absolute;
282     top: 12px;
283     right: 12px;
284     background: var(--status-color, #6b7280);
285     color: white;
286     font-size: 10px;
287     font-weight: 700;
288     padding: 3px 10px;
289     border-radius: 12px;
290     text-transform: uppercase;
291     letter-spacing: 0.5px;
292     z-index: 2;
293   }
294   
295   /* Media nav */
296   .media-nav-btn {
297     position: absolute;
298     top: 50%;
299     transform: translateY(-50%);
300     background: rgba(0,0,0,0.6);
301     color: white;
302     border: none;
303     border-radius: 50%;
304     width: 32px;
305     height: 32px;
306     display: flex;
307     align-items: center;
308     justify-content: center;
309     cursor: pointer;
310     z-index: 3;
311     transition: background 0.2s;
312   }
313   .media-nav-btn:hover { background: rgba(0,0,0,0.8); }
314   .media-nav-left { left: 10px; }
315   .media-nav-right { right: 10px; }
316   .media-dots {
317     position: absolute;
318     bottom: 10px;
319     left: 0; right: 0;
320     display: flex;
321     justify-content: center;
322     gap: 5px;
323     z-index: 3;
324   }
325   .media-dot {
326     width: 7px;
327     height: 7px;
328     border-radius: 50%;
329     background: rgba(255,255,255,0.4);
330     cursor: pointer;
331     transition: all 0.2s;
332   }
333   .media-dot.active {
334     background: white;
335     transform: scale(1.2);
336   }
337   
338   /* Actions */
339   .problem-card-actions {
340     display: flex;
341     align-items: center;
342     gap: 12px;
343     padding: 8px 16px;
344     border-bottom: 1px solid var(--border-light);
345   }
346   .problem-card-action-btn {
347     display: flex;
348     align-items: center;
349     gap: 5px;
350     background: none;
351     border: none;
352     color: var(--text-secondary);
353     font-size: 13px;
354     cursor: pointer;
355     padding: 4px 6px;
356     border-radius: 8px;
357     transition: all 0.2s;
358   }
359   .problem-card-action-btn:hover {
360     background: var(--bg-tertiary);
361     color: var(--text-primary);
362   }
363   
364   /* Body */
365   .problem-card-body {
366     padding: 8px 16px 14px;
367   }
368   .problem-card-title {
369     font-size: 14px;
370     font-weight: 700;
371     color: var(--text-primary);
372     margin-bottom: 4px;
373     cursor: pointer;
374     font-family: var(--font-heading);
375   }
376   .problem-card-title:hover { color: var(--brand-teal); }
377   .problem-card-desc {
378     font-size: 13px;
379     color: var(--text-secondary);
380     display: -webkit-box;
381     -webkit-line-clamp: 2;
382     line-clamp: 2;
383     -webkit-box-orient: vertical;
384     overflow: hidden;
385     line-height: 1.5;
386   }
387   
388   /* ========================
389      FEED PAGE
390      ======================== */
391   .feed-page {
392     min-height: 100%;
393   }
394   .feed-locality-header {
395     display: flex;
396     align-items: center;
397     justify-content: space-between;
398     padding: 16px 20px;
399     background: var(--bg-primary);
400     border-bottom: 1px solid var(--border);
401     position: sticky;
402     top: 0;
403     z-index: 10;
404   }
405   .feed-locality-info {
406     display: flex;
407     align-items: center;
408     gap: 10px;
409   }
410   .feed-locality-icon {
411     color: var(--brand-teal);
412   }
413   .feed-locality-name {
414     font-size: 16px;
415     font-weight: 700;
416     color: var(--text-primary);
417     font-family: var(--font-heading);
418   }
419   .feed-locality-sub {
420     font-size: 11px;
421     color: var(--text-muted);
422   }
423   .feed-header-actions {
424     display: flex;
425     align-items: center;
426     gap: 8px;
427   }
428   .feed-filter-btn {
429     display: flex;
430     align-items: center;
431     gap: 5px;
432     padding: 6px 12px;
433     border: 1px solid var(--border);
434     border-radius: 8px;
435     background: var(--bg-primary);
436     color: var(--text-secondary);
437     font-size: 12px;
438     font-weight: 600;
439     cursor: pointer;
440     transition: all 0.2s;
441   }
442   .feed-filter-btn.active {
443     background: var(--brand-teal-50);
444     border-color: var(--brand-teal);
445     color: var(--brand-teal);
446   }
447   .feed-count-badge {
448     font-size: 11px;
449     font-weight: 700;
450     background: var(--primary-bg);
451     color: var(--primary);
452     padding: 4px 10px;
453     border-radius: 12px;
454   }
455   .feed-filters {
456     padding: 12px 20px;
457     background: var(--bg-secondary);
458     border-bottom: 1px solid var(--border);
459   }
460   .feed-filter-group {
461     margin-bottom: 10px;
462   }
463   .feed-filter-group:last-child { margin-bottom: 0; }
464   .feed-filter-label {
465     font-size: 11px;
466     font-weight: 700;
467     color: var(--text-muted);
468     text-transform: uppercase;
469     letter-spacing: 0.5px;
470     margin-bottom: 6px;
471     display: block;
472   }
473   .feed-filter-chips {
474     display: flex;
475     flex-wrap: wrap;
476     gap: 6px;
477   }
478   .filter-chip {
479     padding: 4px 12px;
480     border: 1px solid var(--border);
481     border-radius: 20px;
482     background: var(--bg-primary);
483     color: var(--text-secondary);
484     font-size: 12px;
485     font-weight: 500;
486     cursor: pointer;
487     transition: all 0.2s;
488   }
489   .filter-chip.active {
490     background: var(--brand-teal);
491     color: white;
492     border-color: var(--brand-teal);
493   }
494   .filter-chip:hover:not(.active) {
495     border-color: var(--brand-teal);
496     color: var(--brand-teal);
497   }
498   .feed-content {
499     padding: 16px 20px;
500     max-width: 680px;
501     margin: 0 auto;
502   }
503   .feed-empty-state {
504     text-align: center;
505     padding: 60px 20px;
506   }
507   .feed-empty-illustration {
508     font-size: 64px;
509     margin-bottom: 16px;
510   }
511   .feed-empty-state h3 {
512     font-family: var(--font-heading);
513     font-size: 18px;
514     margin-bottom: 8px;
515   }
516   .feed-empty-state p {
517     color: var(--text-muted);
518     font-size: 14px;
519   }
520   
521   /* ========================
522      POST CREATE PAGE
523      ======================== */
524   .post-create-page {
525     display: flex;
526     flex-direction: column;
527     min-height: 100%;
528     background: var(--bg-primary);
529   }
530   .post-create-header {
531     display: flex;
532     align-items: center;
533     justify-content: space-between;
534     padding: 12px 16px;
535     border-bottom: 1px solid var(--border);
536   }
537   .post-create-title {
538     font-size: 16px;
539     font-weight: 700;
540     font-family: var(--font-heading);
541   }
542   .post-create-step-label {
543     font-size: 12px;
544     color: var(--text-muted);
545     font-weight: 600;
546   }
547   .post-create-progress {
548     height: 3px;
549     background: var(--bg-tertiary);
550   }
551   .post-create-progress-fill {
552     height: 100%;
553     background: var(--gradient-primary);
554     transition: width 0.3s ease;
555     border-radius: 0 2px 2px 0;
556   }
557   .post-create-body {
558     flex: 1;
559     padding: 24px 20px;
560     overflow-y: auto;
561   }
562   .post-step-title {
563     font-size: 20px;
564     font-weight: 700;
565     font-family: var(--font-heading);
566     margin-bottom: 8px;
567   }
568   .post-step-desc {
569     font-size: 13px;
570     color: var(--text-secondary);
571     margin-bottom: 24px;
572   }
573   .post-media-upload-area {
574     display: flex;
575     flex-direction: column;
576     align-items: center;
577     justify-content: center;
578     gap: 8px;
579     padding: 40px;
580     border: 2px dashed var(--border);
581     border-radius: 16px;
582     background: var(--bg-secondary);
583     cursor: pointer;
584     transition: all 0.2s;
585     color: var(--text-muted);
586     font-size: 14px;
587   }
588   .post-media-upload-area:hover {
589     border-color: var(--brand-teal);
590     background: var(--brand-teal-50);
591     color: var(--brand-teal);
592   }
593   .post-media-preview-grid {
594     display: grid;
595     grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
596     gap: 8px;
597     margin-bottom: 16px;
598   }
599   .post-media-preview-item {
600     position: relative;
601     border-radius: 12px;
602     overflow: hidden;
603     aspect-ratio: 1;
604   }
605   .post-media-preview-item img {
606     width: 100%;
607     height: 100%;
608     object-fit: cover;
609   }
610   .post-media-remove {
611     position: absolute;
612     top: 4px;
613     right: 4px;
614     width: 22px;
615     height: 22px;
616     border-radius: 50%;
617     background: rgba(0,0,0,0.6);
618     color: white;
619     border: none;
620     display: flex;
621     align-items: center;
622     justify-content: center;
623     cursor: pointer;
624   }
625   .post-location-map-placeholder {
626     border-radius: 16px;
627     border: 1px solid var(--border);
628     padding: 32px;
629     margin-bottom: 20px;
630     background: var(--bg-secondary);
631   }
632   .post-location-display {
633     display: flex;
634     flex-direction: column;
635     align-items: center;
636     gap: 10px;
637   }
638   .post-location-coords {
639     display: flex;
640     gap: 16px;
641     font-family: var(--font-mono, monospace);
642     font-size: 12px;
643     color: var(--text-muted);
644   }
645   .post-location-locality {
646     font-size: 16px;
647     font-weight: 700;
648     color: var(--text-primary);
649     font-family: var(--font-heading);
650   }
651   .post-location-loading {
652     display: flex;
653     flex-direction: column;
654     align-items: center;
655     gap: 10px;
656     color: var(--text-muted);
657   }
658   .post-category-grid {
659     display: grid;
660     grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
661     gap: 10px;
662   }
663   .post-category-item {
664     display: flex;
665     flex-direction: column;
666     align-items: center;
667     gap: 6px;
668     padding: 16px 12px;
669     border: 2px solid var(--border);
670     border-radius: 14px;
671     background: var(--bg-primary);
672     cursor: pointer;
673     transition: all 0.2s;
674     position: relative;
675   }
676   .post-category-item:hover {
677     border-color: var(--cat-color, var(--brand-teal));
678     background: var(--bg-secondary);
679   }
680   .post-category-item.selected {
681     border-color: var(--cat-color, var(--brand-teal));
682     background: color-mix(in srgb, var(--cat-color, var(--brand-teal)) 8%, white);
683     box-shadow: 0 0 0 3px color-mix(in srgb, var(--cat-color, var(--brand-teal)) 15%, transparent);
684   }
685   .post-category-icon { font-size: 28px; }
686   .post-category-label { font-size: 12px; font-weight: 600; color: var(--text-primary); }
687   .post-category-check {
688     position: absolute;
689     top: 8px;
690     right: 8px;
691     color: var(--cat-color, var(--brand-teal));
692   }
693   .post-duplicate-warning {
694     display: flex;
695     gap: 12px;
696     padding: 14px;
697     background: var(--warning-bg);
698     border: 1px solid var(--warning-border);
699     border-radius: 12px;
700     margin-bottom: 20px;
701     font-size: 13px;
702     color: var(--warning);
703   }
704   .post-duplicate-warning p { font-size: 12px; margin: 4px 0 8px; color: var(--text-secondary); }
705   .post-duplicate-item {
706     display: block;
707     padding: 6px 10px;
708     background: var(--bg-primary);
709     border: 1px solid var(--border);
710     border-radius: 8px;
711     font-size: 12px;
712     color: var(--text-primary);
713     cursor: pointer;
714     margin-bottom: 4px;
715     width: 100%;
716     text-align: left;
717     transition: background 0.2s;
718   }
719   .post-duplicate-item:hover { background: var(--bg-secondary); }
720   .post-review-summary {
721     background: var(--bg-secondary);
722     border: 1px solid var(--border);
723     border-radius: 16px;
724     overflow: hidden;
725   }
726   .post-review-image {
727     width: 100%;
728     height: 200px;
729     object-fit: cover;
730   }
731   .post-review-details { padding: 16px; }
732   .post-review-row {
733     display: flex;
734     gap: 12px;
735     padding: 8px 0;
736     border-bottom: 1px solid var(--border-light);
737     font-size: 13px;
738   }
739   .post-review-row:last-child { border-bottom: none; }
740   .post-review-label {
741     font-weight: 700;
742     color: var(--text-muted);
743     min-width: 80px;
744     font-size: 11px;
745     text-transform: uppercase;
746   }
747   .post-error {
748     display: flex;
749     align-items: center;
750     gap: 8px;
751     padding: 10px 14px;
752     background: var(--danger-bg);
753     border: 1px solid var(--danger-border);
754     border-radius: 10px;
755     color: var(--danger);
756     font-size: 13px;
757     margin-top: 12px;
758   }
759   .post-create-footer {
760     padding: 16px 20px;
761     border-top: 1px solid var(--border);
762     background: var(--bg-primary);
763   }
764   
765   /* ========================
766      DETAIL PAGE
767      ======================== */
768   .detail-page {
769     background: var(--bg-primary);
770     min-height: 100%;
771   }
772   .detail-header {
773     display: flex;
774     align-items: center;
775     justify-content: space-between;
776     padding: 10px 16px;
777     border-bottom: 1px solid var(--border);
778     position: sticky;
779     top: 0;
780     background: var(--bg-primary);
781     z-index: 10;
782   }
783   .detail-header-actions { display: flex; gap: 4px; }
784   .detail-media {
785     position: relative;
786     background: #000;
787   }
788   .detail-media-img {
789     width: 100%;
790     max-height: 400px;
791     object-fit: cover;
792     display: block;
793   }
794   .detail-media-dots {
795     position: absolute;
796     bottom: 10px;
797     left: 0; right: 0;
798     display: flex;
799     justify-content: center;
800     gap: 5px;
801   }
802   .detail-content { padding: 16px 20px; max-width: 700px; margin: 0 auto; }
803   .detail-badges { display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
804   .detail-category-badge {
805     display: flex;
806     align-items: center;
807     gap: 4px;
808     padding: 4px 12px;
809     border-radius: 20px;
810     font-size: 12px;
811     font-weight: 600;
812     background: color-mix(in srgb, var(--cat-color, var(--brand-teal)) 10%, white);
813     color: var(--cat-color, var(--brand-teal));
814     border: 1px solid color-mix(in srgb, var(--cat-color, var(--brand-teal)) 20%, transparent);
815   }
816   .detail-locality-badge {
817     display: flex;
818     align-items: center;
819     gap: 4px;
820     padding: 4px 12px;
821     border-radius: 20px;
822     font-size: 12px;
823     color: var(--text-muted);
824     background: var(--bg-tertiary);
825   }
826   .detail-title {
827     font-size: 22px;
828     font-weight: 800;
829     font-family: var(--font-heading);
830     margin-bottom: 12px;
831     color: var(--text-primary);
832   }
833   .detail-reporter {
834     display: flex;
835     align-items: center;
836     gap: 10px;
837     margin-bottom: 16px;
838   }
839   .detail-reporter-avatar {
840     width: 32px;
841     height: 32px;
842     border-radius: 50%;
843     background: var(--gradient-primary);
844     color: white;
845     display: flex;
846     align-items: center;
847     justify-content: center;
848     font-size: 11px;
849     font-weight: 700;
850   }
851   .detail-reporter-name { font-size: 13px; font-weight: 600; }
852   .detail-reporter-time { font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 3px; }
853   .detail-description {
854     font-size: 14px;
855     line-height: 1.7;
856     color: var(--text-secondary);
857     margin-bottom: 20px;
858   }
859   .detail-actions-bar {
860     display: flex;
861     align-items: center;
862     gap: 16px;
863     padding: 12px 0;
864     border-top: 1px solid var(--border-light);
865     border-bottom: 1px solid var(--border-light);
866     margin-bottom: 24px;
867   }
868   .detail-stat {
869     display: flex;
870     align-items: center;
871     gap: 5px;
872     font-size: 13px;
873     color: var(--text-muted);
874   }
875   .detail-section {
876     margin-bottom: 28px;
877   }
878   .detail-section-title {
879     font-size: 15px;
880     font-weight: 700;
881     font-family: var(--font-heading);
882     margin-bottom: 14px;
883     color: var(--text-primary);
884   }
885   
886   /* Comments */
887   .detail-comments-list {
888     display: flex;
889     flex-direction: column;
890     gap: 12px;
891     margin-bottom: 16px;
892   }
893   .detail-comment {
894     display: flex;
895     gap: 10px;
896   }
897   .detail-comment-avatar {
898     width: 28px;
899     height: 28px;
900     border-radius: 50%;
901     background: var(--bg-tertiary);
902     color: var(--text-secondary);
903     display: flex;
904     align-items: center;
905     justify-content: center;
906     font-size: 10px;
907     font-weight: 700;
908     flex-shrink: 0;
909   }
910   .detail-comment-body { flex: 1; }
911   .detail-comment-header {
912     display: flex;
913     gap: 8px;
914     align-items: baseline;
915     margin-bottom: 2px;
916   }
917   .detail-comment-name { font-size: 12px; font-weight: 700; color: var(--text-primary); }
918   .detail-comment-time { font-size: 10px; color: var(--text-muted); }
919   .detail-comment-text { font-size: 13px; color: var(--text-secondary); line-height: 1.5; }
920   .detail-comment-form {
921     display: flex;
922     gap: 8px;
923     align-items: center;
924   }
925   .detail-comment-form .form-input {
926     flex: 1;
927     height: 38px;
928     font-size: 13px;
929   }
930   
931   /* ========================
932      NOTIFICATIONS PAGE
933      ======================== */
934   .notifications-page { padding: 20px; max-width: 700px; margin: 0 auto; }
935   .notifications-header {
936     display: flex;
937     align-items: center;
938     justify-content: space-between;
939     margin-bottom: 20px;
940   }
941   .notifications-title {
942     display: flex;
943     align-items: center;
944     gap: 8px;
945     font-family: var(--font-heading);
946     font-size: 20px;
947     font-weight: 700;
948   }
949   .notifications-unread-badge {
950     background: var(--danger);
951     color: white;
952     font-size: 11px;
953     font-weight: 700;
954     min-width: 20px;
955     height: 20px;
956     border-radius: 10px;
957     display: flex;
958     align-items: center;
959     justify-content: center;
960     padding: 0 5px;
961   }
962   .notification-item {
963     display: flex;
964     align-items: flex-start;
965     gap: 12px;
966     padding: 12px 14px;
967     border-radius: 12px;
968     cursor: pointer;
969     transition: background 0.2s;
970     position: relative;
971   }
972   .notification-item:hover { background: var(--bg-secondary); }
973   .notification-item.unread { background: var(--brand-teal-50); }
974   .notification-icon { font-size: 20px; flex-shrink: 0; padding-top: 2px; }
975   .notification-content { flex: 1; }
976   .notification-message { font-size: 13px; color: var(--text-primary); margin-bottom: 4px; line-height: 1.4; }
977   .notification-time { font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 3px; }
978   .notification-dot {
979     width: 8px;
980     height: 8px;
981     border-radius: 50%;
982     background: var(--brand-teal);
983     flex-shrink: 0;
984     margin-top: 6px;
985   }
986   .notifications-empty {
987     text-align: center;
988     padding: 60px 20px;
989   }
990   .notifications-empty-icon { font-size: 48px; margin-bottom: 12px; }
991   .notifications-empty h3 { font-family: var(--font-heading); margin-bottom: 8px; }
992   .notifications-empty p { color: var(--text-muted); font-size: 13px; }
993   
994   /* ========================
995      CONTROL PANEL LAYOUT
996      ======================== */
997   .cp-layout {
998     display: flex;
999     min-height: 100vh;
1000  }
1001  .cp-sidebar {
1002    width: 260px;
1003    background: var(--gradient-sidebar);
1004    display: flex;
1005    flex-direction: column;
1006    position: fixed;
1007    top: 0;
1008    bottom: 0;
1009    left: 0;
1010    z-index: 100;
1011    transition: width 0.2s ease;
1012    overflow-y: auto;
1013  }
1014  .cp-sidebar.collapsed { width: 64px; }
1015  .cp-main {
1016    flex: 1;
1017    margin-left: 260px;
1018    transition: margin-left 0.2s ease;
1019    display: flex;
1020    flex-direction: column;
1021    min-height: 100vh;
1022  }
1023  .cp-main.sidebar-collapsed { margin-left: 64px; }
1024  .cp-topbar {
1025    display: flex;
1026    align-items: center;
1027    justify-content: space-between;
1028    padding: 10px 24px;
1029    background: var(--bg-primary);
1030    border-bottom: 1px solid var(--border);
1031    min-height: 52px;
1032  }
1033  .cp-topbar-left, .cp-topbar-right { display: flex; align-items: center; gap: 10px; }
1034  .cp-role-switcher {
1035    padding: 4px 10px;
1036    border: 1px solid var(--border);
1037    border-radius: 8px;
1038    font-size: 12px;
1039    background: var(--bg-primary);
1040    cursor: pointer;
1041  }
1042  .cp-page-content {
1043    flex: 1;
1044    padding: 24px;
1045    background: var(--bg-page);
1046    overflow-y: auto;
1047  }
1048  .cp-role-badge {
1049    display: flex;
1050    align-items: center;
1051    gap: 6px;
1052    margin: 0 16px 16px;
1053    padding: 6px 12px;
1054    border-radius: 8px;
1055    font-size: 11px;
1056    font-weight: 700;
1057    background: rgba(13, 148, 136, 0.15);
1058    color: var(--brand-teal-light);
1059  }
1060  .cp-role-badge[data-role="super_admin"] {
1061    background: rgba(244, 63, 94, 0.15);
1062    color: #fb7185;
1063  }
1064  .cp-role-locality {
1065    font-weight: 400;
1066    opacity: 0.8;
1067  }
1068  
1069  @media (max-width: 768px) {
1070    .cp-sidebar { transform: translateX(-100%); width: 260px !important; }
1071    .cp-sidebar.mobile-open { transform: translateX(0); }
1072    .cp-main { margin-left: 0 !important; }
1073  }
1074  
1075  /* ========================
1076     CONTROL PANEL PAGES
1077     ======================== */
1078  .cp-page-header {
1079    display: flex;
1080    align-items: flex-start;
1081    justify-content: space-between;
1082    margin-bottom: 24px;
1083  }
1084  .cp-page-title {
1085    font-size: 22px;
1086    font-weight: 800;
1087    font-family: var(--font-heading);
1088    color: var(--text-primary);
1089  }
1090  .cp-page-subtitle {
1091    font-size: 13px;
1092    color: var(--text-muted);
1093    margin-top: 2px;
1094  }
1095  .cp-stats-grid {
1096    display: grid;
1097    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
1098    gap: 16px;
1099    margin-bottom: 24px;
1100  }
1101  .cp-charts-row {
1102    display: grid;
1103    grid-template-columns: 1fr 1fr;
1104    gap: 16px;
1105  }
1106  @media (max-width: 900px) { .cp-charts-row { grid-template-columns: 1fr; } }
1107  .cp-chart-card {
1108    background: var(--bg-card);
1109    border: 1px solid var(--border);
1110    border-radius: 16px;
1111    padding: 20px;
1112  }
1113  .cp-chart-title {
1114    font-size: 14px;
1115    font-weight: 700;
1116    margin-bottom: 16px;
1117    font-family: var(--font-heading);
1118    color: var(--text-primary);
1119  }
1120  
1121  /* Filters bar */
1122  .cp-filters-bar {
1123    display: flex;
1124    align-items: center;
1125    gap: 10px;
1126    flex-wrap: wrap;
1127    margin-bottom: 16px;
1128    padding: 12px 16px;
1129    background: var(--bg-card);
1130    border: 1px solid var(--border);
1131    border-radius: 12px;
1132  }
1133  .cp-search-wrap {
1134    display: flex;
1135    align-items: center;
1136    gap: 6px;
1137    padding: 6px 12px;
1138    background: var(--bg-tertiary);
1139    border-radius: 8px;
1140    flex: 1;
1141    min-width: 180px;
1142    max-width: 280px;
1143    color: var(--text-muted);
1144  }
1145  .cp-search-input {
1146    border: none;
1147    background: none;
1148    outline: none;
1149    font-size: 13px;
1150    width: 100%;
1151    color: var(--text-primary);
1152  }
1153  .cp-filter-select {
1154    padding: 6px 10px;
1155    border: 1px solid var(--border);
1156    border-radius: 8px;
1157    font-size: 12px;
1158    background: var(--bg-primary);
1159    color: var(--text-secondary);
1160    cursor: pointer;
1161  }
1162  .cp-sort-btns { display: flex; gap: 4px; }
1163  .cp-sort-btn {
1164    display: flex;
1165    align-items: center;
1166    gap: 4px;
1167    padding: 5px 10px;
1168    border: 1px solid var(--border);
1169    border-radius: 6px;
1170    background: var(--bg-primary);
1171    font-size: 11px;
1172    font-weight: 600;
1173    color: var(--text-muted);
1174    cursor: pointer;
1175    transition: all 0.2s;
1176  }
1177  .cp-sort-btn.active {
1178    background: var(--brand-teal);
1179    color: white;
1180    border-color: var(--brand-teal);
1181  }
1182  
1183  /* Table */
1184  .cp-table-wrap {
1185    background: var(--bg-card);
1186    border: 1px solid var(--border);
1187    border-radius: 12px;
1188    overflow-x: auto;
1189  }
1190  .cp-table {
1191    width: 100%;
1192    border-collapse: collapse;
1193  }
1194  .cp-table th {
1195    padding: 10px 14px;
1196    text-align: left;
1197    font-size: 11px;
1198    font-weight: 700;
1199    color: var(--text-muted);
1200    text-transform: uppercase;
1201    letter-spacing: 0.5px;
1202    border-bottom: 2px solid var(--border);
1203    white-space: nowrap;
1204  }
1205  .cp-table td {
1206    padding: 10px 14px;
1207    font-size: 13px;
1208    border-bottom: 1px solid var(--border-light);
1209    vertical-align: middle;
1210  }
1211  .cp-table tr:hover td { background: var(--bg-secondary); }
1212  .cp-case-title {
1213    font-weight: 600;
1214    color: var(--text-primary);
1215    cursor: pointer;
1216    max-width: 250px;
1217    overflow: hidden;
1218    text-overflow: ellipsis;
1219    white-space: nowrap;
1220  }
1221  .cp-case-title:hover { color: var(--brand-teal); }
1222  .cp-category-badge {
1223    font-size: 12px;
1224    white-space: nowrap;
1225  }
1226  .cp-locality-tag {
1227    display: flex;
1228    align-items: center;
1229    gap: 3px;
1230    font-size: 12px;
1231    color: var(--text-muted);
1232  }
1233  .cp-support-count {
1234    font-weight: 700;
1235    color: var(--brand-saffron);
1236  }
1237  .cp-status-badge {
1238    display: inline-block;
1239    padding: 2px 8px;
1240    border-radius: 10px;
1241    font-size: 10px;
1242    font-weight: 700;
1243    background: var(--status-color, #6b7280);
1244    color: white;
1245    text-transform: uppercase;
1246    letter-spacing: 0.3px;
1247  }
1248  .cp-time-cell {
1249    font-size: 12px;
1250    color: var(--text-muted);
1251    white-space: nowrap;
1252  }
1253  .cp-action-btns {
1254    display: flex;
1255    gap: 4px;
1256  }
1257  .cp-action-btn {
1258    width: 28px;
1259    height: 28px;
1260    border-radius: 6px;
1261    border: 1px solid var(--border);
1262    background: var(--bg-primary);
1263    display: flex;
1264    align-items: center;
1265    justify-content: center;
1266    cursor: pointer;
1267    transition: all 0.2s;
1268  }
1269  .cp-action-btn.verify { color: var(--success); }
1270  .cp-action-btn.verify:hover { background: var(--success); color: white; border-color: var(--success); }
1271  .cp-action-btn.reject { color: var(--danger); }
1272  .cp-action-btn.reject:hover { background: var(--danger); color: white; border-color: var(--danger); }
1273  .cp-action-btn.escalate { color: var(--brand-teal); }
1274  .cp-action-btn.escalate:hover { background: var(--brand-teal); color: white; border-color: var(--brand-teal); }
1275  .cp-empty {
1276    display: flex;
1277    flex-direction: column;
1278    align-items: center;
1279    gap: 8px;
1280    padding: 40px;
1281    color: var(--text-muted);
1282    text-align: center;
1283  }
1284  
1285  /* Modal */
1286  .cp-modal-overlay {
1287    position: fixed;
1288    inset: 0;
1289    background: rgba(0,0,0,0.5);
1290    z-index: 1000;
1291    display: flex;
1292    align-items: center;
1293    justify-content: center;
1294    padding: 20px;
1295  }
1296  .cp-modal {
1297    background: var(--bg-primary);
1298    border-radius: 16px;
1299    padding: 24px;
1300    max-width: 520px;
1301    width: 100%;
1302    box-shadow: var(--shadow-2xl);
1303  }
1304  .cp-modal-title {
1305    font-size: 18px;
1306    font-weight: 700;
1307    font-family: var(--font-heading);
1308    margin-bottom: 8px;
1309  }
1310  .cp-modal-desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 16px; }
1311  .cp-escalation-payload {
1312    background: var(--bg-secondary);
1313    border: 1px solid var(--border);
1314    border-radius: 12px;
1315    padding: 14px;
1316    margin-bottom: 20px;
1317  }
1318  .cp-payload-row {
1319    font-size: 13px;
1320    padding: 6px 0;
1321    border-bottom: 1px solid var(--border-light);
1322    display: flex;
1323    gap: 8px;
1324  }
1325  .cp-payload-row:last-child { border-bottom: none; }
1326  .cp-payload-row span:first-child { color: var(--text-muted); min-width: 80px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
1327  .cp-modal-actions {
1328    display: flex;
1329    gap: 8px;
1330    justify-content: flex-end;
1331  }
1332  
1333  /* Departments */
1334  .cp-departments-grid {
1335    display: grid;
1336    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
1337    gap: 16px;
1338  }
1339  .cp-dept-card {
1340    background: var(--bg-card);
1341    border: 1px solid var(--border);
1342    border-radius: 14px;
1343    padding: 18px;
1344  }
1345  .cp-dept-header { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
1346  .cp-dept-icon {
1347    width: 40px;
1348    height: 40px;
1349    border-radius: 10px;
1350    background: var(--primary-bg);
1351    color: var(--primary);
1352    display: flex;
1353    align-items: center;
1354    justify-content: center;
1355    flex-shrink: 0;
1356  }
1357  .cp-dept-name { font-size: 14px; font-weight: 700; font-family: var(--font-heading); }
1358  .cp-dept-category { font-size: 12px; color: var(--text-muted); }
1359  .cp-dept-details { margin-bottom: 12px; }
1360  .cp-dept-row {
1361    display: flex;
1362    align-items: center;
1363    gap: 6px;
1364    font-size: 12px;
1365    color: var(--text-secondary);
1366    padding: 4px 0;
1367  }
1368  .cp-dept-actions { display: flex; gap: 8px; }
1369  
1370  /* Moderators */
1371  .cp-section { margin-bottom: 24px; }
1372  .cp-section-title {
1373    display: flex;
1374    align-items: center;
1375    gap: 8px;
1376    font-size: 15px;
1377    font-weight: 700;
1378    font-family: var(--font-heading);
1379    margin-bottom: 14px;
1380  }
1381  .cp-moderators-grid {
1382    display: grid;
1383    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
1384    gap: 12px;
1385  }
1386  .cp-mod-card {
1387    display: flex;
1388    align-items: center;
1389    gap: 12px;
1390    padding: 14px;
1391    background: var(--bg-card);
1392    border: 1px solid var(--border);
1393    border-radius: 12px;
1394  }
1395  .cp-mod-avatar {
1396    width: 40px;
1397    height: 40px;
1398    border-radius: 50%;
1399    background: var(--gradient-primary);
1400    color: white;
1401    display: flex;
1402    align-items: center;
1403    justify-content: center;
1404    font-size: 14px;
1405    font-weight: 700;
1406    flex-shrink: 0;
1407  }
1408  .cp-mod-info { flex: 1; }
1409  .cp-mod-name { font-size: 14px; font-weight: 700; }
1410  .cp-mod-email { font-size: 11px; color: var(--text-muted); }
1411  .cp-mod-locality {
1412    display: flex;
1413    align-items: center;
1414    gap: 4px;
1415    font-size: 12px;
1416    color: var(--brand-teal);
1417    margin-top: 4px;
1418  }
1419  .cp-mod-ward {
1420    font-size: 10px;
1421    background: var(--brand-teal-50);
1422    padding: 1px 6px;
1423    border-radius: 6px;
1424    font-weight: 600;
1425  }
1426  .cp-locality-coverage {
1427    display: grid;
1428    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
1429    gap: 10px;
1430  }
1431  .cp-locality-item {
1432    padding: 12px 14px;
1433    border-radius: 10px;
1434    border: 1px solid var(--border);
1435    background: var(--bg-card);
1436  }
1437  .cp-locality-item.covered {
1438    border-color: var(--brand-teal);
1439    background: var(--brand-teal-50);
1440  }
1441  .cp-locality-name { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
1442  .cp-locality-ward { font-size: 11px; color: var(--text-muted); margin-bottom: 6px; }
1443  .cp-locality-assigned { font-size: 11px; color: var(--brand-teal); display: flex; align-items: center; gap: 4px; font-weight: 600; }
1444  .cp-locality-unassigned { font-size: 11px; color: var(--warning); font-weight: 600; }
1445  
1446  /* Role switcher in sidebar */
1447  .sidebar-role-switcher {
1448    width: 100%;
1449    padding: 3px 6px;
1450    border: 1px solid rgba(255,255,255,0.15);
1451    border-radius: 6px;
1452    font-size: 11px;
1453    background: rgba(255,255,255,0.08);
1454    color: var(--text-sidebar);
1455    cursor: pointer;
1456    margin-top: 4px;
1457  }
```

---

### 📄 c:\Users\Omkar\Downloads\CODEAMBLE_TZ140_THE_SOLVER_CIVICPULSE-main\src\app\verification\page.jsx
*Saved at: 8/9/2026, 10:09:37 AM*

**[ADDED]**
```
1     'use client';
2     
3     import { useEffect, useRef, useState } from 'react';
4     import { Camera, Check, LoaderCircle, MapPin, Mic, RotateCcw, ShieldCheck, Video, X } from 'lucide-react';
5     import { useAuth } from '@/lib/AuthContext';
6     import { createVerificationSubmission, uploadIssueMedia } from '@/lib/api';
7     
8     const MAX_FILE_SIZE = 50 * 1024 * 1024;
9     
10    function formatDuration(seconds) {
11      return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
12    }
13    
14    export default function VerificationPage() {
15      const { user } = useAuth();
16      const cameraVideoRef = useRef(null);
17      const cameraStreamRef = useRef(null);
18      const videoRecorderRef = useRef(null);
19      const videoChunksRef = useRef([]);
20      const audioStreamRef = useRef(null);
21      const audioRecorderRef = useRef(null);
22      const audioChunksRef = useRef([]);
23      const [media, setMedia] = useState(null);
24      const [cameraMode, setCameraMode] = useState(null);
25      const [cameraRecording, setCameraRecording] = useState(false);
26      const [audioRecording, setAudioRecording] = useState(false);
27      const [recordingSeconds, setRecordingSeconds] = useState(0);
28      const [location, setLocation] = useState(null);
29      const [locationAddress, setLocationAddress] = useState('');
30      const [locationState, setLocationState] = useState('requesting');
31      const [error, setError] = useState('');
32      const [submitting, setSubmitting] = useState(false);
33      const [submitted, setSubmitted] = useState(false);
34    
35      useEffect(() => {
36        if (!navigator.geolocation) {
37          setLocationState('unsupported');
38          setError('Location services are not supported by this browser.');
39          return undefined;
40        }
41    
42        navigator.geolocation.getCurrentPosition(({ coords }) => {
43          setLocation({ latitude: coords.latitude, longitude: coords.longitude, accuracy: coords.accuracy });
44          setLocationState('ready');
45          fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}&zoom=18&addressdetails=1`, {
46            headers: { Accept: 'application/json' },
47          })
48            .then((response) => response.ok ? response.json() : null)
49            .then((data) => setLocationAddress(data?.display_name || 'Address unavailable'))
50            .catch(() => setLocationAddress('Address unavailable'));
51        }, () => {
52          setLocationState('denied');
53          setError('Location permission is required to submit verification.');
54        }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 });
55    
56        return () => {
57          cameraStreamRef.current?.getTracks().forEach((track) => track.stop());
58          audioStreamRef.current?.getTracks().forEach((track) => track.stop());
59          if (media?.preview?.startsWith('blob:')) URL.revokeObjectURL(media.preview);
60        };
61      }, []);
62    
63      useEffect(() => {
64        if (!audioRecording && !cameraRecording) return undefined;
65        const timer = window.setInterval(() => setRecordingSeconds((seconds) => seconds + 1), 1000);
66        return () => window.clearInterval(timer);
67      }, [audioRecording, cameraRecording]);
68    
69      function setCapturedMedia(file, type) {
70        if (!file) return;
71        if (file.size > MAX_FILE_SIZE) {
72          setError('That recording is larger than 50 MB. Please record a shorter one.');
73          return;
74        }
75        if (media?.preview?.startsWith('blob:')) URL.revokeObjectURL(media.preview);
76        setMedia({ file, type, preview: URL.createObjectURL(file) });
77        setError('');
78      }
79    
80      async function openCamera(mode) {
81        setError('');
82        if (!navigator.mediaDevices?.getUserMedia) {
83          setError('Camera access is not supported by this browser.');
84          return;
85        }
86        try {
87          const stream = await navigator.mediaDevices.getUserMedia({
88            video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
89            audio: mode === 'video',
90          });
91          cameraStreamRef.current = stream;
92          setCameraMode(mode);
93          window.requestAnimationFrame(() => {
94            if (cameraVideoRef.current) {
95              cameraVideoRef.current.srcObject = stream;
96              cameraVideoRef.current.play().catch(() => {});
97            }
98          });
99        } catch {
100         setError('Camera permission is required to capture evidence.');
101       }
102     }
103   
104     function closeCamera() {
105       cameraStreamRef.current?.getTracks().forEach((track) => track.stop());
106       cameraStreamRef.current = null;
107       setCameraRecording(false);
108       setRecordingSeconds(0);
109       setCameraMode(null);
110     }
111   
112     function capturePhoto() {
113       const video = cameraVideoRef.current;
114       if (!video?.videoWidth) {
115         setError('The camera is still starting. Please try again in a moment.');
116         return;
117       }
118       const canvas = document.createElement('canvas');
119       canvas.width = video.videoWidth;
120       canvas.height = video.videoHeight;
121       canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
122       canvas.toBlob((blob) => {
123         if (!blob) return;
124         setCapturedMedia(new File([blob], `verification-photo-${Date.now()}.jpg`, { type: 'image/jpeg' }), 'photo');
125         closeCamera();
126       }, 'image/jpeg', 0.92);
127     }
128   
129     function toggleVideoRecording() {
130       if (cameraRecording) {
131         videoRecorderRef.current?.stop();
132         return;
133       }
134       const stream = cameraStreamRef.current;
135       if (!stream || !window.MediaRecorder) {
136         setError('Video recording is not supported by this browser.');
137         return;
138       }
139       const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus') ? 'video/webm;codecs=vp9,opus' : 'video/webm';
140       const recorder = new MediaRecorder(stream, { mimeType });
141       videoRecorderRef.current = recorder;
142       videoChunksRef.current = [];
143       recorder.ondataavailable = (event) => videoChunksRef.current.push(event.data);
144       recorder.onstop = () => {
145         const blob = new Blob(videoChunksRef.current, { type: mimeType });
146         setCapturedMedia(new File([blob], `verification-video-${Date.now()}.webm`, { type: mimeType }), 'video');
147         closeCamera();
148       };
149       recorder.start();
150       setRecordingSeconds(0);
151       setCameraRecording(true);
152     }
153   
154     async function toggleAudioRecording() {
155       setError('');
156       if (audioRecording) {
157         audioRecorderRef.current?.stop();
158         return;
159       }
160       if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
161         setError('Audio recording is not supported by this browser.');
162         return;
163       }
164       try {
165         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
166         const recorder = new MediaRecorder(stream);
167         audioStreamRef.current = stream;
168         audioRecorderRef.current = recorder;
169         audioChunksRef.current = [];
170         recorder.ondataavailable = (event) => audioChunksRef.current.push(event.data);
171         recorder.onstop = () => {
172           const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' });
173           setCapturedMedia(new File([blob], `verification-audio-${Date.now()}.webm`, { type: blob.type }), 'audio');
174           stream.getTracks().forEach((track) => track.stop());
175           audioStreamRef.current = null;
176           setAudioRecording(false);
177           setRecordingSeconds(0);
178         };
179         recorder.start();
180         setRecordingSeconds(0);
181         setAudioRecording(true);
182       } catch {
183         setError('Microphone permission is required to record audio.');
184       }
185     }
186   
187     function clearMedia() {
188       if (media?.preview?.startsWith('blob:')) URL.revokeObjectURL(media.preview);
189       setMedia(null);
190       setError('');
191     }
192   
193     async function submitVerification() {
194       if (!media || !location || locationState !== 'ready') {
195         setError('Add media and allow location access before submitting.');
196         return;
197       }
198       setSubmitting(true);
199       setError('');
200       const upload = await uploadIssueMedia(media.file, user?.id);
201       if (upload.error) {
202         setError(upload.error.message || upload.error);
203         setSubmitting(false);
204         return;
205       }
206       const result = await createVerificationSubmission({
207         user_id: user?.id || null,
208         media_url: upload.data.publicUrl,
209         media_path: upload.data.path,
210         media_type: media.type,
211         mime_type: media.file.type,
212         location_lat: location.latitude,
213         location_lng: location.longitude,
214         location_accuracy: location.accuracy,
215         location_address: locationAddress,
216       });
217       if (result.error) {
218         setError(result.error.message || result.error);
219         setSubmitting(false);
220         return;
221       }
222       setSubmitted(true);
223       setSubmitting(false);
224     }
225   
226     if (submitted) {
227       return <main className="verification-page"><section className="verification-card verification-success" aria-live="polite"><div className="verification-icon success"><Check size={28} /></div><p className="verification-kicker">Verification received</p><h1>Thank you for helping make the case clear.</h1><p>Your supporting media has been securely submitted.</p></section></main>;
228     }
229   
230     return (
231       <main className="verification-page">
232         <section className="verification-card">
233           <div className="verification-header"><div><p className="verification-kicker">Evidence capture</p><h1>Add media supporting your case:</h1><p className="verification-subtitle">A photo, video, or voice note gives your report useful context.</p></div><div className={`location-status ${locationState === 'ready' ? 'ready' : ''}`}><MapPin size={17} /><span>{locationState === 'ready' ? 'Location on' : 'Location required'}</span></div></div>
234           <div className="verification-location-note"><ShieldCheck size={18} /><span>Your location is captured with the media so the evidence can be placed accurately.</span></div>
235   
236           {!media && !cameraMode && !audioRecording ? <div className="verification-options">
237             <button type="button" className="verification-option photo" onClick={() => openCamera('photo')}><span className="option-icon"><Camera size={23} /></span><span><strong>Take a photo</strong><small>Use live camera</small></span></button>
238             <button type="button" className="verification-option video" onClick={() => openCamera('video')}><span className="option-icon"><Video size={23} /></span><span><strong>Record a video</strong><small>Use live camera</small></span></button>
239             <button type="button" className="verification-option audio" onClick={toggleAudioRecording}><span className="option-icon"><Mic size={23} /></span><span><strong>Use microphone</strong><small>Record a voice note</small></span></button>
240           </div> : null}
241   
242           {!media && cameraMode ? <div className="camera-capture-panel"><video ref={cameraVideoRef} className="camera-live-preview" muted playsInline /><div className="camera-capture-actions"><button type="button" className="secondary-action" onClick={closeCamera}><X size={17} /> Cancel</button>{cameraMode === 'photo' ? <button type="button" className="primary-action" onClick={capturePhoto}><Camera size={17} /> Capture photo</button> : <button type="button" className={`primary-action ${cameraRecording ? 'recording-action' : ''}`} onClick={toggleVideoRecording}>{cameraRecording ? 'Stop video' : 'Start video'}</button>}</div></div> : null}
243   
244           {!media && audioRecording ? <div className="audio-recording-panel"><div className="recording-dot" /><strong>Recording voice note</strong><span>{formatDuration(recordingSeconds)}</span><button type="button" className="primary-action recording-action" onClick={toggleAudioRecording}>Stop recording</button></div> : null}
245   
246           {media ? <div className="verification-review"><div className="media-preview">{media.type === 'photo' && <img src={media.preview} alt="Captured verification evidence" />}{media.type === 'video' && <video src={media.preview} controls playsInline />}{media.type === 'audio' && <><Mic size={32} /><audio src={media.preview} controls /></>}</div><p className="review-label">Review your {media.type} before sending.</p><div className="review-actions"><button type="button" className="secondary-action" onClick={clearMedia}><X size={17} /> Remove</button><button type="button" className="primary-action" disabled={submitting || locationState !== 'ready'} onClick={submitVerification}>{submitting ? <LoaderCircle size={17} className="spin" /> : <Check size={17} />}{submitting ? 'Sending...' : 'Confirm and send'}</button></div></div> : null}
247   
248           {error && <p className="verification-error" role="alert">{error}</p>}
249           {locationState === 'ready' && location && <div className="verification-location-details"><p className="verification-coordinates"><MapPin size={14} /> GPS accuracy {Math.round(location.accuracy)}m</p><p className="verification-address"><MapPin size={14} /> {locationAddress || 'Detecting address...'}</p></div>}
250           {media && !submitting && <button type="button" className="reset-link" onClick={clearMedia}><RotateCcw size={14} /> Choose different media</button>}
251         </section>
252       </main>
253     );
254   }
```

---

### 📄 c:\Users\Omkar\Downloads\CODEAMBLE_TZ140_THE_SOLVER_CIVICPULSE-main\.vscode\settings.json
*Saved at: 8/9/2026, 9:58:48 AM*

**[REMOVED]**
```
(from line ~1)
{}
```
**[ADDED]**
```
1     {
2         "git.ignoreLimitWarning": true
3     }
```

---

