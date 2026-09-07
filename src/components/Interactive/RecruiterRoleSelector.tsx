import React, { useState } from 'react';
import { Cloud, Cpu, Shield, Terminal, ArrowRight, Download, FileText, CheckCircle2, Sparkles, X, ExternalLink } from 'lucide-react';
import { playTactileClick, playSuccessChime } from '../../utils/soundEffects';

export interface RoleData {
  id: string;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  coreStack: string[];
  keyAchievements: string[];
  targetProjects: string[];
  targetCert: string;
  recommendedReport: { name: string; url: string };
}

export const ROLES: RoleData[] = [
  {
    id: 'k8s',
    label: 'Kubernetes & SRE',
    icon: <Cpu size={15} />,
    tagline: 'Deterministic container scheduling, custom Go scheduling plugins, and low-latency cluster bin-packing.',
    coreStack: ['Kubernetes', 'Go (Golang)', 'AWS EKS', 'Prometheus', 'Chaos Mesh', 'Docker'],
    keyAchievements: [
      'Architected KubeForecast: Hardware-tested Go scheduler evaluating candidate nodes in 90.35ns',
      'Engineered dynamic 75% waterline limit preventing SLA throttling while slashing compute waste by 50%',
      'Authored 45-page empirical research benchmarking Go scheduling algorithms under burst loads'
    ],
    targetProjects: ['KubeForecast (Go K8s Scheduler)', 'Distributed Key-Value Raft Cluster'],
    targetCert: 'AWS Academy Cloud Architecting & Linux Systems Administration',
    recommendedReport: { name: 'KubeForecast Empirical Dossier', url: '/reports/Project Report-KubeForecast.pdf' }
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure / AWS',
    icon: <Cloud size={15} />,
    tagline: 'Multi-AZ virtualized networks, AWS Transit Gateway fabric, and high-availability distributed architecture.',
    coreStack: ['AWS (VPC, EKS, ALB, RDS, TGW)', 'Terraform', 'Linux Bash', 'Docker', 'Networking (CIDR, BGP)'],
    keyAchievements: [
      'Engineered automated multi-region VPC peering with dual Transit Gateway redundancy & IPsec failover',
      'Designed zero-outage multi-AZ Kubernetes cluster deployments on AWS with automated NAT gateways',
      'B.Sc. Networking specialization (8.4 GPA) with deep routing, CIDR subnetting, and TCP/IP fundamentals'
    ],
    targetProjects: ['Multi-Region VPC Peering Fabric', 'KubeForecast AWS Production Infrastructure'],
    targetCert: 'AWS Academy Graduate - Cloud Architecting & Foundations',
    recommendedReport: { name: 'AWS Cloud Architecture Blueprint', url: '/reports/Project Report-KubeForecast.pdf' }
  },
  {
    id: 'devops',
    label: 'DevOps & CI/CD (IaC)',
    icon: <Terminal size={15} />,
    tagline: '100% codified infrastructure with Terraform, immutable container delivery pipelines, and FinOps automation.',
    coreStack: ['Terraform IaC', 'GitHub Actions', 'Docker CI/CD', 'Helm Charts', 'Linux Admin', 'Git'],
    keyAchievements: [
      '100% Codified Infrastructure as Code: Zero manual clicks via modular, DRY Terraform codebases',
      'Configured automated CI/CD linting, container vulnerability scanning with Trivy, and automated EKS rollouts',
      'Codified state management with remote S3 backends, DynamoDB state locking, and zero drift'
    ],
    targetProjects: ['KubeForecast Terraform Modules', 'Automated CI/CD Delivery Fabric'],
    targetCert: 'Linux Systems Administration & Open Source Software Simulation',
    recommendedReport: { name: 'Automated Terraform Infrastructure Report', url: '/reports/Project Report-KubeForecast.pdf' }
  },
  {
    id: 'security',
    label: 'DevSecOps & SOAR',
    icon: <Shield size={15} />,
    tagline: 'Zero-trust network segmentation, real-time threat isolation via EventBridge, and autonomous WAF mitigation.',
    coreStack: ['AWS GuardDuty', 'AWS WAF', 'AWS Lambda', 'EventBridge', 'Trivy', 'Zero-Trust IAM'],
    keyAchievements: [
      'Created Project AEGIS: Autonomous SOAR fabric isolating compromised EC2 nodes in under 1.2s',
      'Configured automated EventBridge event rules routing GuardDuty anomalies to quarantine Lambda functions',
      'Strict Zero-Trust IAM policies with least-privilege RBAC, secret encryption via AWS KMS, and audit logging'
    ],
    targetProjects: ['Project AEGIS (Autonomous Threat Containment)', 'Zero-Trust VPC Security Architecture'],
    targetCert: 'Mastercard Cybersecurity Simulation & Tata Cybersecurity Analyst',
    recommendedReport: { name: 'Project AEGIS SOAR Security Dossier', url: '/reports/Project Report-KubeForecast.pdf' }
  }
];

