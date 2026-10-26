import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="footer-title">
            Shyam Kumar D <span className="footer-dot">•</span> Cloud Infrastructure & DevOps Systems Engineer
          </p>
          <p className="footer-location">
            <MapPin size={12} className="footer-pin" />
            <span>Bengaluru, Karnataka (Available Nov 16, 2026 • College NOC Secured • Immediate Joiner)</span>
          </p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Shyam Kumar D. Engineered with React 18, TypeScript, and Vite.
          </p>
        </div>

        <div className="footer-actions">
          <div className="footer-socials">
            <a href="https://github.com/ShyamD2" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
              <Github size={14} /> <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shyam-kumar-d-951254329/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              <Linkedin size={14} /> <span>LinkedIn</span>
            </a>
            <a href="mailto:shyamcloud021@gmail.com" className="footer-link" aria-label="Email">
              <Mail size={14} /> <span>Email</span>
            </a>
          </div>

          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top of page">
            <span>Back to Top</span> <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border-color);
          background: var(--card-bg);
          padding: 36px 0 40px 0;
          margin-top: 48px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer-dot {
          color: var(--accent-color);
        }

        .footer-location {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #10B981;
          font-weight: 600;
        }

        .footer-pin {
          flex-shrink: 0;
        }

        .footer-copy {
          font-size: 12px;
          color: var(--text-muted);
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-display);
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-color);
        }

        .scroll-top-btn {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 8px 16px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-fast);
        }

        .scroll-top-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.15);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-actions {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .footer-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }

          .scroll-top-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
