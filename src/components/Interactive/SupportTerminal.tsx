import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw } from 'lucide-react';

export default function SupportTerminal() {
  const [activeOutage, setActiveOutage] = useState('502'); // '502' or 'linux'
  const [terminalLines, setTerminalLines] = useState<string[]>([
    'System Diagnostic Shell initialized.',
    'Ready for diagnostic command query. Select an outage case to troubleshoot below.'
  ]);
  const [cmdInput, setCmdInput] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLines]);

  const selectOutage = (type) => {
    setActiveOutage(type);
    setIsFixed(false);
    if (type === '502') {
      setTerminalLines([
        'shyam-support-node:~ recruiter$ init-diagnostics --outage alb_502',
        '[CRITICAL] Outage Alert: ALB returning 502 Bad Gateway.',
        '[INFO] Checking Target Group Health Status...',
        '[FAIL] Instance EC2-Server-01 in Target Group tg-web-apps: Unhealthy (Connection Refused on Port 80).',
        '[FAIL] Instance EC2-Server-02 in Target Group tg-web-apps: Unhealthy (Connection Refused on Port 80).',
        'Available tools: check-nginx, restart-nginx, verify-logs'
      ]);
    } else {
      setTerminalLines([
        'shyam-support-node:~ recruiter$ init-diagnostics --outage log_permission',
        '[CRITICAL] Incident Alert: Bash automation daemon reports backup failures.',
        '[INFO] Querying system logs backup scripts status...',
        '[FAIL] /var/log/nginx/access.log: Permission Denied. Backup script failed to open file.',
        'Available tools: ls -l /var/log, chmod 755, chown-nginx'
      ]);
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!cmdInput.trim()) return;

    const cmd = cmdInput.trim().toLowerCase();
    processCommand(cmd);
    setCmdInput('');
  };

  const processCommand = (cmd) => {
    let response: string[] = [];
    response.push(`shyam-support-node:~ recruiter$ ${cmd}`);

    if (activeOutage === '502') {
      if (cmd === 'check-nginx') {
        response.push(
          '[INFO] Running remote ssh: systemctl status nginx on EC2 nodes...',
          '[FAIL] Nginx Service is: inactive (dead) on port 80.'
        );
      } else if (cmd === 'verify-logs') {
        response.push(
          '[INFO] Reading last 5 lines of /var/log/nginx/error.log:',
          '[ERROR] 2026/06/11 18:05:12 [emerg] bind() to 0.0.0.0:80 failed (Address already in use)'
        );
      } else if (cmd === 'restart-nginx') {
        response.push(
          '[INFO] Releasing locked socket ports on 80...',
          '[INFO] Executing: sudo systemctl start nginx',
          '[OK] Nginx service successfully started on EC2 nodes.',
          '[OK] Health check response: HTTP/1.1 200 OK.',
          '[CRITICAL FIXED] ALB returned to Healthy. Outage resolved!'
        );
        setIsFixed(true);
      } else {
        response.push(`Command not recognized. Try: check-nginx, verify-logs, restart-nginx`);
      }
    } else {
      // Linux permission outage
      if (cmd === 'ls -l /var/log') {
        response.push(
          'total 12',
          '-rw-r----- 1 root root 4096 Jun 11 18:00 access.log',
          '-rw-r----- 1 root root 2048 Jun 11 17:55 error.log'
        );
      } else if (cmd === 'chown-nginx') {
        response.push(
          '[INFO] Running: chown -R nginx:nginx /var/log/nginx',
          '[FAIL] Operation not permitted (run with administrative privileges / sudo)'
        );
      } else if (cmd === 'chmod 755') {
        response.push(
          '[INFO] Executing: sudo chmod 755 /var/log/nginx/access.log',
          '[OK] File permissions updated: -rwxr-xr-x 1 root root 4096 access.log',
          '[INFO] Retrying backup automation script daemon...',
          '[OK] File read successfully. Database sync completed.',
          '[CRITICAL FIXED] Incident Resolved! Logs automation active.'
        );
        setIsFixed(true);
      } else {
        response.push(`Command not recognized. Try: ls -l /var/log, chown-nginx, chmod 755`);
      }
    }

    setTerminalLines(prev => [...prev, ...response]);
  };

  return (
    <div className="support-terminal glass-card">
      <div className="terminal-header">
        <div className="header-left">
          <TerminalIcon className="header-icon" size={18} />
          <span>shyam-support-node:~ (Helpdesk Terminal)</span>
        </div>
        <div className="header-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
      </div>

      <div className="terminal-body">
        <div className="terminal-screen">
          {terminalLines.map((line, idx) => (
            <div key={idx} className={`terminal-line ${line.startsWith('shyam-support') ? 'input-line' : ''} ${line.includes('[FAIL]') ? 'fail-line' : ''} ${line.includes('[OK]') || line.includes('[CRITICAL FIXED]') ? 'success-line' : ''}`}>
              {line}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input area */}
        <form onSubmit={handleCommandSubmit} className="terminal-input-form">
          <span className="terminal-prompt">shyam-support-node:~ recruiter$</span>
          <input
            type="text"
            className="terminal-input"
            value={cmdInput}
            onChange={(e) => setCmdInput(e.target.value)}
            placeholder="Type a command..."
            disabled={isFixed}
          />
          <button type="submit" className="terminal-enter-btn" aria-label="Submit command">
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>

      {/* Outage selector / Quick Action Buttons */}
      <div className="terminal-controls">
        <div className="selector-group">
          <h5>Select Incident Case:</h5>
          <div className="case-btn-group">
            <button
              className={`case-btn ${activeOutage === '502' ? 'active' : ''}`}
              onClick={() => selectOutage('502')}
            >
              ALB 502 Bad Gateway
            </button>
            <button
              className={`case-btn ${activeOutage === 'linux' ? 'active' : ''}`}
              onClick={() => selectOutage('linux')}
            >
              Linux Log Permissions
            </button>
          </div>
        </div>

        <div className="quick-actions-group">
          <h5>Diagnostic Quick-Actions:</h5>
          <div className="actions-btn-group">
            {activeOutage === '502' ? (
              <>
                <button className="action-btn" onClick={() => processCommand('check-nginx')}>check-nginx</button>
                <button className="action-btn" onClick={() => processCommand('verify-logs')}>verify-logs</button>
                <button className="action-btn resolve" onClick={() => processCommand('restart-nginx')}>restart-nginx</button>
              </>
            ) : (
              <>
                <button className="action-btn" onClick={() => processCommand('ls -l /var/log')}>ls -l /var/log</button>
                <button className="action-btn" onClick={() => processCommand('chown-nginx')}>chown-nginx</button>
                <button className="action-btn resolve" onClick={() => processCommand('chmod 755')}>chmod 755</button>
              </>
            )}
            <button className="action-btn reset-btn" onClick={() => selectOutage(activeOutage)} aria-label="Reset">
              <RefreshCw size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .support-terminal {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0B0B0C;
          border: 1px solid var(--border-color);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #141416;
          padding: 12px 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-family: monospace;
          font-size: 12px;
        }

        .header-icon {
          color: var(--accent-color);
        }

        .header-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.red { background-color: #ef4444; }
        .dot.yellow { background-color: #f59e0b; }
        .dot.green { background-color: #10b981; }

        .terminal-body {
          padding: 20px;
        }

        .terminal-screen {
          background: rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.02);
          border-radius: var(--radius-sm);
          padding: 16px;
          height: 180px;
          overflow-y: auto;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #a7f3d0; /* Soft terminal green */
        }

        .terminal-line {
          white-space: pre-wrap;
          word-break: break-all;
        }

        .terminal-line.input-line {
          color: #f4f4f5;
          font-weight: 600;
        }

        .terminal-line.fail-line {
          color: #fca5a5; /* Light red */
        }

        .terminal-line.success-line {
          color: #6ee7b7; /* Bright green */
          font-weight: 600;
          text-shadow: 0 0 4px rgba(110, 231, 183, 0.4);
        }

        /* Input Form */
        .terminal-input-form {
          display: flex;
          align-items: center;
          background: #141416;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 8px 16px;
          margin-top: 16px;
        }

        .terminal-prompt {
          font-family: monospace;
          font-size: 12px;
          color: var(--text-secondary);
          margin-right: 8px;
          white-space: nowrap;
        }

        .terminal-input {
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: monospace;
          font-size: 12px;
          width: 100%;
        }

        .terminal-enter-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .terminal-enter-btn:hover {
          color: var(--accent-color);
        }

        /* Controls Section */
        .terminal-controls {
          background: #141416;
          padding: 20px;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .selector-group, .quick-actions-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .terminal-controls h5 {
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .case-btn-group, .actions-btn-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .case-btn, .action-btn {
          background: #1e1e24;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .case-btn.active, .case-btn:hover {
          background: rgba(var(--accent-rgb), 0.1);
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .action-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .action-btn.resolve {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.3);
          color: #10b981;
        }

        .action-btn.resolve:hover {
          background: #10b981;
          color: white;
        }

        .action-btn.reset-btn {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        @media (max-width: 768px) {
          .terminal-controls {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
