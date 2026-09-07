import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Shyam Kumar D. All rights reserved. Cloud & Systems Portfolio.
        </p>
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          Back to Top <ArrowUp size={14} />
        </button>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border-color);
          background: var(--card-bg);
          padding: 32px 0 72px 0;
          margin-top: 40px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copy {
          font-size: 13px;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          background: none;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-normal);
        }

        .scroll-top-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        @media (max-width: 480px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
