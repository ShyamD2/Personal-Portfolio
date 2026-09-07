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

export default function App() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

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
      <Navbar onOpenHireMe={() => setIsHireMeOpen(true)} />
      <main>
        <HeroSection onOpenHireMe={() => setIsHireMeOpen(true)} />
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
      <SRETelemetryBar />
    </div>
  );
}
