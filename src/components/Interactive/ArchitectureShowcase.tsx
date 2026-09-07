import React, { useState } from 'react';
import { Activity, Layers, Cpu, Server, CheckCircle2, AlertCircle, RefreshCw, Zap, DollarSign, Clock, PlayCircle, Monitor, Shield, ArrowRight, Flame, Network } from 'lucide-react';
import ChaosSimulator from './ChaosSimulator';
import FinOpsCalculator from './FinOpsCalculator';
import NetworkTopologyExplorer from './NetworkTopologyExplorer';
import { playTactileClick, playSuccessChime, playConsolidationHum } from '../../utils/soundEffects';

interface Pod {
  id: string;
  name: string;
  cpu: number; // in cores e.g. 0.5
  mem: number; // in GiB
  status: 'Running' | 'Migrating' | 'Pending';
}

interface NodeData {
  id: string;
  name: string;
  instanceType: string;
  zone: string;
  maxCpu: number;
  status: 'Ready' | 'Draining' | 'Scaled Down';
  pods: Pod[];
}

export default function ArchitectureShowcase() {
  const [viewMode, setViewMode] = useState<'simulator' | 'chaos' | 'finops' | 'topology' | 'video'>('simulator');

  const initialNodes: NodeData[] = [
    {
      id: 'node-1',
      name: 'eks-worker-01 (ip-10-0-1-42)',
      instanceType: 'm6i.xlarge (4 vCPU / 16GB)',
      zone: 'ap-south-1a',
      maxCpu: 4,
      status: 'Ready',
      pods: [
        { id: 'p1', name: 'order-api', cpu: 1.0, mem: 2, status: 'Running' },
        { id: 'p2', name: 'auth-vault', cpu: 0.5, mem: 1, status: 'Running' }
      ]
    },
    {
      id: 'node-2',
      name: 'eks-worker-02 (ip-10-0-1-88)',
      instanceType: 'm6i.xlarge (4 vCPU / 16GB)',
      zone: 'ap-south-1b',
      maxCpu: 4,
      status: 'Ready',
      pods: [
        { id: 'p3', name: 'payment-svc', cpu: 0.8, mem: 1.5, status: 'Running' },
        { id: 'p4', name: 'inventory-svc', cpu: 0.6, mem: 1.0, status: 'Running' }
      ]
    },
    {
      id: 'node-3',
      name: 'eks-worker-03 (ip-10-0-1-19)',
      instanceType: 'm6i.xlarge (4 vCPU / 16GB)',
      zone: 'ap-south-1c',
      maxCpu: 4,
      status: 'Scaled Down',
      pods: []
    }
  ];

  const [nodes, setNodes] = useState<NodeData[]>(initialNodes);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isConsolidated, setIsConsolidated] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<string>('Cluster idle. Ready to test KubeForecast waterline bin-packing.');

  const calculateNodeUsage = (node: NodeData) => {
    const used = node.pods.reduce((acc, p) => acc + p.cpu, 0);
    return {
      used,
      pct: Math.min(100, Math.round((used / node.maxCpu) * 100))
    };
  };

  const runBinPacking = () => {
    if (isSimulating) return;
    playTactileClick();
    setIsSimulating(true);
    setLogs('[ALGORITHM] KubeForecast PreScore invoked: evaluating 3 nodes in 90.35 ns...');

    setTimeout(() => {
      setLogs('[DRAIN] Node-2 identified as underutilized candidate (waterline 35%). Initiating eviction...');
      setNodes(prev =>
        prev.map(n =>
          n.id === 'node-2'
            ? { ...n, status: 'Draining', pods: n.pods.map(p => ({ ...p, status: 'Migrating' })) }
            : n
        )
      );
    }, 1200);

    setTimeout(() => {
      playConsolidationHum();
      setLogs('[BIN-PACK] Consolidating payment-svc and inventory-svc onto Node-1 (Waterline target: 72.5%)...');
      setNodes(prev => {
        const movedPods: Pod[] = [
          { id: 'p3', name: 'payment-svc', cpu: 0.8, mem: 1.5, status: 'Running' },
          { id: 'p4', name: 'inventory-svc', cpu: 0.6, mem: 1.0, status: 'Running' }
        ];
        return [
          {
            ...prev[0],
            pods: [...prev[0].pods, ...movedPods]
          },
          {
            ...prev[1],
            status: 'Scaled Down',
            pods: []
          },
          prev[2]
        ];
      });
      setIsConsolidated(true);
      setIsSimulating(false);
      playSuccessChime();
      setLogs('[SUCCESS] Node-2 terminated! Monthly compute spend cut by 50% ($420/mo saved).');
    }, 2800);
  };

  const resetCluster = () => {
    playTactileClick();
    setNodes(initialNodes);
    setIsConsolidated(false);
    setIsSimulating(false);
    setSelectedItem(null);
    setLogs('Cluster reset to unoptimized initial state (fragmented nodes).');
  };

  return (
    <div id="kubernetes-showcase" className="architecture-showcase glass-card">
      {/* Top Banner */}
      <div className="showcase-header">
        <div className="header-badge-row">
          <span className="live-pulse"></span>
          <span className="badge-text">KubeForecast™ Live Platform</span>
        </div>
        <div className="header-info-line">
          <div>
            <h3>Kubernetes Scheduler & Waterline Bin-Packing Engine</h3>
            <p>High-performance container scheduler on Amazon EKS v1.31 — 90.35 ns scoring & 50% node cost reduction</p>
          </div>
          
          {/* Multi-Feature SRE Cockpit Mode Switcher */}
          <div className="view-mode-tabs">
            <button
              type="button"
              className={`mode-tab-btn ${viewMode === 'simulator' ? 'active' : ''}`}
              onClick={() => { playTactileClick(); setViewMode('simulator'); }}
            >
              <Monitor size={14} />
              <span>K8s Scheduler</span>
            </button>
            <button
              type="button"
              className={`mode-tab-btn ${viewMode === 'chaos' ? 'active' : ''}`}
              onClick={() => { playTactileClick(); setViewMode('chaos'); }}
            >
              <Flame size={14} />
              <span>Chaos Monkey</span>
            </button>
            <button
              type="button"
              className={`mode-tab-btn ${viewMode === 'finops' ? 'active' : ''}`}
              onClick={() => { playTactileClick(); setViewMode('finops'); }}
            >
              <DollarSign size={14} />
              <span>FinOps Calculator</span>
            </button>
            <button
              type="button"
              className={`mode-tab-btn ${viewMode === 'topology' ? 'active' : ''}`}
              onClick={() => { playTactileClick(); setViewMode('topology'); }}
            >
              <Network size={14} />
              <span>AWS & Terraform</span>
            </button>
            <button
              type="button"
              className={`mode-tab-btn ${viewMode === 'video' ? 'active' : ''}`}
              onClick={() => { playTactileClick(); setViewMode('video'); }}
            >
              <PlayCircle size={14} />
              <span>Demo Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: INTERACTIVE SIMULATOR */}
      {viewMode === 'simulator' && (
        <>
          {/* Action Bar */}
          <div className="simulator-actions-bar">
            <div className="actions-left-text">
              <span>Interactive Controls: Test node waterline evaluation or trigger pod bin-packing consolidation.</span>
            </div>
            <div className="header-actions">
              <button
                className="action-btn primary-action"
                onClick={runBinPacking}
                disabled={isSimulating || isConsolidated}
              >
                <Zap size={14} /> {isConsolidated ? 'Cluster Optimized (50% Cost Cut)' : 'Run Waterline Bin-Packing'}
              </button>
              <button className="action-btn secondary-action" onClick={resetCluster} title="Reset Cluster">
                <RefreshCw size={14} /> Reset Cluster
              </button>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="metrics-strip">
            <div className="metric-chip">
              <Clock size={16} className="metric-icon" />
              <div className="metric-content">
                <span className="metric-label">PreScore Latency</span>
                <span className="metric-value">90.35 ns</span>
              </div>
            </div>
            <div className="metric-chip">
              <Layers size={16} className="metric-icon" />
              <div className="metric-content">
                <span className="metric-label">Waterline Target</span>
                <span className="metric-value">75.0% Limit</span>
              </div>
            </div>
            <div className="metric-chip">
              <DollarSign size={16} className="metric-icon highlight" />
              <div className="metric-content">
                <span className="metric-label">Node Cost Reduction</span>
                <span className="metric-value highlight">{isConsolidated ? '-50% Active EC2s' : '0% (Wasteful)'}</span>
              </div>
            </div>
            <div className="metric-chip">
              <CheckCircle2 size={16} className="metric-icon" />
              <div className="metric-content">
                <span className="metric-label">Pod Schedulability</span>
                <span className="metric-value">100% Placed</span>
              </div>
            </div>
          </div>

          {/* Cluster Nodes Interactive Grid */}
          <div className="nodes-container-grid">
            {nodes.map(node => {
              const { used, pct } = calculateNodeUsage(node);
              const isScaledDown = node.status === 'Scaled Down';

              return (
                <div
                  key={node.id}
                  className={`node-card ${isScaledDown ? 'scaled-down' : ''} ${selectedItem?.id === node.id ? 'selected' : ''}`}
                  onClick={() => setSelectedItem({ type: 'node', data: node, used, pct })}
                >
                  <div className="node-top">
                    <div className="node-badge-group">
                      <Server size={14} />
                      <span className="node-name">{node.name.split(' ')[0]}</span>
                    </div>
                    <span className={`status-pill ${node.status.toLowerCase().replace(' ', '-')}`}>
                      {node.status}
                    </span>
                  </div>

                  <div className="node-specs">
                    <span>{node.instanceType}</span>
                    <span>{node.zone}</span>
                  </div>

                  {/* Waterline Gauge */}
                  <div className="waterline-gauge-wrapper">
                    <div className="waterline-label-row">
                      <span>Waterline Load</span>
                      <span className="gauge-pct">{isScaledDown ? '0%' : `${pct}% (${used} / ${node.maxCpu} vCPU)`}</span>
                    </div>
                    <div className="waterline-track">
                      <div
                        className="waterline-fill"
                        style={{
                          width: isScaledDown ? '0%' : `${pct}%`,
                          backgroundColor: pct > 75 ? '#EF4444' : pct > 50 ? '#10B981' : '#F59E0B'
                        }}
                      ></div>
                      <div className="waterline-limit-marker" style={{ left: '75%' }} title="75% Waterline Threshold"></div>
                    </div>
                    <div className="waterline-threshold-caption">Target Limit: 75%</div>
                  </div>

                  {/* Scheduled Pods Inside Node */}
                  <div className="node-pods-list">
                    <span className="pods-title">Active Pods ({node.pods.length}):</span>
                    {node.pods.length === 0 ? (
                      <div className="empty-pods-indicator">
                        {isScaledDown ? 'Instance Terminated ($0 spend)' : 'No pods assigned'}
                      </div>
                    ) : (
                      node.pods.map(pod => (
                        <div
                          key={pod.id}
                          className={`pod-tag ${pod.status.toLowerCase()}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedItem({ type: 'pod', data: pod, node: node.name });
                          }}
                        >
                          <span className="pod-pulse"></span>
                          <span className="pod-text">{pod.name}</span>
                          <span className="pod-cpu">{pod.cpu} CPU</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simulator Terminal Log & Inspector Strip */}
          <div className="simulator-footer-bar">
            <div className="footer-log">
              <Activity size={14} className="log-icon" />
              <span className="log-text">{logs}</span>
            </div>

            {selectedItem && (
              <div className="footer-inspector">
                <span className="inspector-label">
                  Inspector: <strong>{selectedItem.data.name}</strong>
                </span>
                <span className="inspector-details">
                  {selectedItem.type === 'node'
                    ? `Capacity: ${selectedItem.data.maxCpu} vCPU | Active Load: ${selectedItem.used} vCPU (${selectedItem.pct}%) | Status: ${selectedItem.data.status}`
                    : `Resource Request: ${selectedItem.data.cpu} vCPU, ${selectedItem.data.mem} GiB | Node: ${selectedItem.node}`}
                </span>
              </div>
            )}
          </div>
        </>
      )}

      {/* VIEW MODE 2: CHAOS ENGINEERING SIMULATOR */}
      {viewMode === 'chaos' && <ChaosSimulator />}

      {/* VIEW MODE 3: FINOPS CLOUD COST REDUCTION CALCULATOR */}
      {viewMode === 'finops' && <FinOpsCalculator />}

      {/* VIEW MODE 4: AWS & TERRAFORM TOPOLOGY EXPLORER */}
      {viewMode === 'topology' && <NetworkTopologyExplorer />}

      {/* VIEW MODE 5: LIVE COCKPIT VIDEO DEMONSTRATION */}
      {viewMode === 'video' && (
        <div className="video-demo-container">
          <div className="video-player-wrapper glass-card">
            <video
              className="k8s-demo-video"
              controls
              src="/videos/kubeforecast_live_cockpit_demo.mp4"
              poster="/assets/photo_desk_arms.png"
              preload="metadata"
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-details-card glass-card">
            <div className="video-details-header">
              <div className="video-title-group">
                <span className="demo-tag">Live Demonstration Recording</span>
                <h4>KubeForecast™ Live Cockpit & Kubernetes Scheduler Evaluation</h4>
                <p>Recorded session showcasing the custom kube-scheduler plugin executing real-time cluster scoring, waterline bin-packing, and node consolidation on AWS EKS.</p>
              </div>
              <button
                className="action-btn secondary-action"
                onClick={() => setViewMode('simulator')}
              >
                <Monitor size={14} /> Back to Simulator
              </button>
            </div>

            <div className="video-key-milestones-grid">
              <div className="milestone-box">
                <span className="milestone-badge">01. Cockpit Init</span>
                <h5>EKS Cluster Health & Prometheus Telemetry</h5>
                <p>Inspection of live worker node states, resource fragmentation, and pod scheduling queues.</p>
              </div>
              <div className="milestone-box">
                <span className="milestone-badge">02. 90.35 ns Latency</span>
                <h5>Deterministic PreScore & Score Evaluation</h5>
                <p>Executing Go-compiled scheduling hooks to evaluate optimal candidate nodes under microsecond latency budgets.</p>
              </div>
              <div className="milestone-box">
                <span className="milestone-badge">03. 75% Waterline</span>
                <h5>Dynamic High-Density Bin-Packing</h5>
                <p>Packing workloads deterministically up to the 75% waterline limit without violating SLA thresholds.</p>
              </div>
              <div className="milestone-box">
                <span className="milestone-badge">04. Cost Reduction</span>
                <h5>Automated Node Draining & 50% Savings</h5>
                <p>Consolidating fragmented pods, draining vacant worker instances, and slashing cloud compute expenses.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .architecture-showcase {
          padding: 32px;
          border-radius: var(--radius-lg);
          margin-top: 24px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px var(--shadow-color);
        }

        .showcase-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .header-badge-row {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          padding: 4px 12px;
          border-radius: 50px;
          width: fit-content;
        }

        .live-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-color);
          box-shadow: 0 0 8px var(--accent-color);
          animation: pulse-glow 2s infinite;
        }

        .badge-text {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .header-info-line {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
        }

        .header-info-line h3 {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .header-info-line p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* Mode Switcher Tabs */
        .view-mode-tabs {
          display: flex;
          flex-wrap: wrap;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          padding: 4px;
          gap: 4px;
        }

        .mode-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 50px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mode-tab-btn:hover {
          color: var(--text-primary);
        }

        .mode-tab-btn.active {
          background: var(--accent-color);
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(229, 62, 62, 0.35);
        }

        /* Simulator Actions Bar */
        .simulator-actions-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
          padding: 12px 18px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }

        .actions-left-text {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .header-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
          border: none;
        }

        .primary-action {
          background-color: var(--accent-color);
          color: #FFFFFF;
        }

        .primary-action:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(229, 62, 62, 0.35);
        }

        .primary-action:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .secondary-action {
          background: var(--card-bg-solid);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .secondary-action:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        /* Metrics Strip */
        .metrics-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 28px;
        }

        .metric-chip {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .metric-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .metric-icon.highlight {
          color: #10B981;
        }

        .metric-content {
          display: flex;
          flex-direction: column;
        }

        .metric-label {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .metric-value {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-display);
        }

        .metric-value.highlight {
          color: #10B981;
        }

        /* Nodes Grid */
        .nodes-container-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }

        .node-card {
          background: var(--card-bg);
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
          transition: var(--transition-normal);
          cursor: pointer;
        }

        .node-card:hover {
          border-color: rgba(229, 62, 62, 0.4);
          transform: translateY(-2px);
        }

        .node-card.selected {
          border-color: var(--accent-color);
          box-shadow: 0 0 20px rgba(229, 62, 62, 0.2);
        }

        .node-card.scaled-down {
          opacity: 0.55;
          background: var(--bg-color);
          border-style: dashed;
        }

        .node-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .node-badge-group {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 14px;
        }

        .status-pill {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 50px;
          text-transform: uppercase;
        }

        .status-pill.ready {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-pill.draining {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.3);
          animation: pulse 1s infinite;
        }

        .status-pill.scaled-down {
          background: rgba(100, 116, 139, 0.15);
          color: var(--text-muted);
          border: 1px solid var(--border-color);
        }

        .node-specs {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .waterline-gauge-wrapper {
          margin-bottom: 18px;
        }

        .waterline-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-bottom: 6px;
          color: var(--text-secondary);
        }

        .gauge-pct {
          font-weight: 700;
          color: var(--text-primary);
        }

        .waterline-track {
          position: relative;
          height: 10px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          overflow: hidden;
        }

        .waterline-fill {
          height: 100%;
          border-radius: 50px;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .waterline-limit-marker {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent-color);
          box-shadow: 0 0 4px var(--accent-color);
        }

        .waterline-threshold-caption {
          font-size: 9px;
          color: var(--text-muted);
          text-align: right;
          margin-top: 4px;
        }

        .node-pods-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pods-title {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .empty-pods-indicator {
          font-size: 12px;
          color: var(--text-muted);
          font-style: italic;
          padding: 8px 0;
        }

        .pod-tag {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 12px;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .pod-tag:hover {
          background: rgba(var(--accent-rgb), 0.08);
          border-color: var(--accent-color);
        }

        .pod-tag.migrating {
          border-color: #F59E0B;
          color: #F59E0B;
          animation: pulse 1.2s infinite;
        }

        .pod-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          margin-right: 6px;
        }

        .pod-tag.migrating .pod-pulse {
          background: #F59E0B;
        }

        .pod-text {
          flex-grow: 1;
          font-family: monospace;
          font-size: 11px;
        }

        .pod-cpu {
          font-size: 10px;
          color: var(--text-muted);
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* Footer bar */
        .simulator-footer-bar {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-log {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: monospace;
          font-size: 12px;
          color: var(--accent-color);
        }

        .log-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .footer-inspector {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          color: var(--text-secondary);
        }

        .inspector-label strong {
          color: var(--text-primary);
        }

        /* VIDEO MODE STYLES */
        .video-demo-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeIn 0.4s ease-out;
        }

        .video-player-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #000000;
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .k8s-demo-video {
          width: 100%;
          max-height: 520px;
          display: block;
          object-fit: contain;
          background-color: #08080A;
        }

        .video-details-card {
          padding: 24px 28px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }

        .video-details-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
        }

        .video-title-group {
          max-width: 700px;
        }

        .demo-tag {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 8px;
        }

        .video-title-group h4 {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .video-title-group p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .video-key-milestones-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .milestone-box {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          padding: 16px;
          border-radius: var(--radius-md);
        }

        .milestone-badge {
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          display: block;
          margin-bottom: 6px;
        }

        .milestone-box h5 {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .milestone-box p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .architecture-showcase {
            padding: 20px;
          }
          .header-info-line {
            flex-direction: column;
          }
          .view-mode-tabs {
            width: 100%;
            justify-content: center;
          }
          .simulator-actions-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .header-actions {
            flex-direction: column;
          }
          .footer-inspector {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
}
