import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, ChevronRight, ChevronLeft, Zap, Sparkles, CheckCircle2, Clock, Calendar, MapPin, FileText, MessageSquare, Copy, Check, ArrowRight, ShieldCheck, DollarSign, Cpu } from 'lucide-react';
import { playTactileClick, playSuccessChime, playChaosAlert } from '../../utils/soundEffects';

interface SpeedrunModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHireMe?: () => void;
}

interface Slide {
  id: number;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  duration: number; // in seconds
  title: string;
  headline: string;
  metrics: { label: string; value: string; highlight?: boolean }[];
  visualPoints: string[];
  takeaway: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: 'STAGE 1 / 4 • THE INFRASTRUCTURE BLEED',
    badgeColor: '#EF4444',
    icon: <DollarSign size={20} />,
    duration: 15,
    title: 'The Multi-Million Dollar Cloud Waste Problem',
    headline: 'Standard Kubernetes round-robin scheduling strands nodes at 15–30% CPU while paying for 100% compute hours.',
    metrics: [
      { label: 'Unoptimized Fleet', value: '6 EC2 Nodes' },
      { label: 'Average CPU Load', value: '28% (Fragmented)' },
      { label: 'Idle Compute Bleed', value: '$876 / month', highlight: true }
    ],
    visualPoints: [
      'Pods scattered blindly across instances without capacity density awareness',
      'High baseline idle cost ($20–$80/mo per idle VM) draining startup & enterprise budgets',
      'Emergency over-provisioning during burst traffic causing SLA penalties'
    ],
    takeaway: 'Industry reality: Most engineering teams over-provision AWS fleets by 2x–3x simply because default kube-scheduler lacks predictive bin-packing.'
  },
  {
    id: 2,
    badge: 'STAGE 2 / 4 • THE FLAGSHIP SOLUTION',
    badgeColor: '#10B981',
    icon: <Cpu size={20} />,
    duration: 15,
    title: 'KubeForecast™: Custom Go K8s Scheduler',
    headline: 'Engineered a low-latency Kubernetes Scheduling Framework plugin evaluating candidate nodes in 90.35ns.',
    metrics: [
      { label: 'Optimized Fleet', value: '2 EC2 Nodes' },
      { label: 'Waterline Capacity', value: '75% (Nominal)' },
      { label: 'Annualized Compute ROI', value: '-$7,008 / yr', highlight: true }
    ],
    visualPoints: [
      'Dynamic 75% waterline bin-packing consolidates pods without SLA throttling risk',
      'PreScore evaluation in 90.35 ns/op — sub-microsecond scheduling overhead',
      'Hardware soak-tested on live AWS EKS c7i-flex.large cluster with 50%–66.7% node reduction'
    ],
    takeaway: 'Proven engineering depth: Codified 100% in Terraform with Helm v3 charts, Prometheus exporters, and 5 Grafana dashboards.'
  },
  {
    id: 3,
    badge: 'STAGE 3 / 4 • AUTONOMOUS DEVSECOPS',
    badgeColor: '#38BDF8',
    icon: <ShieldCheck size={20} />,
    duration: 15,
    title: 'Project AEGIS: 820ms Zero-Trust SOAR Fabric',
    headline: 'Replaced manual 45-minute incident triage with autonomous EventBridge, Step Functions, and Lambda threat isolation.',
    metrics: [
      { label: 'MTTR Containment', value: '820ms Latency' },
      { label: 'Audit Vaulting', value: 'SEC 17a-4 WORM' },
      { label: 'Manual Clicks', value: '0 (100% Terraform)', highlight: true }
    ],
    visualPoints: [
      'AWS GuardDuty captures brute-force SSH finding JSON and triggers Step Function workflow',
      'Autonomous Python Lambda executes AWS WAFv2 API call to blacklist rogue IP in 820ms',
      'Digital forensics streamed into immutable S3 Object Lock WORM vaults for SEC Rule 17a-4 compliance'
    ],
    takeaway: 'Zero manual ClickOps: Audited with Checkov, TFLint, and Trivy static analysis guardrails across 110/110 passing test suites.'
  },
  {
    id: 4,
    badge: 'STAGE 4 / 4 • RECRUITER ACTION & AVAILABILITY',
    badgeColor: '#A855F7',
    icon: <Sparkles size={20} />,
    duration: 15,
    title: 'Candidate Availability & Immediate Fit',
    headline: 'B.Sc. Networking undergraduate graduating 2027 with deep TCP/IP, Linux OS, and AWS IaC competencies.',
    metrics: [
      { label: 'Academic Standing', value: '8.4 / 10.0 GPA' },
      { label: 'College Term', value: '6th Semester' },
      { label: 'Target Track', value: '6-Month Full-Time Internship (PPO Track)', highlight: true }
    ],
    visualPoints: [
      'Available immediately / Jan 2027 for a dedicated 6-month full-time internship term with PPO track',
      'Prepared for immediate relocation to Bangalore, Chennai, Hyderabad, Pune, or global remote roles',
      'Industrial experience at Reccsar Pvt. Ltd. (Web Development with Cloud Computing) & Deloitte Simulations'
    ],
    takeaway: 'Ready to deploy production value from Day 1 across SRE, Kubernetes, Cloud Infrastructure, and DevOps automation.'
  }
];

