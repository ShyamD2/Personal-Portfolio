import { Network, Cloud, Shield, Terminal, Activity, Layers } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Cloud Infrastructure (AWS)',
      icon: <Cloud className="skill-icon" size={22} />,
      skills: [
        { name: 'AWS EKS (Kubernetes)', status: 'Advanced', proof: 'KubeForecast' },
        { name: 'AWS EC2 & Auto Scaling', status: 'Expert', proof: 'Multi-AZ Web' },
        { name: 'Application Load Balancers', status: 'Expert', proof: 'Traffic Mgmt' },
        { name: 'AWS VPC & Networking', status: 'Expert', proof: '3-AZ Subnets' },
        { name: 'AWS Lambda & API Gateway', status: 'Advanced', proof: 'Serverless' },
        { name: 'DynamoDB & S3 Storage', status: 'Advanced', proof: 'WORM Vaults' }
      ]
    },
    {
      title: 'Containers & Orchestration',
      icon: <Layers className="skill-icon" size={22} />,
      skills: [
        { name: 'Kubernetes Architecture', status: 'Advanced', proof: 'AWS EKS v1.31' },
        { name: 'Custom Scheduler Plugins', status: 'Advanced', proof: '90.35ns Go' },
        { name: 'Docker Multi-Stage Builds', status: 'Expert', proof: '<25MB Go' },
        { name: 'Helm v3 Charts & Deployments', status: 'Advanced', proof: 'Automated CI' },
        { name: 'Pod Disruption Budgets (PDB)', status: 'Core', proof: 'Zero Dropped' },
        { name: 'Cluster Autoscaling & FinOps', status: 'Advanced', proof: '50% Cut' }
      ]
    },
    {
      title: 'IaC & CI/CD Automation',
      icon: <Terminal className="skill-icon" size={22} />,
      skills: [
        { name: 'Terraform Modules & State', status: 'Expert', proof: '100% IaC' },
        { name: 'GitOps & Drift Detection (Go)', status: 'Expert', proof: 'DriftWarden' },
        { name: 'GitHub Actions Workflows', status: 'Expert', proof: 'Automated CI' },
        { name: 'Go (Golang Systems Code)', status: 'Advanced', proof: 'Go 1.24+' },
        { name: 'Bash Shell Automation', status: 'Expert', proof: 'User Data' },
        { name: 'Python Automation Scripts', status: 'Advanced', proof: 'Python 3.13' }
      ]
    },
    {
      title: 'Networking & Protocols',
      icon: <Network className="skill-icon" size={22} />,
      skills: [
        { name: 'TCP/IP & OSI Model', status: 'Core', proof: 'B.Sc. Networking' },
        { name: 'CIDR & Subnet Slicing', status: 'Expert', proof: 'Multi-Tier' },
        { name: 'Route Tables & Gateways', status: 'Expert', proof: 'NAT & IGW' },
        { name: 'IPsec Site-to-Site VPN', status: 'Advanced', proof: 'Secure Tunnel' },
        { name: 'DNS (Route 53) & HTTP/S', status: 'Core', proof: 'Sub-30ms' },
        { name: 'Security Groups & NACLs', status: 'Expert', proof: 'CIS Audit' }
      ]
    },
    {
      title: 'Observability & Monitoring',
      icon: <Activity className="skill-icon" size={22} />,
      skills: [
        { name: 'Prometheus Metrics Collection', status: 'Advanced', proof: 'Go Exporter' },
        { name: 'Grafana Custom Dashboards', status: 'Advanced', proof: '5 Dashboards' },
        { name: 'AWS CloudWatch Alarms', status: 'Expert', proof: 'Auto Alerts' },
        { name: 'System Telemetry & Exporters', status: 'Advanced', proof: 'Waterline' },
        { name: 'Log Ingestion & Athena SQL', status: 'Advanced', proof: 'Partitioned' },
        { name: 'Live Hardware Soak Testing', status: 'Core', proof: 'AWS EKS' }
      ]
    },
    {
      title: 'DevSecOps & Cloud Governance',
      icon: <Shield className="skill-icon" size={22} />,
      skills: [
        { name: 'IAM Least-Privilege Policies', status: 'Expert', proof: 'IRSA OIDC' },
        { name: 'Autonomous SOAR Pipelines', status: 'Advanced', proof: 'Project AEGIS' },
        { name: 'SEC Rule 17a-4 S3 WORM', status: 'Advanced', proof: 'Immutable' },
        { name: 'Static Security (Checkov, Trivy)', status: 'Advanced', proof: 'Zero CVE' },
        { name: 'AWS KMS Key Management', status: 'Advanced', proof: 'CMK Rotation' },
        { name: 'EventBridge & Step Functions', status: 'Advanced', proof: '<820ms Edge' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section fade-in-section">
      <div className="container">
        {/* Section title */}
        <div className="section-header">
          <div className="section-label">02. Systems Architecture & Stack</div>
          <h3 className="section-title">Core Technical Expertise</h3>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-card glass-card">
              <div className="skills-card-header">
                {category.icon}
                <h4>{category.title}</h4>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-chips-row">
                      {skill.proof && <span className="skill-proof-tag">{skill.proof}</span>}
                      <span className={`skill-status status-${skill.status.toLowerCase().replace(' & ', '-')}`}>
                        {skill.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 80px 0;
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .skills-card {
          padding: 32px;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color); /* Light red border default */
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .skill-icon {
          color: var(--accent-color);
        }

        .skills-card-header h4 {
          font-size: 18px;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
        }

        .skill-item:hover {
          border-color: var(--accent-color);
          transform: translateX(4px);
          background: rgba(var(--accent-rgb), 0.03);
        }

        .skill-name {
          font-size: 14px;
          color: var(--text-primary);
          font-weight: 600;
        }


        .skill-chips-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .skill-proof-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          color: #38BDF8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .skill-status {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-core {
          background-color: rgba(229, 62, 62, 0.08);
          color: var(--accent-color);
          border: 1px solid rgba(229, 62, 62, 0.15);
        }

        .status-expert {
          background-color: rgba(16, 185, 129, 0.08);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .status-advanced {
          background-color: rgba(59, 130, 246, 0.08);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.15);
        }

        .status-proficient {
          background-color: rgba(245, 158, 11, 0.08);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.15);
        }

        .status-basic {
          background-color: rgba(107, 114, 128, 0.08);
          color: #9ca3af;
          border: 1px solid rgba(107, 114, 128, 0.15);
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 50px 0;
          }
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 24px;
          }
          .skills-card {
            padding: 20px 16px;
          }
          .skills-card-header {
            margin-bottom: 16px;
            padding-bottom: 12px;
          }
          .skills-list {
            gap: 10px;
          }
          .skill-item {
            padding: 8px 12px;
          }
          .skill-name {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
