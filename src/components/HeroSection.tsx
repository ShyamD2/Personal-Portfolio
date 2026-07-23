import React, { useState, useRef } from 'react';
import { ArrowRight, Volume2, VolumeX, FileText, Play, Pause } from 'lucide-react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Video */}
      <div className="video-background-container">
        <video
          ref={videoRef}
          className="bg-video"
          src="/videos/hero-banner.mp4"
          loop
          muted
          playsInline
        />
        <div className="video-vignette-overlay"></div>
      </div>

      {/* Play/Pause Control (Right Side) */}
      <div className="video-play-trigger-box">
        <button className="circular-audio-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"}>
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <span className="audio-label-text" onClick={togglePlay}>
          {isPlaying ? 'PAUSE' : 'PLAY'}
        </span>
      </div>

      {/* Floating Content Overlaid on Video */}
      <div className="container hero-content-container">
        <div className="hero-main-details">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Cloud Infrastructure
          </div>

          <h1 className="hero-title">
            Hi, I'm a Cloud &<br />
            <span>Systems Specialist</span>
          </h1>

          <h2 className="hero-subtitle">
            Shyam Kumar D
          </h2>

          <p className="hero-tagline">
            I build fast, secure, and auto-scalable networks on AWS, manage server environments, and resolve critical outages under strict SLA guidelines.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-pill-white" onClick={handleScrollToProjects}>
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-pill-translucent" onClick={handleScrollToContact}>
              Contact Me
            </a>
            <a href="/Shyam_Kumar_D_Resume.pdf" download className="btn btn-resume-download">
              <FileText size={18} /> Download CV
            </a>
          </div>
        </div>

        {/* Mute/Unmute Overlay Control (Bottom-Left Style matching reference) */}
        <div className="video-mute-trigger-box">
          <button className="circular-audio-btn" onClick={toggleMute} aria-label={isMuted ? "Unmute pitch" : "Mute pitch"}>
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <span className="audio-label-text" onClick={toggleMute}>
            {isMuted ? 'UNMUTE PITCH' : 'MUTE PITCH'}
          </span>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #0E0E10; /* Dark fallback background */
        }

        /* Full Background Video Cover */
        .video-background-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Dark Vignette Mask for readability */
        .video-vignette-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.45) 0%, 
            rgba(0, 0, 0, 0.35) 50%, 
            rgba(0, 0, 0, 0.75) 100%
          );
          z-index: 2;
        }

        /* Overlaid Container */
        .hero-content-container {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 80px; /* Offset sticky header */
        }

        .hero-main-details {
          max-width: 680px;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
          font-family: var(--font-display);
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background-color: var(--accent-color);
          border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.05;
          color: #FFFFFF;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .hero-title span {
          color: var(--accent-color); /* Highlight color */
        }

        .hero-subtitle {
          font-size: 24px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 8px;
        }

        .hero-tagline {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 36px;
          font-weight: 500;
        }

        /* Buttons cluster */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-pill-white {
          background-color: #FFFFFF;
          color: #111112;
          padding: 14px 28px;
          border-radius: 50px;
          border: 1px solid #FFFFFF;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .btn-pill-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.25);
        }

        .btn-pill-translucent {
          background-color: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          padding: 14px 28px;
          border-radius: 50px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          font-weight: 700;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .btn-pill-translucent:hover {
          background-color: #FFFFFF;
          color: #E53E3E;
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }

        .btn-resume-download {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          background: none;
          border: none;
        }

        .btn-resume-download:hover {
          color: #FFFFFF;
        }

        /* Bottom-Left Audio Control */
        .video-mute-trigger-box {
          position: absolute;
          bottom: 40px;
          left: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeInUp 1s ease-out;
          z-index: 10;
        }

        /* Right-Side Play/Pause Control */
        .video-play-trigger-box {
          position: absolute;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
          animation: fadeInUp 1s ease-out;
        }

        .video-play-trigger-box .audio-label-text {
          writing-mode: vertical-rl;
        }

        @media (max-width: 768px) {
          .video-play-trigger-box {
            right: 12px;
          }
        }

        .circular-audio-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .circular-audio-btn:hover {
          background: #FFFFFF;
          color: var(--accent-color);
          border-color: #FFFFFF;
          transform: scale(1.08);
        }

        .audio-label-text {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          cursor: pointer;
          letter-spacing: 0.1em;
          transition: var(--transition-fast);
        }

        .audio-label-text:hover {
          color: #FFFFFF;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 38px;
          }

          .hero-tagline {
            font-size: 15px;
          }

          .hero-cta-group {
            gap: 12px;
          }

          .btn-pill-white, .btn-pill-translucent {
            padding: 12px 24px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
