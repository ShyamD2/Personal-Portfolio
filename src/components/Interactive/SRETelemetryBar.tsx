import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Cpu, Volume2, VolumeX, Terminal, CheckCircle2 } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, playTactileClick } from '../../utils/soundEffects';

export default function SRETelemetryBar() {
  const [soundOn, setSoundOn] = useState(true);
  const [latency, setLatency] = useState(24);
  const [uptime, setUptime] = useState('99.99%');

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    
    // Simulate slight live ping fluctuation
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 22);
    }, 4000);

    const handleSfxEvent = (e: any) => {
      setSoundOn(e.detail);
    };

    window.addEventListener('sfx-toggle', handleSfxEvent);
    return () => {
      clearInterval(interval);
      window.removeEventListener('sfx-toggle', handleSfxEvent);
    };
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playTactileClick();
  };

  return (
    <div className="sre-telemetry-bar">
      <div className="telemetry-inner-container">
        {/* Left: Live Status Indicators */}
        <div className="telemetry-items-group">
          <div className="telemetry-badge live-pulse-badge">
            <span className="telemetry-dot"></span>
            <span className="telemetry-title">SRE COCKPIT</span>
          </div>

          <div className="telemetry-stat-item">
            <Activity size={13} className="telemetry-icon green" />
            <span className="stat-label">AWS us-east-1:</span>
            <span className="stat-value">{latency}ms Latency</span>
          </div>

          <div className="telemetry-stat-item desktop-only">
            <Cpu size={13} className="telemetry-icon blue" />
            <span className="stat-label">KubeForecast PreScore:</span>
            <span className="stat-value">90.35ns</span>
          </div>

          <div className="telemetry-stat-item desktop-only">
            <ShieldCheck size={13} className="telemetry-icon red" />
            <span className="stat-label">Project AEGIS:</span>
            <span className="stat-value">Zero-Trust WAF Active</span>
          </div>

          <div className="telemetry-stat-item">
            <CheckCircle2 size={13} className="telemetry-icon green" />
            <span className="stat-label">Hiring Status:</span>
            <span className="stat-value highlight">Open to Relocation & Remote</span>
          </div>
        </div>

        {/* Right: Master Audio SFX Toggle */}
        <div className="telemetry-controls-group">
          <button 
            type="button" 
            className={`sfx-toggle-btn ${soundOn ? 'active' : ''}`}
            onClick={toggleSound}
            title={soundOn ? 'Mute Mission Control Audio Effects' : 'Enable Mission Control Audio Effects'}
            aria-label="Toggle Mission Control Sound Effects"
          >
            {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
            <span className="sfx-btn-text">{soundOn ? 'SFX ON' : 'SFX MUTED'}</span>
          </button>
        </div>
      </div>

      <style>{`
        .sre-telemetry-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 36px;
          background: var(--nav-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--border-color);
          z-index: 999;
          display: flex;
          align-items: center;
          font-family: var(--font-body);
          font-size: 11px;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
          transition: var(--transition-fast);
        }

        .telemetry-inner-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .telemetry-items-group {
          display: flex;
          align-items: center;
          gap: 18px;
          overflow-x: auto;
          white-space: nowrap;
          padding-right: 12px;
        }

        .telemetry-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          padding: 2px 8px;
          border-radius: 50px;
        }

        .telemetry-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10B981;
          box-shadow: 0 0 6px #10B981;
          animation: pulse-glow 2s infinite;
        }

        .telemetry-title {
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 800;
          color: var(--accent-color);
          letter-spacing: 0.08em;
        }

        .telemetry-stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
        }

        .telemetry-icon {
          flex-shrink: 0;
        }

        .telemetry-icon.green { color: #10B981; }
        .telemetry-icon.blue { color: #38BDF8; }
        .telemetry-icon.red { color: var(--accent-color); }

        .stat-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .stat-value {
          color: var(--text-primary);
          font-weight: 700;
          font-family: monospace;
        }

        .stat-value.highlight {
          color: #10B981;
          font-family: var(--font-body);
        }

        .telemetry-controls-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .sfx-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 3px 10px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .sfx-toggle-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .sfx-toggle-btn.active {
          border-color: rgba(16, 185, 129, 0.4);
          color: #10B981;
          background: rgba(16, 185, 129, 0.08);
        }

        @media (max-width: 860px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
