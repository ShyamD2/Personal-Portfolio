import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, CheckCircle2 } from 'lucide-react';
import CertTracker from './Interactive/CertTracker';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section fade-in-section">
      <div className="container">
        {/* AWS Certification & Learning Tracker */}
        <div className="certs-showcase-wrapper">
          <CertTracker />
        </div>

        {/* Section title */}
        <div className="section-header contact-header-gap">
          <div className="section-label">05. Connect</div>
          <h3 className="section-title">Initiate Contact & Relocation Queries</h3>
        </div>

        <div className="contact-grid">
          {/* Left: Bento Recruiter Detail Card (Photo 5: photo_formal.png) */}
          <div className="contact-info-card glass-card">
            <div className="recruiter-profile-header">
              <div className="avatar-wrapper">
                <img src="/assets/photo_formal.png" alt="Shyam Kumar D Formal Headshot" />
                <span className="pulse-dot green" title="Open for Work"></span>
              </div>
              <div className="profile-titles">
                <h4>Shyam Kumar D</h4>
                <p>Systems & Support Specialist</p>
                <span className="location-pill">
                  <MapPin size={10} /> Madurai, Tamil Nadu
                </span>
              </div>
            </div>

            <p className="contact-intro-description">
              Looking for a systems professional ready for L1/L2 cloud support queues, network diagnostics, and 24/7/365 shift rotations? Let's initiate a discussion.
            </p>

            <div className="contact-links-list">
              <a href="mailto:dshyamkumar021@gmail.com" className="contact-link-item">
                <Mail className="link-icon" size={16} />
                <span>dshyamkumar021@gmail.com</span>
              </a>
              <a href="tel:+917010672248" className="contact-link-item">
                <Phone className="link-icon" size={16} />
                <span>+91 7010672248</span>
              </a>
              <div className="contact-link-item non-click">
                <MapPin className="link-icon" size={16} />
                <span>Open to Relocation & Remote</span>
              </div>
            </div>

            <div className="social-links-row">
              <a href="https://linkedin.com/in/shyam-kumar-d" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/ShyamD2" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="/Shyam_Kumar_D_Resume.pdf" download className="social-box resume-btn-box" title="Download Resume" aria-label="Download CV">
                <FileText size={18} /> <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right: Dynamic Validated Contact Form */}
          <div className="contact-form-card glass-card">
            {!isSent ? (
              <form onSubmit={handleFormSubmit} className="actual-contact-form">
                <h4>Send a direct notification</h4>
                <p>Use the form below to initiate contact queries. Immediate telemetry updates enabled.</p>
                
                {errorMsg && <div className="form-alert error">{errorMsg}</div>}

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Recruiter Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. hr@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Interview Scheduling"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message Content *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details about opportunities, scheduling, or questions..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting Data...' : (
                    <>
                      Transmit Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="success-overlay-card">
                <CheckCircle2 className="success-icon" size={48} />
                <h4>Message Transmitted Successfully!</h4>
                <p>Data packets successfully routed to Shyam Kumar D. You will receive a response within 12 business hours.</p>
                <button className="btn btn-secondary" onClick={() => setIsSent(false)}>
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 80px 0;
          position: relative;
        }

        .certs-showcase-wrapper {
          margin-bottom: 60px;
        }

        .contact-header-gap {
          margin-top: 40px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          margin-top: 40px;
          align-items: stretch;
        }

        /* Info Bento Card */
        .contact-info-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .recruiter-profile-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .avatar-wrapper {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          overflow: hidden;
        }

        .avatar-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pulse-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--card-bg-solid);
        }

        .pulse-dot.green {
          background-color: #10b981;
          animation: pulse-glow 2s infinite;
        }

        .profile-titles h4 {
          font-size: 18px;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .profile-titles p {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }

        .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 2px 10px;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 600;
        }

        .contact-intro-description {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: var(--transition-fast);
        }

        .contact-link-item:hover:not(.non-click) {
          color: var(--accent-color);
        }

        .link-icon {
          color: var(--accent-color);
        }

        .social-links-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-normal);
        }

        .social-box:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .resume-btn-box {
          width: auto;
          flex-grow: 1;
          display: flex;
          gap: 8px;
          padding: 0 16px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          background-color: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }

        .resume-btn-box:hover {
          background-color: transparent;
          color: var(--accent-color);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        /* Form Card Styling */
        .contact-form-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .actual-contact-form h4 {
          font-size: 18px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .actual-contact-form p {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .form-alert {
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          margin-bottom: 16px;
        }

        .form-alert.error {
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #fca5a5;
        }

        .form-group-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-group input, .form-group textarea {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 13.5px;
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .form-submit-btn {
          width: 100%;
          border: none;
          justify-content: center;
          font-weight: 700;
        }

        /* Success Card */
        .success-overlay-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px 16px;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.3));
        }

        .success-overlay-card h4 {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .success-overlay-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
          max-width: 400px;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
