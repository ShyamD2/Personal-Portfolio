import React, { useState } from 'react';
import { Network, Server, Shield, Layers, Database, Code2, Copy, Check, ExternalLink } from 'lucide-react';
import { playTactileClick, playSuccessChime } from '../../utils/soundEffects';

interface TopologyTier {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  badgeColor: string;
  cidrOrEndpoint: string;
  specs: { [key: string]: string };
  terraformHcl: string;
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
    terraformHcl: `resource "aws_rds_cluster" "aurora_ha" {
  cluster_identifier      = "aurora-production-cluster"
  engine                  = "aurora-postgresql"
  engine_version          = "16.2"
  database_name           = "app_production"
  master_username         = "cloud_admin"
  storage_encrypted       = true
  kms_key_id              = aws_kms_key.rds_key.arn
  db_subnet_group_name    = aws_db_subnet_group.isolated_db.name
  vpc_security_group_ids = [aws_security_group.db_ingress.id]
  deletion_protection     = true
}`
  }
];

export default function NetworkTopologyExplorer() {
  const [selectedTier, setSelectedTier] = useState<TopologyTier>(TIERS[2]);
  const [copied, setCopied] = useState(false);

  const handleSelectTier = (tier: TopologyTier) => {
    playTactileClick();
    setSelectedTier(tier);
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
      {/* Header */}
      <div className="topology-header">
        <div className="topology-badge">
          <Layers size={14} />
          <span>PRODUCTION CLOUD ARCHITECTURE</span>
        </div>
        <h4>Interactive AWS Network Topology & Terraform Codification</h4>
        <p>
          Click any architectural layer below to inspect VPC routing domains, CIDR subnetting, and read the exact codified Terraform HCL module.
        </p>
      </div>

      {/* Interactive Topology Pipeline */}
      <div className="topology-pipeline-row">
        {TIERS.map((tier, idx) => (
          <div key={tier.id} className="tier-node-wrapper">
            <button
              type="button"
              className={`tier-node-card ${selectedTier.id === tier.id ? 'active' : ''}`}
              onClick={() => handleSelectTier(tier)}
            >
              <div className="tier-icon-box" style={{ color: tier.badgeColor }}>
                {tier.icon}
              </div>
              <div className="tier-text-group">
                <span className="tier-cat-label">{tier.category}</span>
                <span className="tier-name-label">{tier.name}</span>
              </div>
            </button>
            {idx < TIERS.length - 1 && <div className="tier-connector-line"></div>}
          </div>
        ))}
      </div>

      {/* Detailed Tier Inspector */}
      <div className="tier-inspector-card">
        <div className="inspector-left-specs">
          <div className="spec-header-row">
            <div className="spec-badge-box">
              {selectedTier.icon}
              <span>{selectedTier.name}</span>
            </div>
            <span className="spec-endpoint-tag">{selectedTier.cidrOrEndpoint}</span>
          </div>

          <div className="spec-props-grid">
            {Object.entries(selectedTier.specs).map(([key, val]) => (
              <div key={key} className="spec-prop-row">
                <span className="prop-k">{key}:</span>
                <span className="prop-v">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Codified Terraform HCL */}
        <div className="inspector-right-hcl">
          <div className="hcl-header">
            <div className="hcl-title">
              <Code2 size={14} />
              <span>Terraform Module (HCL Codified)</span>
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

        .topology-header {
          max-width: 650px;
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

        .tier-name-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .tier-connector-line {
          width: 24px;
          height: 2px;
          background: var(--border-color);
          margin: 0 6px;
        }

        /* Inspector Card */
        .tier-inspector-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 20px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .inspector-left-specs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .spec-header-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .spec-badge-box {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 800;
          color: var(--text-primary);
        }

        .spec-endpoint-tag {
          font-family: monospace;
          font-size: 11px;
          color: #38BDF8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 3px 8px;
          border-radius: 4px;
          width: fit-content;
        }

        .spec-props-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .spec-prop-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 12px;
          gap: 12px;
        }

        .prop-k {
          color: var(--text-muted);
          font-weight: 600;
        }

        .prop-v {
          color: var(--text-primary);
          font-weight: 700;
          text-align: right;
        }

        /* Right HCL */
        .inspector-right-hcl {
          background: #0C0C0E;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hcl-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 14px;
          background: #141418;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hcl-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.7);
        }

        .btn-copy-hcl {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 10.5px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-copy-hcl:hover {
          background: var(--accent-color);
          border-color: var(--accent-color);
        }

        .green {
          color: #10B981;
        }

        .hcl-code-window {
          padding: 14px;
          overflow-y: auto;
          max-height: 240px;
        }

        .hcl-code-window pre {
          margin: 0;
        }

        .hcl-code-window code {
          font-family: monospace;
          font-size: 11.5px;
          color: #A5D6FF;
          line-height: 1.5;
        }

        @media (max-width: 800px) {
          .tier-inspector-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
