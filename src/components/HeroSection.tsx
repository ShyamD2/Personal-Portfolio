import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, FileText, Sparkles, Volume2, VolumeX } from 'lucide-react';
import RecruiterRoleSelector from './Interactive/RecruiterRoleSelector';

interface Particle {
  x: number;
  y: number;
  origX: number;
  origY: number;
  vx: number;
  vy: number;
  size: number;
  r: number;
  g: number;
  b: number;
  alpha: number;
  delay: number;
  isEmber: boolean;
  decay: number;
}

export default function HeroSection({ onOpenHireMe }: { onOpenHireMe?: () => void }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  
  // Infinity War Disintegration States
  const [isDisintegrating, setIsDisintegrating] = useState(false);
  const [isDisintegrated, setIsDisintegrated] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const snapAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Force the page to always load at the top
    window.scrollTo(0, 0);

    // Preload the requested Thanos Snap Sound Effect
    try {
      const audio = new Audio('/audio/thanos-snap-sound-effect.mp3');
      audio.preload = 'auto';
      snapAudioRef.current = audio;
    } catch (e) {}

    const video = videoRef.current;
    if (!video) return;

    // 2. Unmute by default (Always unmuted by default with full user toggle control)
    video.muted = false;
    video.volume = 1.0;
    setIsMuted(false);

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser policy blocks zero-click unmuted autoplay:
          // Start video, and on the very first user interaction anywhere, unmute audio immediately
          video.muted = true;
          setIsMuted(true);
          video.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));

          const activateAudioOnGesture = () => {
            if (videoRef.current) {
              videoRef.current.muted = false;
              videoRef.current.volume = 1.0;
              setIsMuted(false);
              if (videoRef.current.currentTime < 3.5) {
                videoRef.current.currentTime = 0;
              }
              videoRef.current.play().catch(() => {});
            }
            removeListeners();
          };

          const removeListeners = () => {
            window.removeEventListener('click', activateAudioOnGesture);
            window.removeEventListener('pointerdown', activateAudioOnGesture);
            window.removeEventListener('touchstart', activateAudioOnGesture);
            window.removeEventListener('keydown', activateAudioOnGesture);
          };

          window.addEventListener('click', activateAudioOnGesture, { once: true });
          window.addEventListener('pointerdown', activateAudioOnGesture, { once: true });
          window.addEventListener('touchstart', activateAudioOnGesture, { once: true });
          window.addEventListener('keydown', activateAudioOnGesture, { once: true });
        });
    }

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Play the authentic Thanos Snap Sound Effect
  const playSnapAudio = () => {
    try {
      if (snapAudioRef.current) {
        snapAudioRef.current.currentTime = 0;
        snapAudioRef.current.volume = 1.0;
        const playPromise = snapAudioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Snap sound effect playback note:", err);
          });
        }
      } else {
        const sound = new Audio('/audio/thanos-snap-sound-effect.mp3');
        sound.volume = 1.0;
        sound.play().catch(() => {});
      }
    } catch (e) {
      console.error("Audio playback error:", e);
    }
  };

  // Realistic Thanos Snap: Disintegrate PERSON first, keeping the REAL room background!
  const triggerRealisticThanosSnap = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    setIsDisintegrating(true);
    playSnapAudio();

    const rect = video.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Draw the last video frame
    try {
      ctx.drawImage(video, 0, 0, width, height);
    } catch (e) {
      setIsDisintegrated(true);
      setIsDisintegrating(false);
      return;
    }

    const imgData = ctx.getImageData(0, 0, width, height);
    const pixels = imgData.data;

    // Sample pixels into particles
    const step = width < 768 ? 5 : 4;
    const personParticles: Particle[] = [];
    const ambientEmbers: Particle[] = [];

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const idx = (y * width + x) * 4;
        const r = pixels[idx];
        const g = pixels[idx + 1];
        const b = pixels[idx + 2];
        const a = pixels[idx + 3];

        if (a < 30) continue;

        // Accurate segmentation: Red Wall vs Person Foreground
        const isWall = (r > 60 && g < 32 && b < 28);
        const inPersonZone = (x > width * 0.20 && x < width * 0.85);

        if (!isWall || (inPersonZone && (g > 25 || b > 22))) {
          // This is the PERSON (face, hair, headphones, shirt, laptop, arms)!
          const sweep = ((x - width * 0.2) / (width * 0.65)) * 0.35 + (y / height) * 0.45 + Math.random() * 0.2;
          const delay = Math.max(0, sweep * 45);

          const isEmber = Math.random() < 0.15; // 15% glowing fiery embers

          personParticles.push({
            x,
            y,
            origX: x,
            origY: y,
            vx: Math.random() * 3.8 + 1.2, // wind blowing to upper right
            vy: -(Math.random() * 3.2 + 0.8), // lifting into the air
            size: Math.random() * 2.8 + 1.2,
            r: isEmber ? 255 : r,
            g: isEmber ? Math.floor(Math.random() * 120 + 70) : g,
            b: isEmber ? 20 : b,
            alpha: 1.0,
            delay,
            isEmber,
            decay: Math.random() * 0.015 + 0.008
          });
        }
      }
    }

    // Create 60 ambient floating room embers that continue to drift in the real room
    for (let i = 0; i < 70; i++) {
      ambientEmbers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        origX: 0,
        origY: 0,
        vx: Math.random() * 1.5 + 0.4,
        vy: -(Math.random() * 1.2 + 0.3),
        size: Math.random() * 2.2 + 1.0,
        r: 255,
        g: Math.floor(Math.random() * 130 + 60),
        b: 20,
        alpha: Math.random() * 0.8 + 0.2,
        delay: 0,
        isEmber: true,
        decay: 0.003
      });
    }

    // 1. Initial snapshot of video frame
    const baseCanvas = document.createElement('canvas');
    baseCanvas.width = width;
    baseCanvas.height = height;
    const baseCtx = baseCanvas.getContext('2d');
    if (baseCtx) {
      baseCtx.drawImage(canvas, 0, 0, width, height);
    }

    // 2. Pre-create Shyam's signature brand crimson red backdrop plate (#E53E3E)
    const redCanvas = document.createElement('canvas');
    redCanvas.width = width;
    redCanvas.height = height;
    const redCtx = redCanvas.getContext('2d');
    if (redCtx) {
      const redGrad = redCtx.createRadialGradient(
        width * 0.50, height * 0.45, 20,
        width * 0.50, height * 0.50, Math.max(width, height) * 0.85
      );
      redGrad.addColorStop(0, '#E53E3E'); // Saturated Crimson Red
      redGrad.addColorStop(0.35, '#C53030');
      redGrad.addColorStop(0.65, '#8B1E22');
      redGrad.addColorStop(1, '#3B0A0E'); // Deep vignetted crimson edges

      redCtx.fillStyle = redGrad;
      redCtx.fillRect(0, 0, width, height);

      // Subtle atmospheric glow rays in the red dimension
      const glowGrad = redCtx.createRadialGradient(
        width * 0.50, height * 0.45, 10,
        width * 0.50, height * 0.45, width * 0.65
      );
      glowGrad.addColorStop(0, 'rgba(255, 120, 120, 0.28)');
      glowGrad.addColorStop(0.5, 'rgba(229, 62, 62, 0.12)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      redCtx.fillStyle = glowGrad;
      redCtx.fillRect(0, 0, width, height);
    }

    let frame = 0;

    const animateRealisticSnap = () => {
      frame++;

      ctx.clearRect(0, 0, width, height);

      // Smooth background morph: Starts as room video frame and shifts smoothly into signature red (#E53E3E)
      const redMorph = Math.min(1, frame / 80); // Smooth 1.3s transition into pure red

      // Draw base frame
      ctx.globalAlpha = 1.0;
      ctx.drawImage(baseCanvas, 0, 0, width, height);

      // Crossfade into signature red realm
      ctx.globalAlpha = redMorph;
      ctx.drawImage(redCanvas, 0, 0, width, height);
      ctx.globalAlpha = 1.0;

      let alivePersonCount = 0;

      // Render PERSON particles: Completely disintegrate into wind and ash until disappeared
      for (let i = 0; i < personParticles.length; i++) {
        const p = personParticles[i];

        if (frame < p.delay) {
          ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          alivePersonCount++;
        } else {
          p.x += p.vx + Math.sin(frame * 0.14 + p.origY * 0.06) * 1.2;
          p.y += p.vy;
          p.vx *= 0.985;
          p.vy -= 0.04;
          p.alpha -= p.decay;

          if (p.alpha > 0.01) {
            alivePersonCount++;
            ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${Math.max(0, p.alpha)})`;
            ctx.fillRect(p.x, p.y, p.size * p.alpha, p.size * p.alpha);
          }
        }
      }

      // Render drifting fiery ambient embers across the signature red atmosphere
      for (let j = 0; j < ambientEmbers.length; j++) {
        const e = ambientEmbers[j];
        e.x += e.vx + Math.sin(frame * 0.08 + j) * 0.4;
        e.y += e.vy;
        if (e.y < -10) e.y = height + 10;
        if (e.x > width + 10) e.x = -10;

        ctx.fillStyle = `rgba(${e.r},${e.g},${e.b},${e.alpha * 0.75})`;
        ctx.fillRect(e.x, e.y, e.size, e.size);
      }

      // If person particles are still dissolving (~2.5 seconds)
      if (alivePersonCount > 15 && frame < 160) {
        animFrameIdRef.current = requestAnimationFrame(animateRealisticSnap);
      } else {
        // Person is 100% DISAPPEARED! The entire page has turned into signature red!
        setIsDisintegrating(false);
        setIsDisintegrated(true);

        const renderRedCosmosWithEmbers = () => {
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(redCanvas, 0, 0, width, height);

          for (let j = 0; j < ambientEmbers.length; j++) {
            const e = ambientEmbers[j];
            e.x += e.vx * 0.4 + Math.sin(frame * 0.05 + j) * 0.35;
            e.y += e.vy * 0.4;
            if (e.y < -10) e.y = height + 10;
            if (e.x > width + 10) e.x = -10;

            ctx.fillStyle = `rgba(${e.r},${e.g},${e.b},${e.alpha * 0.75})`;
            ctx.fillRect(e.x, e.y, e.size, e.size);
          }
          frame++;
          animFrameIdRef.current = requestAnimationFrame(renderRedCosmosWithEmbers);
        };
        animFrameIdRef.current = requestAnimationFrame(renderRedCosmosWithEmbers);
      }
    };

    animFrameIdRef.current = requestAnimationFrame(animateRealisticSnap);
  };

  // Handle video ending - PLAY JUST ONCE, then Thanos snap immediately!
  const handleVideoEnded = () => {
    setIsPlaying(false);
    triggerRealisticThanosSnap();
  };

  // Toggle Mute / Unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      videoRef.current.volume = 1.0;
    }
  };

  // Re-assemble (The Endgame Reverse Snap / Replay)
  const reassembleAndReplay = () => {
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }
    if (snapAudioRef.current) {
      snapAudioRef.current.pause();
      snapAudioRef.current.currentTime = 0;
    }
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }

    setIsDisintegrated(false);
    setIsDisintegrating(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = isMuted;
      videoRef.current.volume = 1.0;
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const togglePlay = () => {
    if (isDisintegrated) {
      reassembleAndReplay();
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenHireMe) {
      onOpenHireMe();
    } else {
      const target = document.querySelector('#contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className={`hero-section ${isDisintegrating || isDisintegrated ? 'snapped-red-theme' : ''}`}>

      {/* Background Video & Thanos Disintegration Canvas */}
      <div className="video-background-container">
        {/* The video element plays ONCE, unmuted by default */}
        <video
          ref={videoRef}
          className={`bg-video ${isDisintegrating || isDisintegrated ? 'fade-out-video' : ''}`}
          src="/videos/hero-banner.mp4"
          autoPlay
          playsInline
          onEnded={handleVideoEnded}
        />

        {/* The Thanos Dissolve Particle Canvas (Renders Person Dusting + Real Room Plate) */}
        <canvas
          ref={canvasRef}
          className={`disintegration-canvas ${isDisintegrating || isDisintegrated ? 'active' : ''}`}
        />

        {/* Vignette Overlay for Crisp Text Contrast */}
        <div className="video-vignette-overlay"></div>
      </div>

      {/* Floating Content Overlaid on Video */}
      <div className="container hero-content-container">
        <div className="hero-main-details">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            6th Sem • Open for 6-Month Internship & Full-Time Roles
          </div>

          <h1 className="hero-title">
            Hi, I'm a Cloud &<br />
            <span>DevOps Engineer</span>
          </h1>

          <h2 className="hero-subtitle">
            Shyam Kumar D
          </h2>

          <p className="hero-tagline">
            Architecting production-grade infrastructure on AWS, deterministic Kubernetes scheduling engines, and automated Infrastructure as Code with Terraform.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-pill-white" onClick={handleScrollToProjects}>
              View My Work <ArrowRight size={16} />
            </a>
            <button className="btn btn-pill-translucent" onClick={handleContactClick}>
              <Sparkles size={16} /> Hire Me / Connect
            </button>
            <a href="/Shyam_Kumar_D_Resume.pdf" download="Shyam_Kumar_D_Resume.pdf" className="btn btn-resume-download">
              <FileText size={18} /> Download CV
            </a>
          </div>

          {/* Recruiter Fast-Track Role Selector */}
          <RecruiterRoleSelector />
        </div>

        {/* Quick Floating Mute/Unmute Action Button (Bottom-Left) */}
        {!isDisintegrated && (
          <div className="hero-quick-mute-wrapper">
            <button
              className={`hero-quick-mute-btn ${isMuted ? 'muted' : 'unmuted'}`}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              title={isMuted ? "Click to Unmute Audio" : "Click to Mute Audio"}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              <span className="quick-mute-text">{isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}</span>
            </button>
          </div>
        )}

        {/* Right Side: Media Control Dock (Only Play / Pause or Re-Assemble; No Mute buttons, Clean Status) */}
        <div className="hero-right-media-controls">
          <div className="media-controls-dock glass-card">
            <div className="dock-status-label">
              <span className={`dock-status-dot ${isDisintegrated ? 'snapped' : isPlaying ? 'playing' : 'paused'}`}></span>
              <span>{isDisintegrated ? 'DISINTEGRATED' : isPlaying ? 'PLAYING' : 'PAUSED'}</span>
            </div>

            <div className="dock-buttons-row">
              {/* Play / Pause / Re-Assemble Button */}
              <button
                className="dock-ctrl-btn primary-media-btn"
                onClick={togglePlay}
                aria-label={isDisintegrated ? "Re-assemble" : isPlaying ? "Pause video" : "Play video"}
                title={isDisintegrated ? "Re-Assemble Video Transmission" : isPlaying ? "Pause Video" : "Play Video"}
              >
                {isDisintegrated ? <Sparkles size={16} /> : isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span className="dock-btn-text">{isDisintegrated ? 'RE-ASSEMBLE' : isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              {/* Mute / Unmute Button */}
              {!isDisintegrated && (
                <button
                  className={`dock-ctrl-btn secondary-media-btn ${isMuted ? 'muted-active' : ''}`}
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  title={isMuted ? "Unmute Audio" : "Mute Audio"}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  <span className="dock-btn-text">{isMuted ? 'UNMUTE' : 'MUTE'}</span>
                </button>
              )}
            </div>
          </div>
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
          background-color: #0E0E10;
          transition: background-color 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-section.snapped-red-theme {
          background-color: #E53E3E;
        }

        .hero-section.snapped-red-theme .video-vignette-overlay {
          background: radial-gradient(
            circle at 50% 45%,
            rgba(229, 62, 62, 0.25) 0%,
            rgba(185, 28, 28, 0.5) 50%,
            rgba(45, 4, 6, 0.85) 100%
          );
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
          transition: opacity 0.4s ease-out;
        }

        .fade-out-video {
          opacity: 0 !important;
          pointer-events: none;
        }

        /* Thanos Dissolve Canvas */
        .disintegration-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
          z-index: 2;
          display: none;
        }

        .disintegration-canvas.active {
          display: block;
        }

        /* Dark Vignette Mask for readability */
        .video-vignette-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.45) 0%, 
            rgba(0, 0, 0, 0.25) 50%, 
            rgba(0, 0, 0, 0.80) 100%
          );
          z-index: 3;
          pointer-events: none;
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
          padding-top: 80px;
        }

        .hero-main-details {
          max-width: 760px;
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
          background-color: #38BDF8;
          box-shadow: 0 0 8px #38BDF8;
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
          color: #38BDF8;
          background: linear-gradient(135deg, #FFFFFF 15%, #7DD3FC 50%, #38BDF8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 14px rgba(56, 189, 248, 0.45));
          display: inline-block;
          font-weight: 800;
        }

        .hero-subtitle {
          font-size: 24px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 8px;
        }

        .hero-tagline {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
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
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .btn-pill-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.25);
        }

        .btn-pill-translucent {
          background-color: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          padding: 14px 28px;
          border-radius: 50px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          font-weight: 700;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-fast);
        }

        .btn-pill-translucent:hover {
          background-color: #FFFFFF;
          color: var(--accent-color);
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }

        .btn-resume-download {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-resume-download:hover {
          color: #FFFFFF;
        }

        /* Right Side: Clean Media Control Dock (Only Pause/Play or Re-Assemble) */
        .hero-right-media-controls {
          position: absolute;
          right: 32px;
          bottom: 36px;
          z-index: 20;
          animation: fadeInUp 1s ease-out;
        }

        .media-controls-dock {
          background: rgba(18, 18, 22, 0.85);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 50px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.5);
        }

        .dock-status-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.08em;
          padding-right: 8px;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .dock-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dock-status-dot.playing {
          background-color: #27C93F;
          box-shadow: 0 0 8px #27C93F;
        }

        .dock-status-dot.paused {
          background-color: #FFBD2E;
        }

        .dock-status-dot.snapped {
          background-color: var(--accent-color);
          box-shadow: 0 0 8px var(--accent-color);
        }

.dock-buttons-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .secondary-media-btn {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
        }

        .secondary-media-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: #FFFFFF;
          color: #FFFFFF;
        }

        .secondary-media-btn.muted-active {
          background: rgba(229, 62, 62, 0.3);
          border-color: var(--accent-color);
          color: #FFFFFF;
        }

        /* Quick Floating Mute Button in Bottom-Left */
        .hero-quick-mute-wrapper {
          position: absolute;
          left: 32px;
          bottom: 36px;
          z-index: 20;
          animation: fadeInUp 1s ease-out;
        }

        .hero-quick-mute-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(18, 18, 22, 0.85);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #FFFFFF;
          padding: 8px 18px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .hero-quick-mute-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }

        .hero-quick-mute-btn.muted {
          border-color: var(--accent-color);
          color: #FFA3A3;
        }

        .dock-ctrl-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .dock-ctrl-btn:hover {
          background: #FFFFFF;
          color: var(--accent-color);
          border-color: #FFFFFF;
          transform: translateY(-1px);
        }

        .primary-media-btn {
          background: var(--accent-color);
          border-color: var(--accent-color);
        }

        .primary-media-btn:hover {
          background: #FFFFFF;
          color: var(--accent-color);
        }

        .dock-btn-text {
          font-family: var(--font-display);
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .hero-section {
            min-height: 100vh;
            min-height: 100dvh;
            height: auto;
            padding: 100px 0 60px;
          }

          .hero-content-container {
            padding-top: 0;
            justify-content: flex-start;
          }

          .hero-title {
            font-size: clamp(30px, 8.5vw, 44px);
            margin-bottom: 12px;
          }

          .hero-subtitle {
            font-size: 20px;
            margin-bottom: 8px;
          }

          .hero-tagline {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 24px;
          }

          /* Hide redundant left quick-mute button to eliminate bottom collision disaster */
          .hero-quick-mute-wrapper {
            display: none !important;
          }

          /* Flow media controls cleanly in-line below the content */
          .hero-right-media-controls {
            position: relative;
            right: auto;
            bottom: auto;
            margin-top: 24px;
            margin-bottom: 8px;
            display: flex;
            justify-content: flex-start;
            width: 100%;
          }

          .media-controls-dock {
            padding: 6px 14px;
          }

          .dock-status-label {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .hero-section {
            padding: 85px 0 40px;
          }

          .hero-badge {
            font-size: 10px;
            padding: 5px 10px;
            margin-bottom: 14px;
            line-height: 1.35;
          }

          .hero-title {
            font-size: clamp(26px, 8vw, 36px);
          }

          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            gap: 10px;
          }

          .btn-pill-white, .btn-pill-translucent {
            width: 100%;
            justify-content: center;
            text-align: center;
            padding: 12px 18px;
            font-size: 13.5px;
          }

          .btn-resume-download {
            width: 100%;
            justify-content: center;
            padding: 8px;
            text-align: center;
          }

          .dock-ctrl-btn {
            padding: 7px 12px;
            font-size: 10.5px;
          }
        }
      `}</style>
    </section>
  );
}
