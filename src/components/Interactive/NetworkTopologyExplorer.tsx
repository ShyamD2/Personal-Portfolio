import React, { useState } from 'react';
import { Network, Server, Shield, Layers, Database, Code2, Copy, Check, AlertTriangle, ShieldCheck, Flame, Zap } from 'lucide-react';
import { playTactileClick, playSuccessChime, playChaosAlert } from '../../utils/soundEffects';

interface TopologyTier {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  badgeColor: string;
  cidrOrEndpoint: string;
  specs: { [key: string]: string };
  terraformHcl: string;
  // ClickOps comparison data
  clickopsFlaws?: {
    riskLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM';
    vulnerabilities: { [key: string]: string };
    riskSummary: string;
    remediationNote: string;
  };
}

const TIERS: TopologyTier[] = [
  {
    id: 'ingress-waf',
    name: 'Ingress & Security Perimeter',
    category: 'Edge & Ingress Tier',
    icon: <Shield size={16} />,
    badgeColor: '#EF4444',
    cidrOrEndpoint: 'AWS WAFv2 + CloudFront + ALB',
    specs: {
      'Web ACL': 'aegis-production-wafv2',
      'Rate Limit': '2,000 req / 5-min window',
      'Managed Rules': 'AWSManagedRulesCommonRuleSet + SQLi',
      'SSL/TLS': 'TLS 1.3 Strict with ACM Wildcard'
    },
    clickopsFlaws: {
      riskLevel: 'CRITICAL',
      vulnerabilities: {
        'WAF Protection': 'MISSING — Direct internet access to ALB',
        'DDoS Resistance': 'ZERO rate limiting — Vulnerable to layer 7 floods',
        'TLS Policy': 'Legacy ELBSecurityPolicy-2016-08 (Insecure ciphers)',
        'Managed Rules': 'Disabled — Zero SQLi / XSS payload inspection'
      },
      riskSummary: 'High exposure to credential stuffing and unthrottled layer 7 DDoS floods.',
      remediationNote: 'Codified in AWS WAFv2 with rate-based rules and automated IPSet blacklisting.'
    },
    terraformHcl: `resource "aws_wafv2_web_acl" "aegis_shield" {
  name        = "aegis-production-wafv2"
  description = "Autonomous SOAR rate-limiting and threat isolation"
  scope       = "REGIONAL"

  default_action {
    allow {}
  }

  rule {
    name     = "RateLimitPerIP"
    priority = 1

    action {
      block {}
    }

    statement {
      rate_based_statement {
        limit              = 2000
        aggregate_key_type = "IP"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "RateLimitRule"
      sampled_requests_enabled   = true
    }
  }
}`
  },
  {
    id: 'tgw',
    name: 'AWS Transit Gateway Hub',
    category: 'Central Backbone Tier',
    icon: <Network size={16} />,
    badgeColor: '#38BDF8',
    cidrOrEndpoint: 'ASN: 64512 • Hub-and-Spoke Fabric',
    specs: {
      'TGW ASN': '64512 (Private Autonomous System)',
      'Attached VPCs': 'Production (10.0.0.0/16) + Security SOAR (10.10.0.0/16)',
      'Routing Tables': 'Isolated Production & Cross-Inspection Route Domains',
      'Failover': 'Dynamic BGP multi-path ECMP routing'
    },
    clickopsFlaws: {
      riskLevel: 'HIGH',
      vulnerabilities: {
        'Topology': 'Mesh VPC Peering without route segmentation',
        'Routing Tables': 'Flat default route table — No blast radius isolation',
        'CIDR Management': 'Overlapping /16 subnets requiring NAT workarounds',
        'High Availability': 'Single static tunnel without dynamic BGP failover'
      },
      riskSummary: 'Spaghetti peering network: Compromise in dev VPC can pivot directly into production.',
      remediationNote: 'Replaced with centralized AWS Transit Gateway hub with dedicated route tables.'
    },
    terraformHcl: `resource "aws_ec2_transit_gateway" "central_hub" {
  description                     = "Production multi-region central Transit Gateway"
  amazon_side_asn                 = 64512
  default_route_table_association = "enable"
  default_route_table_propagation = "enable"
  dns_support                     = "enable"
  vpn_ecmp_support                = "enable"

  tags = {
    Name        = "central-tgw-backbone"
    Environment = "Production"
    CodifiedBy  = "Terraform"
  }
}`
  },
  {
    id: 'eks-cluster',
    name: 'AWS EKS Compute & KubeForecast Node Group',
    category: 'Container Orchestration Tier',
    icon: <Server size={16} />,
    badgeColor: '#10B981',
    cidrOrEndpoint: '10.0.10.0/24 & 10.0.20.0/24 (Private Subnets)',
    specs: {
      'Kubernetes Version': 'v1.30 on AWS EKS',
      'Scheduler Engine': 'Go-compiled KubeForecast Custom Plugin',
      'Worker Capacity': 'Dual-AZ EC2 Managed Node Groups (Spot + On-Demand)',
      'PreScore Latency': '90.35ns hardware-tested waterline evaluation'
    },
    clickopsFlaws: {
      riskLevel: 'CRITICAL',
      vulnerabilities: {
        'Worker Ingress': '0.0.0.0/0 open on Port 22 (SSH Brute-Force Risk)',
        'Node Placement': 'Public subnets with assigned public IPv4 addresses',
        'Scheduling': 'Default kube-scheduler — 28% CPU load with 6 stranded nodes',
        'Capacity': '100% On-Demand pricing without Spot / Waterline bin-packing'
      },
      riskSummary: 'Severe compute cost bleed ($876/mo) and public SSH exposure on worker nodes.',
      remediationNote: 'KubeForecast custom Go scheduler + private EKS subnets with Spot capacity.'
    },
    terraformHcl: `resource "aws_eks_node_group" "kubeforecast_workers" {
  cluster_name    = aws_eks_cluster.production.name
  node_group_name = "kubeforecast-managed-workers"
  node_role_arn   = aws_iam_role.eks_node_role.arn
  subnet_ids      = [aws_subnet.private_az_a.id, aws_subnet.private_az_b.id]
  instance_types  = ["c5.xlarge"]
  capacity_type   = "SPOT"

  scaling_config {
    desired_size = 6
    max_size     = 24
    min_size     = 2
  }

  labels = {
    "scheduler.engine" = "kubeforecast-waterline"
    "finops.target"    = "75pct-waterline"
  }
}`
  },
  {
    id: 'aurora-db',
    name: 'Amazon Aurora Multi-AZ Data Layer',
    category: 'Isolated Database Tier',
    icon: <Database size={16} />,
    badgeColor: '#A855F7',
    cidrOrEndpoint: '10.0.100.0/24 (Database Subnets - Zero Internet Ingress)',
    specs: {
      'Engine': 'PostgreSQL 16.2 (Aurora Serverless v2)',
      'Replication': 'Multi-AZ synchronous storage replication across 3 AZs',
      'Encryption': 'AWS KMS CMK Customer-Managed Key at rest',
      'Network Ingress': 'Port 5432 restricted strictly to EKS Security Group'
    },
    clickopsFlaws: {
      riskLevel: 'HIGH',
      vulnerabilities: {
        'Storage Encryption': 'DISABLED — AWS Default KMS encryption unselected',
        'Public Access': 'publicly_accessible = true flag set by mistake',
        'Availability': 'Single-AZ instance without synchronous standby replica',
        'Credentials': 'Hardcoded plaintext credentials inside console launch wizard'
      },
      riskSummary: 'Critical data breach liability and single-point-of-failure database architecture.',
      remediationNote: 'Multi-AZ Aurora cluster with KMS envelope encryption and zero internet ingress.'
    },
    terraformHcl: `resource "aws_rds_cluster" "aurora_ha" {
  cluster_identifier      = "aurora-production-cluster"
  engine                  = "aurora-postgresql"
  engine_version          = "16.2"
  database_name           = "app_production"
  master_username         = "cloud_admin"
  storage_encrypted       = true
  kms_key_id              = aws_kms_key.rds_key.arn
  db_subnet_group_name    = aws_db_subnet_group.isolated_db.name
  vpc_security_group_ids  = [aws_security_group.db_ingress.id]
  deletion_protection     = true
}`
  }
];