export default function SpeedrunModal({ isOpen, onClose, onOpenHireMe }: SpeedrunModalProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [elapsedInSlide, setElapsedInSlide] = useState(0);

  const slide = SLIDES[currentIdx];
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIdx(0);
      setElapsedInSlide(0);
      setIsPlaying(true);
      return;
    }

    playSuccessChime();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    timerRef.current = setInterval(() => {
      setElapsedInSlide((prev) => {
        if (prev >= slide.duration) {
          // Advance slide or loop/finish
          if (currentIdx < SLIDES.length - 1) {
            playTactileClick();
            setCurrentIdx((c) => c + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return slide.duration;
          }
        }
        return prev + 0.25;
      });
    }, 250);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isPlaying, currentIdx, slide.duration]);

  if (!isOpen) return null;

  const handleNext = () => {
    playTactileClick();
    if (currentIdx < SLIDES.length - 1) {
      setCurrentIdx((c) => c + 1);
      setElapsedInSlide(0);
    }
  };

  const handlePrev = () => {
    playTactileClick();
    if (currentIdx > 0) {
      setCurrentIdx((c) => c - 1);
      setElapsedInSlide(0);
    }
  };

  const togglePlay = () => {
    playTactileClick();
    setIsPlaying(!isPlaying);
  };

  const handleCopyPitch = () => {
    playSuccessChime();
    const pitchText = `Hi Team — found a strong Cloud/DevOps candidate for our upcoming internship / graduate roles:
• Candidate: Shyam Kumar D (B.Sc. Networking, 8.4 GPA, 6th Semester)
• Core Proof: Engineered KubeForecast (custom Go K8s scheduler, 90.35ns latency, hardware-tested on AWS EKS) & Project AEGIS (autonomous SOAR threat isolation).
• Availability: 6-Month Full-Time Internship (PPO Track) starting Jan/Feb | Open to Relocation & Remote.
• Interactive SRE Cockpit: https://shyam-kumar-portfolio.netlify.app
• Direct Contact: shyamcloud021@gmail.com | +91 7010672248`;

    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 3000);
  };

  const progressPercent = Math.min(100, (elapsedInSlide / slide.duration) * 100);

  return (
    <div className="speedrun-overlay" onClick={onClose}>
      <div className="speedrun-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Header / Progress Bars */}
        <div className="speedrun-top-header">
          <div className="speedrun-progress-bars">
            {SLIDES.map((s, idx) => {
              let fill = 0;
              if (idx < currentIdx) fill = 100;
              else if (idx === currentIdx) fill = progressPercent;
              return (
                <div 
                  key={s.id} 
                  className="bar-track" 
                  onClick={() => {
                    playTactileClick();
                    setCurrentIdx(idx);
                    setElapsedInSlide(0);
                  }}
                  title={`Jump to Slide ${idx + 1}`}
                >
                  <div className="bar-fill" style={{ width: `${fill}%` }}></div>
                </div>
              );
            })}
          </div>

          <div className="speedrun-controls-row">
            <div className="speedrun-badge">
              <Zap size={13} className="speedrun-zap-icon" />
              <span>60-SECOND RECRUITER SPEEDRUN</span>
              <span className="slide-counter-badge">{currentIdx + 1} / {SLIDES.length}</span>
            </div>

            <div className="header-actions-group">
              <button 
                type="button" 
                className="btn-pause-speedrun" 
                onClick={togglePlay}
                title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
                aria-label={isPlaying ? 'Pause Speedrun' : 'Resume Speedrun'}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button 
                type="button" 
                className="btn-close-speedrun" 
                onClick={onClose} 
                aria-label="Close Speedrun"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Content Body */}
        <div className="speedrun-body">
          <div className="slide-category-tag" style={{ color: slide.badgeColor }}>
            <span className="stage-icon-box">{slide.icon}</span>
            <span>{slide.badge}</span>
          </div>

          <h3 className="slide-title">{slide.title}</h3>
          <p className="slide-headline">{slide.headline}</p>

          {/* Metrics Trio Row */}
          <div className="slide-metrics-row">
            {slide.metrics.map((m, i) => (
              <div key={i} className={`metric-card ${m.highlight ? 'highlight-metric' : ''}`}>
                <span className="metric-lbl">{m.label}</span>
                <span className="metric-val">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Technical Visual Highlights */}
          <div className="slide-points-list">
            {slide.visualPoints.map((pt, i) => (
              <div key={i} className="point-item">
                <CheckCircle2 size={16} className="point-check-icon" style={{ color: slide.badgeColor }} />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* SRE Takeaway Box */}
          <div className="slide-takeaway-box">
            <span className="takeaway-tag">💡 Executive Takeaway:</span>
            <p>{slide.takeaway}</p>
          </div>

          {/* Final Slide 4 Special Action Buttons */}
          {currentIdx === 3 && (
            <div className="speedrun-final-ctas">
              <button
                type="button"
                className="btn-cta-primary"
                onClick={() => {
                  onClose();
                  if (onOpenHireMe) onOpenHireMe();
                }}
              >
                <Sparkles size={16} />
                <span>Book 15-Min Intro Screen</span>
              </button>

              <a
                href="/Shyam_Kumar_D_Resume.pdf"
                download="Shyam_Kumar_D_Resume.pdf"
                className="btn-cta-secondary"
              >
                <FileText size={16} />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                type="button"
                className={`btn-cta-pitch ${copiedPitch ? 'copied' : ''}`}
                onClick={handleCopyPitch}
              >
                {copiedPitch ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedPitch ? 'Pitch Copied!' : 'Copy Hiring Pitch'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom Step Navigation Bar */}
        <div className="speedrun-footer-nav">
          <button 
            type="button" 
            className="btn-nav-step" 
            onClick={handlePrev} 
            disabled={currentIdx === 0}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <span className="nav-slide-indicator">
            Slide {currentIdx + 1} of {SLIDES.length}
          </span>

          {currentIdx < SLIDES.length - 1 ? (
            <button 
              type="button" 
              className="btn-nav-step next-step" 
              onClick={handleNext}
            >
              <span>Next Stage</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button 
              type="button" 
              className="btn-nav-step finish-step" 
              onClick={() => {
                onClose();
                if (onOpenHireMe) onOpenHireMe();
              }}
            >
              <span>Connect With Shyam</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>

      <style>{`
        .speedrun-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(5, 5, 8, 0.9);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease-out;
        }

        .speedrun-modal-card {
          position: relative;
          width: 100%;
          max-width: 780px;
          background: #111116;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(229, 62, 62, 0.15);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Top Progress Bars Header */
        .speedrun-top-header {
          padding: 16px 24px 12px 24px;
          background: #16161D;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .speedrun-progress-bars {
          display: flex;
          gap: 6px;
          width: 100%;
        }

        .bar-track {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .bar-track:hover {
          height: 6px;
        }

        .bar-fill {
          height: 100%;
          background: var(--accent-color);
          border-radius: 4px;
          transition: width 0.25s linear;
        }

        .speedrun-controls-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .speedrun-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          color: var(--accent-color);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .speedrun-zap-icon {
          animation: pulse-glow 1.5s infinite;
        }

        .slide-counter-badge {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          padding: 2px 8px;
          border-radius: 50px;
          font-size: 10px;
        }

        .header-actions-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-pause-speedrun {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-pause-speedrun:hover {
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-close-speedrun {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-close-speedrun:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          border-color: var(--accent-color);
        }

        /* Body */
        .speedrun-body {
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 72vh;
          overflow-y: auto;
        }

        .slide-category-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .stage-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-title {
          font-size: 24px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
          margin: 0;
        }

        .slide-headline {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin: 0;
        }

        /* Metrics Row */
        .slide-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 4px;
        }

        .metric-card {
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-card.highlight-metric {
          background: rgba(229, 62, 62, 0.08);
          border-color: rgba(229, 62, 62, 0.3);
        }

        .metric-lbl {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
          font-weight: 700;
        }

        .metric-val {
          font-size: 16px;
          font-weight: 800;
          color: #FFFFFF;
          font-family: var(--font-display);
        }

        .highlight-metric .metric-val {
          color: var(--accent-color);
        }

        /* Visual Points */
        .slide-points-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.45;
        }

        .point-check-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Takeaway Box */
        .slide-takeaway-box {
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border-left: 3px solid var(--accent-color);
        }

        .takeaway-tag {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--accent-color);
          display: block;
          margin-bottom: 2px;
        }

        .slide-takeaway-box p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          line-height: 1.4;
        }

        /* Slide 4 Final CTAs */
        .speedrun-final-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .btn-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 50px;
          background: var(--accent-color);
          color: #FFFFFF;
          border: none;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: 0 4px 15px rgba(229, 62, 62, 0.35);
        }

        .btn-cta-primary:hover {
          background: #c53030;
          transform: translateY(-2px);
        }

        .btn-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          font-weight: 700;
          font-size: 13px;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-2px);
        }

        .btn-cta-pitch {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 50px;
          background: rgba(229, 62, 62, 0.12);
          border: 1px solid rgba(229, 62, 62, 0.3);
          color: var(--accent-color);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-cta-pitch.copied {
          background: #10B981;
          color: #FFFFFF;
          border-color: #10B981;
        }

        /* Footer Nav */
        .speedrun-footer-nav {
          padding: 16px 24px;
          background: #16161D;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .btn-nav-step {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.8);
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-nav-step:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
        }

        .btn-nav-step:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .btn-nav-step.next-step {
          background: var(--accent-color);
          color: #FFFFFF;
          border-color: var(--accent-color);
        }

        .btn-nav-step.finish-step {
          background: #10B981;
          color: #FFFFFF;
          border-color: #10B981;
        }

        .nav-slide-indicator {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        @keyframes scaleUp {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 650px) {
          .speedrun-modal-card {
            max-height: 94vh;
          }

          .speedrun-body {
            padding: 20px 16px;
          }

          .slide-title {
            font-size: 19px;
          }

          .slide-metrics-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .speedrun-final-ctas {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-cta-primary, .btn-cta-secondary, .btn-cta-pitch {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
