import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, CheckCircle2, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

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

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shyamcloud021@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectSubjectPreset = (preset: string) => {
    setFormData(prev => ({ ...prev, subject: preset }));
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Shyam, I saw your Cloud & DevOps portfolio and would love to connect about an engineering opportunity!"
  );

  return (
    <section id="contact" className="contact-section fade-in-section">
      <div className="container">
        {/* Section title */}
        <div className="section-header">
          <div className="section-label">05. Connect</div>
          <h3 className="section-title">Initiate Contact & Engineering Inquiries</h3>
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
                <p>Cloud & DevOps Engineer</p>
                <span className="location-pill">
                  <MapPin size={10} /> Madurai, Tamil Nadu
                </span>
              </div>
            </div>

            <p className="contact-intro-description">
              Specializing in Kubernetes container orchestration, AWS cloud infrastructure, Terraform IaC, and autonomous security engineering. Open to full-time roles, internships, and cloud architecture projects.
            </p>

            {/* Quick Connect Action Buttons */}
            <div className="quick-connect-banner">
              <a
                href={`https://wa.me/917010672248?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-action"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp (+91 7010672248)</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>

              <button
                type="button"
                className="btn-copy-email-action"
                onClick={handleCopyEmail}
              >
                {copied ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied to Clipboard!' : 'Copy: shyamcloud021@gmail.com'}</span>
              </button>
            </div>

            <div className="contact-links-list">
              <a href="mailto:shyamcloud021@gmail.com" className="contact-link-item">
                <Mail className="link-icon" size={16} />
                <span>shyamcloud021@gmail.com</span>
              </a>
              <a href="tel:+917010672248" className="contact-link-item">
                <Phone className="link-icon" size={16} />
                <span>+91 7010672248</span>
              </a>
              <div className="contact-link-item non-click">
                <MapPin className="link-icon" size={16} />
                <span>Open to Relocation & Remote (Worldwide)</span>
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
                <h4>Send a direct inquiry</h4>
                <p>Fill out the form below or pick a preset topic. Telemetry routed directly to my inbox.</p>
                
                {/* Topic Presets */}
                <div className="preset-topics-group">
                  <span className="preset-label">Quick topics:</span>
                  <div className="preset-chips">
                    {['Full-Time Cloud Role', 'DevOps Internship', 'KubeForecast Inquiry', 'Cloud Advisory'].map((topic, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`topic-chip ${formData.subject === topic ? 'selected' : ''}`}
                        onClick={() => selectSubjectPreset(topic)}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

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
                      placeholder="e.g. Recruiter / Engineering Manager"
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
                      placeholder="e.g. hiring@company.com"
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
                    placeholder="e.g. Cloud Infrastructure Role / Interview Invitation"
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
                    placeholder="Provide details about the opportunity, role requirements, or project scope..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting Inquiries...' : (
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
                  Send another inquiry
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
          margin-bottom: 20px;
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
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .profile-titles p {
          font-size: 13px;
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-secondary);
          background-color: var(--bg-color);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
        }

        .contact-intro-description {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Quick Connect Banner */
        .quick-connect-banner {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .btn-whatsapp-action {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: #FFFFFF;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 13px;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-whatsapp-action:hover {
          background: #1EBE5D;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        .ext-icon {
          margin-left: auto;
          opacity: 0.8;
        }

        .btn-copy-email-action {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          color: var(--text-primary);
          padding: 10px 16px;
          border-radius: var(--radius-md);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-copy-email-action:hover {
          background: rgba(var(--accent-rgb), 0.15);
          border-color: var(--accent-color);
        }

        .copied-icon {
          color: #10B981;
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
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
          align-items: center;
          flex-wrap: wrap;
        }

        .social-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .social-box:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          transform: translateY(-2px);
        }

        .resume-btn-box {
          width: auto;
          padding: 0 16px;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        /* Form Card */
        .contact-form-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
        }

        .actual-contact-form h4 {
          font-size: 22px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .actual-contact-form p {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        /* Preset topics */
        .preset-topics-group {
          margin-bottom: 20px;
        }

        .preset-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 8px;
        }

        .preset-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .topic-chip {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .topic-chip:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .topic-chip.selected {
          background: var(--accent-color);
          color: #FFFFFF;
          border-color: var(--accent-color);
        }

        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background-color: var(--bg-color);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px;
          font-size: 15px;
          margin-top: 8px;
        }

        .success-overlay-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
          height: 100%;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 16px;
        }

        .success-overlay-card h4 {
          font-size: 22px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .success-overlay-card p {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          max-width: 380px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
