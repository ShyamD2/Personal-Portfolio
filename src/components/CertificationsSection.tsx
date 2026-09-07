import React, { useState } from 'react';
import { Award, ShieldCheck, Maximize2, ExternalLink, X, Cloud, Terminal, Shield, BarChart2 } from 'lucide-react';

export default function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certificates = [
    {
      id: 'aws-academy',
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      category: 'cloud',
      date: 'Feb 2026',
      credId: 'Badge: aXAl5Kum',
      credUrl: 'https://www.credly.com/go/aXAl5Kum',
      icon: <Cloud size={16} />,
      img: '/certificates/aws-academy-cloud-foundations.jpg',
      description: 'Comprehensive AWS foundational training covering cloud economics, core compute, IAM security, VPC networking, and high-availability architecture.'
    },
    {
      id: 'tcm-linux',
      title: 'Linux 100: Fundamentals',
      issuer: 'TCM Security',
      category: 'cloud',
      date: 'Nov 2024',
      credId: 'cert_w14v5kck',
      icon: <Terminal size={16} />,
      img: '/certificates/tcm-linux-100.jpg',
      description: 'Hands-on practical Linux administration, filesystem permissions, process management, shell commands, and security diagnostics.'
    },
    {
      id: 'nminds-aws',
      title: 'AWS Solution Architect Level-2',
      issuer: 'Nminds Academy',
      category: 'cloud',
      date: 'Feb 2026',
      credId: '11121329',
      icon: <Cloud size={16} />,
      img: '/certificates/nminds-aws-solutions-architect.jpg',
      description: 'Hands-on training program covering cloud compute, AWS storage, IAM identity management, security policies, and web server deployment.'
    },
    {
      id: 'tcm-prog',
      title: 'Programming 100: Fundamentals',
      issuer: 'TCM Security',
      category: 'cloud',
      date: 'Nov 2024',
      credId: 'cert_smzmggl1',
      icon: <Terminal size={16} />,
      img: '/certificates/tcm-programming-100.jpg',
      description: 'Foundational programming principles, logic structuring, automation patterns, and core algorithmic problem solving.'
    },
    {
      id: 'mastercard-cyber',
      title: 'Mastercard Cybersecurity Simulation',
      issuer: 'Mastercard (Forage)',
      category: 'cyber',
      date: 'Apr 2026',
      credId: 'mz7iZLg4t5hKatxYS',
      icon: <Shield size={16} />,
      img: '/certificates/mastercard-cybersecurity.jpg',
      description: 'Practical security tasks involving phishing email simulation, security awareness telemetry analysis, and enterprise defense response.'
    },
    {
      id: 'deloitte-cyber',
      title: 'Deloitte Cyber Job Simulation',
      issuer: 'Deloitte (Forage)',
      category: 'cyber',
      date: 'Mar 2026',
      credId: 'Dy2o2H5mFsikpH3dS',
      icon: <Shield size={16} />,
      img: '/certificates/deloitte-cybersecurity.jpg',
      description: 'Enterprise incident response simulation, security vulnerability scanning, and threat intelligence analysis for security operations.'
    },
    {
      id: 'deloitte-data',
      title: 'Deloitte Data Analytics Simulation',
      issuer: 'Deloitte (Forage)',
      category: 'data',
      date: 'Mar 2026',
      credId: 'EWJGjc5BGkGkxMTLQ',
      icon: <BarChart2 size={16} />,
      img: '/certificates/deloitte-data-analytics.jpg',
      description: 'Practical data analysis, telemetry inspection, systems downtime pattern identification, and forensic technology reporting.'
    },
    {
      id: 'bcgx-data',
      title: 'Data for Decision Makers Simulation',
      issuer: 'BCG X (Forage)',
      category: 'data',
      date: 'May 2026',
      credId: '7xpYTPG66LCJLT9fR',
      icon: <BarChart2 size={16} />,
      img: '/certificates/bcgx-data-decision-makers.jpg',
      description: 'Business data analytics, performance modeling, and strategic communication of data-driven insights.'
    }
  ];

  const filteredCerts = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === activeFilter);

  return (
    <section id="certifications" className="certifications-section fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">07. Credentials</div>
          <h3 className="section-title">Verified Certifications & Accreditations</h3>
          <p className="section-subtitle">
            Formal technical certifications and verified simulations validating competencies in cloud architecture, Linux administration, and security.
          </p>
        </div>

        {/* Category Filters */}
        <div className="cert-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Credentials ({certificates.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cloud')}
          >
            Cloud & Systems ({certificates.filter(c => c.category === 'cloud').length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'cyber' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cyber')}
          >
            Cybersecurity ({certificates.filter(c => c.category === 'cyber').length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`}
            onClick={() => setActiveFilter('data')}
          >
            Data Analytics ({certificates.filter(c => c.category === 'data').length})
          </button>
        </div>

        {/* Certificate Cards Grid */}
        <div className="certs-grid">
          {filteredCerts.map((cert) => (
            <div key={cert.id} className="cert-item-card glass-card">
              {/* Thumbnail Container */}
              <div className="cert-thumb-box" onClick={() => setSelectedCert(cert)}>
                <img 
                  src={cert.img} 
                  alt={`${cert.title} Certificate`}
                  className="cert-thumb-img"
                  loading="lazy"
                />
                <div className="cert-thumb-overlay">
                  <Maximize2 size={20} />
                  <span>Preview Certificate</span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="cert-item-body">
                <div className="cert-top-row">
                  <span className="cert-issuer-badge">
                    {cert.icon} {cert.issuer}
                  </span>
                  <span className="cert-date-text">{cert.date}</span>
                </div>

                <h4 className="cert-card-title">{cert.title}</h4>
                <p className="cert-card-desc">{cert.description}</p>

                <div className="cert-card-footer-row">
                  <span className="cert-id-tag">ID: {cert.credId}</span>
                  <div className="cert-card-actions">
                    {cert.credUrl && (
                      <a 
                        href={cert.credUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-cert-link"
                        title="Verify on Credly"
                      >
                        <ExternalLink size={14} /> Verify
                      </a>
                    )}
                    <button 
                      className="btn-cert-preview" 
                      onClick={() => setSelectedCert(cert)}
                    >
                      <Maximize2 size={14} /> View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedCert(null)} 
              aria-label="Close certificate"
            >
              <X size={24} />
            </button>
            <div className="modal-image-wrapper">
              <img 
                src={selectedCert.img} 
                alt={`${selectedCert.title} Full Certificate`} 
                className="cert-modal-img"
              />
            </div>
            <div className="modal-footer">
              <div>
                <span className="modal-cert-title">{selectedCert.title}</span>
                <span className="modal-cert-issuer">Issued by {selectedCert.issuer} • {selectedCert.date}</span>
              </div>
              <div className="modal-actions-group">
                {selectedCert.credUrl && (
                  <a 
                    href={selectedCert.credUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-modal-verify"
                  >
                    Verify Credly <ExternalLink size={13} />
                  </a>
                )}
                <a 
                  href={selectedCert.img} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modal-open-link"
                >
                  Open Image <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .certifications-section {
          padding: 80px 0;
          position: relative;
        }

        .cert-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 32px;
          margin-bottom: 36px;
        }

        .filter-btn {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 8px 18px;
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          border-color: var(--accent-color);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background-color: var(--accent-color);
          border-color: var(--accent-color);
          color: #FFFFFF;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 26px;
        }

        .cert-item-card {
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cert-item-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-color);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }

        .cert-thumb-box {
          position: relative;
          width: 100%;
          height: 180px;
          background: #000000;
          overflow: hidden;
          cursor: pointer;
          border-bottom: 1px solid var(--border-color);
        }

        .cert-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .cert-thumb-box:hover .cert-thumb-img {
          transform: scale(1.04);
        }

        .cert-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-size: 12px;
          font-weight: 600;
        }

        .cert-thumb-box:hover .cert-thumb-overlay {
          opacity: 1;
        }

        .cert-item-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }

        .cert-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .cert-issuer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.06);
          border: 1px solid rgba(var(--accent-rgb), 0.15);
          padding: 3px 10px;
          border-radius: 50px;
        }

        .cert-date-text {
          font-size: 11.5px;
          color: var(--text-muted);
        }

        .cert-card-title {
          font-size: 15.5px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .cert-card-desc {
          font-size: 12.5px;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 16px;
          flex: 1;
        }

        .cert-card-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
        }

        .cert-id-tag {
          font-size: 11px;
          color: var(--text-muted);
          font-family: monospace;
          max-width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .cert-card-actions {
          display: flex;
          gap: 8px;
        }

        .btn-cert-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11.5px;
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 50px;
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          transition: var(--transition-fast);
        }

        .btn-cert-link:hover {
          background: rgba(var(--accent-rgb), 0.1);
        }

        .btn-cert-preview {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11.5px;
          color: var(--text-primary);
          background: none;
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .btn-cert-preview:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .modal-cert-issuer {
          display: block;
          font-size: 11.5px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .modal-actions-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-modal-verify {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-color);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
