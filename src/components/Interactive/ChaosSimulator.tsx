import React, { useState } from 'react';
import { AlertTriangle, ShieldAlert, Zap, RefreshCw, CheckCircle2, ShieldCheck, Server, Flame, Activity } from 'lucide-react';
import { playChaosAlert, playSuccessChime, playTactileClick } from '../../utils/soundEffects';

interface ChaosScenario {
  id: string;
  title: string;
  type: string;
  triggerLabel: string;
  badgeColor: string;
  description: string;
  incidentLog: string;
  resolutionTime: string;
  mitigationSteps: string[];
  metrics: { downtime: string; podsSaved: string; costImpact: string };
}

const SCENARIOS: ChaosScenario[] = [
  {
    id: 'spot-kill',
    title: 'Spot Instance Interruption (Node Eviction)',
    type: 'Infrastructure Outage',
    triggerLabel: 'Kill Worker Node 03 (Spot Termination)',
    badgeColor: '#EF4444',
    description: 'Simulates sudden AWS EC2 Spot 2-minute interruption notice on a high-density production worker instance.',
    incidentLog: '[CRITICAL SEV-1] AWS EC2 Spot termination event received for worker ip-10-0-3-42. 2 mission-critical pods scheduled for eviction.',
    resolutionTime: '380ms',
    mitigationSteps: [
      'KubeForecast pre-empts node cordon and signals drain hook',
      'PreScore evaluates Candidate Node 01 & Candidate Node 02 in 90.35ns',
      'Dynamic bin-packing consolidates order-service and cache-redis without exceeding 75% waterline',
      'Node 03 drained and terminated cleanly with zero dropped HTTP requests'
    ],
    metrics: { downtime: '0.00ms', podsSaved: '100% (2/2 Pods)', costImpact: '+$0 (Consolidated)' }
  },
  {
    id: 'traffic-surge',
    title: '400% Black Friday Traffic Surge',
    type: 'Capacity Overload',
    triggerLabel: 'Inject +400% Traffic Burst',
    badgeColor: '#F59E0B',
    description: 'Simulates flash-sale traffic spike flooding the Kubernetes ingress controller with 12 pending unscheduled microservices.',
    incidentLog: '[WARNING SEV-2] Ingress queue saturation: 12 pending pods requesting 38 vCPU in cluster scheduling backlog.',
    resolutionTime: '620ms',
    mitigationSteps: [
      'Scheduler triggers batch score filtering across available cluster capacity',
      'Waterline engine dynamically recalculates node fragmentation thresholds',
      '12 pods bin-packed deterministically across remaining instance headroom',
      'Cluster SLA guaranteed without triggering emergency on-demand EC2 surge costs'
    ],
    metrics: { downtime: '0.00ms', podsSaved: '12/12 Placed', costImpact: '50% Savings Preserved' }
  },
  {
    id: 'security-breach',
    title: 'Unauthorized SSH Brute-Force (GuardDuty Threat)',
    type: 'Security Threat',
    triggerLabel: 'Simulate Port 22 Brute-Force Attack',
    badgeColor: '#E53E3E',
    description: 'Simulates malicious IP repeatedly probing private EC2 management ports from an untrusted public subnet.',
    incidentLog: '[ALERT SEV-1] GuardDuty: UnauthorizedAccess:EC2/SSHBruteForce detected from attacker IP 198.51.100.24 targeting port 22.',
    resolutionTime: '820ms',
    mitigationSteps: [
      'AWS EventBridge captures GuardDuty finding JSON and triggers Project AEGIS SOAR',
      'Autonomous Python Lambda executes AWS WAFv2 API call to append IP to quarantine IPSet',
      'Security Group egress revoked, limiting blast radius strictly to honeypot interface',
      'Automated incident containment dossier dispatched to Slack/PagerDuty webhook'
    ],
    metrics: { downtime: '0.00ms', podsSaved: 'Zero Blast Radius', costImpact: 'Zero Breach Loss' }
  }
];

