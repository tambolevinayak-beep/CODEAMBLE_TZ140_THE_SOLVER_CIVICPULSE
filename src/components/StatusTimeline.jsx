'use client';
import { Check, AlertTriangle, Clock, ArrowRight } from 'lucide-react';

function formatTime(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString('en-IN', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

export default function StatusTimeline({ timeline = [] }) {
  if (!timeline.length) return null;

  return (
    <div className="timeline">
      {timeline.map((step, idx) => {
        const isLast = idx === timeline.length - 1;
        const isCompleted = !isLast;
        const isEscalated = step.status === 'escalated';
        const actorName = step.actor_name || (step.actor && step.actor !== 'system' ? step.actor : null);

        let dotClass = '';
        if (isEscalated) dotClass = 'escalated';
        else if (isLast) dotClass = 'active';
        else dotClass = 'completed';

        const Icon = isEscalated ? AlertTriangle
          : isCompleted ? Check
          : Clock;

        return (
          <div key={idx} className="timeline-item">
            <div className={`timeline-dot ${dotClass}`}>
              <Icon />
            </div>
            <div className="timeline-content">
              <div className="timeline-title">
                {step.status.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </div>
              <div className="timeline-time">{formatTime(step.time)}</div>
              {step.note && (
                <div className="timeline-actor" style={{ marginTop: '2px' }}>
                  {step.note}
                </div>
              )}
              {actorName && (
                <div className="timeline-actor">
                  By {actorName}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
