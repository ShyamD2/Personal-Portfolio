import React from 'react';
import { X, PlayCircle, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  subtitle?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc, title, subtitle }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="video-modal-top">
          <div className="video-modal-header-info">
            <span className="live-demo-badge">
              <PlayCircle size={13} /> Live System Demonstration
            </span>
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <button className="video-modal-close" onClick={onClose} aria-label="Close video player">
            <X size={20} />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="video-player-container">
          <video
            className="modal-video-element"
            controls
            autoPlay
            src={videoSrc}
            poster="/assets/photo_desk_arms.png"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Key Highlights Footer */}
        <div className="video-modal-footer">
          <div className="highlight-pill">
            <Cpu size={14} className="highlight-icon" />
            <span>90.35 ns PreScore/Score Evaluation</span>
          </div>
          <div className="highlight-pill">
            <ShieldCheck size={14} className="highlight-icon" />
            <span>75.0% Waterline Bin-Packing</span>
          </div>
          <div className="highlight-pill">
            <ExternalLink size={14} className="highlight-icon" />
            <a href="https://github.com/ShyamD2/KubeForecast" target="_blank" rel="noopener noreferrer">
              GitHub Repository &rarr;
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .video-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease-out;
        }

        .video-modal-card {
          position: relative;
          width: 100%;
          max-width: 900px;
          background: #111114;
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .video-modal-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
        }

        .live-demo-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(229, 62, 62, 0.12);
          border: 1px solid rgba(229, 62, 62, 0.25);
          color: var(--accent-color);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 8px;
        }

        .video-modal-header-info h3 {
          font-size: 20px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .video-modal-header-info p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
        }

        .video-modal-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
          flex-shrink: 0;
        }

        .video-modal-close:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          border-color: var(--accent-color);
          transform: rotate(90deg);
        }

        .video-player-container {
          position: relative;
          width: 100%;
          max-height: 520px;
          background: #000000;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-video-element {
          width: 100%;
          max-height: 520px;
          display: block;
          object-fit: contain;
          background: #08080A;
        }

        .video-modal-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px 12px;
          border-radius: 50px;
        }

        .highlight-icon {
          color: var(--accent-color);
        }

        .highlight-pill a {
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
        }

        .highlight-pill a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .video-modal-backdrop {
            padding: 12px;
          }
          .video-modal-card {
            padding: 16px 12px;
            max-height: 92vh;
            overflow-y: auto;
          }
          .video-modal-header-info h3 {
            font-size: 16px;
          }
          .video-modal-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
