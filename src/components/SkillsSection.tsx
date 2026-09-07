import { Network, Cloud, Shield, Terminal, Activity, Layers } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Cloud Infrastructure (AWS)',
      icon: <Cloud className="skill-icon" size={22} />,
      skills: [
        { name: 'AWS EKS (Kubernetes)', status: 'Advanced' },
        { name: 'AWS EC2 & Auto Scaling', status: 'Expert' },
        { name: 'Application Load Balancers', status: 'Expert' },
        { name: 'AWS VPC & Networking', status: 'Expert' },
        { name: 'AWS Lambda & API Gateway', status: 'Advanced' },
        { name: 'DynamoDB & S3 Storage', status: 'Advanced' }
      ]
    },
    {
      title: 'Containers & Orchestration',
      icon: <Layers className="skill-icon" size={22} />,
      skills: [
        { name: 'Kubernetes Architecture', status: 'Advanced' },
        { name: 'Custom Scheduler Plugins', status: 'Advanced' },
        { name: 'Docker Multi-Stage Builds', status: 'Expert' },
        { name: 'Helm v3 Charts & Deployments', status: 'Advanced' },
        { name: 'Pod Disruption Budgets (PDB)', status: 'Core' },
        { name: 'Cluster Autoscaling & FinOps', status: 'Advanced' }
      ]
    },
    {
      title: 'IaC & CI/CD Automation',
      icon: <Terminal className="skill-icon" size={22} />,
      skills: [
        { name: 'Terraform Modules & State', status: 'Expert' },
        { name: 'GitHub Actions Workflows', status: 'Expert' },
        { name: 'Automated CI/CD Pipelines', status: 'Advanced' },
        { name: 'Bash Shell Automation', status: 'Expert' },
        { name: 'Python Automation Scripts', status: 'Advanced' },
        { name: 'Linux Systemd Services', status: 'Core' }
      ]
    },
    {
      title: 'Networking & Protocols',
      icon: <Network className="skill-icon" size={22} />,
      skills: [
        { name: 'TCP/IP & OSI Model', status: 'Core' },
        { name: 'CIDR & Subnet Slicing', status: 'Expert' },
        { name: 'Route Tables & Gateways', status: 'Expert' },
        { name: 'IPsec Site-to-Site VPN', status: 'Advanced' },
        { name: 'DNS (Route 53) & HTTP/S', status: 'Core' },
        { name: 'Security Groups & NACLs', status: 'Expert' }
      ]
    },
    {
      title: 'Observability & Monitoring',
      icon: <Activity className="skill-icon" size={22} />,
      skills: [
        { name: 'Prometheus Metrics Collection', status: 'Advanced' },
        { name: 'Grafana Custom Dashboards', status: 'Advanced' },
        { name: 'AWS CloudWatch Alarms', status: 'Expert' },
        { name: 'System Telemetry & Exporters', status: 'Advanced' },
        { name: 'Log Ingestion & Athena SQL', status: 'Advanced' },
        { name: 'Live Hardware Soak Testing', status: 'Core' }
      ]
    },
    {
      title: 'DevSecOps & Cloud Governance',
      icon: <Shield className="skill-icon" size={22} />,
      skills: [
        { name: 'IAM Least-Privilege Policies', status: 'Expert' },
        { name: 'Autonomous SOAR Pipelines', status: 'Advanced' },
        { name: 'SEC Rule 17a-4 S3 WORM', status: 'Advanced' },
        { name: 'Static Security (Checkov, Trivy)', status: 'Advanced' },
        { name: 'AWS KMS Key Management', status: 'Advanced' },
        { name: 'EventBridge & Step Functions', status: 'Advanced' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section fade-in-section">
      <div className="container">
        {/* Section title */}
        <div className="section-header">
          <div className="section-label">02. Capabilities</div>
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
                    <span className={`skill-status status-${skill.status.toLowerCase().replace(' & ', '-')}`}>
                      {skill.status}
                    </span>
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
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
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

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
