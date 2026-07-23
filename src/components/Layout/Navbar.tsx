import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Check local storage or set default theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={() => handleLinkClick('#hero')}>
          Shyam<span>.</span>
        </a>

        {/* Desktop nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* Desktop Hire Me button */}
          <a
            href="#contact"
            className="desktop-hire-btn"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle mobile-theme-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn" aria-label="Toggle menu">
            {isOpen ? <X size={24} style={{ color: '#FFF' }} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer (Red layout matching screenshots) */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-nav-header">
          <span className="drawer-logo">Shyam<span>.</span></span>
          <button onClick={() => setIsOpen(false)} className="drawer-close" aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hire Me white pill button */}
        <div className="drawer-footer">
          <a
            href="#contact"
            className="mobile-hire-pill"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
          >
            Hire Me
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid transparent;
          transition: var(--transition-normal);
        }

        .navbar.scrolled {
          height: 64px;
          background: var(--nav-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -1px;
        }

        .nav-logo span {
          color: var(--accent-color);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          transition: var(--transition-fast);
        }

        .nav-item:hover, .nav-item.active {
          color: var(--text-primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: var(--accent-color);
          transition: var(--transition-fast);
          transform: translateX(-50%);
        }

        .nav-item.active::after, .nav-item:hover::after {
          width: 100%;
        }

        .theme-toggle {
          background: none;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: var(--transition-normal);
        }

        .theme-toggle:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .desktop-hire-btn {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          background-color: var(--accent-color);
          color: #FFFFFF;
          text-decoration: none;
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid var(--accent-color);
          transition: var(--transition-normal);
        }

        .desktop-hire-btn:hover {
          background-color: transparent;
          color: var(--accent-color);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 16px;
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 2001; /* Ensure close icon overlays menu */
        }

        /* Red Full-Bleed Mobile Drawer Menu */
        .mobile-nav-drawer {
          position: fixed;
          inset: 0;
          background-color: #E53E3E; /* Solid red */
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 2000;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          pointer-events: none;
        }

        .mobile-nav-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .drawer-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .drawer-logo {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #FFFFFF;
        }

        .drawer-logo span {
          color: #111112;
        }

        .drawer-close {
          background: none;
          border: none;
          color: #FFFFFF;
          cursor: pointer;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: auto;
          margin-top: 24px;
        }

        .mobile-nav-item {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 12px;
          transition: var(--transition-fast);
        }

        .mobile-nav-item:hover, .mobile-nav-item.active {
          color: #FFFFFF;
          padding-left: 12px;
          border-bottom-color: #FFFFFF;
        }

        .drawer-footer {
          margin-top: 32px;
        }

        .mobile-hire-pill {
          display: block;
          width: 100%;
          text-align: center;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          background-color: #FFFFFF; /* White pill */
          color: #E53E3E; /* Red text */
          text-decoration: none;
          padding: 16px;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: var(--transition-normal);
        }

        .mobile-hire-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-actions {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
