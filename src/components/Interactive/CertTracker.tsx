import React, { useState } from 'react';
import { Award, CheckCircle, HelpCircle, ChevronRight, X } from 'lucide-react';

export default function CertTracker() {
  const [showNotes, setShowNotes] = useState(false);

  const domains = [
    { name: 'Cloud Concepts', percentage: 92, color: '#e53e3e' },
    { name: 'Security & Compliance', percentage: 85, color: '#3b82f6' },
    { name: 'Technology Infrastructure', percentage: 88, color: '#10b981' },
    { name: 'Billing & Pricing Models', percentage: 95, color: '#f59e0b' }
  ];

  const notesList = [
    { title: 'Cloud Models Overview', text: 'IaaS (EC2, VPC) provides computing controls; PaaS (Elastic Beanstalk, RDS) handles systems overhead; SaaS (Zendesk, Gmail) provides application end-use.' },
    { title: 'Shared Responsibility Model', text: 'AWS is responsible for security OF the cloud (global infrastructure, hardware, hypervisors); Customer is responsible for security IN the cloud (OS updates, firewall configs, identity access management, user data encryption).' },
    { title: 'AWS Architecting Principles', text: 'Design for failure (redundancy, Multi-AZ), loose coupling (queuing, API layers), security by design (least privilege IAM rules), and automated scalability.' }
  ];

  return (
    <div className="cert-tracker glass-card">
      <div className="tracker-header">
        <Award className="header-icon" size={24} />
        <div>
          <h3>AWS Certification & Domain Preparation</h3>
          <p>Tracking progress for the AWS Certified Cloud Practitioner (CLF-C02)</p>
        </div>
        <span className="exam-status-badge">In Progress</span>
      </div>

      <div className="tracker-grid">
        {/* Domain Gauges */}
        <div className="gauges-container">
          {domains.map((domain, idx) => (
            <div key={idx} className="gauge-card">
              <div className="circle-gauge-wrapper">
                <svg className="circle-gauge" viewBox="0 0 36 36">
                  {/* Background track */}
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Active fill */}
                  <path
                    className="circle-fill"
                    stroke={domain.color}
                    strokeDasharray={`${domain.percentage}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="gauge-value">{domain.percentage}%</div>
              </div>
              <span className="gauge-label">{domain.name}</span>
            </div>
          ))}
        </div>

        {/* Roadmap Timeline & Notes Trigger */}
        <div className="roadmap-container">
          <div className="roadmap-timeline">
            <div className="roadmap-step completed">
              <CheckCircle className="step-check" size={16} />
              <div className="step-info">
                <h4>AWS Curriculum Completed</h4>
                <p>Finished standard CLF-C02 training course modules.</p>
              </div>
            </div>

            <div className="roadmap-step completed">
              <CheckCircle className="step-check" size={16} />
              <div className="step-info">
                <h4>Practice Exams Cleared</h4>
                <p>Scored averages of 86% across mock test iterations.</p>
              </div>
            </div>

            <div className="roadmap-step current">
              <span className="step-dot"></span>
              <div className="step-info">
                <h4>Official Examination Slot</h4>
                <p>Scheduled for July 2026. Target goals set.</p>
              </div>
            </div>
          </div>

          <button className="notes-trigger-btn" onClick={() => setShowNotes(true)}>
            Open Study Notes Drawer <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Slide-out notes drawer overlay */}
      {showNotes && (
        <div className="notes-drawer-overlay" onClick={() => setShowNotes(false)}>
          <div className="notes-drawer glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h4>CLF-C02 Study Knowledge Base</h4>
              <button className="drawer-close-btn" onClick={() => setShowNotes(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="drawer-body">
              {notesList.map((note, idx) => (
                <div key={idx} className="note-card">
                  <h5>{note.title}</h5>
                  <p>{note.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-tracker {
          padding: 32px;
          position: relative;
        }

        .tracker-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .tracker-header h3 {
          font-size: 20px;
          color: var(--text-primary);
        }

        .tracker-header p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .exam-status-badge {
          margin-left: auto;
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .tracker-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
        }

        /* Domain Gauges Layout */
        .gauges-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .gauge-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px 16px;
        }

        .circle-gauge-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
        }

        .circle-gauge {
          width: 100%;
          height: 100%;
        }

        .circle-bg {
          fill: none;
          stroke: var(--border-color);
          stroke-width: 2.8;
        }

        .circle-fill {
          fill: none;
          stroke-width: 2.8;
          stroke-linecap: round;
          transition: stroke-dasharray 0.8s ease-out;
        }

        .gauge-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gauge-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* Roadmap Timeline */
        .roadmap-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .roadmap-timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          padding-left: 10px;
        }

        .roadmap-timeline::before {
          content: '';
          position: absolute;
          left: 17px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--border-color);
        }

        .roadmap-step {
          display: flex;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .step-check {
          color: #10b981;
          background: var(--bg-color);
          border-radius: 50%;
        }

        .step-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-color);
          border: 3px solid var(--bg-color);
          box-shadow: 0 0 10px var(--accent-glow);
          animation: pulse-glow 2s infinite;
        }

        .step-info h4 {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .step-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .notes-trigger-btn {
          width: 100%;
          padding: 12px;
          background: none;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition-normal);
          margin-top: 24px;
        }

        .notes-trigger-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        /* Drawer Overlay */
        .notes-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.3s ease;
        }

        .notes-drawer {
          width: 100%;
          max-width: 440px;
          height: 100%;
          background: var(--card-bg-solid) !important;
          border-left: 1px solid var(--border-color);
          border-radius: 0 !important;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-header h4 {
          font-size: 18px;
          color: var(--text-primary);
        }

        .drawer-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .drawer-close-btn:hover {
          color: var(--accent-color);
        }

        .drawer-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-y: auto;
        }

        .note-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .note-card h5 {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 6px;
          border-left: 2px solid var(--accent-color);
          padding-left: 8px;
        }

        .note-card p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 992px) {
          .tracker-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 480px) {
          .gauges-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
