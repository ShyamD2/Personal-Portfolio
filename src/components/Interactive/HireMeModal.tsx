import React, { useState } from 'react';
import { X, Mail, Phone, MessageSquare, FileText, Check, Copy, ExternalLink, Sparkles, MapPin, Send } from 'lucide-react';
import { playSuccessChime, playTactileClick } from '../../utils/soundEffects';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [copied, setCopied] = useState(false);
  const [copiedPitch, setCopiedPitch] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    playTactileClick();
    navigator.clipboard.writeText('shyamcloud021@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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

  const whatsappMessage = encodeURIComponent(
    "Hi Shyam, I saw your Cloud & DevOps portfolio (KubeForecast & AWS projects) and would love to connect about an engineering opportunity!"
  );

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="hire-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge">
            <Sparkles size={12} />
            <span>Open for 6th Sem Internship & Full-Time</span>
          </div>
          <h3>Let's Connect & Collaborate</h3>
          <p>Actively seeking a 6-month full-time internship for Semester 6 (PPO track) and graduate Cloud / DevOps roles.</p>
        </div>

        {/* Candidate Profile Strip */}
        <div className="modal-profile-strip">
          <div className="modal-avatar-box">
            <img src="/assets/photo_formal.png" alt="Shyam Kumar D" />
            <span className="profile-status-dot"></span>
          </div>
          <div className="modal-profile-info">
            <h4>Shyam Kumar D</h4>
            <span className="profile-role">Cloud Infrastructure & DevOps Engineer</span>
            <span className="profile-location">
              <MapPin size={12} /> Madurai, Tamil Nadu • Open to Relocation & Remote
            </span>
          </div>
        </div>

        {/* Fast Action Cards Grid */}
        <div className="modal-actions-grid">
          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/917010672248?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-channel-card whatsapp-channel"
          >
            <div className="channel-icon-box whatsapp-box">
              <MessageSquare size={22} />
            </div>
            <div className="channel-text">
              <span className="channel-title">Chat on WhatsApp</span>
              <span className="channel-detail">+91 7010672248 (Instant Response)</span>
            </div>
            <ExternalLink size={16} className="channel-ext-icon" />
          </a>

          {/* Copy Email Button */}
          <button
            type="button"
            className="action-channel-card email-channel"
            onClick={handleCopyEmail}
          >
            <div className="channel-icon-box email-box">
              <Mail size={22} />
            </div>
            <div className="channel-text">
              <span className="channel-title">{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
              <span className="channel-detail">shyamcloud021@gmail.com</span>
            </div>
            {copied ? <Check size={18} className="copied-check" /> : <Copy size={16} className="channel-ext-icon" />}
          </button>

          {/* Direct Phone Call */}
          <a href="tel:+917010672248" className="action-channel-card phone-channel">
            <div className="channel-icon-box phone-box">
              <Phone size={22} />
            </div>
            <div className="channel-text">
              <span className="channel-title">Direct Mobile Call</span>
              <span className="channel-detail">+91 7010672248</span>
            </div>
            <ExternalLink size={16} className="channel-ext-icon" />
          </a>

          {/* Download Official CV */}
          <a
            href="/Shyam_Kumar_D_Resume.pdf"
            download
            className="action-channel-card resume-channel"
          >
            <div className="channel-icon-box resume-box">
              <FileText size={22} />
            </div>
            <div className="channel-text">
              <span className="channel-title">Download Resume</span>
              <span className="channel-detail">PDF Dossier (Cloud & DevOps)</span>
            </div>
            <ExternalLink size={16} className="channel-ext-icon" />
          </a>
        </div>

        {/* 1-Click Hiring Manager Forwarding Pitch */}
        <div className="hiring-pitch-banner">
          <div className="pitch-banner-text">
            <span className="pitch-tag"><Sparkles size={11} /> Recruiter Superpower</span>
            <h5>Copy 1-Click Hiring Manager Summary</h5>
            <p>Pre-formatted executive summary ready to paste directly into your internal Slack or hiring thread.</p>
          </div>
          <button 
            type="button" 
            className={`btn-copy-pitch ${copiedPitch ? 'copied' : ''}`}
            onClick={handleCopyPitch}
          >
            {copiedPitch ? <Check size={16} /> : <Copy size={16} />}
            <span>{copiedPitch ? 'Pitch Copied!' : 'Copy Summary'}</span>
          </button>
        </div>

        {/* Footer Note */}
        <div className="modal-footer-note">
          <p>
            Connect on{' '}
            <a
              href="https://www.linkedin.com/in/shyam-kumar-d-951254329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn &rarr;
            </a>{' '}
            or submit via the{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Form &rarr;
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .modal-backdrop-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease-out;
        }

        .hire-modal-card {
          position: relative;
          width: 100%;
          max-width: 580px;
          max-height: calc(100vh - 48px);
          overflow-y: auto;
          background: var(--card-bg-solid);
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          box-shadow: 0 25px 60px var(--shadow-color);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          border-color: var(--accent-color);
          transform: rotate(90deg);
        }

        .modal-header {
          margin-bottom: 24px;
        }

        .modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10B981;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 12px;
        }

        .modal-header h3 {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .modal-header p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* Profile Strip */
        .modal-profile-strip {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 14px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .modal-avatar-box {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-color);
          flex-shrink: 0;
        }

        .modal-avatar-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-status-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10B981;
          border: 2px solid var(--card-bg-solid);
        }

        .modal-profile-info h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .profile-role {
          display: block;
          font-size: 13px;
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .profile-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-muted);
        }

        /* Actions Grid */
        .modal-actions-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .action-channel-card {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-color);
          border: 1.5px solid var(--border-color);
          color: var(--text-primary);
          text-decoration: none;
          cursor: pointer;
          transition: var(--transition-normal);
          width: 100%;
          text-align: left;
        }

        .action-channel-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent-color);
          background: var(--card-bg-solid);
          box-shadow: 0 8px 24px var(--shadow-color);
        }

        .whatsapp-channel:hover {
          border-color: #25D366;
          background: rgba(37, 211, 102, 0.08);
        }

        .channel-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          flex-shrink: 0;
        }

        .whatsapp-box {
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
        }

        .email-box {
          background: rgba(229, 62, 62, 0.15);
          color: var(--accent-color);
        }

        .phone-box {
          background: rgba(59, 130, 246, 0.15);
          color: #3B82F6;
        }

        .resume-box {
          background: rgba(168, 85, 247, 0.15);
          color: #A855F7;
        }

        .channel-text {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .channel-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .channel-detail {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .channel-ext-icon {
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .action-channel-card:hover .channel-ext-icon {
          color: #FFFFFF;
        }

        .copied-check {
          color: #10B981;
        }

        /* Hiring Manager Pitch Banner */
        .hiring-pitch-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          background: rgba(229, 62, 62, 0.06);
          border: 1px solid rgba(229, 62, 62, 0.25);
          margin-bottom: 20px;
        }

        .pitch-banner-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .pitch-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pitch-banner-text h5 {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .pitch-banner-text p {
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .btn-copy-pitch {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-sm);
          background: var(--accent-color);
          color: #FFFFFF;
          border: none;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-fast);
          box-shadow: 0 4px 15px rgba(229, 62, 62, 0.3);
        }

        .btn-copy-pitch:hover {
          background: #c53030;
          transform: translateY(-1px);
        }

        .btn-copy-pitch.copied {
          background: #10B981;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        /* Footer */
        .modal-footer-note {
          text-align: center;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .modal-footer-note a {
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
        }

        .modal-footer-note a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .modal-backdrop-overlay {
            padding: 12px;
          }

          .hire-modal-card {
            padding: 22px 16px;
            max-width: 96vw;
            max-height: 90vh;
          }

          .modal-header h3 {
            font-size: 20px;
          }

          .modal-header p {
            font-size: 12.5px;
          }

          .modal-profile-strip {
            padding: 12px;
            gap: 12px;
            margin-bottom: 16px;
          }

          .modal-avatar-box {
            width: 44px;
            height: 44px;
          }

          .modal-profile-info h4 {
            font-size: 15px;
          }

          .profile-role {
            font-size: 12px;
          }

          .profile-location {
            font-size: 10px;
          }

          .action-channel-card {
            padding: 10px 14px;
          }

          .channel-icon-box {
            width: 38px;
            height: 38px;
            margin-right: 12px;
          }

          .channel-title {
            font-size: 13px;
          }

          .channel-detail {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}
