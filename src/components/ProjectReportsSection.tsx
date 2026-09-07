import React from 'react';
import { FileText, Download, ExternalLink, ShieldAlert, Cpu, Database, Server, Layers } from 'lucide-react';

export default function ProjectReportsSection() {
  const reports = [
    {
      title: 'KubeForecast: Predictive Scheduling & FinOps Cost Engine',
      category: 'Kubernetes & AWS EKS',
      icon: <Cpu size={22} />,
      pages: '18 Pages',
      fileSize: '2.6 MB',
      summary: 'Comprehensive engineering presentation and empirical benchmark dossier. Covers dynamic waterline bin-packing, Score & PreScore latency metrics (90.35 ns/op), and live AWS EKS soak tests proving 50%–66.7% node fleet consolidation.',
      highlights: [
        '90.35 ns/op scheduler evaluation latency',
        'Live 3-node AWS EKS c7i-flex.large soak test validation',
        '100% codified Terraform modules & Helm v3 charts'
      ],
      pdfUrl: '/reports/KubeForecast_Project_Report.pdf'
    },
    {
      title: 'Project AEGIS: Autonomous Cloud Defense & Active SOAR Fabric',
      category: '100% Terraform & DevSecOps',
      icon: <ShieldAlert size={22} />,
      pages: 'Technical Dossier',
      fileSize: '12.8 MB',
      summary: 'Enterprise cloud security dossier detailing autonomous threat detection, blast-radius isolation, and digital forensics on AWS. Documents SEC Rule 17a-4 S3 WORM vaults, EventBridge, Step Functions, and 110/110 passing test suites.',
      highlights: [
        'Zero manual ClickOps — 100% Terraform codified',
        'SEC Rule 17a-4 compliant immutable audit vaults',
        'Checkov, TFLint & Trivy automated CI/CD guardrails'
      ],
      pdfUrl: '/reports/AEGIS_Project_Report.pdf'
    },
    {
      title: 'AWS Serverless URL Shortener & Real-Time Analytics Platform',
      category: 'AWS Serverless & Data',
      icon: <Database size={22} />,
      pages: 'Architecture Dossier',
      fileSize: '10.8 MB',
      summary: 'Complete architectural blueprint of an event-driven serverless system. Features sub-30ms user redirects via DynamoDB, asynchronous click analytics streaming via SQS queues to S3, and serverless SQL analytics using Amazon Athena.',
      highlights: [
        'Sub-30ms redirect latency at $0 idle compute cost',
        'Decoupled telemetry ingestion with SQS dead-letter queues',
        'In-place serverless SQL queries with Amazon Athena'
      ],
      pdfUrl: '/reports/URL_Shortener_Project_Report.pdf'
    },
    {
      title: 'NetPulse: Incident Response Platform & Observability Dossier',
      category: 'SRE & Systems Monitoring',
      icon: <Server size={22} />,
      pages: 'Systems Report',
      fileSize: '2.6 MB',
      summary: 'Operational architecture dossier for real-time systems monitoring, incident alert tracking, SLA compliance governance, and automated SOC incident triage workflows.',
      highlights: [
        'Live system telemetry and heartbeat tracking',
        'SLA breach prevention and automated ticket routing',
        'Structured post-mortem incident response framework'
      ],
      pdfUrl: '/reports/NetPulse_Incident_Response_Platform.pdf'
    },
    {
      title: 'SecureVault-Campus: Enterprise PAM Lab Dossier',
      category: 'Identity & Enterprise Security',
      icon: <Layers size={22} />,
      pages: 'Laboratory Dossier',
      fileSize: '1.7 MB',
      summary: 'Technical laboratory dossier detailing enterprise Privileged Access Management (PAM) implementation. Covers Active Directory tiering, Windows LAPS password rotation, PowerShell JEA, and CyberArk Conjur secrets vaults.',
      highlights: [
        'Active Directory administrative tiering architecture',
        'Automated local admin password management (LAPS)',
        'CyberArk Conjur containerized secrets management'
      ],
      pdfUrl: '/reports/SecureVault-Campus_Report.pdf'
    }
  ];

  return (
    <section id="reports" className="project-reports-section fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">06. Documentation</div>
          <h3 className="section-title">Project Reports & Technical Dossiers</h3>
          <p className="section-subtitle">
            Deep-dive architectural blueprints, benchmark studies, and formal project dossiers authored to validate production-grade engineering decisions.
          </p>
        </div>

        {/* Reports Grid */}
        <div className="reports-grid">
          {reports.map((report, idx) => (
            <div key={idx} className="report-card glass-card">
              <div className="report-card-top">
                <div className="report-icon-box">
                  {report.icon}
                </div>
                <div className="report-badges">
                  <span className="report-category">{report.category}</span>
                  <span className="report-meta-tag">{report.pages} • {report.fileSize}</span>
                </div>
              </div>

              <h4 className="report-title">{report.title}</h4>
              <p className="report-summary">{report.summary}</p>

              <div className="report-highlights">
                <span className="highlights-label">Architectural Highlights:</span>
                <ul>
                  {report.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="report-actions">
                <a 
                  href={report.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-read-dossier"
                >
                  <FileText size={15} /> Read Report <ExternalLink size={13} />
                </a>
                <a 
                  href={report.pdfUrl} 
                  download 
                  className="btn-download-pdf"
                  aria-label={`Download ${report.title} PDF`}
                >
                  <Download size={15} /> PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-reports-section {
          padding: 80px 0;
          position: relative;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }

        .report-card {
          padding: 32px;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .report-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-color);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }

        .report-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }

        .report-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .report-badges {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .report-category {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.06);
          border: 1px solid rgba(var(--accent-rgb), 0.15);
          padding: 4px 10px;
          border-radius: 50px;
        }

        .report-meta-tag {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .report-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 12px;
        }

        .report-summary {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .report-highlights {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
          margin-bottom: 24px;
        }

        .highlights-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--accent-color);
          margin-bottom: 8px;
        }

        .report-highlights ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .report-highlights li {
          font-size: 12px;
          color: var(--text-secondary);
          position: relative;
          padding-left: 14px;
          line-height: 1.4;
        }

        .report-highlights li::before {
          content: "•";
          color: var(--accent-color);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .report-actions {
          display: flex;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
        }

        .btn-read-dossier {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: var(--accent-color);
          color: #FFFFFF;
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .btn-read-dossier:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .btn-download-pdf {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: none;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .btn-download-pdf:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }
      `}</style>
    </section>
  );
}
