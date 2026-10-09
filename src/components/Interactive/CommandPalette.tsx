import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, Zap, Sparkles, FileText, MessageSquare, Terminal, Flame, DollarSign, Network, Play, Moon, Sun, Volume2, VolumeX, ArrowRight, CornerDownLeft, X, ExternalLink, Calendar } from 'lucide-react';
import { playTactileClick, playSuccessChime, isSoundEnabled, setSoundEnabled } from '../../utils/soundEffects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSpeedrun: () => void;
  onOpenHireMe: () => void;
}

interface CommandItem {
  id: string;
  category: 'Recruiter Actions' | 'Interactive Sandboxes' | 'Navigation' | 'System Controls';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenSpeedrun, onOpenHireMe }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedPitch, setCopiedPitch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      playTactileClick();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    onClose();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyPitch = () => {
    playSuccessChime();
    const pitchText = `Hi Team — found a strong Cloud/DevOps candidate for our upcoming internship / graduate roles:
• Candidate: Shyam Kumar D (B.Sc. Networking, 8.4 GPA, 6th Semester)
• Core Proof: Engineered KubeForecast (custom Go K8s scheduler, 90.35ns latency), DriftWarden (AWS 3-source drift detection in Go), Project J.A.R.V.I.S. (Agentic AI OS), & Project AEGIS (autonomous SOAR threat isolation).
• Availability: 6-Month Full-Time Internship (PPO Track) starting Jan/Feb | Open to Relocation & Remote.
• Interactive SRE Cockpit: https://shyam-kumar-portfolio.netlify.app
• Direct Contact: shyamcloud021@gmail.com | +91 7010672248`;

    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => {
      setCopiedPitch(false);
      onClose();
    }, 1200);
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    playSuccessChime();
    onClose();
  };

  const toggleSound = () => {
    const next = !isSoundEnabled();
    setSoundEnabled(next);
    if (next) playSuccessChime();
    onClose();
  };

  const commands: CommandItem[] = [
    // Recruiter Actions
    {
      id: 'speedrun',
      category: 'Recruiter Actions',
      title: '⚡ Launch 60-Second Recruiter Speedrun',
      subtitle: '4 guided slides: The problem, KubeForecast engine, AEGIS SOAR, candidate fit',
      icon: <Zap size={15} style={{ color: '#E53E3E' }} />,
      shortcut: 'S',
      action: () => {
        onClose();
        onOpenSpeedrun();
      }
    },
    {
      id: 'copy-pitch',
      category: 'Recruiter Actions',
      title: copiedPitch ? '✓ Copied to Clipboard!' : '📋 Copy 1-Click Hiring Manager Summary',
      subtitle: 'Formatted pitch ready to paste into internal hiring Slack or email thread',
      icon: <Sparkles size={15} style={{ color: '#F59E0B' }} />,
      shortcut: 'P',
      action: handleCopyPitch
    },
    {
      id: 'hire-modal',
      category: 'Recruiter Actions',
      title: '📅 Book 15-Min Intro Screen / Contact Modal',
      subtitle: 'Direct scheduling, WhatsApp chat, and immediate contact channels',
      icon: <Calendar size={15} style={{ color: '#10B981' }} />,
      shortcut: 'B',
      action: () => {
        onClose();
        onOpenHireMe();
      }
    },
    {
      id: 'download-resume',
      category: 'Recruiter Actions',
      title: '📄 Download Official Resume (PDF)',
      subtitle: 'ATS-optimized Cloud Infrastructure & SRE resume dossier',
      icon: <FileText size={15} style={{ color: '#38BDF8' }} />,
      shortcut: 'R',
      action: () => {
        onClose();
        const a = document.createElement('a');
        a.href = '/Shyam_Kumar_D_Resume.pdf';
        a.download = 'Shyam_Kumar_D_Resume.pdf';
        a.click();
      }
    },
    {
      id: 'whatsapp',
      category: 'Recruiter Actions',
      title: '💬 Chat on WhatsApp (+91 7010672248)',
      subtitle: 'Open direct WhatsApp conversation with instant response',
      icon: <MessageSquare size={15} style={{ color: '#25D366' }} />,
      action: () => {
        onClose();
        window.open('https://wa.me/917010672248', '_blank');
      }
    },

    // Interactive Sandboxes
    {
      id: 'chaos',
      category: 'Interactive Sandboxes',
      title: '🐒 Trigger Break My Cluster Chaos Test',
      subtitle: 'Simulate Spot EC2 eviction, 400% traffic surge, and brute-force mitigation',
      icon: <Flame size={15} style={{ color: '#EF4444' }} />,
      action: () => scrollTo('#projects')
    },
    {
      id: 'finops',
      category: 'Interactive Sandboxes',
      title: '💰 Open FinOps AWS Cost Calculator',
      subtitle: 'Compute annual ROI savings with KubeForecast 75% waterline bin-packing',
      icon: <DollarSign size={15} style={{ color: '#10B981' }} />,
      action: () => scrollTo('#projects')
    },
    {
      id: 'topology',
      category: 'Interactive Sandboxes',
      title: '🗺️ Inspect AWS & Terraform Topology (ClickOps vs SRE)',
      subtitle: 'Inspect 4-tier network routing and copy production Terraform HCL',
      icon: <Network size={15} style={{ color: '#38BDF8' }} />,
      action: () => scrollTo('#projects')
    },
    {
      id: 'terminal',
      category: 'Interactive Sandboxes',
      title: '💻 Open SRE Support Diagnostic Terminal',
      subtitle: 'Troubleshoot simulated ALB 502 Bad Gateway and Linux file permissions',
      icon: <Terminal size={15} style={{ color: '#A855F7' }} />,
      action: () => scrollTo('#projects')
    },

    // Navigation
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Go to Flagship Projects (KubeForecast, DriftWarden, J.A.R.V.I.S.)',
      subtitle: 'K8s Go scheduler, 3-source AWS drift engine, cyber-physical AI OS, SOAR fabric',
      icon: <ArrowRight size={15} />,
      action: () => scrollTo('#projects')
    },
    {
      id: 'nav-reports',
      category: 'Navigation',
      title: 'Go to Project Reports & Dossiers (PDF Blueprints)',
      subtitle: 'Download formal engineering specs (KubeForecast, DriftWarden, J.A.R.V.I.S., AEGIS)',
      icon: <ArrowRight size={15} />,
      action: () => scrollTo('#reports')
    },
    {
      id: 'nav-internship',
      category: 'Navigation',
      title: 'Go to Industrial Internship (Reccsar Pvt. Ltd.)',
      subtitle: 'Verified credentials in cloud computing & web engineering',
      icon: <ArrowRight size={15} />,
      action: () => scrollTo('#internship')
    },
    {
      id: 'nav-certs',
      category: 'Navigation',
      title: 'Go to Certifications & Masterclasses (Scaler, AWS, TCM, Deloitte)',
      subtitle: 'View 12 verified credentials, Scaler masterclasses, Credly verification badges',
      icon: <ArrowRight size={15} />,
      action: () => scrollTo('#certifications')
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Go to Contact Form & Availability',
      subtitle: 'Send direct telemetry inquiry or schedule technical screen',
      icon: <ArrowRight size={15} />,
      action: () => scrollTo('#contact')
    },

    // System Controls
    {
      id: 'theme-toggle',
      category: 'System Controls',
      title: '🌓 Toggle Obsidian Dark / Light Theme',
      subtitle: 'Switch color modes with seamless slate & crimson tokens',
      icon: <Sun size={15} />,
      action: toggleTheme
    },
    {
      id: 'sound-toggle',
      category: 'System Controls',
      title: isSoundEnabled() ? '🔇 Mute Mission Control Audio' : '🔊 Enable Mission Control Audio',
      subtitle: 'Synthesizer clicks, success chimes, and chaos alert sirens',
      icon: isSoundEnabled() ? <VolumeX size={15} /> : <Volume2 size={15} />,
      action: toggleSound
    }
  ];

  // Filtering
  const filtered = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      playTactileClick();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      playTactileClick();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div 
        className="palette-dialog glass-card" 
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="palette-search-bar">
          <Search size={18} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command, jump to a project, or run a simulation..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <span className="kbd-shortcut">ESC</span>
        </div>

        {/* Results List */}
        <div className="palette-results-list custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="palette-empty-state">
              <p>No matching commands found for "{query}".</p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                className={`palette-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={() => item.action()}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="item-icon-box">
                  {item.icon}
                </div>
                <div className="item-text-group">
                  <div className="item-title-row">
                    <span className="item-title">{item.title}</span>
                    <span className="item-category-tag">{item.category}</span>
                  </div>
                  <span className="item-subtitle">{item.subtitle}</span>
                </div>
                {item.shortcut ? (
                  <span className="item-shortcut-tag">{item.shortcut}</span>
                ) : (
                  <CornerDownLeft size={13} className="item-enter-icon" />
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="palette-footer">
          <div className="footer-keys-hints">
            <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
            <span><kbd>↵</kbd> to select</span>
            <span><kbd>ESC</kbd> to dismiss</span>
          </div>
          <span className="palette-brand">Shyam Kumar D • SRE Cockpit</span>
        </div>
      </div>

      <style>{`
        .palette-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(5, 5, 8, 0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 10001;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 14vh;
          padding-left: 16px;
          padding-right: 16px;
          animation: fadeIn 0.15s ease-out;
        }

        .palette-dialog {
          width: 100%;
          max-width: 640px;
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: var(--radius-lg);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(229, 62, 62, 0.12);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: dropIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .palette-search-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: #16161B;
        }

        .search-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .palette-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: #FFFFFF;
          font-family: var(--font-body);
          font-size: 14.5px;
          font-weight: 500;
        }

        .palette-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .kbd-shortcut {
          font-family: monospace;
          font-size: 10.5px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.6);
        }

        .palette-results-list {
          max-height: 52vh;
          overflow-y: auto;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .palette-empty-state {
          padding: 36px 20px;
          text-align: center;
          color: rgba(255, 255, 255, 0.45);
          font-size: 13.5px;
        }

        .palette-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 11px 14px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
          border: 1px solid transparent;
        }

        .palette-item.selected {
          background: rgba(229, 62, 62, 0.12);
          border-color: rgba(229, 62, 62, 0.35);
        }

        .item-icon-box {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
          color: #FFFFFF;
        }

        .palette-item.selected .item-icon-box {
          background: rgba(229, 62, 62, 0.2);
          border-color: rgba(229, 62, 62, 0.4);
        }

        .item-text-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .item-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .item-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-category-tag {
          font-size: 9.5px;
          font-weight: 700;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .item-subtitle {
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-shortcut-tag {
          font-family: monospace;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .item-enter-icon {
          color: rgba(255, 255, 255, 0.3);
          opacity: 0;
          transition: var(--transition-fast);
        }

        .palette-item.selected .item-enter-icon {
          opacity: 1;
          color: var(--accent-color);
        }

        .palette-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 16px;
          background: #141418;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.45);
        }

        .footer-keys-hints {
          display: flex;
          gap: 12px;
        }

        .footer-keys-hints kbd {
          background: rgba(255, 255, 255, 0.06);
          padding: 1px 5px;
          border-radius: 3px;
          font-family: monospace;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
        }

        .palette-brand {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--accent-color);
        }

        @keyframes dropIn {
          from {
            transform: translateY(-20px) scale(0.98);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
