import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  Calendar,
  CheckCircle2,
  Users,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import founder1Img from '../assets/images/annem_balarama_subba_reddy.jpg';
import founder1Webp from '../assets/images/annem_balarama_subba_reddy.webp';
import founder2Img from '../assets/images/annem_chandra_sekhar_reddy.jpg';
import founder2Webp from '../assets/images/annem_chandra_sekhar_reddy.webp';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="section-pad about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Building2 size={16} />
            <span>{t.aboutSection.badge}</span>
          </div>
          <h2 className="section-title">{t.aboutSection.title}</h2>
          <div className="section-accent-bar" />
          <p className="section-subtitle">{t.aboutSection.subtitle}</p>
        </div>

        {/* Narrative & Owners Card - Expansive layout filling container edges */}
        <div className="about-content-card">
          <div className="about-grid">
            {/* Left Column: Casual Story, Commitments & Stats */}
            <div className="about-story-col">
              {/* Estd. 1995 Badge - Centered */}
              <div className="history-pill-wrapper">
                <div className="history-pill">
                  <Calendar size={15} />
                  <span>
                    {language === 'te'
                      ? 'స్థాపన 1995 • 30+ ఏళ్లుగా రైతుల సేవలో'
                      : 'ESTD. 1995 • OVER 30 YEARS OF FARMER TRUST'}
                  </span>
                </div>
              </div>

              <p className="about-paragraph lead">
                {t.aboutSection.storyParagraph1}
              </p>

              <p className="about-paragraph">
                {t.aboutSection.storyParagraph2}
              </p>

              <p className="about-paragraph">
                {t.aboutSection.storyParagraph3}
              </p>

              {/* Simple 3-Box Stats */}
              <div className="about-stats-container">
                <div className="about-stat-box">
                  <div className="about-stat-val">{t.aboutSection.stat1Number}</div>
                  <div className="about-stat-lbl">{t.aboutSection.stat1Label}</div>
                </div>
                <div className="about-stat-box">
                  <div className="about-stat-val">{t.aboutSection.stat2Number}</div>
                  <div className="about-stat-lbl">{t.aboutSection.stat2Label}</div>
                </div>
                <div className="about-stat-box">
                  <div className="about-stat-val">{t.aboutSection.stat3Number}</div>
                  <div className="about-stat-lbl">{t.aboutSection.stat3Label}</div>
                </div>
              </div>

              {/* Practical Commitments */}
              <div className="commitments-list">
                <div className="commitment-item">
                  <CheckCircle2 size={18} className="commit-icon" />
                  <span>{t.aboutSection.commitment1}</span>
                </div>
                <div className="commitment-item">
                  <CheckCircle2 size={18} className="commit-icon" />
                  <span>{t.aboutSection.commitment2}</span>
                </div>
                <div className="commitment-item">
                  <CheckCircle2 size={18} className="commit-icon" />
                  <span>{t.aboutSection.commitment3}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founders & Owners */}
            <div className="about-leadership-col">
              <div className="leadership-panel">
                <div className="leadership-panel-header">
                  <div className="leadership-badge">
                    <Users size={15} />
                    <span>{t.aboutSection.foundersBadge}</span>
                  </div>
                  <h3 className="leadership-panel-title">
                    {t.aboutSection.foundersTitle}
                  </h3>
                  <p className="leadership-panel-sub">
                    {t.aboutSection.foundersSub}
                  </p>
                </div>

                {/* Founder & Owner: Annem Balarama Subba Reddy */}
                <div className="leader-card">
                  <div className="leader-card__avatar">
                    <picture>
                      <source type="image/webp" srcSet={founder1Webp} />
                      <img
                        src={founder1Img}
                        alt={t.aboutSection.founder1Name}
                        className="leader-avatar-img"
                        width={132}
                        height={132}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="leader-card__details">
                    <span className="leader-role">{t.aboutSection.founder1Role}</span>
                    <h4 className="leader-name">{t.aboutSection.founder1Name}</h4>
                    <p className="leader-desc">{t.aboutSection.founder1Desc}</p>
                  </div>
                </div>

                {/* Founder & Owner: Annem Chandra Sekhar Reddy */}
                <div className="leader-card">
                  <div className="leader-card__avatar">
                    <picture>
                      <source type="image/webp" srcSet={founder2Webp} />
                      <img
                        src={founder2Img}
                        alt={t.aboutSection.founder2Name}
                        className="leader-avatar-img"
                        width={132}
                        height={132}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="leader-card__details">
                    <div className="leader-role-row">
                      <span className="leader-role">{t.aboutSection.founder2Role}</span>
                      <span className="leader-relation">
                        {t.aboutSection.founder2Relation}
                      </span>
                    </div>
                    <h4 className="leader-name">{t.aboutSection.founder2Name}</h4>
                    <p className="leader-desc">{t.aboutSection.founder2Desc}</p>
                  </div>
                </div>

                {/* Grounded Family Note */}
                <div className="family-note-box">
                  <ShieldCheck size={18} className="note-icon" />
                  <span className="note-text">{t.aboutSection.simpleNote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          background-color: #FFFDF9;
          background-image: 
            radial-gradient(circle at 85% 15%, rgba(254, 243, 199, 0.85) 0%, transparent 45%),
            radial-gradient(circle at 15% 85%, rgba(254, 215, 170, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(255, 237, 213, 0.5) 0%, transparent 55%);
          border-top: 1.5px solid var(--color-border-subtle);
          border-bottom: 1.5px solid var(--color-border-subtle);
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -120px;
          left: 30%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(254, 243, 199, 0.45) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .about-section::after {
          content: '';
          position: absolute;
          bottom: -90px;
          right: -80px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Full container utilization with comfortable responsive padding */
        .about-content-card {
          width: 100%;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-top: 4px solid #F59E0B;
          border-radius: var(--radius-xl);
          padding: 2.25rem 1.5rem;
          box-shadow: 0 16px 40px -10px rgba(41, 37, 36, 0.05);
        }

        @media (min-width: 768px) {
          .about-content-card {
            padding: 3rem 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .about-content-card {
            padding: 3.5rem 3.5rem;
          }
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3.5rem;
            align-items: start;
          }
        }

        /* Left Story Column */
        .history-pill-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .history-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: #FEF3C7;
          border: 1.5px solid rgba(245, 158, 11, 0.4);
          color: #B45309;
          padding: 0.4rem 1.35rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .about-paragraph {
          font-size: 1.02rem;
          color: var(--color-charcoal-muted);
          line-height: 1.8;
          margin-bottom: 1.15rem;
          text-align: justify;
          text-justify: inter-word;
        }
        .about-paragraph.lead {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text-main);
          line-height: 1.7;
          margin-bottom: 1.35rem;
          text-align: justify;
          text-justify: inter-word;
        }
        html[lang="te"] .about-paragraph.lead {
          font-family: var(--font-te);
          font-weight: 700;
        }

        /* Stats Container - Cute Butter Box */
        .about-stats-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 1.85rem 0;
          padding: 1.35rem 1.15rem;
          background: #FEF3C7;
          border-radius: var(--radius-xl);
          border: 1.5px solid rgba(245, 158, 11, 0.35);
        }
        @media (max-width: 640px) {
          .about-stats-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        .about-stat-box {
          text-align: center;
          padding: 0 0.5rem;
        }
        .about-stat-val {
          font-family: var(--font-sans);
          font-size: 1.95rem;
          font-weight: 800;
          color: #B45309;
          line-height: 1.2;
        }
        .about-stat-lbl {
          font-size: 0.82rem;
          color: #78350F;
          font-weight: 600;
          margin-top: 0.35rem;
          line-height: 1.35;
        }

        /* Commitments List */
        .commitments-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 1.5rem;
          padding-top: 1.35rem;
          border-top: 1.5px solid var(--color-border-subtle);
        }
        .commitment-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .commit-icon {
          color: #D97706;
          flex-shrink: 0;
        }

        /* Right Column: Founders & Owners Panel */
        .leadership-panel {
          background: #FFFDF9;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-xl);
          padding: 1.85rem 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .leadership-panel {
            padding: 2.25rem 2rem;
          }
        }

        .leadership-panel-header {
          margin-bottom: 0.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .leadership-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #FEF3C7;
          color: #B45309;
          padding: 0.28rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          border: 1px solid rgba(245, 158, 11, 0.35);
        }
        .leadership-panel-title {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.25;
          text-align: center;
        }
        html[lang="te"] .leadership-panel-title {
          font-family: var(--font-te);
          font-weight: 800;
        }
        .leadership-panel-sub {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          margin-top: 0.25rem;
          line-height: 1.45;
          text-align: center;
        }

        /* Leader Cards - Cute 24px Card */
        .leader-card {
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-xl);
          padding: 1.35rem;
          display: flex;
          align-items: center;
          gap: 1.35rem;
          transition: transform var(--transition-bouncy), border-color var(--transition-normal), box-shadow var(--transition-normal);
          box-shadow: 0 4px 16px rgba(41, 37, 36, 0.04);
        }
        @media (min-width: 768px) {
          .leader-card {
            padding: 1.6rem 1.5rem;
            gap: 1.5rem;
          }
        }
        .leader-card:hover {
          transform: translateY(-4px);
          border-color: #F59E0B;
          box-shadow: 0 10px 28px rgba(245, 158, 11, 0.16);
        }

        .leader-card__avatar {
          width: 100px;
          height: 100px;
          min-width: 100px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 3.5px solid #F59E0B;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25), 0 4px 12px rgba(41, 37, 36, 0.12);
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 480px) {
          .leader-card__avatar {
            width: 118px;
            height: 118px;
            min-width: 118px;
          }
        }
        @media (min-width: 768px) {
          .leader-card__avatar {
            width: 136px;
            height: 136px;
            min-width: 136px;
          }
        }
        @media (max-width: 440px) {
          .leader-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.5rem 1rem;
            gap: 1rem;
          }
          .leader-card__avatar {
            width: 118px;
            height: 118px;
            min-width: 118px;
          }
          .leader-role-row {
            justify-content: center;
          }
          .leader-desc {
            text-align: center !important;
          }
        }
        .leader-card__avatar picture {
          width: 100%;
          height: 100%;
          display: block;
        }
        .leader-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
          transition: transform 0.4s ease;
        }
        .leader-card:hover .leader-avatar-img {
          transform: scale(1.05);
        }

        .leader-card__details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .leader-role-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.25rem;
        }
        .leader-role {
          font-size: 0.74rem;
          font-weight: 800;
          color: #B45309;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .leader-relation {
          font-size: 0.72rem;
          font-weight: 700;
          color: #B45309;
          background: #FEF3C7;
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 0.12rem 0.55rem;
          border-radius: var(--radius-full);
        }
        .leader-name {
          font-family: var(--font-sans);
          font-size: 1.22rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.3;
          margin-bottom: 0.35rem;
        }
        html[lang="te"] .leader-name {
          font-family: var(--font-te);
          font-weight: 800;
        }
        .leader-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
          text-align: justify;
          text-justify: inter-word;
        }

        /* Grounded Family Note */
        .family-note-box {
          background: #FEF3C7;
          border: 1.5px solid rgba(245, 158, 11, 0.35);
          border-radius: var(--radius-lg);
          padding: 0.95rem 1.15rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.65rem;
        }
        .note-icon {
          color: #D97706;
          flex-shrink: 0;
        }
        .note-text {
          font-size: 0.86rem;
          font-weight: 600;
          color: #92400E;
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
};
