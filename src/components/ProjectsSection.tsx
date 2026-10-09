import React, { useState } from 'react';
import { Github, Command, PlayCircle, FileText, ExternalLink } from 'lucide-react';
import ArchitectureShowcase from './Interactive/ArchitectureShowcase';
import SupportTerminal from './Interactive/SupportTerminal';
import VideoModal from './Interactive/VideoModal';

export default function ProjectsSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');

  const projectsList = [
    {
      id: 'kubeforecast',
      title: 'KubeForecast: Kubernetes Predictive Scheduler & FinOps Engine',
      badge: 'Kubernetes & AWS EKS',
      category: 'sre',
      problem: 'Standard Kubernetes round-robin scheduling causes severe fleet fragmentation, stranding nodes at 15–30% capacity while paying for 100% compute hours.',
      solution: 'Engineered a native Go Kubernetes Scheduling Framework plugin (evaluating node placement in 90.35 ns) and 100% Terraform AWS EKS IaC. Steers pods to safe waterline nodes, validated on live AWS EKS with 50%–66.7% node reduction and 5 Grafana dashboards.',
      bullets: [
        'Engineered a native Kubernetes Scheduling Framework plugin in Go with a predictive waterline algorithm to consolidate workloads and expose empty nodes for safe cluster scale-down.',
        'Provisioned multi-AZ AWS EKS infrastructure using modular Terraform (VPC, EKS, IAM IRSA, ECR, S3); packaged components with Helm v3 and automated CI/CD builds.',
        'Validated 50.0%–66.7% worker-node reduction during live AWS EKS soak testing while maintaining PDB safety; configured Prometheus telemetry & 5 Grafana dashboards.'
      ],
      tech: ['Kubernetes (AWS EKS v1.31)', 'Terraform', 'Go 1.23', 'Helm v3', 'Docker', 'Prometheus', 'Grafana', 'GitHub Actions'],
      github: 'https://github.com/ShyamD2/KubeForecast',
      pdfUrl: '/reports/KubeForecast_Project_Report.pdf',
      hasDemoVideo: true
    },
    {
      id: 'driftwarden',
      title: 'DriftWarden: AWS Infrastructure Drift Detection & GitOps Reconciliation Engine',
      badge: 'AWS & Go 1.24+ GitOps',
      category: 'sre',
      problem: 'Traditional drift tools only inspect Terraform State <-> AWS Live State, completely missing uncommitted local Git edits, out-of-band ClickOps mutations, and CIS security regressions.',
      solution: 'Built a three-source drift engine in Go 1.24+ correlating Git desired configuration, Terraform state, and live AWS resources. Packaged in an ultra-lean <25MB distroless container with built-in CIS AWS v3.0 compliance auditing and automated GitOps PR remediation.',
      bullets: [
        'Built a three-source drift engine correlating Git desired configuration, Terraform state, and live AWS resources to detect configuration drift, shadow resources, and unapplied changes.',
        'Implemented AWS multi-account discovery, CIS security checks, FinOps cost-bleed analysis, consistency re-probes, and lock-aware Terraform state auditing to reduce false-positive alerts.',
        'Automated CI/CD quality gates with JSON/JUnit evidence, Docker packaging, safe dry-run remediation, and Terraform 1.5+ GitOps import generation.'
      ],
      tech: ['Go', 'AWS SDK v2', 'Terraform', 'GitOps', 'Docker', 'GitHub Actions', 'CIS Benchmark', 'JUnit'],
      github: 'https://github.com/ShyamD2/driftwarden',
      pdfUrl: '/reports/DriftWarden_Project_Report.pdf'
    },
    {
      id: 'jarvis',
      title: 'Project J.A.R.V.I.S.: Autonomous Cyber-Physical AI Operating Agent',
      badge: 'Agentic AI & OS Automation',
      category: 'ai',
      problem: 'AI assistants lack ground-truth sensory verification when executing real actions across operating systems, browsers, and cloud resources, leading to dangerous hallucinated actions.',
      solution: 'Engineered a cloud-connected cyber-physical AI agent architecture uniting physical IoT telemetry, Windows OS/desktop accessibility, and AWS cloud automation. Features dual-channel ground-truth verification, 4-tier blast radius isolation, and HMAC action leases. Validated with 183 automated tests (100% pass) and a strict 0.00% false-success invariant.',
      bullets: [
        'Engineered a cloud-connected cyber-physical AI agent architecture uniting physical IoT telemetry, Windows OS/desktop accessibility, and AWS cloud automation.',
        'Features dual-channel ground-truth verification, 4-tier blast radius isolation, universal ActionLease, and HMAC ticket tampering defense.',
        'Validated with 183 automated tests (100% pass) and a strict 0.00% false-success invariant across 100-task empirical benchmark runs.'
      ],
      tech: ['Python 3.13', 'FastAPI', 'Agentic AI', 'Playwright', 'AWS Cloud', 'Docker', 'AsyncIO'],
      github: 'https://github.com/ShyamD2/project-jarvis',
      pdfUrl: '/reports/JARVIS_Project_Report.pdf'
    },
    {
      id: 'aegis',
      title: 'Project AEGIS: Autonomous Cloud Defense & SOAR Fabric',
      badge: '100% Terraform & DevSecOps',
      category: 'security',
      problem: 'Manual cloud threat containment is slow and error-prone, while digital forensic records remain vulnerable to tampering during security breaches.',
      solution: 'Codified 100% multi-account AWS infrastructure in Terraform. Engineered autonomous SOAR containment pipelines using EventBridge, Step Functions, and Lambda, streaming immutable forensic trails to SEC Rule 17a-4 S3 WORM vaults.',
      bullets: [
        'Codified 100% multi-account AWS infrastructure in Terraform with zero manual ClickOps.',
        'Captures brute-force findings and blacklists rogue IPs via AWS WAFv2 in under 820ms, isolating compromised EC2 nodes.',
        'Streams immutable digital forensics into SEC Rule 17a-4 S3 WORM vaults with KMS encryption; verified across 110/110 passing test suites.'
      ],
      tech: ['AWS Multi-Account', 'Terraform', 'EventBridge', 'Step Functions', 'S3 WORM', 'KMS', 'Checkov'],
      github: 'https://github.com/ShyamD2/aegis-cloud-security',
      pdfUrl: '/reports/AEGIS_Project_Report.pdf'
    },
    {
      id: 'url-shortener',
      title: 'AWS Serverless Platform & Real-Time Analytics Engine',
      badge: 'AWS Serverless & Data',
      category: 'sre',
      problem: 'Traditional container or VM-based redirect services incur continuous idle baseline costs ($20–$80/mo) and couple analytics logging directly to redirection latency.',
      solution: 'Architected an asynchronous event-driven system using HTTP API Gateway and Lambda for sub-30ms redirects at $0 idle cost. Decoupled analytics via Amazon SQS dead-letter queues to partitioned S3 logs, queried in-place via Amazon Athena.',
      bullets: [
        'Architected an event-driven AWS platform using API Gateway, Lambda, and DynamoDB for low-latency URL redirection with asynchronous telemetry isolated from the request path.',
        'Implemented SQS/SNS messaging, dead-letter queues, structured logging, correlation IDs, S3 analytics storage, and Athena diagnostics to improve fault isolation.',
        'Provisioned 10 modular Terraform components with remote state and DynamoDB locking; automated testing, Docker-based local testing, and CloudWatch monitoring.'
      ],
      tech: ['AWS (API Gateway, Lambda, DynamoDB, SQS, SNS, S3, CloudFront, Athena, CloudWatch)', 'Terraform', 'Python', 'Docker'],
      github: 'https://github.com/ShyamD2/aws-cloud-serverless-url-shortener',
      pdfUrl: '/reports/URL_Shortener_Project_Report.pdf'
    },
    {
      id: 'scalable-aws',
      title: 'Scalable Multi-AZ Infrastructure & Traffic Management',
      badge: 'AWS Core Infrastructure',
      category: 'sre',
      problem: 'Designing fault-tolerant, highly available cloud web systems capable of surviving availability zone failures with zero manual downtime.',
      solution: 'Architected high-availability multi-tier infrastructure across 3 AZs using Application Load Balancers, dynamic Auto Scaling groups, VPC private subnets, and CloudWatch alarms, automated with Bash User Data on Ubuntu.',
      bullets: [
        'Architected high-availability multi-tier infrastructure across 3 AZs using Application Load Balancers and dynamic Auto Scaling groups.',
        'Configured private/public VPC subnets, NAT gateways, and CloudWatch alarm triggers automated via Bash User Data scripts.'
      ],
      tech: ['AWS EC2', 'AWS ALB', 'Auto Scaling', 'VPC Routing', 'CloudWatch', 'Bash Scripting'],
      github: 'https://github.com/ShyamD2/Scalable-AWS-Cloud-Infrastructure-Deployment'
    },
    {
      id: 'incident-response',
      title: 'NetPulse: Incident Response & Threat Telemetry Platform',
      badge: 'SecOps & Full-Stack SRE',
      category: 'security',
      problem: 'Security engineers struggle to triage high-volume alerts and correlate distributed incident timelines across fragmented cloud and on-premise monitoring silos.',
      solution: 'Built a unified incident response console with interactive telemetry boards, automated severity classification, response runbook tracking, and forensic audit logs for SOC analysts.',
      bullets: [
        'Built a unified incident response console with interactive telemetry boards and automated severity classification.',
        'Streamlined incident triage workflows, SLA breach prevention alerts, and forensic audit logs for SOC analysts.'
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'REST API', 'Incident Management', 'Security Analytics'],
      github: 'https://github.com/ShyamD2/incident-response-platform',
      pdfUrl: '/reports/NetPulse_Incident_Response_Platform.pdf'
    },
    {
      id: 'cloud-journey',
      title: 'Cloud Engineering Journey: Living Systems Architecture Journal',
      badge: 'Hands-on Architecture Journal',
      category: 'sre',
      problem: 'Cloud architecture knowledge is often theoretical; enterprise hiring managers want verifiable proof of deep hands-on troubleshooting and systems design.',
      solution: 'Comprehensive living open-source engineering journal documenting production AWS infrastructure, Linux kernel internals, container networking, and IaC troubleshooting playbooks.',
      bullets: [
        'Comprehensive living open-source engineering journal documenting production AWS infrastructure, Terraform modules, and Linux internals.',
        'Deep-dive playbooks on TCP/IP networking, BGP routing, container isolation, and production incident post-mortems.'
      ],
      tech: ['AWS Solutions', 'Terraform', 'Kubernetes', 'Linux Internals', 'Networking', 'Security Architecture'],
      github: 'https://github.com/ShyamD2/cloud-engineering-journey'
    }
  ];

  const filteredProjects = activeProjectFilter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === activeProjectFilter);

  return (
    <section id="projects" className="projects-section fade-in-section">
      <div className="container">
        {/* Section title */}
        <div className="section-header">
          <div className="section-label">04. Engineering</div>
          <h3 className="section-title">Projects That Define My Journey</h3>
          <p className="section-subtitle">
            Production-grade systems code, Kubernetes schedulers, GitOps drift engines, and zero-trust security platforms.
          </p>
        </div>

        {/* Project Category Filter Pills */}
        <div className="projects-filter-bar">
          <button
            className={`proj-filter-btn ${activeProjectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('all')}
          >
            All Repositories ({projectsList.length})
          </button>
          <button
            className={`proj-filter-btn ${activeProjectFilter === 'sre' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('sre')}
          >
            Cloud Systems & SRE ({projectsList.filter(p => p.category === 'sre').length})
          </button>
          <button
            className={`proj-filter-btn ${activeProjectFilter === 'security' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('security')}
          >
            DevSecOps & Security ({projectsList.filter(p => p.category === 'security').length})
          </button>
          <button
            className={`proj-filter-btn ${activeProjectFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('ai')}
          >
            Agentic AI & Automation ({projectsList.filter(p => p.category === 'ai').length})
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card glass-card">
              <div className="project-card-header">
                <span className="project-badge">{proj.badge}</span>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-github-link" aria-label={`GitHub repository for ${proj.title}`}>
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
                {proj.bullets && (
                  <div className="body-block">
                    <h5>Key Engineering Achievements:</h5>
                    <ul className="project-bullet-list">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="project-tech-tags">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-card-actions">
                {proj.hasDemoVideo && (
                  <button
                    type="button"
                    className="btn-card-action btn-watch-demo"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    <PlayCircle size={14} />
                    <span>Watch K8s Demo</span>
                  </button>
                )}
                {proj.pdfUrl && (
                  <a
                    href={proj.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-action btn-view-report"
                    title={`View ${proj.title} PDF Report`}
                  >
                    <FileText size={14} />
                    <span>Read Dossier (PDF)</span>
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-action btn-view-github"
                  title={`View GitHub Repository for ${proj.title}`}
                >
                  <Github size={14} />
                  <span>GitHub Code</span>
                  <ExternalLink size={12} />
                </a>
              </div>
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

        .projects-filter-bar {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 28px;
          margin-bottom: 8px;
        }

        .proj-filter-btn {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .proj-filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(var(--accent-rgb), 0.4);
          background: rgba(var(--accent-rgb), 0.06);
        }

        .proj-filter-btn.active {
          color: #ffffff;
          background: var(--accent-color);
          border-color: var(--accent-color);
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          gap: 28px;
          margin-top: 32px;
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

        .project-bullet-list {
          list-style: none;
          padding: 0;
          margin: 6px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .project-bullet-list li {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          position: relative;
          padding-left: 16px;
        }

        .project-bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
        }

        .project-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
        }

        .btn-card-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-watch-demo {
          background: rgba(229, 62, 62, 0.15);
          border: 1px solid rgba(229, 62, 62, 0.4);
          color: #FFFFFF;
        }

        .btn-watch-demo:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(229, 62, 62, 0.35);
        }

        .btn-view-report {
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38BDF8;
        }

        .btn-view-report:hover {
          background: #38BDF8;
          color: #0A0F1D;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
        }

        .btn-view-github {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .btn-view-github:hover {
          background: rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
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

        @media (max-width: 768px) {
          .projects-section {
            padding: 50px 0;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 24px;
          }
          .project-card {
            padding: 20px 16px;
          }
          .project-card h4 {
            font-size: 19px;
          }
          .sandbox-divider {
            margin-top: 48px;
          }
          .btn-watch-demo-card {
            width: 100%;
            justify-content: center;
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
