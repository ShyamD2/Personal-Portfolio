import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Building2, Calendar, MapPin, Download, Copy, Check, ExternalLink, GraduationCap, Clock } from 'lucide-react';
import { playSuccessChime } from '../../utils/soundEffects';

interface CollegeNocModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHireMe?: () => void;
}

export default function CollegeNocModal({ isOpen, onClose, onOpenHireMe }: CollegeNocModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyClearancePitch = () => {
    const pitch = `Candidate Clearance Verification:
Name: Shyam Kumar D (B.Sc. Networking - Cloud Computing, 2024-2027)
Institution: Subbalakshmi Lakshmipathy College of Science (Madurai)
Academic Standing: GPA 8.4 / 10.0
Clearance Status: Official College NOC Secured — Immediate Joiner
Start Date: November 16, 2026 (Full 6-Month Term)
Location: Bengaluru, Karnataka (Cleared for On-site / Hybrid / Remote)
Attendance Waiver: 100% Attendance Exemption Granted for Full-Time Industry Hours
Portfolio: https://shyamkumard.netlify.app/
Resume: https://shyamkumard.netlify.app/Shyam_Kumar_D_Resume.pdf`;

    navigator.clipboard.writeText(pitch);
    setCopied(true);
    playSuccessChime();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="noc-modal-overlay" onClick={onClose}>
      <div className="noc-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="noc-modal-header">
          <div className="noc-header-badge">
            <ShieldCheck size={16} className="noc-badge-icon" />
            <span>OFFICIAL ACADEMIC CLEARANCE</span>
          </div>
          <button 
            type="button" 
            className="noc-close-btn" 
            onClick={onClose}
            aria-label="Close NOC modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Title */}
        <div className="noc-title-block">
          <h3>College NOC & Immediate Joiner Verification</h3>
          <p>
            Official institutional clearance validating immediate availability for 6-Month Industrial Internships or Full-Time Engineering roles.
          </p>
        </div>

        {/* Status Highlights Grid */}
        <div className="noc-highlights-grid">
          <div className="noc-highlight-card">
            <div className="noc-card-icon green">
              <Calendar size={18} />
            </div>
            <div>
              <span className="noc-card-label">Availability Start Date</span>
              <strong className="noc-card-val">November 16, 2026</strong>
            </div>
          </div>

          <div className="noc-highlight-card">
            <div className="noc-card-icon blue">
              <MapPin size={18} />
            </div>
            <div>
              <span className="noc-card-label">Primary Location</span>
              <strong className="noc-card-val">Bengaluru, Karnataka</strong>
            </div>
          </div>

          <div className="noc-highlight-card">
            <div className="noc-card-icon purple">
              <Clock size={18} />
            </div>
            <div>
              <span className="noc-card-label">Term Duration</span>
              <strong className="noc-card-val">6-Month Full-Time / PPO</strong>
            </div>
          </div>

          <div className="noc-highlight-card">
            <div className="noc-card-icon gold">
              <GraduationCap size={18} />
            </div>
            <div>
              <span className="noc-card-label">Academic GPA</span>
              <strong className="noc-card-val">8.4 / 10.0 (Cloud Major)</strong>
            </div>
          </div>
        </div>

        {/* Institutional Clearance Specifications */}
        <div className="noc-spec-list">
          <div className="noc-spec-item">
            <CheckCircle2 size={16} className="noc-check-icon" />
            <div>
              <strong>100% Attendance Waiver:</strong> College has formally granted full daytime class attendance exemptions for the entirety of the 6-month industrial internship term.
            </div>
          </div>

          <div className="noc-spec-item">
            <CheckCircle2 size={16} className="noc-check-icon" />
            <div>
              <strong>Corporate Work Hours Cleared:</strong> Authorized for standard 40+ hour enterprise work weeks (On-site in Bengaluru, Hybrid, or Remote) without academic schedule conflicts.
            </div>
          </div>

          <div className="noc-spec-item">
            <CheckCircle2 size={16} className="noc-check-icon" />
            <div>
              <strong>Target Engineering Tracks:</strong> Cloud Infrastructure, DevOps Engineering, Kubernetes & SRE, DevSecOps Automation.
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="noc-modal-actions">
          <button 
            type="button" 
            className="btn-noc-copy"
            onClick={handleCopyClearancePitch}
          >
            {copied ? <Check size={16} style={{ color: '#10B981' }} /> : <Copy size={16} />}
            <span>{copied ? 'Clearance Copied to Clipboard!' : 'Copy Summary for HR / Manager'}</span>
          </button>

          <a 
            href="/Shyam_Kumar_D_Resume.pdf" 
            download="Shyam_Kumar_D_Resume.pdf" 
            className="btn-noc-download"
          >
            <Download size={16} />
            <span>Download Verified Resume</span>
          </a>
        </div>
      </div>

      <style>{`
        .noc-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .noc-modal-container {
          width: 100%;
          max-width: 620px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 32px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          max-height: 90vh;
          overflow-y: auto;
        }

        .noc-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .noc-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #10B981;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 4px 12px;
          border-radius: 50px;
        }

        .noc-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 50%;
          transition: var(--transition-fast);
        }

        .noc-close-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .noc-title-block h3 {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .noc-title-block p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .noc-highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }

        .noc-highlight-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .noc-card-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .noc-card-icon.green { background: rgba(16, 185, 129, 0.12); color: #10B981; }
        .noc-card-icon.blue { background: rgba(56, 189, 248, 0.12); color: #38BDF8; }
        .noc-card-icon.purple { background: rgba(168, 85, 247, 0.12); color: #A855F7; }
        .noc-card-icon.gold { background: rgba(234, 179, 8, 0.12); color: #EAB308; }

        .noc-card-label {
          display: block;
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .noc-card-val {
          display: block;
          font-size: 13.5px;
          color: var(--text-primary);
          font-weight: 700;
          margin-top: 2px;
        }

        .noc-spec-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(var(--accent-rgb), 0.03);
          border: 1px solid rgba(var(--accent-rgb), 0.12);
          border-radius: var(--radius-md);
          padding: 18px;
          margin-bottom: 24px;
        }

        .noc-spec-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .noc-check-icon {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .noc-spec-item strong {
          color: var(--text-primary);
        }

        .noc-modal-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-noc-copy {
          flex: 1;
          min-width: 220px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--accent-color);
          color: #FFFFFF;
          border: none;
          padding: 12px 18px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.35);
        }

        .btn-noc-copy:hover {
          background: #DC2626;
          transform: translateY(-2px);
        }

        .btn-noc-download {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          padding: 12px 20px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-noc-download:hover {
          border-color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 520px) {
          .noc-highlights-grid {
            grid-template-columns: 1fr;
          }
          .noc-modal-container {
            padding: 24px 18px;
          }
          .noc-modal-actions {
            flex-direction: column;
          }
          .btn-noc-copy, .btn-noc-download {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
