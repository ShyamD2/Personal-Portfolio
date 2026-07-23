import React from 'react';
import { Network, Cloud, LifeBuoy, Wrench, Terminal, Users } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Networking & Systems',
      icon: <Network className="skill-icon" size={22} />,
      skills: [
        { name: 'TCP/IP Protocol Suite', status: 'Core' },
        { name: 'DNS Records & Routing', status: 'Core' },
        { name: 'DHCP & IP Addressing', status: 'Core' },
        { name: 'OSI Model Layers', status: 'Core' },
        { name: 'VPC Subnetting & CIDR', status: 'Advanced' },
        { name: 'VPN Configuration', status: 'Advanced' }
      ]
    },
    {
      title: 'Cloud Technologies',
      icon: <Cloud className="skill-icon" size={22} />,
      skills: [
        { name: 'AWS EC2 instances', status: 'Expert' },
        { name: 'AWS S3 Storage', status: 'Expert' },
        { name: 'Application Load Balancers', status: 'Expert' },
        { name: 'AWS Virtual Private Cloud', status: 'Advanced' },
        { name: 'Azure Core Compute', status: 'Basic' },
        { name: 'Azure Storage & Networking', status: 'Basic' }
      ]
    },
    {
      title: 'Support & Ticketing',
      icon: <LifeBuoy className="skill-icon" size={22} />,
      skills: [
        { name: 'Zendesk Service Desk', status: 'Proficient' },
        { name: 'Freshdesk ticketing', status: 'Proficient' },
        { name: 'JIRA Service Desk', status: 'Core' },
        { name: 'SLA Monitoring & SLA breach prevention', status: 'Core' },
        { name: 'First Contact Resolution (FCR)', status: 'Core' },
        { name: 'Voice Support & escalation handling', status: 'Core' }
      ]
    },
    {
      title: 'Systems & Troubleshooting',
      icon: <Wrench className="skill-icon" size={22} />,
      skills: [
        { name: 'Windows Server / client systems', status: 'Expert' },
        { name: 'Linux systems administration (Ubuntu)', status: 'Advanced' },
        { name: 'Root Cause Analysis (RCA)', status: 'Expert' },
        { name: 'Remote Desktop Protocol (RDP)', status: 'Expert' },
        { name: 'System Log analysis', status: 'Advanced' },
        { name: 'Postman API Testing', status: 'Proficient' }
      ]
    },
    {
      title: 'Automation & Scripting',
      icon: <Terminal className="skill-icon" size={22} />,
      skills: [
        { name: 'Python scripting', status: 'Advanced' },
        { name: 'Bash automation scripting', status: 'Advanced' },
        { name: 'Git & GitHub version control', status: 'Proficient' },
        { name: 'System cron jobs scheduler', status: 'Advanced' }
      ]
    },
    {
      title: 'Professional Soft Skills',
      icon: <Users className="skill-icon" size={22} />,
      skills: [
        { name: 'Active Listening & empathy', status: 'Core' },
        { name: 'Clear technical translation', status: 'Core' },
        { name: 'Patient Under Pressure', status: 'Core' },
        { name: 'Flexible with rotational shifts', status: 'Core' }
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
