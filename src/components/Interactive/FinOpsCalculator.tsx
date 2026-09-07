import React, { useState } from 'react';
import { DollarSign, TrendingDown, Layers, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { playTactileClick } from '../../utils/soundEffects';

interface InstanceOption {
  type: string;
  hourlyRate: number;
  vcpu: number;
  ram: string;
}

const INSTANCES: InstanceOption[] = [
  { type: 'c5.xlarge', hourlyRate: 0.170, vcpu: 4, ram: '8 GB' },
  { type: 'm5.large', hourlyRate: 0.096, vcpu: 2, ram: '8 GB' },
  { type: 'c6i.2xlarge', hourlyRate: 0.340, vcpu: 8, ram: '16 GB' },
  { type: 'r5.2xlarge', hourlyRate: 0.504, vcpu: 8, ram: '64 GB' }
];

export default function FinOpsCalculator() {
  const [nodeCount, setNodeCount] = useState(48);
  const [currentUtil, setCurrentUtil] = useState(30);
  const [selectedInstance, setSelectedInstance] = useState<InstanceOption>(INSTANCES[0]);

  const targetWaterline = 75; // KubeForecast 75% target

  // Calculations
  const hoursPerMonth = 730;
  const currentMonthlySpend = Math.round(nodeCount * selectedInstance.hourlyRate * hoursPerMonth);
  const consolidatedNodes = Math.max(2, Math.ceil(nodeCount * (currentUtil / targetWaterline)));
  const optimizedMonthlySpend = Math.round(consolidatedNodes * selectedInstance.hourlyRate * hoursPerMonth);
  const monthlySavings = currentMonthlySpend - optimizedMonthlySpend;
  const annualSavings = monthlySavings * 12;
  const nodesEliminated = nodeCount - consolidatedNodes;
  const pctSavings = Math.round((monthlySavings / currentMonthlySpend) * 100);

  const handleInstanceSelect = (inst: InstanceOption) => {
    playTactileClick();
    setSelectedInstance(inst);
  };

  return (
    <div className="finops-calculator-container">
      {/* Header */}
      <div className="finops-header">
        <div className="finops-badge">
          <DollarSign size={14} />
          <span>FINOPS RETURN ON INVESTMENT</span>
        </div>
        <h4>Estimate AWS Cloud Savings With KubeForecast</h4>
        <p>
          See how deterministic 75% waterline bin-packing eliminates idle compute waste, consolidates fragmented pods, and slashes EC2 bills.
        </p>
      </div>

      {/* Controls Grid */}
      <div className="finops-controls-grid">
        {/* Slider 1: Node Count */}
        <div className="finops-control-card">
          <div className="control-label-row">
            <span className="ctrl-title">EKS Worker Instances:</span>
            <span className="ctrl-value">{nodeCount} Nodes</span>
          </div>
          <input
            type="range"
            min="6"
            max="250"
            step="2"
            value={nodeCount}
            onChange={(e) => setNodeCount(Number(e.target.value))}
            className="finops-slider"
          />
          <div className="slider-limits">
            <span>6 nodes</span>
            <span>250 nodes</span>
          </div>
        </div>

        {/* Slider 2: CPU Utilization */}
        <div className="finops-control-card">
          <div className="control-label-row">
            <span className="ctrl-title">Average Node CPU Load:</span>
            <span className="ctrl-value red">{currentUtil}% (Fragmented)</span>
          </div>
          <input
            type="range"
            min="15"
            max="55"
            step="1"
            value={currentUtil}
            onChange={(e) => setCurrentUtil(Number(e.target.value))}
            className="finops-slider"
          />
          <div className="slider-limits">
            <span>15% (Heavily Wasteful)</span>
            <span>55% (Suboptimal)</span>
          </div>
        </div>
      </div>

      {/* Instance Class Selector */}
      <div className="instance-selector-block">
        <span className="instance-sec-label">Select AWS EC2 Instance Class:</span>
        <div className="instances-pills-row">
          {INSTANCES.map((inst) => (
            <button
              key={inst.type}
              type="button"
              className={`instance-pill-btn ${selectedInstance.type === inst.type ? 'active' : ''}`}
              onClick={() => handleInstanceSelect(inst)}
            >
              <span className="inst-name">{inst.type}</span>
              <span className="inst-meta">{inst.vcpu} vCPU • ${inst.hourlyRate}/hr</span>
            </button>
          ))}
        </div>
      </div>

      {/* Real-time ROI Output Results */}
      <div className="finops-results-banner">
        <div className="results-main-kpi">
          <div className="kpi-block highlight">
            <span className="kpi-label">Annualized Cloud Savings:</span>
            <h3 className="kpi-value green">
              ${annualSavings.toLocaleString()}
              <span className="kpi-sub">/ year</span>
            </h3>
            <span className="kpi-tagline">
              <TrendingDown size={14} /> -{pctSavings}% Total AWS Compute Reduction
            </span>
          </div>

          <div className="kpi-block">
            <span className="kpi-label">Monthly Bill Comparison:</span>
            <div className="bill-diff-row">
              <div className="bill-box before">
                <span className="bill-type">Current Spend:</span>
                <span className="bill-amt">${currentMonthlySpend.toLocaleString()}/mo</span>
              </div>
              <div className="bill-arrow">&rarr;</div>
              <div className="bill-box after">
                <span className="bill-type">With KubeForecast:</span>
                <span className="bill-amt green">${optimizedMonthlySpend.toLocaleString()}/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary KPIs */}
        <div className="results-secondary-kpis">
          <div className="sec-kpi-item">
            <Server size={16} className="sec-kpi-icon" />
            <div>
              <span className="sec-kpi-val">{nodesEliminated} EC2s Drained</span>
              <span className="sec-kpi-desc">Consolidated from {nodeCount} &rarr; {consolidatedNodes} active nodes</span>
            </div>
          </div>

          <div className="sec-kpi-item">
            <Layers size={16} className="sec-kpi-icon" />
            <div>
              <span className="sec-kpi-val">75.0% Waterline Target</span>
              <span className="sec-kpi-desc">SLA buffer preserved against bursting</span>
            </div>
          </div>

          <div className="sec-kpi-item">
            <CheckCircle2 size={16} className="sec-kpi-icon green" />
            <div>
              <span className="sec-kpi-val">100% Go Native</span>
              <span className="sec-kpi-desc">Zero external agent overhead on Kubernetes</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .finops-calculator-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .finops-header {
          max-width: 650px;
        }

        .finops-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10B981;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 8px;
        }

        .finops-header h4 {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .finops-header p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .finops-controls-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .finops-control-card {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .control-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }

        .ctrl-title {
          font-weight: 600;
          color: var(--text-secondary);
        }

        .ctrl-value {
          font-weight: 700;
          font-family: monospace;
          color: var(--text-primary);
        }

        .ctrl-value.red {
          color: #EF4444;
        }

        .finops-slider {
          width: 100%;
          accent-color: var(--accent-color);
          cursor: pointer;
        }

        .slider-limits {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: var(--text-muted);
        }

        /* Instance Selector */
        .instance-selector-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .instance-sec-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .instances-pills-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .instance-pill-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .instance-pill-btn:hover {
          border-color: var(--accent-color);
        }

        .instance-pill-btn.active {
          border-color: #10B981;
          background: rgba(16, 185, 129, 0.08);
        }

        .inst-name {
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .inst-meta {
          font-size: 11px;
          color: var(--text-muted);
        }

        /* Results Banner */
        .finops-results-banner {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .results-main-kpi {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .kpi-block {
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .kpi-block.highlight {
          border-color: rgba(16, 185, 129, 0.35);
          background: rgba(16, 185, 129, 0.04);
        }

        .kpi-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .kpi-value {
          font-size: 32px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .kpi-value.green {
          color: #10B981;
        }

        .kpi-sub {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .kpi-tagline {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 700;
          color: #10B981;
        }

        .bill-diff-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 6px;
        }

        .bill-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .bill-type {
          font-size: 10px;
          color: var(--text-muted);
        }

        .bill-amt {
          font-size: 16px;
          font-weight: 700;
          font-family: monospace;
          color: var(--text-primary);
        }

        .bill-amt.green {
          color: #10B981;
        }

        .bill-arrow {
          font-size: 18px;
          color: var(--text-muted);
        }

        .results-secondary-kpis {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
        }

        .sec-kpi-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sec-kpi-icon {
          color: #38BDF8;
          flex-shrink: 0;
        }

        .sec-kpi-icon.green {
          color: #10B981;
        }

        .sec-kpi-val {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sec-kpi-desc {
          display: block;
          font-size: 11px;
          color: var(--text-muted);
        }

        @media (max-width: 650px) {
          .finops-controls-grid {
            grid-template-columns: 1fr;
          }
          .results-main-kpi {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
