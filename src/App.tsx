import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectReportsSection from './components/ProjectReportsSection';
import InternshipSection from './components/InternshipSection';
import CertificationsSection from './components/CertificationsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Layout/Footer';
import HireMeModal from './components/Interactive/HireMeModal';
import SRETelemetryBar from './components/Interactive/SRETelemetryBar';
import SpeedrunModal from './components/Interactive/SpeedrunModal';
import CommandPalette from './components/Interactive/CommandPalette';

export default function App() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isSpeedrunOpen, setIsSpeedrunOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    // Global Ctrl+K / Cmd+K listener
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Scroll-triggered Fade-In animations using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const hiddenElements = document.querySelectorAll('.fade-in-section');
    
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar 
        onOpenHireMe={() => setIsHireMeOpen(true)}
        onOpenSpeedrun={() => setIsSpeedrunOpen(true)}
        onOpenCommandPalette={() => setIsPaletteOpen(true)}
      />
      <main>
        <HeroSection 
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenSpeedrun={() => setIsSpeedrunOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProjectReportsSection />
        <InternshipSection />
        <CertificationsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
      <HireMeModal isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
      <SpeedrunModal 
        isOpen={isSpeedrunOpen} 
        onClose={() => setIsSpeedrunOpen(false)} 
        onOpenHireMe={() => setIsHireMeOpen(true)} 
      />
      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
        onOpenSpeedrun={() => setIsSpeedrunOpen(true)} 
        onOpenHireMe={() => setIsHireMeOpen(true)} 
      />
      <SRETelemetryBar />
    </div>
  );
}
