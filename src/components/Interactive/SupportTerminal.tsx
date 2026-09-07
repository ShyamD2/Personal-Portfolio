import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  category: string;
  initLines: string[];
  commands: {
    [cmd: string]: {
      output: string[];
      isFix?: boolean;
    };
  };
  suggestedCmds: string[];
}

const scenarios: Scenario[] = [
  {
    id: 'kubeforecast',
    name: 'KubeForecast (K8s Scheduler)',
    category: 'Kubernetes Bin-Packing',
    suggestedCmds: ['kubectl get pods', 'kubeforecast --score-waterline', 'kubeforecast --rebalance'],
    initLines: [
      'shyam-cloud-node:~ recruiter$ kubeforecast-cli --inspect-cluster',
      '[ALERT] Scheduler Latency Anomaly: 4 Pods stuck in `Pending` state.',
      '[METRIC] Node Fragmentation: 3 worker nodes running at sub-optimal waterline (<35% CPU).',
      '[DIAGNOSTIC] Default kube-scheduler spread strategy causing excess cloud instance spend.',
      'Type or click suggested command: `kubectl get pods`, `kubeforecast --score-waterline`, `kubeforecast --rebalance`'
    ],
    commands: {
      'kubectl get pods': {
        output: [
          'NAME                           READY   STATUS    RESTARTS   AGE    NODE',
          'order-service-7bb8c5-x9z4      1/1     Running   0          42m    ip-10-0-1-42.ec2.internal',
          'payment-gateway-6f91a-8h2k     1/1     Running   0          18m    ip-10-0-1-88.ec2.internal',
          'telemetry-collector-d48-p91    0/1     Pending   0          3m     <none>',
          'fraud-detector-98b7f-q11a      0/1     Pending   0          3m     <none>',
          '[WARN] 2 pods unassigned due to insufficient node headroom under spread constraint.'
        ]
      },
      'kubeforecast --score-waterline': {
        output: [
          '[INFO] Executing KubeForecast PreScore and Score evaluation hooks (90.35 ns latency)...',
          '[ALGORITHM] Waterline Target: 75.0% threshold per worker node.',
          '  -> Node 1 (ip-10-0-1-42): Waterline at 42.1% (Capacity Available: 2.8 vCPU, 6.2 GiB)',
          '  -> Node 2 (ip-10-0-1-88): Waterline at 24.3% (Drain Candidate - Underutilized)',
          '  -> Node 3 (ip-10-0-1-19): Scaled to 0 (Cold Standby)',
          '[EVALUATION] High-density bin-packing consolidation recommended. Node 2 can be drained completely.'
        ]
      },
      'kubeforecast --rebalance': {
        isFix: true,
        output: [
          '[EXECUTE] Triggering deterministic waterline bin-packing rebalancer...',
          '[1/3] Migrating `payment-gateway-6f91a-8h2k` from Node 2 to Node 1...',
          '[2/3] Scheduling `telemetry-collector-d48-p91` onto Node 1 (Waterline now 74.8%)...',
          '[3/3] Draining Node 2 (ip-10-0-1-88) and terminating underutilized EC2 instance...',
          '[SUCCESS] Cluster Consolidated! Node count reduced by 50% (Saves ~$420/month).',
          '[SUCCESS] All 4 pods Running healthy. 0 scheduling failures remaining.'
        ]
      }
    }
  },
  {
    id: 'aegis',
    name: 'AEGIS SOAR (DevSecOps)',
    category: 'Zero-Trust Security',
    suggestedCmds: ['aegis-soar --scan-threats', 'aegis-soar --isolate-role', 'aegis-soar --verify-worm'],
    initLines: [
      'shyam-cloud-node:~ recruiter$ aegis-soar --daemon-status',
      '[CRITICAL] AWS GuardDuty Alert: UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration',
      '[ALERT] Compromised Role: `arn:aws:iam::123456789012:role/DataPipelineIngest`',
      '[FORENSICS] Unusual API calls originating from unapproved IP: 198.51.100.23 (Tor Exit Node).',
      'Type or click suggested command: `aegis-soar --scan-threats`, `aegis-soar --isolate-role`, `aegis-soar --verify-worm`'
    ],
    commands: {
      'aegis-soar --scan-threats': {
        output: [
          '[SCAN] Analyzing CloudTrail JSON stream & IAM active policy attachments...',
          '[THREAT DETECTED] High-privilege role attempting S3:GetObject on production audit logs.',
          '[RISK SCORE] 94/100 (CRITICAL EXFILTRATION RISK)',
          '[RECOMMENDED ACTION] Execute automated quarantine boundary & revoke STS session tokens.'
        ]
      },
      'aegis-soar --isolate-role': {
        isFix: true,
        output: [
          '[SOAR AUTONOMOUS EXECUTION] Initiating containment playbook in <2.4 seconds...',
          '[1/4] Attaching AWS IAM PermissionsBoundary: `arn:aws:iam::.../QuarantineBoundary`',
          '[2/4] Revoking all active AWS STS temporary session tokens via AWS CLI...',
          '[3/4] Modifying EC2 Security Group: Attached `sg-isolated-quarantine` (Inbound/Outbound: DENY ALL)',
          '[4/4] Generating cryptographic SHA-256 evidence hash for incident forensic log...',
          '[CONTAINMENT COMPLETE] Attacker session terminated. Zero data leaked.'
        ]
      },
      'aegis-soar --verify-worm': {
        output: [
          '[AUDIT] Querying Amazon S3 Glacier WORM Vault (SEC Rule 17a-4 / FINRA Compliance)...',
          '  Vault Object: /incidents/2026/09/INC-8491-forensics.enc',
          '  Object Lock Legal Hold: ENABLED',
          '  Retention Mode: COMPLIANCE (Lock expiration: Sep 2033)',
          '  Cryptographic Hash: 9e107d9d372bb6826bd81d3542a419d6a36d2e07e868a86a3d93',
          '[VERIFIED] Immutable audit trail intact and legally binding.'
        ]
      }
    }
  },
  {
    id: 'serverless',
    name: 'Serverless Cloud (AWS)',
    category: 'High-Throughput API',
    suggestedCmds: ['aws lambda get-stats', 'aws dax enable-cache', 'aws cloudwatch test-latency'],
    initLines: [
      'shyam-cloud-node:~ recruiter$ aws cloudwatch get-metric-data --namespace AWS/ApiGateway',
      '[WARNING] P99 Latency Breach: Serverless URL Engine latency jumped to 850ms.',
      '[CAUSE] DynamoDB hot partition throttling under high concurrent click traffic.',
      'Type or click suggested command: `aws lambda get-stats`, `aws dax enable-cache`, `aws cloudwatch test-latency`'
    ],
    commands: {
      'aws lambda get-stats': {
        output: [
          '[INFO] Inspecting Lambda `url-redirect-resolver` configuration...',
          '  Runtime: Node.js 20.x on Graviton (arm64)',
          '  Memory: 512 MB | Concurrency: Unreserved (experiencing cold starts under burst)',
          '  DynamoDB Read Capacity: 400 RCU (89% consumed on key partition: /r/launch2026)'
        ]
      },
      'aws dax enable-cache': {
        isFix: true,
        output: [
          '[PROVISIONING] Enabling Amazon DynamoDB Accelerator (DAX) in-memory write-through cache...',
          '[IaC DEPLOY] Terraform state updated: `aws_dax_cluster.url_cache` applied.',
          '[OK] Cache warm: 99.4% hit ratio achieved.',
          '[SUCCESS] Database read latency dropped from 42ms to 0.8ms (Microsecond tier).'
        ]
      },
      'aws cloudwatch test-latency': {
        output: [
          '[SYNTHETIC BENCHMARK] Executing 1,000 concurrent GET requests via Locust...',
          '  Total Requests: 1,000 | Failed: 0 (0.00%)',
          '  P50 Latency: 4.2 ms',
          '  P95 Latency: 8.9 ms',
          '  P99 Latency: 12.4 ms',
          '[STATUS] System meets production SLA (<50ms threshold).'
        ]
      }
    }
  }
];