export default function ChaosSimulator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isMitigated, setIsMitigated] = useState(false);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const scenario = SCENARIOS[selectedIdx];

  const handleSelectScenario = (idx: number) => {
    playTactileClick();
    setSelectedIdx(idx);
    setIsSimulating(false);
    setIsMitigated(false);
    setActiveStepIdx(0);
  };

  const handleTriggerChaos = () => {
    playChaosAlert();
    setIsSimulating(true);
    setIsMitigated(false);
    setActiveStepIdx(0);

    // Step-by-step mitigation progression
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < scenario.mitigationSteps.length) {
        setActiveStepIdx(currentStep);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setIsMitigated(true);
        playSuccessChime();
      }
    }, 600);
  };

  const handleReset = () => {
    playTactileClick();
    setIsSimulating(false);
    setIsMitigated(false);
    setActiveStepIdx(0);
  };

  return (
    <div className="chaos-simulator-container">
      {/* Header */}
      <div className="chaos-header-bar">
        <div className="chaos-title-group">
          <div className="chaos-badge">
            <Flame size={14} className="chaos-flame" />
            <span>CHAOS MONKEY ENGINE</span>
          </div>
          <h4>Simulate Real-World Cloud Disasters</h4>
          <p>Test how KubeForecast and Project AEGIS autonomously mitigate outages and attacks in milliseconds.</p>
        </div>

        <div className="chaos-actions-top">
          <button
            type="button"
            className="chaos-trigger-btn"
            onClick={handleTriggerChaos}
            disabled={isSimulating}
          >
            <Zap size={15} />
            <span>{isSimulating ? 'Mitigating Incident...' : scenario.triggerLabel}</span>
          </button>
          <button type="button" className="chaos-reset-btn" onClick={handleReset} title="Reset Simulation">
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Scenario Selector Pills */}
      <div className="chaos-scenarios-row">
        {SCENARIOS.map((sc, idx) => (
          <button
            key={sc.id}
            type="button"
            className={`chaos-scenario-chip ${selectedIdx === idx ? 'active' : ''}`}
            onClick={() => handleSelectScenario(idx)}
          >
            <span className="chip-indicator" style={{ backgroundColor: sc.badgeColor }}></span>
            <span className="chip-type">{sc.type}:</span>
            <span className="chip-title">{sc.title.split('(')[0]}</span>
          </button>
        ))}
      </div>

      {/* Live Simulation Console */}
      <div className="chaos-live-console">
        {/* Incident Alert Strip */}
        <div className={`incident-strip ${isMitigated ? 'mitigated' : isSimulating ? 'critical' : 'standby'}`}>
          <div className="incident-status-row">
            <div className="status-label-group">
              {isMitigated ? (
                <ShieldCheck size={18} className="icon-mitigated" />
              ) : isSimulating ? (
                <AlertTriangle size={18} className="icon-critical blink" />
              ) : (
                <Activity size={18} className="icon-standby" />
              )}
              <span className="incident-status-text">
                {isMitigated 
                  ? 'AUTONOMOUS SELF-HEALING COMPLETE • ZERO DOWNTIME'
                  : isSimulating 
                  ? 'SEV-1 OUTAGE IN PROGRESS • HEALING LOGIC EXECUTING'
                  : 'READY: Click the trigger button above to inject chaos'}
              </span>
            </div>
            {isMitigated && <span className="resolution-badge">Resolved in {scenario.resolutionTime}</span>}
          </div>

          {(isSimulating || isMitigated) && (
            <div className="incident-log-box">
              <code>{scenario.incidentLog}</code>
            </div>
          )}
        </div>

        {/* Live Mitigation Timeline */}
        <div className="mitigation-timeline-box">
          <span className="timeline-heading">Automated SRE Remediation Workflow:</span>
          <div className="mitigation-steps-list">
            {scenario.mitigationSteps.map((step, sIdx) => {
              const isCompleted = isMitigated || (isSimulating && sIdx <= activeStepIdx);
              const isCurrent = isSimulating && sIdx === activeStepIdx;

              return (
                <div key={sIdx} className={`mitigation-step-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}>
                  <div className="step-marker">
                    {isCompleted ? <CheckCircle2 size={14} /> : <span>0{sIdx + 1}</span>}
                  </div>
                  <div className="step-content">
                    <span className="step-text">{step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SLA & Metrics Strip */}
        <div className="chaos-metrics-grid">
          <div className="metric-box">
            <span className="mb-label">Cluster Downtime:</span>
            <span className="mb-value green">{scenario.metrics.downtime}</span>
          </div>
          <div className="metric-box">
            <span className="mb-label">Workloads Preserved:</span>
            <span className="mb-value blue">{scenario.metrics.podsSaved}</span>
          </div>
          <div className="metric-box">
            <span className="mb-label">FinOps Cost Impact:</span>
            <span className="mb-value">{scenario.metrics.costImpact}</span>
          </div>
          <div className="metric-box">
            <span className="mb-label">Recovery Speed:</span>
            <span className="mb-value green">&lt; {scenario.resolutionTime}</span>
          </div>
        </div>
      </div>

      <style>{`
        .chaos-simulator-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .chaos-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
        }

        .chaos-title-group {
          max-width: 600px;
        }

        .chaos-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(229, 62, 62, 0.12);
          border: 1px solid rgba(229, 62, 62, 0.3);
          color: var(--accent-color);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 8px;
        }

        .chaos-flame {
          color: #EF4444;
          animation: pulse 1s infinite;
        }

        .chaos-title-group h4 {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .chaos-title-group p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .chaos-actions-top {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chaos-trigger-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent-color);
          border: 1px solid var(--accent-color);
          color: #FFFFFF;
          padding: 10px 18px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: 0 4px 15px rgba(229, 62, 62, 0.35);
        }

        .chaos-trigger-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(229, 62, 62, 0.5);
        }

        .chaos-trigger-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .chaos-reset-btn {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .chaos-reset-btn:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          transform: rotate(180deg);
        }

        /* Scenarios Row */
        .chaos-scenarios-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .chaos-scenario-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 8px 14px;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 12px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .chaos-scenario-chip:hover {
          border-color: var(--accent-color);
          transform: translateY(-1px);
        }

        .chaos-scenario-chip.active {
          border-color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.08);
        }

        .chip-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .chip-type {
          font-weight: 700;
          color: var(--text-primary);
          font-size: 11px;
        }

        .chip-title {
          color: var(--text-secondary);
        }

        /* Live Console */
        .chaos-live-console {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .incident-strip {
          padding: 14px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: var(--card-bg-solid);
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: var(--transition-fast);
        }

        .incident-strip.standby {
          border-left: 4px solid #38BDF8;
        }

        .incident-strip.critical {
          border-left: 4px solid #EF4444;
          background: rgba(239, 68, 68, 0.06);
        }

        .incident-strip.mitigated {
          border-left: 4px solid #10B981;
          background: rgba(16, 185, 129, 0.06);
        }

        .incident-status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .status-label-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-critical { color: #EF4444; }
        .icon-mitigated { color: #10B981; }
        .icon-standby { color: #38BDF8; }

        .blink {
          animation: pulse 1s infinite;
        }

        .incident-status-text {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .resolution-badge {
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          color: #10B981;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .incident-log-box {
          background: #0C0C0E;
          border-radius: 4px;
          padding: 8px 12px;
        }

        .incident-log-box code {
          font-family: monospace;
          font-size: 11.5px;
          color: #F87171;
          word-break: break-all;
        }

        /* Timeline */
        .mitigation-timeline-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .timeline-heading {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .mitigation-steps-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mitigation-step-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 12.5px;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .mitigation-step-item.completed {
          border-color: rgba(16, 185, 129, 0.3);
          color: var(--text-primary);
        }

        .mitigation-step-item.current {
          border-color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.04);
          color: var(--text-primary);
        }

        .step-marker {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .completed .step-marker {
          background: #10B981;
          border-color: #10B981;
          color: #FFFFFF;
        }

        .current .step-marker {
          background: var(--accent-color);
          border-color: var(--accent-color);
          color: #FFFFFF;
          animation: pulse 1s infinite;
        }

        .step-content {
          flex-grow: 1;
        }

        /* Metrics Grid */
        .chaos-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .metric-box {
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mb-label {
          font-size: 10px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 600;
        }

        .mb-value {
          font-size: 14px;
          font-weight: 700;
          font-family: monospace;
          color: var(--text-primary);
        }

        .mb-value.green { color: #10B981; }
        .mb-value.blue { color: #38BDF8; }

        @media (max-width: 650px) {
          .chaos-header-bar {
            flex-direction: column;
            gap: 12px;
          }
          .chaos-actions-top {
            width: 100%;
          }
          .chaos-trigger-btn {
            flex: 1;
            font-size: 11.5px;
            padding: 8px 12px;
          }
          .chaos-scenarios-row {
            flex-direction: column;
          }
          .chaos-scenario-chip {
            width: 100%;
            justify-content: flex-start;
          }
          .chaos-live-console {
            padding: 14px 12px;
          }
          .chaos-metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