export default function RecruiterRoleSelector({ onSelectRole }: { onSelectRole?: (roleId: string) => void }) {
  const [selectedRole, setSelectedRole] = useState<RoleData>(ROLES[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoleClick = (role: RoleData) => {
    playTactileClick();
    setSelectedRole(role);
    if (onSelectRole) onSelectRole(role.id);
  };

  const handleOpenDossier = () => {
    playSuccessChime();
    setIsModalOpen(true);
  };

  return (
    <div className="recruiter-fasttrack-wrapper">
      <div className="fasttrack-header">
        <span className="fasttrack-label">
          <Sparkles size={13} /> Recruiter Fast-Track Focus:
        </span>
        <span className="fasttrack-hint">Filter candidate qualifications for your exact opening:</span>
      </div>

      <div className="fasttrack-pills-row">
        {ROLES.map((role) => (
          <button
            key={role.id}
            type="button"
            className={`role-pill-btn ${selectedRole.id === role.id ? 'active' : ''}`}
            onClick={() => handleRoleClick(role)}
          >
            {role.icon}
            <span>{role.label}</span>
          </button>
        ))}

        <button 
          type="button" 
          className="dossier-preview-btn"
          onClick={handleOpenDossier}
          title="Open Role Executive Summary"
        >
          <span>View {selectedRole.label} Summary</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Role Executive Summary Modal - Full Box No-Scroll Layout */}
      {isModalOpen && (
        <div className="role-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="role-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="role-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
              <X size={18} />
            </button>

            {/* Top Header */}
            <div className="role-modal-header">
              <div className="role-badge-tag">
                {selectedRole.icon}
                <span>Target Specialization</span>
              </div>
              <h3>{selectedRole.label} Dossier</h3>
              <p className="role-tagline-text">{selectedRole.tagline}</p>
            </div>

            {/* Two-Column Full Box Grid: Entire Dossier Visible At Once */}
            <div className="role-modal-grid">
              {/* Left Column: Core Stack & Accreditation */}
              <div className="modal-col-left">
                <div className="modal-section-block">
                  <span className="section-mini-heading">Core Technical Stack:</span>
                  <div className="role-chips-wrap">
                    {selectedRole.coreStack.map((tech, i) => (
                      <span key={i} className="tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section-block highlight-box">
                  <div className="highlight-item">
                    <span className="hl-label">Matching Accreditation:</span>
                    <span className="hl-val">{selectedRole.targetCert}</span>
                  </div>
                  <div className="highlight-item">
                    <span className="hl-label">Candidate Availability:</span>
                    <span className="hl-val green">6th Sem 6-Month Internship (PPO Track) & Full-Time</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Achievements & Action Buttons */}
              <div className="modal-col-right">
                <div className="modal-section-block">
                  <span className="section-mini-heading">Key Engineering Proof Points:</span>
                  <ul className="role-bullets-list">
                    {selectedRole.keyAchievements.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} className="bullet-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="role-modal-actions">
                  <a href="/Shyam_Kumar_D_Resume.pdf" download="Shyam_Kumar_D_Resume.pdf" className="btn btn-dossier-primary">
                    <Download size={14} /> Download Official Resume (PDF)
                  </a>
                  <a href={selectedRole.recommendedReport.url} target="_blank" rel="noopener noreferrer" className="btn btn-dossier-secondary">
                    <FileText size={14} /> Read Project Report <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .recruiter-fasttrack-wrapper {
          margin-top: 24px;
          padding: 16px 20px;
          background: rgba(18, 18, 22, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: var(--radius-md);
          max-width: 720px;
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fasttrack-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .fasttrack-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          color: #38BDF8; /* Radiant cyan */
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .fasttrack-hint {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }

        .fasttrack-pills-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
        }

        .role-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .role-pill-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #FFFFFF;
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        .role-pill-btn.active {
          background: #38BDF8;
          border-color: #38BDF8;
          color: #0F172A;
          font-weight: 700;
          box-shadow: 0 0 16px rgba(56, 189, 248, 0.4);
        }

        .dossier-preview-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 50px;
          background: var(--accent-color);
          border: 1px solid var(--accent-color);
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
          margin-left: auto;
        }

        .dossier-preview-btn:hover {
          background: #FFFFFF;
          color: var(--accent-color);
          border-color: #FFFFFF;
          transform: translateY(-1px);
        }

        /* Modal Styles - Full Box Layout (No Scrollbar) */
        .role-modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .role-modal-card {
          position: relative;
          width: 100%;
          max-width: 860px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px 30px 26px 30px;
          box-shadow: 0 25px 60px var(--shadow-color);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .role-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
          z-index: 5;
        }

        .role-modal-close:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          border-color: var(--accent-color);
          transform: rotate(90deg);
        }

        .role-modal-header {
          padding-right: 44px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 16px;
        }

        .role-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38BDF8;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 6px;
        }

        .role-modal-header h3 {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .role-tagline-text {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 0;
        }

        /* Two-Column Grid: Complete Full-Box View Without Scrolling */
        .role-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 24px;
          align-items: start;
        }

        .modal-col-left {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .modal-col-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-section-block {
          display: flex;
          flex-direction: column;
        }

        .section-mini-heading {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .role-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-chip {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 9px;
          border-radius: 6px;
        }

        .role-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .role-bullets-list li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 12.5px;
          color: var(--text-secondary);
          line-height: 1.42;
        }

        .bullet-check {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .highlight-box {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 12px 14px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .highlight-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 11.5px;
        }

        .hl-label {
          color: var(--text-muted);
          font-size: 10.5px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .hl-val {
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .hl-val.green {
          color: #10B981;
        }

        .role-modal-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: auto;
        }

        .btn-dossier-primary {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 11px 16px;
          background: var(--accent-color);
          border: 1px solid var(--accent-color);
          color: #FFFFFF;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-dossier-primary:hover {
          background: #FFFFFF;
          color: var(--accent-color);
          box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.25);
        }

        .btn-dossier-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 11px 15px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-dossier-secondary:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .role-modal-card {
            max-width: 95%;
            padding: 20px;
            max-height: 90vh;
            overflow-y: auto;
          }
          .role-modal-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .role-modal-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .dossier-preview-btn {
            width: 100%;
            justify-content: center;
            margin-left: 0;
            margin-top: 4px;
          }
          .role-modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
