import React from 'react';
import { Calendar, Briefcase, Award, ShieldAlert, BarChart3, Terminal } from 'lucide-react';

export default function TimelineSection() {
  const experiences = [
    {
      index: '01',
      type: 'internship',
      title: 'Cloud Computing & Web Development Intern',
      company: 'Reccsar Pvt. Ltd.',
      period: 'Apr 2026',
      icon: <Award size={16} />,
      details: [
        'Provisioned and managed AWS infrastructure topologies, IAM least-privilege boundaries, and secure VPC subnets.',
        'Engineered automated deployment pipelines for containerized and static web application workloads.',
        'Audited high-availability architectures and multi-tier networking topologies for production reliability.'
      ]
    },
    {
      index: '02',
      type: 'certification',
      title: 'Practical Security & Linux Systems Training',
      company: 'TCM Security (Practical Academy)',
      period: 'May 2026',
      icon: <Terminal size={16} />,
      details: [
        'Mastered Linux OS internals, process trees, networking daemons, and system security administration (Linux 100).',
        'Engineered Python automation scripts for log auditing, socket communications, and threat detection (Programming 100).',
        'Implemented core Linux defense strategies, bash automation, and multi-user privilege management.'
      ]
    },
    {
      index: '03',
      type: 'simulation',
      title: 'Enterprise Cybersecurity Threat & Incident Response',
      company: 'Deloitte (Forage Experience)',
      period: 'Mar 2026',
      icon: <ShieldAlert size={16} />,
      details: [
        'Conducted systems audit for security vulnerabilities, access anomalies, and zero-day threat vectors.',
        'Executed incident response playbooks and structured remediation reports for Security Operations Centers (SOC).'
      ]
    },
    {
      index: '04',
      type: 'simulation',
      title: 'Industrial Systems & Telemetry Analytics',
      company: 'Deloitte (Forage Experience)',
      period: 'Mar 2026',
      icon: <BarChart3 size={16} />,
      details: [
        'Diagnosed simulated industrial machinery telemetry streams to isolate downtime bottlenecks and latency anomalies.',
        'Formulated automated metrics dashboards to monitor distributed infrastructure reliability and uptime trends.'
      ]
    }
  ];

  return (
    <section id="experience" className="timeline-section fade-in-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <div className="section-label">03. History</div>
          <h3 className="section-title">Timeline & Professional Journeys</h3>
        </div>

        <div className="timeline-layout-grid">
          {/* Left: Dotted Vertical Timeline with Solid Red Cards */}
          <div className="timeline-trail">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-card-wrapper">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="red-timeline-card">
                  <div className="card-top-header">
                    <span className="card-number-index">{exp.index}</span>
                    <span className="timeline-period">
                      <Calendar size={12} /> {exp.period}
                    </span>
                  </div>
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                  <ul className="timeline-details">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stripe-Style Offset Showcase (Photo 4: photo_desk_pose.png) */}
          <div className="timeline-sidebar-visual">
            <div className="offset-card-wrapper">
              <div className="offset-card glass-card">
                <div className="image-frame">
                  <img src="/assets/photo_desk_pose.png" alt="Shyam Kumar D at Desk" />
                </div>
                <div className="offset-card-text">
                  <p className="philosophy-label">Engineering Philosophy</p>
                  <p className="philosophy-quote">
                    "Resilience isn\'t an afterthought in distributed cloud systems—it is engineered through deterministic scheduling, immutable infrastructure, and automated incident containment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-divider">
          <span className="edu-line"></span>
          <div className="edu-title">Education Milestones</div>
          <span className="edu-line"></span>
        </div>

        <div className="education-grid">
          <div className="edu-card glass-card">
            <span className="edu-year">Graduating 2027</span>
            <h4>B.Sc. Networking</h4>
            <h5>Subbalakshmi Lakshmipathy College of Science, Madurai</h5>
            <p className="edu-gpa">GPA: 8.4 / 10.0</p>
            <p className="edu-desc">Core coursework in TCP/IP architectures, Linux systems administration, cloud computing, and high-performance network engineering.</p>
          </div>

          <div className="edu-card glass-card">
            <span className="edu-year">Completed 2023</span>
            <h4>Higher Secondary (HSC)</h4>
            <h5>C.E.O.A Matriculation Hr. Sec. School, Madurai</h5>
            <p className="edu-desc">Focused studies in mathematics, physics, and computer science operations.</p>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-section {
          padding: 80px 0;
          position: relative;
        }

        .timeline-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 56px;
          margin-top: 40px;
          align-items: flex-start;
        }

        /* Dotted Timeline Trail */
        .timeline-trail {
          position: relative;
          padding-left: 32px;
        }

        .timeline-trail::before {
          content: \'\';
          position: absolute;
          left: 17px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          border-left: 2px dashed var(--accent-color); /* Red Dotted Line */
        }

        .timeline-card-wrapper {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-card-wrapper:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -22px;
          top: 24px;
          z-index: 2;
        }

        .marker-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
          border: 2px solid var(--bg-color);
          transition: var(--transition-normal);
        }

        .timeline-card-wrapper:hover .marker-dot {
          transform: scale(1.3);
          box-shadow: 0 0 15px var(--accent-color);
        }

        /* Solid Red Timeline Card (Sushmita Reference Style) */
        .red-timeline-card {
          background-color: #E53E3E; /* Saturated red card background */
          color: #FFFFFF; /* White text */
          padding: 32px;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 30px rgba(229, 62, 62, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition-normal);
        }

        .red-timeline-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(229, 62, 62, 0.25);
        }

        .card-top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .card-number-index {
          font-family: var(--font-display);
          font-size: 24px;
          font-style: italic;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.55);
        }

        .timeline-period {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: #FFFFFF;
          background-color: rgba(0, 0, 0, 0.15);
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
        }

        .red-timeline-card h4 {
          font-size: 22px;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .red-timeline-card h5 {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          font-weight: 500;
        }

        .timeline-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
        }

        .timeline-details li {
          line-height: 1.5;
        }

        /* Sidebar visual layout (Stripe-inspired) */
        .timeline-sidebar-visual {
          position: sticky;
          top: 100px;
        }

        .offset-card-wrapper {
          position: relative;
        }

        .offset-card {
          border-radius: var(--radius-lg) !important;
          overflow: hidden;
          padding: 16px;
          border: 1px solid var(--border-color);
        }

        .image-frame {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4/5;
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: var(--transition-normal);
        }

        .offset-card-text {
          padding: 16px 8px 8px 8px;
        }

        .philosophy-label {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .philosophy-quote {
          font-size: 14px;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.5;
        }

        /* Education Divider */
        .education-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 80px;
          margin-bottom: 40px;
        }

        .edu-line {
          height: 1px;
          flex-grow: 1;
          background: var(--border-color);
        }

        .edu-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .edu-card {
          padding: 28px;
        }

        .edu-year {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.08);
          padding: 3px 10px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 12px;
        }

        .edu-card h4 {
          font-size: 18px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .edu-card h5 {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .edu-gpa {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 12px;
        }

        .edu-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .timeline-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .timeline-sidebar-visual {
            position: relative;
            top: 0;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
