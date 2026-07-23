import React, { useState } from 'react';
import { Activity, Server, ShieldAlert, Cpu, HardDrive, HelpCircle } from 'lucide-react';

export default function ArchitectureShowcase() {
  const [trafficActive, setTrafficActive] = useState(false);
  const [scalingActive, setScalingActive] = useState(false);
  const [instances, setInstances] = useState([
    { id: 1, name: 'EC2-Server-01', status: 'Healthy', ip: '10.0.1.14', load: '12%' },
    { id: 2, name: 'EC2-Server-02', status: 'Healthy', ip: '10.0.1.85', load: '14%' }
  ]);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const simulateTraffic = () => {
    if (trafficActive) return;
    setTrafficActive(true);
    setSelectedNode({
      name: 'Application Load Balancer (ALB)',
      type: 'Routing & Health Checks',
      details: 'Distributing traffic to target groups. Detection of high capacity load. Initiating auto-scaling trigger.'
    });

    // Animate scale up after 2 seconds
    setTimeout(() => {
      setScalingActive(true);
      setInstances(prev => [
        ...prev,
        { id: 3, name: 'EC2-Server-03 (Auto)', status: 'Initializing', ip: '10.0.1.201', load: '0%' }
      ]);
    }, 1500);

    // Complete scale up after 3.5 seconds
    setTimeout(() => {
      setInstances(prev =>
        prev.map(inst =>
          inst.id === 3 ? { ...inst, status: 'Healthy', load: '22%' } : { ...inst, load: '32%' }
        )
      );
    }, 3500);
  };

  const resetSimulation = () => {
    setTrafficActive(false);
    setScalingActive(false);
    setInstances([
      { id: 1, name: 'EC2-Server-01', status: 'Healthy', ip: '10.0.1.14', load: '12%' },
      { id: 2, name: 'EC2-Server-02', status: 'Healthy', ip: '10.0.1.85', load: '14%' }
    ]);
    setSelectedNode(null);
  };

  const nodeInfo = {
    route53: {
      name: 'Amazon Route 53',
      type: 'DNS Management',
      details: 'Global DNS routing. Resolves shyamd2.com queries directly to the Application Load Balancer CNAME target.'
    },
    alb: {
      name: 'Application Load Balancer (ALB)',
      type: 'Traffic Distribution',
      details: 'Handles incoming HTTPS requests. Monitors target group health checks on path /health and routes traffic to active EC2 nodes.'
    },
    ec2: {
      name: 'EC2 Auto-Scaling Group',
      type: 'Compute Resources',
      details: 'Runs backend Nginx systems. Dynamically adjusts compute size based on CPU utilization metrics under SLA targets.'
    },
    s3: {
      name: 'Amazon S3 Bucket',
      type: 'Static Object Storage',
      details: 'Hosts public portfolio media resources, static assets, and cached files with CloudFront distribution endpoints.'
    }
  };

  return (
    <div className="architecture-showcase glass-card">
      <div className="showcase-header">
        <Activity className="header-icon" size={20} />
        <div>
          <h3>AWS Scalable Infrastructure Simulator</h3>
          <p>Interactive network topology demonstrating Auto-scaling & ALB configurations</p>
        </div>
      </div>

      <div className="simulator-grid">
        {/* Left: SVG Diagram */}
        <div className="diagram-container">
          <svg className="topology-svg" viewBox="0 0 600 320">
            {/* Connection Lines */}
            {/* Route 53 -> ALB */}
            <path
              d="M 100 160 L 220 160"
              className={`conn-line ${trafficActive ? 'active' : ''}`}
            />
            {/* ALB -> EC2-01 */}
            <path
              d="M 260 160 C 300 130, 320 80, 380 80"
              className={`conn-line ${trafficActive ? 'active' : ''}`}
            />
            {/* ALB -> EC2-02 */}
            <path
              d="M 260 160 L 380 160"
              className={`conn-line ${trafficActive ? 'active' : ''}`}
            />
            {/* ALB -> EC2-03 (Scaling) */}
            <path
              d="M 260 160 C 300 190, 320 240, 380 240"
              className={`conn-line ${scalingActive ? 'active' : ''} ${scalingActive ? '' : 'hidden'}`}
            />
            {/* ALB -> S3 */}
            <path
              d="M 240 180 L 240 250"
              className="conn-line static-conn"
            />

            {/* Nodes */}
            {/* Route 53 */}
            <g className="svg-node" onClick={() => setSelectedNode(nodeInfo.route53)}>
              <circle cx="100" cy="160" r="28" className="node-bg" />
              <text x="100" y="165" className="node-icon-text">R53</text>
              <text x="100" y="205" className="node-label">Route 53</text>
            </g>

            {/* ALB */}
            <g className="svg-node" onClick={() => setSelectedNode(nodeInfo.alb)}>
              <circle cx="240" cy="160" r="32" className={`node-bg ${trafficActive ? 'pulse-border' : ''}`} />
              <text x="240" y="165" className="node-icon-text">ALB</text>
              <text x="240" y="210" className="node-label">AWS ALB</text>
            </g>

            {/* S3 Storage */}
            <g className="svg-node" onClick={() => setSelectedNode(nodeInfo.s3)}>
              <circle cx="240" cy="270" r="24" className="node-bg" />
              <text x="240" y="274" className="node-icon-text">S3</text>
              <text x="240" y="310" className="node-label">Static S3</text>
            </g>

            {/* EC2 Group */}
            {/* Server 1 */}
            <g className="svg-node" onClick={() => setSelectedNode(nodeInfo.ec2)}>
              <rect x="380" y="55" width="130" height="50" rx="8" className="node-rect ec2-rect" />
              <text x="392" y="85" className="node-text">EC2-Server-01</text>
              <circle cx="500" cy="80" r="6" className="status-dot online" />
            </g>

            {/* Server 2 */}
            <g className="svg-node" onClick={() => setSelectedNode(nodeInfo.ec2)}>
              <rect x="380" y="135" width="130" height="50" rx="8" className="node-rect ec2-rect" />
              <text x="392" y="165" className="node-text">EC2-Server-02</text>
              <circle cx="500" cy="160" r="6" className="status-dot online" />
            </g>

            {/* Server 3 (Scaling Node) */}
            <g className={`svg-node scaling-node-svg ${scalingActive ? 'visible' : ''}`} onClick={() => setSelectedNode(nodeInfo.ec2)}>
              <rect x="380" y="215" width="130" height="50" rx="8" className="node-rect ec2-rect scaling" />
              <text x="392" y="245" className="node-text">EC2-Server-03</text>
              <circle
                cx="500"
                cy="240"
                r="6"
                className={`status-dot ${instances[2]?.status === 'Healthy' ? 'online' : 'initializing'}`}
              />
            </g>
          </svg>
        </div>

        {/* Right: Controls & Details Panel */}
        <div className="controls-container">
          <div className="controls-actions">
            {!trafficActive ? (
              <button className="sim-btn trigger" onClick={simulateTraffic}>
                Simulate Traffic Spike
              </button>
            ) : (
              <button className="sim-btn reset" onClick={resetSimulation}>
                Reset Outage Simulation
              </button>
            )}
            <p className="sim-tip">Click nodes in diagram to inspect cloud configs</p>
          </div>

          <div className="status-terminal glass-card">
            <h4>System Telemetry Logs</h4>
            <div className="terminal-logs">
              <p className="log-line info">[INFO] Infrastructure running nominal. 2 nodes active.</p>
              {trafficActive && (
                <>
                  <p className="log-line warn">[WARN] ALB incoming traffic spiking: +350% queries/sec.</p>
                  <p className="log-line info">[INFO] ALB CPU utilization threshold breached (&gt;75%).</p>
                  <p className="log-line alert">[SCALE] Auto-Scaling Group triggering rule: Scale-Out (+1 EC2).</p>
                </>
              )}
              {scalingActive && (
                <p className="log-line initializing-log">[INIT] Deploying EC2-Server-03 in subnet-1a. Launching Nginx...</p>
              )}
              {instances[2]?.status === 'Healthy' && (
                <>
                  <p className="log-line success">[OK] EC2-Server-03 health status: Healthy (200 OK).</p>
                  <p className="log-line success">[OK] ALB rebalanced load across 3 active instances. Nominal logs.</p>
                </>
              )}
            </div>
          </div>

          {/* Node detail display card */}
          {selectedNode && (
            <div className="node-details-card glass-card">
              <h5>{selectedNode.name}</h5>
              <span className="node-details-type">{selectedNode.type}</span>
              <p>{selectedNode.details}</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .architecture-showcase {
          padding: 32px;
          margin-top: 32px;
        }

        .showcase-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .header-icon {
          color: var(--accent-color);
        }

        .showcase-header h3 {
          font-size: 20px;
          color: var(--text-primary);
        }

        .showcase-header p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .simulator-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
        }

        .diagram-container {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .topology-svg {
          width: 100%;
          height: auto;
          max-height: 280px;
        }

        /* SVG Node Styling */
        .svg-node {
          cursor: pointer;
        }

        .node-bg {
          fill: var(--card-bg-solid);
          stroke: var(--border-color);
          stroke-width: 2px;
          transition: var(--transition-fast);
        }

        .svg-node:hover .node-bg {
          stroke: var(--accent-color);
          fill: rgba(var(--accent-rgb), 0.1);
        }

        .node-icon-text {
          fill: var(--text-primary);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 11px;
          text-anchor: middle;
        }

        .node-label {
          fill: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 11px;
          text-anchor: middle;
        }

        .node-rect {
          fill: var(--card-bg-solid);
          stroke: var(--border-color);
          stroke-width: 1.5px;
          transition: var(--transition-fast);
        }

        .svg-node:hover .node-rect {
          stroke: var(--accent-color);
        }

        .node-text {
          fill: var(--text-primary);
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
        }

        .status-dot {
          transition: var(--transition-normal);
        }

        .status-dot.online {
          fill: #10b981;
          filter: drop-shadow(0 0 4px #10b981);
        }

        .status-dot.initializing {
          fill: #f59e0b;
          filter: drop-shadow(0 0 4px #f59e0b);
          animation: pulse-glow 1s infinite;
        }

        .conn-line {
          fill: none;
          stroke: var(--border-color);
          stroke-width: 2px;
          stroke-dasharray: 6, 6;
          transition: var(--transition-normal);
        }

        .conn-line.active {
          stroke: var(--accent-color);
          animation: dash 30s linear infinite;
        }

        .conn-line.static-conn {
          stroke-dasharray: none;
        }

        .conn-line.hidden {
          opacity: 0;
        }

        .scaling-node-svg {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }

        .scaling-node-svg.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }

        /* Controls Column */
        .controls-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sim-btn {
          width: 100%;
          padding: 12px;
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .sim-btn.trigger {
          background-color: var(--accent-color);
          color: white;
        }

        .sim-btn.trigger:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.3);
        }

        .sim-btn.reset {
          background-color: #1e1e24;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .sim-btn.reset:hover {
          border-color: var(--accent-color);
        }

        .sim-tip {
          font-size: 11px;
          color: var(--text-muted);
          text-align: center;
          margin-top: 8px;
        }

        .status-terminal {
          padding: 16px;
          border-radius: var(--radius-sm);
          background: rgba(0, 0, 0, 0.4);
        }

        .status-terminal h4 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .terminal-logs {
          font-family: monospace;
          font-size: 11px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          height: 120px;
          overflow-y: auto;
        }

        .log-line {
          margin: 0;
        }

        .log-line.info { color: #9ca3af; }
        .log-line.warn { color: #f59e0b; }
        .log-line.alert { color: #ef4444; }
        .log-line.success { color: #10b981; }
        .log-line.initializing-log { color: #3b82f6; }

        .node-details-card {
          padding: 16px;
          border-radius: var(--radius-sm);
          animation: fadeInUp 0.4s ease-out;
        }

        .node-details-card h5 {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .node-details-type {
          font-size: 10px;
          color: var(--accent-color);
          text-transform: uppercase;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 8px;
        }

        .node-details-card p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .simulator-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
