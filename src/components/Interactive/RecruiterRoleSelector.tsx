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

      {/* Role Executive Summary Modal */}
      {isModalOpen && (
        <div className="role-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="role-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="role-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="role-modal-header">
              <div className="role-badge-tag">
                {selectedRole.icon}
                <span>Target Specialization</span>
              </div>
              <h3>{selectedRole.label} Dossier</h3>
              <p className="role-tagline-text">{selectedRole.tagline}</p>
            </div>

            <div className="role-modal-body">
              <div className="modal-section-block">
                <span className="section-mini-heading">Core Technical Stack:</span>
                <div className="role-chips-wrap">
                  {selectedRole.coreStack.map((tech, i) => (
                    <span key={i} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

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

            <div className="role-modal-footer">
              <a href="/Shyam_Kumar_D_Resume.pdf" download="Shyam_Kumar_D_Resume.pdf" className="btn btn-dossier-primary">
                <Download size={15} /> Download Official Resume (PDF)
              </a>
              <a href={selectedRole.recommendedReport.url} target="_blank" rel="noopener noreferrer" className="btn btn-dossier-secondary">
                <FileText size={15} /> Read Project Report <ExternalLink size={13} />
              </a>
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

        /* Modal Styles */
        .role-modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow-y: auto;
          animation: fadeIn 0.2s ease-out;
        }

        .role-modal-card {
          position: relative;
          width: 100%;
          max-width: 580px;
          max-height: min(86vh, 600px);
          display: flex;
          flex-direction: column;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          box-shadow: 0 25px 60px var(--shadow-color);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          margin: auto;
        }

        .role-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
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
        }

        .role-modal-header {
          flex-shrink: 0;
          padding-right: 36px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 12px;
        }

        .role-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38BDF8;
          font-family: var(--font-display);
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 6px;
        }

        .role-modal-header h3 {
          font-size: 21px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .role-tagline-text {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 0;
        }

        .role-modal-body {
          flex: 1 1 auto;
          min-height: 0; /* CRITICAL: Enables flex child to shrink & scroll */
          overflow-y: auto;
          padding-right: 6px;
          margin-top: 4px;
        }

        .role-modal-body::-webkit-scrollbar {
          width: 5px;
        }
        .role-modal-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .role-modal-body::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 4px;
        }
        .role-modal-body::-webkit-scrollbar-thumb:hover {
          background: var(--accent-color);
        }

        .modal-section-block {
          margin-bottom: 12px;
        }

        .section-mini-heading {
          display: block;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 6px;
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
          padding: 3px 8px;
          border-radius: 6px;
        }

        .role-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .role-bullets-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .bullet-check {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .highlight-box {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .highlight-item {
          display: flex;
          justify-content: space-between;
          font-size: 11.5px;
          flex-wrap: wrap;
          gap: 4px;
        }

        .hl-label {
          color: var(--text-muted);
        }

        .hl-val {
          font-weight: 700;
          color: var(--text-primary);
        }

        .hl-val.green {
          color: #10B981;
        }

        .role-modal-footer {
          flex-shrink: 0;
          display: flex;
          gap: 10px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
        }

        .btn-dossier-primary {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
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
          padding: 10px 14px;
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
