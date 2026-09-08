import { Cpu, Shield, Terminal } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section fade-in-section">
      <div className="container about-container">
        {/* Section title */}
        <div className="section-header">
          <div className="section-label">01. Biography</div>
          <h3 className="section-title">My Professional Narrative</h3>
        </div>

        <div className="about-grid">
          {/* Left: Red border offset card housing Portrait Photo (Photo 1) */}
          <div className="about-visual-block">
            <div className="portrait-card-wrapper">
              <div className="portrait-red-backdrop"></div>
              <div className="portrait-image-card">
                <img src="/assets/photo_2026-06-11_19-15-13.jpg" alt="Shyam Kumar D Portrait" />
              </div>
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="about-story">
            <p className="story-lead">
              I specialize in engineering resilient cloud infrastructure, custom Kubernetes scheduling plugins, and automated Infrastructure as Code.
            </p>
            <p className="story-body">
              As a B.Sc. Networking (Cloud Computing) undergraduate graduating in 2027, I bridge low-level network protocols—such as CIDR subnetting, route tables, and IPsec VPNs—with modern cloud virtualization and container orchestration on AWS.
            </p>
            <p className="story-body">
              Through flagship systems like KubeForecast (a Go Kubernetes scheduling engine hardware-validated on AWS EKS) and Project AEGIS (an autonomous AWS SOAR security fabric), I build production-grade solutions that eliminate compute waste, automate DevSecOps containment, and guarantee high availability with 100% codified Terraform.
            </p>
            <p className="story-emphasis">
              🎓 <strong>Currently in 6th Semester</strong> — Actively seeking a <strong>6-Month Full-Time Internship (with PPO Conversion)</strong> and graduate <strong>Cloud Infrastructure, DevOps & SRE Opportunities</strong>. Open to on-site relocation & remote.
            </p>

            {/* Quick attribute tags */}
            <div className="about-attribute-chips">
              <div className="attr-chip">
                <Cpu size={14} /> Kubernetes & EKS
              </div>
              <div className="attr-chip">
                <Terminal size={14} /> 100% Terraform IaC
              </div>
              <div className="attr-chip">
                <Shield size={14} /> DevSecOps & FinOps
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 90px 0 80px 0;
          position: relative;
        }

        /* Grid */
        .about-container {
          margin-top: 40px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 64px;
          align-items: center;
        }

        /* Portrait Offset Card Styling */
        .about-visual-block {
          display: flex;
          justify-content: center;
        }

        .portrait-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 360px;
          aspect-ratio: 4 / 5;
        }

        .portrait-red-backdrop {
          position: absolute;
          inset: 16px -16px -16px 16px;
          background-color: var(--accent-color);
          border-radius: var(--radius-lg);
          z-index: 1;
        }

        .portrait-image-card {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          z-index: 2;
          transition: var(--transition-normal);
        }

        .portrait-card-wrapper:hover .portrait-image-card {
          transform: translate(6px, -6px);
        }

        .portrait-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Biography content columns */
        .about-story {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .story-lead {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .story-body {
          font-size: 15px;
          color: var(--text-secondary);
        }

        .story-emphasis {
          font-size: 15px;
          font-weight: 600;
          color: var(--accent-color);
          border-left: 2px solid var(--accent-color);
          padding-left: 16px;
          margin-top: 8px;
        }

        .about-attribute-chips {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .attr-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 6px 14px;
          border-radius: 50px;
        }

        @media (max-width: 992px) {
          .about-parallax-banner {
            height: auto;
            min-height: 250px;
            background-attachment: scroll;
            padding: 60px 0;
          }

          .banner-quote {
            font-size: 24px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .portrait-card-wrapper {
            max-width: 300px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 50px 0;
          }
          .about-container {
            margin-top: 24px;
          }
          .portrait-card-wrapper {
            max-width: min(260px, 75vw);
          }
          .story-lead {
            font-size: 17px;
          }
          .story-body {
            font-size: 14px;
          }
          .about-grid {
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
