import React, { useState } from 'react';
import { X, Layers, Cpu, Shield, RefreshCw, CheckCircle2, ExternalLink, FileText, ArrowRight, Terminal, Zap } from 'lucide-react';
import { playTactileClick } from '../../utils/soundEffects';

interface ArchitectureInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: 'kubeforecast' | 'driftwarden' | 'aegis';
}

export default function ArchitectureInspectorModal({ isOpen, onClose, initialProject = 'kubeforecast' }: ArchitectureInspectorModalProps) {
  const [activeTab, setActiveTab] = useState<'kubeforecast' | 'driftwarden' | 'aegis'>(initialProject);
  const [activeLayer, setActiveLayer] = useState<'control' | 'data' | 'security'>('control');

  if (!isOpen) return null;

  const handleTabChange = (tab: 'kubeforecast' | 'driftwarden' | 'aegis') => {
    playTactileClick();
    setActiveTab(tab);
    setActiveLayer('control');
  };

  const projectDetails = {
    kubeforecast: {
      title: 'KubeForecast Architecture',
      tagline: 'Deterministic Kubernetes Scheduling Framework Plugin & Predictive FinOps Engine',
      github: 'https://github.com/ShyamD2/KubeForecast',
      dossier: '/reports/KubeForecast_Project_Report.pdf',
      layers: {
        control: {
          title: 'Control Plane: Native Go Scheduling Plugin',
          metric: '90.35 ns/op evaluation latency',
          bullets: [
            'Hooks directly into Kubernetes kube-scheduler via Scheduling Framework extension points (PreFilter, Filter, PreScore, Score).',
            'Waterline bin-packing algorithm scores nodes dynamically based on CPU/Memory historical waterline thresholds.',
            'Deterministic score output guides Pod placement onto high-density nodes, starving underutilized nodes for safe scale-down.'
          ],
          codeSnippet: `// PreScore evaluates cluster node waterlines in 90.35 ns
func (kf *KubeForecast) Score(ctx context.Context, state *framework.CycleState, p *v1.Pod, nodeName string) (int64, *framework.Status) {
    nodeInfo, err := kf.handle.SnapshotSharedLister().NodeInfos().Get(nodeName)
    if err != nil { return 0, framework.AsStatus(err) }
    
    waterline := kf.calculateWaterline(nodeInfo, p)
    score := kf.binPackScore(waterline) // Prioritize waterline target (75%)
    return score, framework.NewStatus(framework.Success)
}`
        },
        data: {
          title: 'Data Plane: AWS EKS Worker Fleet Consolidation',
          metric: '50.0% – 66.7% Worker Node Reduction',
          bullets: [
            'Provisioned across multi-AZ AWS EKS cluster (c7i-flex.large worker nodes) codified with 100% Terraform.',
            'Consolidates real application workloads without violating PodDisruptionBudgets (PDB) or pod anti-affinity rules.',
            'Exposes empty worker nodes to AWS Cluster Autoscaler for automated, safe instance termination, cutting idle compute spend.'
          ],
          codeSnippet: `# Terraform AWS EKS Node Group with Dynamic Autoscaling
resource "aws_eks_node_group" "workers" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "kubeforecast-consolidated-fleet"
  scaling_config {
    desired_size = 2
    max_size     = 6
    min_size     = 1
  }
  instance_types = ["c7i-flex.large"]
}`
        },
        security: {
          title: 'Observability & Security Layer: Prometheus & IRSA',
          metric: '5 Grafana Dashboards & Zero ClickOps IAM',
          bullets: [
            'IAM Roles for Service Accounts (IRSA) enforce least-privilege pod access to AWS cloud APIs with OIDC federation.',
            'Prometheus exporter scrapes custom Go runtime metrics, scheduling latency percentiles, and pod migration events.',
            'Grafana dashboards provide real-time visibility into cluster waterline saturation, node count drop, and cost reduction.'
          ],
          codeSnippet: `// Prometheus counter tracks evaluation latency percentiles
var (
    schedulingLatency = prometheus.NewHistogram(prometheus.HistogramOpts{
        Name:    "kubeforecast_score_latency_nanoseconds",
        Help:    "Latency of KubeForecast PreScore/Score evaluation in ns",
        Buckets: []float64{50, 75, 90, 100, 150, 250},
    })
)`
        }
      }
    },
    driftwarden: {
      title: 'DriftWarden Architecture',
      tagline: 'High-Precision 3-Source AWS Drift Detection & GitOps Reconciliation Engine in Go 1.24+',
      github: 'https://github.com/ShyamD2/driftwarden',
      dossier: '/reports/DriftWarden_Project_Report.pdf',
      layers: {
        control: {
          title: 'Core Engine: 3-Source State Reconciliation',
          metric: '3-Source Correlated Accuracy',
          bullets: [
            'Source 1 (Git Desired): Parses committed Terraform HCL AST and unapplied local configurations.',
            'Source 2 (Terraform State): Inspects remote state with DynamoDB lock awareness to prevent race conditions.',
            'Source 3 (AWS Live State): Discovers live cloud resources via AWS SDK v2 across multi-account environments.',
            'Three-way diff engine pinpoints out-of-band ClickOps drift, shadow resources, and unapplied code changes.'
          ],
          codeSnippet: `// Reconcile compares Git AST, Terraform State, and Live AWS SDK v2
func (e *Engine) Correlate(gitState *HCLGraph, tfState *TFState, awsLive *LiveInventory) *DriftReport {
    drifts := make([]DriftItem, 0)
    for resID, liveRes := range awsLive.Resources {
        if !tfState.Has(resID) {
            drifts = append(drifts, DriftItem{Type: ShadowResource, ID: resID})
        }
    }
    return &DriftReport{Items: drifts, CISCompliant: e.auditCIS(awsLive)}
}`
        },
        data: {
          title: 'Runtime & Packaging: Distroless Container Architecture',
          metric: '< 25 MB Ultra-Lean Container Image',
          bullets: [
            'Compiled into a single static Go binary with zero external OS dependencies, minimizing attack surfaces.',
            'Packaged in Google Distroless base image for zero-cve container runtime security.',
            'Executes consistency re-probes to filter transient AWS API throttling and eliminate false-positive alerts.'
          ],
          codeSnippet: `# Multi-stage lean Docker build producing <25MB image
FROM golang:1.24-alpine AS builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o driftwarden .

FROM gcr.io/distroless/static-debian12
COPY --from=builder /app/driftwarden /
ENTRYPOINT ["/driftwarden"]`
        },
        security: {
          title: 'Compliance & Remediation: CIS AWS v3.0 & Safe GitOps',
          metric: 'CIS Benchmark Audits & Dry-Run Remediation',
          bullets: [
            'Built-in CIS AWS Foundations Benchmark v3.0 checks for public S3 buckets, open security groups, and root IAM usage.',
            'Generates Terraform 1.5+ `import` blocks and automated GitOps Pull Requests for discovered shadow resources.',
            'Supports safe dry-run mode ensuring remediation never destroys live production assets accidentally.'
          ],
          codeSnippet: `# Automated GitOps Import generated by DriftWarden
import {
  to = aws_s3_bucket.shadow_asset
  id = "unmanaged-production-bucket-2026"
}`
        }
      }
    },
    aegis: {
      title: 'Project AEGIS Architecture',
      tagline: 'Autonomous Multi-Account AWS SOAR Security Fabric & Immutable S3 WORM Vaults',
      github: 'https://github.com/ShyamD2/aegis-cloud-security',
      dossier: '/reports/AEGIS_Project_Report.pdf',
      layers: {
        control: {
          title: 'Event-Driven SOAR Pipeline: EventBridge & Step Functions',
          metric: '< 820ms Autonomous Containment Latency',
          bullets: [
            'Ingests GuardDuty and CloudTrail security findings via Amazon EventBridge bus within 300ms.',
            'AWS Step Functions state machine orchestrates automated containment without human delay.',
            'AWS WAFv2 automated rule updates dynamically block attacking IP addresses across all CloudFront edges.'
          ],
          codeSnippet: `// Lambda containment function executes in <820ms
exports.handler = async (event) => {
    const { sourceIp, instanceId } = event.detail;
    await updateWAFBlocklist(sourceIp); // Blacklist attacking IP
    await isolateEC2Node(instanceId);  // Apply quarantine security group
    return { status: "CONTAINED", timestamp: new Date().toISOString() };
};`
        },
        data: {
          title: 'Infrastructure as Code: 100% Modular Terraform',
          metric: 'Multi-Account AWS & Zero ClickOps',
          bullets: [
            '100% codified across Security, Log Archive, and Workload AWS accounts using Terraform modules.',
            'Continuous CI/CD guardrails enforced with Checkov, TFLint, and Trivy static analysis on every pull request.',
            'Zero manual ClickOps configuration guarantees repeatable, tamper-evident security deployments.'
          ],
          codeSnippet: `# Terraform AWS WORM S3 Bucket with SEC Rule 17a-4 Object Lock
resource "aws_s3_bucket_object_lock_configuration" "forensics" {
  bucket = aws_s3_bucket.audit_vault.id
  rule {
    default_retention {
      mode = "COMPLIANCE"
      days = 365
    }
  }
}`
        },
        security: {
          title: 'Digital Forensics: SEC Rule 17a-4 Immutable S3 WORM',
          metric: 'KMS CMK Encryption & WORM Compliance Mode',
          bullets: [
            'Forensic evidence and incident timelines stream to S3 Object Lock vaults in COMPLIANCE mode.',
            'Cryptographically guaranteed tamper-proof storage: cannot be deleted or modified even by AWS root account.',
            'Customer Managed KMS keys with strict key rotation policies ensure enterprise-grade digital custody trails.'
          ],
          codeSnippet: `// SHA-256 integrity hash logged with forensic artifact
const hash = crypto.createHash('sha256').update(forensicSnapshot).digest('hex');
await s3.putObject({
    Bucket: "sec-rule-17a4-audit-vault",
    Key: \`incident-\${id}/\${hash}.bin\`,
    Body: forensicSnapshot
});`
        }
      }
    }
  };

  const currentProj = projectDetails[activeTab];
  const currentLayer = currentProj.layers[activeLayer];

  return (
    <div className="arch-modal-overlay" onClick={onClose}>
      <div className="arch-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="arch-modal-header">
          <div className="arch-header-tabs">
            <button 
              type="button" 
              className={`arch-proj-tab ${activeTab === 'kubeforecast' ? 'active' : ''}`}
              onClick={() => handleTabChange('kubeforecast')}
            >
              <Cpu size={14} />
              <span>KubeForecast</span>
            </button>
            <button 
              type="button" 
              className={`arch-proj-tab ${activeTab === 'driftwarden' ? 'active' : ''}`}
              onClick={() => handleTabChange('driftwarden')}
            >
              <RefreshCw size={14} />
              <span>DriftWarden</span>
            </button>
            <button 
              type="button" 
              className={`arch-proj-tab ${activeTab === 'aegis' ? 'active' : ''}`}
              onClick={() => handleTabChange('aegis')}
            >
              <Shield size={14} />
              <span>Project AEGIS</span>
            </button>
          </div>

          <button type="button" className="arch-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Project Header Info */}
        <div className="arch-title-area">
          <h3>{currentProj.title}</h3>
          <p className="arch-tagline">{currentProj.tagline}</p>
        </div>

        {/* Layer Selector Bar */}
        <div className="arch-layers-bar">
          <button 
            type="button" 
            className={`layer-btn ${activeLayer === 'control' ? 'active' : ''}`}
            onClick={() => setActiveLayer('control')}
          >
            <Zap size={14} />
            <span>Control Plane</span>
          </button>
          <button 
            type="button" 
            className={`layer-btn ${activeLayer === 'data' ? 'active' : ''}`}
            onClick={() => setActiveLayer('data')}
          >
            <Layers size={14} />
            <span>Data Plane</span>
          </button>
          <button 
            type="button" 
            className={`layer-btn ${activeLayer === 'security' ? 'active' : ''}`}
            onClick={() => setActiveLayer('security')}
          >
            <Shield size={14} />
            <span>Security & Telemetry</span>
          </button>
        </div>

        {/* Layer Content */}
        <div className="arch-layer-body">
          <div className="layer-top-meta">
            <h4>{currentLayer.title}</h4>
            <span className="layer-metric-pill">{currentLayer.metric}</span>
          </div>

          <ul className="layer-bullet-list">
            {currentLayer.bullets.map((b, idx) => (
              <li key={idx}>
                <CheckCircle2 size={15} className="bullet-check-icon" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Code Snippet Box */}
          <div className="arch-code-box">
            <div className="code-box-header">
              <Terminal size={13} />
              <span>Core Architectural Implementation</span>
            </div>
            <pre className="code-content">
              <code>{currentLayer.codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="arch-modal-footer">
          <a href={currentProj.github} target="_blank" rel="noopener noreferrer" className="btn-arch-github">
            <ExternalLink size={14} />
            <span>GitHub Repository</span>
          </a>
          <a href={currentProj.dossier} target="_blank" rel="noopener noreferrer" className="btn-arch-dossier">
            <FileText size={14} />
            <span>Read Engineering Dossier (PDF)</span>
          </a>
        </div>
      </div>

      <style>{`
        .arch-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .arch-modal-container {
          width: 100%;
          max-width: 740px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 30px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          max-height: 92vh;
          overflow-y: auto;
        }

        .arch-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .arch-header-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-color);
          padding: 4px;
          border-radius: 50px;
          border: 1px solid var(--border-color);
        }

        .arch-proj-tab {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .arch-proj-tab.active {
          background: var(--accent-color);
          color: #FFFFFF;
          box-shadow: 0 2px 10px rgba(var(--accent-rgb), 0.3);
        }

        .arch-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .arch-close-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .arch-title-area h3 {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .arch-tagline {
          font-size: 13.5px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .arch-layers-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .layer-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .layer-btn:hover {
          border-color: rgba(var(--accent-rgb), 0.4);
          color: var(--text-primary);
        }

        .layer-btn.active {
          background: rgba(56, 189, 248, 0.12);
          border-color: #38BDF8;
          color: #38BDF8;
        }

        .arch-layer-body {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 22px;
          margin-bottom: 24px;
        }

        .layer-top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }

        .layer-top-meta h4 {
          font-size: 16px;
          font-weight: 800;
          color: var(--text-primary);
        }

        .layer-metric-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: #10B981;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 3px 10px;
          border-radius: 50px;
        }

        .layer-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .layer-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bullet-check-icon {
          color: #38BDF8;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .arch-code-box {
          background: #0B0C10;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .code-box-header {
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

        .code-content {
          margin: 0;
          padding: 14px;
          overflow-x: auto;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 12px;
          line-height: 1.6;
          color: #E2E8F0;
        }

        .arch-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        .btn-arch-github {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 10px 18px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-arch-github:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--text-primary);
        }

        .btn-arch-dossier {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-color);
          border: 1px solid var(--accent-color);
          color: #FFFFFF;
          padding: 10px 20px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fast);
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.35);
        }

        .btn-arch-dossier:hover {
          background: #DC2626;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .arch-modal-container {
            padding: 20px 16px;
          }
          .arch-header-tabs {
            overflow-x: auto;
            max-width: 80%;
          }
          .arch-modal-footer {
            flex-direction: column;
          }
          .btn-arch-github, .btn-arch-dossier {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