export default function SupportTerminal() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>(scenarios[0].initLines);
  const [cmdInput, setCmdInput] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const activeScenario = scenarios[activeScenarioIdx];

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const selectScenario = (idx: number) => {
    setActiveScenarioIdx(idx);
    setIsFixed(false);
    setTerminalLines(scenarios[idx].initLines);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmdInput.trim()) return;

    executeCommand(cmdInput.trim());
    setCmdInput('');
  };

  const executeCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim();
    let response: string[] = [];
    response.push(`shyam-cloud-node:~ recruiter$ ${cleanCmd}`);

    const match = activeScenario.commands[cleanCmd];

    if (match) {
      response.push(...match.output);
      if (match.isFix) {
        setIsFixed(true);
      }
    } else {
      response.push(
        `Command '${cleanCmd}' not recognized. Try one of: ${activeScenario.suggestedCmds.join(', ')}`
      );
    }

    setTerminalLines(prev => [...prev, ...response]);
  };

  const resetCurrentScenario = () => {
    setIsFixed(false);
    setTerminalLines(activeScenario.initLines);
  };

  return (
    <div className="terminal-container glass-card">
      {/* Top Window Bar */}
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control-dot red"></span>
          <span className="control-dot yellow"></span>
          <span className="control-dot green"></span>
        </div>
        <div className="terminal-title">
          <TerminalIcon size={14} />
          <span>shyam-cloud-node:~ (DevOps & K8s Terminal)</span>
        </div>
        <div className="terminal-actions">
          <button onClick={resetCurrentScenario} className="reset-btn" title="Reset Scenario">
            <RefreshCw size={13} />
          </button>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="scenario-nav-tabs">
        {scenarios.map((sc, idx) => (
          <button
            key={sc.id}
            className={`scenario-tab-btn ${activeScenarioIdx === idx ? 'active' : ''}`}
            onClick={() => selectScenario(idx)}
          >
            <span className="tab-category">{sc.category}</span>
            <span className="tab-name">{sc.name}</span>
          </button>
        ))}
      </div>

      {/* Terminal Screen Output */}
      <div ref={terminalBodyRef} className="terminal-body custom-scrollbar">
        {terminalLines.map((line, index) => {
          let lineClass = 'line-default';
          if (line.startsWith('shyam-cloud-node:')) lineClass = 'line-cmd';
          else if (line.includes('[CRITICAL]') || line.includes('[ALERT]') || line.includes('[FAIL]')) lineClass = 'line-critical';
          else if (line.includes('[WARN]') || line.includes('[WARNING]')) lineClass = 'line-warning';
          else if (line.includes('[SUCCESS]') || line.includes('[OK]') || line.includes('[CONTAINMENT COMPLETE]')) lineClass = 'line-success';
          else if (line.includes('[INFO]') || line.includes('[METRIC]') || line.includes('[ALGORITHM]')) lineClass = 'line-info';

          return (
            <div key={index} className={`terminal-line ${lineClass}`}>
              {line}
            </div>
          );
        })}
      </div>

      {/* Quick Interactive Command Pills */}
      <div className="suggested-commands-bar">
        <span className="suggested-label">Click to test:</span>
        <div className="suggested-buttons-group">
          {activeScenario.suggestedCmds.map((cmd, i) => (
            <button
              key={i}
              type="button"
              className="quick-cmd-chip"
              onClick={() => executeCommand(cmd)}
            >
              <code>{cmd}</code>
            </button>
          ))}
        </div>
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleCommandSubmit} className="terminal-input-bar">
        <span className="input-prompt">shyam-cloud-node:~$</span>
        <input
          type="text"
          value={cmdInput}
          onChange={(e) => setCmdInput(e.target.value)}
          placeholder={`Type command (e.g. ${activeScenario.suggestedCmds[1]})...`}
          className="terminal-input"
        />
        <button type="submit" className="terminal-submit-btn" aria-label="Send command">
          <CornerDownLeft size={16} />
        </button>
      </form>

      {/* Resolution Indicator Bar */}
      {isFixed && (
        <div className="resolution-banner">
          <CheckCircle2 size={16} />
          <span>Workflow verified! Systems rebalanced and fully operational.</span>
        </div>
      )}

      <style>{`
        .terminal-container {
          background-color: #121214;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          height: 100%;
        }

        .terminal-header {
          background-color: var(--card-bg-solid);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
        }

        .terminal-controls {
          display: flex;
          gap: 6px;
        }

        .control-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .control-dot.red { background-color: #FF5F56; }
        .control-dot.yellow { background-color: #FFBD2E; }
        .control-dot.green { background-color: #27C93F; }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 600;
        }

        .reset-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
        }

        .reset-btn:hover {
          color: var(--accent-color);
          transform: rotate(180deg);
        }

        /* Tabs */
        .scenario-nav-tabs {
          display: flex;
          background: var(--bg-color);
          border-bottom: 1px solid var(--border-color);
          overflow-x: auto;
        }

        .scenario-tab-btn {
          flex: 1;
          min-width: 150px;
          background: none;
          border: none;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          cursor: pointer;
          border-right: 1px solid var(--border-color);
          transition: var(--transition-fast);
          text-align: left;
        }

        .scenario-tab-btn:hover {
          background: rgba(var(--accent-rgb), 0.05);
        }

        .scenario-tab-btn.active {
          background: var(--card-bg-solid);
          border-bottom: 2px solid var(--accent-color);
        }

        .tab-category {
          font-size: 9px;
          color: var(--accent-color);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .tab-name {
          font-size: 12px;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Screen Body */
        .terminal-body {
          padding: 16px;
          height: 240px;
          overflow-y: auto;
          font-size: 12px;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          gap: 4px;
          background-color: #0c0c0e;
        }

        .terminal-line {
          word-break: break-all;
          white-space: pre-wrap;
        }

        .line-default { color: #A0A0A5; }
        .line-cmd { color: #58A6FF; font-weight: 600; }
        .line-critical { color: #FF7B72; font-weight: 600; }
        .line-warning { color: #D29922; }
        .line-success { color: #3FB950; font-weight: 600; }
        .line-info { color: #79C0FF; }

        /* Quick Command Chips */
        .suggested-commands-bar {
          background-color: var(--bg-color);
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-top: 1px solid var(--border-color);
          overflow-x: auto;
        }

        .suggested-label {
          font-size: 11px;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .suggested-buttons-group {
          display: flex;
          gap: 6px;
          flex-wrap: nowrap;
        }

        .quick-cmd-chip {
          background: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 11px;
          cursor: pointer;
          transition: var(--transition-fast);
          white-space: nowrap;
        }

        .quick-cmd-chip:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          border-color: var(--accent-color);
        }

        /* Form Bar */
        .terminal-input-bar {
          display: flex;
          align-items: center;
          padding: 8px 14px;
          background-color: var(--card-bg-solid);
          border-top: 1px solid var(--border-color);
        }

        .input-prompt {
          color: var(--accent-color);
          font-size: 12px;
          margin-right: 8px;
          font-weight: 600;
        }

        .terminal-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 12px;
          outline: none;
        }

        .terminal-submit-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
        }

        .terminal-submit-btn:hover {
          color: var(--accent-color);
        }

        .resolution-banner {
          background-color: rgba(39, 201, 63, 0.15);
          border-top: 1px solid rgba(39, 201, 63, 0.3);
          color: #3FB950;
          padding: 8px 16px;
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
