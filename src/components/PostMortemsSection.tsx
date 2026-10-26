import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, CheckCircle2, Clock, Zap, ArrowRight, ExternalLink, Terminal, Cpu, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { playTactileClick } from '../utils/soundEffects';

interface Incident {
  id: string;
  code: string;
  title: string;
  severity: 'SEV-1' | 'SEV-2';
  system: string;
  mttd: string;
  mttr: string;
  summary: string;
  trigger: string;
  rootCause: string;
  mitigation: string;
  invariant: string;
  telemetryLogs: string[];
  repoUrl: string;
  reportUrl?: string;
}

export default function PostMortemsSection() {
  const [expandedId, setExpandedId] = useState<string>('inc-01');

  const incidents: Incident[] = [
    {
      id: 'inc-01',
      code: 'INC-2026-01',
      title: 'Kubernetes Pod Cascading Eviction & Fleet Fragmentation Recovery',
      severity: 'SEV-2',
      system: 'KubeForecast / AWS EKS v1.31',
      mttd: '12 seconds',
      mttr: '48 seconds',
      summary: 'High pod churn under bursty simulated traffic caused default round-robin kube-scheduler to strand 3 worker nodes at 18–25% CPU, preventing cluster autoscaler from scaling down and generating 200% compute cost bleed.',
      trigger: 'Simulated 1,000-pod burst traffic spike across an AWS EKS 3-node c7i-flex.large cluster.',
      rootCause: 'Standard kube-scheduler spread scoring distributes pods evenly across all schedulable nodes. When load subsided, each node hosted 2–3 pods with overlapping PDB rules, blocking node drain and autoscaler scale-down.',
      mitigation: 'Invoked KubeForecast native Go PreScore hook evaluating node waterline thresholds in 90.35 ns. Steered incoming pods onto designated high-density waterline nodes (target: 75%), exposed empty nodes to the AWS Cluster Autoscaler, and cleanly evicted migratory pods.',
      invariant: 'Pod Disruption Budget (PDB) zero-violation guarantee; cluster worker node count reduced from 3 to 1 (66.7% compute reduction) with zero 5xx request drops.',
      telemetryLogs: [
        '14:22:01.104 [ALERT] [ClusterAutoscaler] Node group unscalable: all 3 nodes contain active pods with PDB constraints',
        '14:22:08.210 [DETECT] KubeForecast PreScore evaluated 3 nodes in 90.35 ns; detected fleet fragmentation (mean waterline: 22.4%)',
        '14:22:12.440 [MITIGATE] Waterline algorithm applied: Node-1 selected as consolidation sink (target waterline: 74.8%)',
        '14:22:36.190 [DRAIN] Safe eviction initiated on Node-2 & Node-3; pods rescheduled without service interruption',
        '14:22:48.880 [RESOLVED] Worker node fleet consolidated to 1 active node; 2 instances terminated by AWS ASG'
      ],
      repoUrl: 'https://github.com/ShyamD2/KubeForecast',
      reportUrl: '/reports/KubeForecast_Project_Report.pdf'
    },
    {
      id: 'inc-02',
      code: 'INC-2026-02',
      title: 'Out-of-Band AWS ClickOps Security Group Ingress Regression Mitigation',
      severity: 'SEV-1',
      system: 'DriftWarden / AWS Multi-Account IaC',
      mttd: '18 seconds',
      mttr: '35 seconds',
      summary: 'Out-of-band manual modification (ClickOps) in AWS management console opened port 0.0.0.0/0:22 on production database bastion host, violating CIS AWS Foundations Benchmark v3.0.',
      trigger: 'Manual console edit bypasses Terraform CI/CD pull request review during emergency troubleshooting.',
      rootCause: 'Traditional drift detection tools only compare Terraform State <-> Live State. Because the change was made live without updating Git or Terraform state, standard CI plan checks failed to capture the ingress vulnerability.',
      mitigation: 'DriftWarden three-source reconciliation engine in Go correlated Git AST, DynamoDB lock-aware Terraform remote state, and AWS SDK v2 live inventory. Flagged the unmanaged ingress rule, broadcasted a high-priority Slack webhook, and generated an automated Terraform GitOps import remediation PR.',
      invariant: 'Zero unmanaged public ingress on sensitive compute ports; CIS AWS v3.0 compliance restored under 60 seconds.',
      telemetryLogs: [
        '09:14:02.812 [AWS_API] AuthorizeSecurityGroupIngress executed via root console session on sg-089a42f',
        '09:14:18.990 [DRIFTWARDEN_ENGINE] Three-source reconciliation started: Git AST (34 modules) vs TF State vs AWS SDK v2',
        '09:14:20.450 [VIOLATION] CIS Benchmark v3.0 Rule 4.1 FAIL: Security group exposes port 22 to 0.0.0.0/0',
        '09:14:24.110 [ACTION] High-priority Slack webhook dispatched to #secops-alerts with JUnit JSON evidence',
        '09:14:35.000 [RESOLVED] Automated GitOps import PR generated; unauthorized ingress rule quarantined'
      ],
      repoUrl: 'https://github.com/ShyamD2/driftwarden',
      reportUrl: '/reports/DriftWarden_Project_Report.pdf'
    },
    {
      id: 'inc-03',
      code: 'INC-2026-03',
      title: 'Autonomous Distributed Layer-7 Threat Containment & Forensic Custody',
      severity: 'SEV-1',
      system: 'Project AEGIS / AWS DevSecOps SOAR',
      mttd: '320 ms',
      mttr: '820 ms',
      summary: 'Coordinated credential-stuffing botnet attacked public HTTP API Gateway endpoints with 8,400 rogue requests/minute from dynamic spoofed CIDR blocks.',
      trigger: 'Automated distributed botnet probing authentication endpoints with high burst frequency.',
      rootCause: 'Standard rate limiting per IP failed due to botnet distributing requests across 40+ unique proxy IP addresses.',
      mitigation: 'Project AEGIS autonomous SOAR fabric captured GuardDuty high-severity findings via Amazon EventBridge bus within 300ms. An AWS Step Functions state machine parsed the attack vector, invoked Lambda to dynamically inject IP blocklists into AWS WAFv2 regional rules, and streamed immutable SHA-256 digital forensics into an SEC Rule 17a-4 S3 WORM vault.',
      invariant: 'Attack isolated at CloudFront/WAF edge in under 820ms; tamper-proof forensic audit trail preserved with KMS encryption.',
      telemetryLogs: [
        '03:41:10.012 [GUARDDUTY] High-severity finding: UnauthorizedAccess:EC2/SSHBruteForce detected',
        '03:41:10.332 [EVENTBRIDGE] Finding matched rule: rule-aegis-soar-containment (routing in 320ms)',
        '03:41:10.650 [STEP_FUNCTIONS] Execution arn:aws:states:soar-containment started: Isolating 42 IP CIDRs',
        '03:41:10.820 [WAFv2] Updated IPSet blocklist: 42 malicious IPs blacklisted at edge (820ms total latency)',
        '03:41:11.190 [S3_WORM] Cryptographic SHA-256 custody log written to Object Lock COMPLIANCE vault'
      ],
      repoUrl: 'https://github.com/ShyamD2/aegis-cloud-security',
      reportUrl: '/reports/AEGIS_Project_Report.pdf'
    }
  ];

  const toggleIncident = (id: string) => {
    playTactileClick();
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="post-mortems" className="postmortems-section fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">04. SRE Incident Chronicles & Runbooks</div>
          <h3 className="section-title">Production Post-Mortems & Root Cause Analysis</h3>
          <p className="section-subtitle">
            Senior engineers are measured by how they diagnose, isolate, and recover when distributed cloud infrastructure breaks. Real incident chronicles, root-cause analyses (RCA), and mathematical prevention invariants.
          </p>
        </div>

        {/* Incident Cards Accordion / Feed */}
        <div className="incidents-feed">
          {incidents.map((inc) => {
            const isExpanded = expandedId === inc.id;

            return (
              <div key={inc.id} className={`incident-card glass-card ${isExpanded ? 'expanded' : ''}`}>
                {/* Incident Summary Header */}
                <div className="incident-card-header" onClick={() => toggleIncident(inc.id)}>
                  <div className="incident-header-left">
                    <span className={`severity-badge ${inc.severity.toLowerCase()}`}>
                      <AlertTriangle size={13} /> {inc.severity}
                    </span>
                    <span className="incident-code">{inc.code}</span>
                    <span className="incident-system-badge">{inc.system}</span>
                  </div>

                  <div className="incident-header-right">
                    <div className="mttd-mttr-pills desktop-only">
                      <span className="metric-pill">
                        <Clock size={12} /> MTTD: {inc.mttd}
                      </span>
                      <span className="metric-pill highlight">
                        <Zap size={12} /> MTTR: {inc.mttr}
                      </span>
                    </div>

                    <button 
                      type="button" 
                      className="accordion-toggle-btn" 
                      aria-label={isExpanded ? 'Collapse incident details' : 'Expand incident details'}
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                <div className="incident-title-row" onClick={() => toggleIncident(inc.id)}>
                  <h4>{inc.title}</h4>
                  <p className="incident-short-desc">{inc.summary}</p>
                </div>

                {/* Expanded Detailed RCA Breakdown */}
                {isExpanded && (
                  <div className="incident-expanded-content">
                    <div className="rca-grid">
                      {/* Trigger & Root Cause */}
                      <div className="rca-block trigger-block">
                        <div className="rca-block-header">
                          <span className="rca-badge red">Trigger & Detection</span>
                        </div>
                        <p><strong>Incident Trigger:</strong> {inc.trigger}</p>
                        <p><strong>Root Cause Analysis:</strong> {inc.rootCause}</p>
                      </div>

                      {/* Mitigation & Invariant */}
                      <div className="rca-block mitigation-block">
                        <div className="rca-block-header">
                          <span className="rca-badge green">Remediation & Invariant</span>
                        </div>
                        <p><strong>Active Mitigation:</strong> {inc.mitigation}</p>
                        <p><strong>Prevention Invariant:</strong> {inc.invariant}</p>
                      </div>
                    </div>

                    {/* Telemetry Stream Box */}
                    <div className="telemetry-log-box">
                      <div className="log-box-header">
                        <Terminal size={13} />
                        <span>Incident Timeline & Telemetry Audit Trail</span>
                      </div>
                      <pre className="log-stream">
                        {inc.telemetryLogs.map((log, lIdx) => (
                          <div key={lIdx} className="log-line">
                            <code>{log}</code>
                          </div>
                        ))}
                      </pre>
                    </div>

                    {/* Bottom Actions */}
                    <div className="incident-footer-actions">
                      <a href={inc.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-incident-repo">
                        <ExternalLink size={14} />
                        <span>Verify Systems Code</span>
                      </a>
                      {inc.reportUrl && (
                        <a href={inc.reportUrl} target="_blank" rel="noopener noreferrer" className="btn-incident-dossier">
                          <FileText size={14} />
                          <span>Read Full Incident Dossier (PDF)</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .postmortems-section {
          padding: 85px 0;
          position: relative;
        }

        .incidents-feed {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 36px;
        }

        .incident-card {
          padding: 24px;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }

        .incident-card:hover {
          border-color: rgba(var(--accent-rgb), 0.4);
        }

        .incident-card.expanded {
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
        }

        .incident-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          gap: 12px;
          margin-bottom: 12px;
        }

        .incident-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .severity-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          padding: 3px 9px;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }

        .severity-badge.sev-1 {
          background: rgba(229, 62, 62, 0.15);
          color: #EF4444;
          border: 1px solid rgba(229, 62, 62, 0.35);
        }

        .severity-badge.sev-2 {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.35);
        }

        .incident-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .incident-system-badge {
          font-size: 11.5px;
          color: var(--text-muted);
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        .incident-header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mttd-mttr-pills {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .metric-pill.highlight {
          color: #10B981;
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.08);
        }

        .accordion-toggle-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .incident-title-row {
          cursor: pointer;
        }

        .incident-title-row h4 {
          font-size: 18px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .incident-short-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .incident-expanded-content {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
          animation: fadeIn 0.25s ease-out;
        }

        .rca-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }

        .rca-block {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .rca-block-header {
          margin-bottom: 4px;
        }

        .rca-badge {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .rca-badge.red {
          background: rgba(229, 62, 62, 0.12);
          color: #EF4444;
          border: 1px solid rgba(229, 62, 62, 0.25);
        }

        .rca-badge.green {
          background: rgba(16, 185, 129, 0.12);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .rca-block p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .rca-block p strong {
          color: var(--text-primary);
        }

        .telemetry-log-box {
          background: #0B0C10;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .log-box-header {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          padding: 6px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .log-stream {
          margin: 0;
          padding: 12px 14px;
          overflow-x: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .log-line code {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 11.5px;
          line-height: 1.5;
          color: #CBD5E1;
        }

        .incident-footer-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        .btn-incident-repo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 8px 16px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-incident-repo:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--text-primary);
        }

        .btn-incident-dossier {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-color);
          color: #FFFFFF;
          padding: 8px 18px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fast);
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.3);
        }

        .btn-incident-dossier:hover {
          background: #DC2626;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .rca-grid {
            grid-template-columns: 1fr;
          }
          .desktop-only {
            display: none !important;
          }
          .incident-footer-actions {
            flex-direction: column;
          }
          .btn-incident-repo, .btn-incident-dossier {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
