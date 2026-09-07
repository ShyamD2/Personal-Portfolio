import React, { useState } from 'react';
import { Github, Command, PlayCircle } from 'lucide-react';
import ArchitectureShowcase from './Interactive/ArchitectureShowcase';
import SupportTerminal from './Interactive/SupportTerminal';
import VideoModal from './Interactive/VideoModal';

export default function ProjectsSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const projectsList = [
    {
      title: 'KubeForecast: Kubernetes Predictive Scheduler & FinOps Engine',
      badge: 'Kubernetes & AWS EKS',
      problem: 'Standard Kubernetes round-robin scheduling causes severe fleet fragmentation, stranding nodes at 15–30% capacity while paying for 100% compute hours.',
      solution: 'Engineered a custom Go Kubernetes Scheduling Framework plugin (evaluating node placement in 90.35 ns) and 100% Terraform AWS EKS IaC. Steers pods to safe waterline nodes, validated on live AWS EKS with 50%–66.7% node reduction and 5 Grafana dashboards.',
      tech: ['Kubernetes', 'AWS EKS v1.31', 'Terraform', 'Go 1.23', 'Helm v3', 'Prometheus', 'Grafana'],
      github: 'https://github.com/ShyamD2/KubeForecast',
    },
    {
      title: 'Project AEGIS: Autonomous Cloud Defense & SOAR Fabric',
      badge: '100% Terraform & DevSecOps',
      problem: 'Manual cloud threat containment is slow and error-prone, while digital forensic records remain vulnerable to tampering during security breaches.',
      solution: 'Codified 100% multi-account AWS infrastructure in Terraform. Engineered autonomous SOAR containment pipelines using EventBridge, Step Functions, and Lambda, streaming immutable forensic trails to SEC Rule 17a-4 S3 WORM vaults.',
      tech: ['AWS Multi-Account', 'Terraform', 'EventBridge', 'Step Functions', 'S3 WORM', 'KMS', 'Checkov'],
      github: 'https://github.com/ShyamD2/aegis-cloud-security',
    },
    {
      title: 'Event-Driven Serverless URL Shortener & Analytics',
      badge: 'AWS Serverless & Data',
      problem: 'Traditional container or VM-based redirect services incur continuous idle baseline costs ($20–$80/mo) and couple analytics logging directly to redirection latency.',
      solution: 'Architected an asynchronous event-driven system using HTTP API Gateway and Lambda for sub-30ms redirects at $0 idle cost. Decoupled analytics via Amazon SQS dead-letter queues to partitioned S3 logs, queried in-place via Amazon Athena.',
      tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Amazon SQS', 'Amazon S3', 'Amazon Athena', 'Terraform'],
      github: 'https://github.com/ShyamD2/aws-cloud-serverless-url-shortener',
    },
    {
      title: 'Scalable Multi-AZ Infrastructure & Traffic Management',
      badge: 'AWS Core Infrastructure',
      problem: 'Designing fault-tolerant, highly available cloud web systems capable of surviving availability zone failures with zero manual downtime.',
      solution: 'Architected high-availability multi-tier infrastructure across 3 AZs using Application Load Balancers, dynamic Auto Scaling groups, VPC private subnets, and CloudWatch alarms, automated with Bash User Data on Ubuntu.',
      tech: ['AWS EC2', 'AWS ALB', 'Auto Scaling', 'VPC Routing', 'CloudWatch', 'Bash Scripting'],
      github: 'https://github.com/ShyamD2/Scalable-AWS-Cloud-Infrastructure-Deployment',
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

              {idx === 0 && (
                <button
                  type="button"
                  className="btn-watch-demo-card"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <PlayCircle size={15} />
                  <span>Watch Live K8s Demo Video</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Sandbox/Playground Heading */}
        <div className="sandbox-divider">
          <span className="sandbox-line"></span>
          <div className="sandbox-title">
            <Command size={16} /> Interactive Cloud & DevOps Systems Playground
          </div>
          <span className="sandbox-line"></span>
        </div>
        
        <p className="sandbox-intro-text">
          Don't just review my credentials. Test my live Kubernetes scheduling algorithms, zero-trust SOAR containment workflows, and infrastructure consolidation in the active sandboxes below.
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
                <h5>Cloud Systems & DevOps Engineering</h5>
                <p>Engineering automated cloud infrastructure, low-latency container schedulers, and zero-trust security fabric.</p>
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

        .btn-watch-demo-card {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(229, 62, 62, 0.12);
          border: 1px solid rgba(229, 62, 62, 0.3);
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 16px;
          transition: var(--transition-fast);
          width: fit-content;
        }

        .btn-watch-demo-card:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(229, 62, 62, 0.35);
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

      {/* Kubernetes Video Demo Lightbox Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/kubeforecast_live_cockpit_demo.mp4"
        title="KubeForecast™ Live Cockpit & Kubernetes Scheduler Evaluation"
        subtitle="Live demonstration of Go PreScore/Score evaluation hooks (90.35 ns) and 50% cluster waterline bin-packing on AWS EKS"
      />
    </section>
  );
}
