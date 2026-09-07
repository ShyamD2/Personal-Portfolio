import React, { useState } from 'react';
import { Award, Calendar, Building, CheckCircle2, Maximize2, X, ExternalLink, ShieldCheck } from 'lucide-react';

export default function InternshipSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="internship" className="internship-section fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">05. Professional Internship</div>
          <h3 className="section-title">Industrial Cloud & Web Engineering</h3>
          <p className="section-subtitle">
            Formal industry training credential issued by Reccsar Private Limited validating hands-on cloud virtualization and web development competencies.
          </p>
        </div>

        {/* Internship Showcase Card */}
        <div className="internship-showcase-grid">
          {/* Left: Certificate Visual Card */}
          <div className="cert-preview-col">
            <div className="cert-frame-wrapper glass-card">
              <div className="cert-badge-floating">
                <ShieldCheck size={16} /> Verified Credential
              </div>

              <div className="cert-image-container" onClick={() => setIsModalOpen(true)}>
                <img 
                  src="/certificates/internship-reccsar.jpg" 
                  alt="Reccsar Private Limited Internship Certificate - Shyam Kumar D" 
                  className="cert-img-thumb"
                />
                <div className="cert-overlay-hover">
                  <Maximize2 size={24} />
                  <span>Click to view full certificate</span>
                </div>
              </div>

              <div className="cert-card-footer">
                <div className="cert-ref-info">
                  <span className="ref-label">Reference No:</span>
                  <span className="ref-val">2026/000047</span>
                </div>
                <button className="btn-view-full" onClick={() => setIsModalOpen(true)}>
                  <Maximize2 size={14} /> Full View
                </button>
              </div>
            </div>
          </div>

          {/* Right: Technical Deliverables & Metadata */}
          <div className="internship-details-col">
            <div className="internship-meta-card glass-card">
              <div className="internship-header-meta">
                <div className="company-info-block">
                  <div className="company-icon-box">
                    <Building size={24} />
                  </div>
                  <div>
                    <h4 className="company-name">Reccsar Private Limited</h4>
                    <p className="internship-role">Web Development with Cloud Computing Intern</p>
                  </div>
                </div>

                <div className="internship-date-badge">
                  <Calendar size={14} />
                  <span>17 Apr 2026 – 18 May 2026</span>
                </div>
              </div>

              <div className="internship-summary-box">
                <p>
                  Completed intensive industrial internship training focused on architecting, containerizing, and deploying scalable web application workloads on AWS cloud infrastructure. Recognized for exceptional work ethic, punctuality, and technical problem solving.
                </p>
              </div>

              <div className="internship-deliverables">
                <h5>Key Technical Deliverables:</h5>
                <ul className="deliverables-list">
                  <li>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span><strong>Cloud Workload Deployment:</strong> Provisioned and configured resilient multi-tier web applications on AWS compute and storage units.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span><strong>Infrastructure as Code:</strong> Explored automated cloud resource provisioning and reproducible deployment scripts to eliminate manual setup.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span><strong>Network Architecture & Security:</strong> Analyzed cloud topology configurations, private/public subnets, route tables, and security group isolation.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span><strong>System Verification:</strong> Monitored server uptime metrics, performed load distribution testing, and conducted diagnostic root cause troubleshooting.</span>
                  </li>
                </ul>
              </div>

              <div className="internship-director-signature">
                <div className="sig-meta">
                  <span className="sig-label">Authorized Signatory:</span>
                  <span className="sig-name">S.K. Sanjay Raj, Director</span>
                </div>
                <div className="sig-corp">
                  <span>Reccsar Pvt Ltd, Madurai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      {isModalOpen && (
        <div className="cert-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close certificate">
              <X size={24} />
            </button>
            <div className="modal-image-wrapper">
              <img 
                src="/certificates/internship-reccsar.jpg" 
                alt="Reccsar Internship Certificate Full View" 
                className="cert-modal-img"
              />
            </div>
            <div className="modal-footer">
              <span className="modal-cert-title">Reccsar Private Limited — Certificate of Internship</span>
              <a 
                href="/certificates/internship-reccsar.jpg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-open-link"
              >
                Open in new tab <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .internship-section {
          padding: 80px 0;
          position: relative;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 15px;
          margin-top: 8px;
          max-width: 680px;
        }

        .internship-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 36px;
          margin-top: 40px;
          align-items: stretch;
        }

        .cert-frame-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          overflow: hidden;
          padding: 20px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cert-badge-floating {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(var(--accent-rgb), 0.1);
          color: var(--accent-color);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 16px;
          align-self: flex-start;
        }

        .cert-image-container {
          position: relative;
          cursor: pointer;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          background: #FFFFFF;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-img-thumb {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .cert-image-container:hover .cert-img-thumb {
          transform: scale(1.02);
        }

        .cert-overlay-hover {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-size: 13px;
          font-weight: 600;
        }

        .cert-image-container:hover .cert-overlay-hover {
          opacity: 1;
        }

        .cert-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
        }

        .cert-ref-info {
          font-size: 12px;
        }

        .ref-label {
          color: var(--text-muted);
          margin-right: 6px;
        }

        .ref-val {
          font-weight: 700;
          color: var(--text-primary);
        }

        .btn-view-full {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-view-full:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .internship-meta-card {
          padding: 36px;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .internship-header-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .company-info-block {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .company-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .company-name {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .internship-role {
          font-size: 14px;
          color: var(--accent-color);
          font-weight: 600;
        }

        .internship-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 50px;
          font-size: 12px;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .internship-summary-box {
          background: rgba(var(--accent-rgb), 0.03);
          border-left: 3px solid var(--accent-color);
          padding: 16px 20px;
          border-radius: 0 8px 8px 0;
          margin-bottom: 24px;
        }

        .internship-summary-box p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .internship-deliverables h5 {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
        }

        .deliverables-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .deliverables-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .internship-director-signature {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
          font-size: 13px;
        }

        .sig-label {
          color: var(--text-muted);
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sig-name {
          font-weight: 700;
          color: var(--text-primary);
        }

        .sig-corp {
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Modal Styles */
        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease;
        }

        .cert-modal-content {
          position: relative;
          max-width: 750px;
          max-height: 92vh;
          background: var(--card-bg-solid);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
        }

        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          color: #FFFFFF;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: var(--accent-color);
        }

        .modal-image-wrapper {
          overflow-y: auto;
          max-height: 80vh;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111112;
        }

        .cert-modal-img {
          width: 100%;
          height: auto;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 4px;
        }

        .modal-footer {
          padding: 14px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          background: var(--card-bg-solid);
        }

        .modal-cert-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .modal-open-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 900px) {
          .internship-showcase-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