export default function NetworkTopologyExplorer() {
  const [selectedTier, setSelectedTier] = useState<TopologyTier>(TIERS[2]);
  const [architectureMode, setArchitectureMode] = useState<'codified' | 'clickops'>('codified');
  const [copied, setCopied] = useState(false);

  const handleSelectTier = (tier: TopologyTier) => {
    playTactileClick();
    setSelectedTier(tier);
    setCopied(false);
  };

  const handleModeToggle = (mode: 'codified' | 'clickops') => {
    if (mode === 'clickops') {
      playChaosAlert();
    } else {
      playSuccessChime();
    }
    setArchitectureMode(mode);
    setCopied(false);
  };

  const handleCopyHcl = () => {
    navigator.clipboard.writeText(selectedTier.terraformHcl);
    playSuccessChime();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="topology-explorer-container">
      {/* Header & Mode Switcher */}
      <div className="topology-header-row">
        <div className="topology-header">
          <div className="topology-badge">
            <Layers size={14} />
            <span>PRODUCTION CLOUD ARCHITECTURE</span>
          </div>
          <h4>Interactive AWS Network Topology & Terraform Codification</h4>
          <p>
            Toggle between amateur manual ClickOps pitfalls and SRE-grade Terraform codification to inspect CIS Benchmark hardening.
          </p>
        </div>

        {/* ClickOps vs. SRE Codified Mode Switcher */}
        <div className="arch-mode-switcher-card">
          <span className="mode-switch-title">Architecture Audit Mode:</span>
          <div className="mode-toggle-group">
            <button
              type="button"
              className={`mode-toggle-btn codified ${architectureMode === 'codified' ? 'active' : ''}`}
              onClick={() => handleModeToggle('codified')}
            >
              <ShieldCheck size={14} />
              <span>🛡️ SRE-Grade Codified</span>
            </button>
            <button
              type="button"
              className={`mode-toggle-btn clickops ${architectureMode === 'clickops' ? 'active' : ''}`}
              onClick={() => handleModeToggle('clickops')}
            >
              <AlertTriangle size={14} />
              <span>⚠️ Amateur ClickOps</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mode Status Banner */}
      {architectureMode === 'clickops' ? (
        <div className="clickops-warning-banner">
          <div className="warning-banner-icon">
            <Flame size={20} />
          </div>
          <div className="warning-banner-text">
            <h5>⚠️ Manual AWS Console ClickOps Mode Active</h5>
            <p>
              Simulating rookie configuration flaws: Unsegmented VPC peering, public Port 22 SSH exposure, unencrypted database storage, and 28% CPU capacity waste. Click any layer below to inspect remediation diffs.
            </p>
          </div>
        </div>
      ) : (
        <div className="codified-success-banner">
          <div className="success-banner-icon">
            <ShieldCheck size={20} />
          </div>
          <div className="success-banner-text">
            <h5>🛡️ SRE-Grade Codified Architecture Active</h5>
            <p>
              100% Terraform codified with remote S3 backend state locking, least-privilege IAM policies, dual Transit Gateway redundancy, and CIS AWS Benchmark compliance.
            </p>
          </div>
        </div>
      )}

      {/* Interactive Topology Pipeline */}
      <div className="topology-pipeline-row">
        {TIERS.map((tier, idx) => (
          <div key={tier.id} className="tier-node-wrapper">
            <button
              type="button"
              className={`tier-node-card ${selectedTier.id === tier.id ? 'active' : ''} ${architectureMode === 'clickops' ? 'clickops-mode' : ''}`}
              onClick={() => handleSelectTier(tier)}
            >
              <div 
                className="tier-icon-box" 
                style={{ color: architectureMode === 'clickops' ? '#EF4444' : tier.badgeColor }}
              >
                {architectureMode === 'clickops' ? <AlertTriangle size={16} /> : tier.icon}
              </div>
              <div className="tier-text-group">
                <span className="tier-cat-label">
                  {architectureMode === 'clickops' && tier.clickopsFlaws ? (
                    <span className="risk-tag-inline">{tier.clickopsFlaws.riskLevel} RISK</span>
                  ) : (
                    tier.category
                  )}
                </span>
                <span className="tier-name-label">{tier.name}</span>
              </div>
            </button>
            {idx < TIERS.length - 1 && (
              <div className={`tier-connector-line ${architectureMode === 'clickops' ? 'clickops-line' : ''}`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Detailed Tier Inspector */}
      <div className={`tier-inspector-card ${architectureMode === 'clickops' ? 'clickops-inspector' : ''}`}>
        <div className="inspector-left-specs">
          <div className="spec-header-row">
            <div className="spec-badge-box">
              {architectureMode === 'clickops' ? <AlertTriangle size={16} className="red-icon" /> : selectedTier.icon}
              <span>{selectedTier.name}</span>
            </div>
            <span className={`spec-endpoint-tag ${architectureMode === 'clickops' ? 'clickops-tag' : ''}`}>
              {architectureMode === 'clickops' ? 'Manual Console Setup' : selectedTier.cidrOrEndpoint}
            </span>
          </div>

          {architectureMode === 'clickops' && selectedTier.clickopsFlaws ? (
            /* ClickOps Flaw Inspection */
            <div className="clickops-flaws-container">
              <div className="flaw-risk-callout">
                <span className="callout-label">Blast Radius & Threat Analysis:</span>
                <p>{selectedTier.clickopsFlaws.riskSummary}</p>
              </div>

              <div className="spec-props-grid clickops-props">
                {Object.entries(selectedTier.clickopsFlaws.vulnerabilities).map(([key, val]) => (
                  <div key={key} className="spec-prop-row flaw-row">
                    <span className="prop-k flaw-k">❌ {key}:</span>
                    <span className="prop-v flaw-v">{val}</span>
                  </div>
                ))}
              </div>

              <div className="remediation-pill">
                <Zap size={14} />
                <span><strong>SRE Remediation:</strong> {selectedTier.clickopsFlaws.remediationNote}</span>
              </div>
            </div>
          ) : (
            /* Standard Codified Specs */
            <div className="spec-props-grid">
              {Object.entries(selectedTier.specs).map(([key, val]) => (
                <div key={key} className="spec-prop-row">
                  <span className="prop-k">{key}:</span>
                  <span className="prop-v">{val}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Codified Terraform HCL (Remediation Diff / Production Module) */}
        <div className="inspector-right-hcl">
          <div className="hcl-header">
            <div className="hcl-title">
              <Code2 size={14} />
              <span>
                {architectureMode === 'clickops' ? 'SRE Hardening Terraform Module' : 'Production Terraform Module (HCL)'}
              </span>
            </div>
            <button type="button" className="btn-copy-hcl" onClick={handleCopyHcl}>
              {copied ? <Check size={13} className="green" /> : <Copy size={13} />}
              <span>{copied ? 'HCL Copied' : 'Copy HCL'}</span>
            </button>
          </div>

          <div className="hcl-code-window custom-scrollbar">
            <pre><code>{selectedTier.terraformHcl}</code></pre>
          </div>
        </div>
      </div>

      <style>{`
        .topology-explorer-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .topology-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          flex-wrap: wrap;
        }

        .topology-header {
          max-width: 600px;
        }

        .topology-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38BDF8;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 8px;
        }

        .topology-header h4 {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .topology-header p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Mode Switcher Card */
        .arch-mode-switcher-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          padding: 12px 16px;
          border-radius: var(--radius-md);
        }

        .mode-switch-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .mode-toggle-group {
          display: flex;
          gap: 8px;
        }

        .mode-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid var(--border-color);
          background: var(--bg-color);
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .mode-toggle-btn.codified.active {
          background: rgba(16, 185, 129, 0.12);
          border-color: #10B981;
          color: #10B981;
        }

        .mode-toggle-btn.clickops.active {
          background: rgba(239, 68, 68, 0.12);
          border-color: #EF4444;
          color: #EF4444;
        }

        /* Warning & Success Banners */
        .clickops-warning-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.35);
          animation: fadeIn 0.3s ease-out;
        }

        .warning-banner-icon {
          color: #EF4444;
          flex-shrink: 0;
        }

        .warning-banner-text h5 {
          font-size: 14px;
          font-weight: 800;
          color: #EF4444;
          margin-bottom: 2px;
        }

        .warning-banner-text p {
          font-size: 12.5px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .codified-success-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.35);
          animation: fadeIn 0.3s ease-out;
        }

        .success-banner-icon {
          color: #10B981;
          flex-shrink: 0;
        }

        .success-banner-text h5 {
          font-size: 14px;
          font-weight: 800;
          color: #10B981;
          margin-bottom: 2px;
        }

        .success-banner-text p {
          font-size: 12.5px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        /* Pipeline Row */
        .topology-pipeline-row {
          display: flex;
          align-items: center;
          overflow-x: auto;
          padding: 10px 0;
          gap: 6px;
        }

        .tier-node-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .tier-node-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--bg-color);
          border: 1.5px solid var(--border-color);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition-fast);
          text-align: left;
        }

        .tier-node-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        .tier-node-card.active {
          border-color: var(--accent-color);
          background: var(--card-bg-solid);
          box-shadow: 0 4px 20px rgba(var(--accent-rgb), 0.15);
        }

        .tier-node-card.clickops-mode.active {
          border-color: #EF4444;
          box-shadow: 0 4px 20px rgba(239, 68, 68, 0.2);
        }

        .tier-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tier-text-group {
          display: flex;
          flex-direction: column;
        }

        .tier-cat-label {
          font-size: 10px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .risk-tag-inline {
          color: #EF4444;
          font-weight: 800;
        }

        .tier-name-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .tier-connector-line {
          width: 30px;
          height: 2px;
          background: var(--border-color);
          flex-shrink: 0;
        }

        .tier-connector-line.clickops-line {
          background: rgba(239, 68, 68, 0.4);
          border-top: 1px dashed #EF4444;
        }

        /* Inspector Card */
        .tier-inspector-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
        }

        .tier-inspector-card.clickops-inspector {
          border-color: rgba(239, 68, 68, 0.35);
        }

        .inspector-left-specs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .spec-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .spec-badge-box {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 800;
          color: var(--text-primary);
        }

        .red-icon {
          color: #EF4444;
        }

        .spec-endpoint-tag {
          font-family: monospace;
          font-size: 11px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: #38BDF8;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .spec-endpoint-tag.clickops-tag {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.25);
          color: #EF4444;
        }

        /* ClickOps Flaw Inspection Details */
        .clickops-flaws-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .flaw-risk-callout {
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          background: rgba(239, 68, 68, 0.06);
          border-left: 3px solid #EF4444;
        }

        .callout-label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #EF4444;
          display: block;
          margin-bottom: 3px;
        }

        .flaw-risk-callout p {
          font-size: 12px;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.4;
        }

        .spec-props-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .spec-prop-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: var(--bg-color);
          border-radius: var(--radius-sm);
          font-size: 12.5px;
          border: 1px solid var(--border-color);
        }

        .spec-prop-row.flaw-row {
          background: rgba(239, 68, 68, 0.03);
          border-color: rgba(239, 68, 68, 0.2);
        }

        .prop-k {
          font-weight: 700;
          color: var(--text-secondary);
        }

        .prop-k.flaw-k {
          color: #EF4444;
        }

        .prop-v {
          font-family: monospace;
          color: var(--text-primary);
          text-align: right;
        }

        .prop-v.flaw-v {
          color: #EF4444;
          font-weight: 600;
        }

        .remediation-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 12px;
          color: #10B981;
        }

        /* Right: HCL Code Box */
        .inspector-right-hcl {
          display: flex;
          flex-direction: column;
          background: #0D1117;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .hcl-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 16px;
          background: #161B22;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hcl-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #8B949E;
          font-size: 12px;
          font-weight: 600;
          font-family: monospace;
        }

        .btn-copy-hcl {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #C9D1D9;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-copy-hcl:hover {
          background: rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
        }

        .btn-copy-hcl .green {
          color: #10B981;
        }

        .hcl-code-window {
          padding: 16px;
          max-height: 290px;
          overflow-y: auto;
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 12px;
          line-height: 1.5;
          color: #58A6FF;
          background: #0D1117;
        }

        .hcl-code-window pre {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-all;
        }

        @media (max-width: 900px) {
          .tier-inspector-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
