import React from 'react';
import { Github, Command } from 'lucide-react';
import ArchitectureShowcase from './Interactive/ArchitectureShowcase';
import SupportTerminal from './Interactive/SupportTerminal';

export default function ProjectsSection() {
  const projectsList = [
    {
      title: 'Scalable Traffic Handling System',
      badge: 'AWS Infrastructure',
      problem: 'Configuring high-availability server setups capable of handling unpredictable traffic spikes without manual intervention.',
      solution: 'Configured a multi-server setup utilizing AWS EC2 compute units registered under an Application Load Balancer target group. Enabled Auto-Scaling policies based on real-time CPU capacity thresholds and implemented port health checks.',
      tech: ['AWS EC2', 'AWS ALB', 'Auto Scaling', 'VPC Routing', 'Nginx'],
      github: 'https://github.com/ShyamD2',
    },
    {
      title: 'Config-Driven Backend System',
      badge: 'Systems Automation',
      problem: 'Building robust, parameter-based systems architectures that adjust behaviors dynamically without code restarts.',
      solution: 'Developed a backend configuration manager using structured system settings. Integrated logging systems to track runtime changes and built a solutions repository within a knowledge base database for future system audits.',
      tech: ['Python Scripting', 'Systems Logging', 'YAML Parser', 'Shell Automation'],
      github: 'https://github.com/ShyamD2',
    },
    {
      title: 'IT Helpdesk Ticketing Lab',
      badge: 'Technical Support Operations',
      problem: 'Handling customer escalation queries efficiently under tight SLA windows.',
      solution: 'Deployed a Level 1 helpdesk environment handling mock access control, software, and routing tickets. Practiced SLA ticket classification, first-contact resolutions (FCR), and escalation routing paths.',
      tech: ['Zendesk API', 'JIRA Service Desk', 'Active Listening', 'RCA Diagnostics'],
      github: 'https://github.com/ShyamD2',
    }
  ];

  return (
    <section id="projects" className="projects-section fade-in-section">
      <div className="container">
        {/* Section title */}
        <div className="section-header">
          <div className="section-label">04. Engineering</div>
          <h3 className="section-title">Projects That Define My Journey</h3>
        </div>

        {/* Case Studies Grid */}
        <div className="projects-grid">
          {projectsList.map((proj, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-card-header">
                <span className="project-badge">{proj.badge}</span>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-github-link" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </div>

              <h4>{proj.title}</h4>
              
              <div className="project-body">
                <div className="body-block">
                  <h5>Problem Statement:</h5>
                  <p>{proj.problem}</p>
                </div>
                <div className="body-block">
                  <h5>Implementation & Resolution:</h5>
                  <p>{proj.solution}</p>
                </div>
              </div>

              <div className="project-tech-tags">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Sandbox/Playground Heading */}
        <div className="sandbox-divider">
          <span className="sandbox-line"></span>
          <div className="sandbox-title">
            <Command size={16} /> Interactive Systems Playground
          </div>
          <span className="sandbox-line"></span>
        </div>
        
        <p className="sandbox-intro-text">
          Don't just review my credentials. Test my cloud configurations and troubleshooting workflows inside the active terminal console.
        </p>

        {/* WOW Factor Simulators Layout */}
        <div className="simulators-layout">
          {/* Terminal + Photo 3 (Crossed Arms Desk) Bento Layout */}
          <div className="terminal-bento-grid">
            <div className="bento-photo-card glass-card">
              <div className="bento-photo-frame">
                <img src="/assets/photo_desk_arms.png" alt="Shyam Kumar D at Desk" />
              </div>
              <div className="bento-photo-caption">
                <h5>Active Support Engineering</h5>
                <p>Equipped with white noise-cancelling headphones and direct system diagnostics for immediate ticketing responses.</p>
              </div>
            </div>
            
            <div className="bento-terminal-wrapper">
              <SupportTerminal />
            </div>
          </div>

          {/* Full-width Architecture Simulator */}
          <div className="full-width-simulator-wrapper">
            <ArchitectureShowcase />
          </div>
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 80px 0;
          position: relative;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }

        .project-card {
          padding: 32px;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .project-badge {
          background: rgba(var(--accent-rgb), 0.06);
          color: var(--accent-color);
          border: 1px solid rgba(var(--accent-rgb), 0.12);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .proj-github-link {
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .proj-github-link:hover {
          color: var(--accent-color);
        }

        .project-card h4 {
          font-size: 22px;
          color: var(--text-primary);
          margin-bottom: 16px;
          font-weight: 800;
        }

        .project-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .body-block h5 {
          font-size: 11px;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .body-block p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 4px;
        }

        /* Sandbox Divider */
        .sandbox-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 80px;
          margin-bottom: 12px;
        }

        .sandbox-line {
          height: 1px;
          flex-grow: 1;
          background: var(--border-color);
        }

        .sandbox-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sandbox-intro-text {
          text-align: center;
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 48px auto;
        }

        .simulators-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Terminal Bento Grid Layout */
        .terminal-bento-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 32px;
          align-items: stretch;
        }

        .bento-photo-card {
          padding: 16px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
          background-color: var(--card-bg-solid);
        }

        .bento-photo-frame {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4 / 5;
        }

        .bento-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: var(--transition-normal);
        }

        .bento-photo-card:hover .bento-photo-frame img {
          transform: scale(1.03);
        }

        .bento-photo-caption h5 {
          font-size: 16px;
          color: var(--text-primary);
          margin-bottom: 6px;
          font-weight: 700;
        }

        .bento-photo-caption p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bento-terminal-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .terminal-bento-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .bento-photo-card {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
