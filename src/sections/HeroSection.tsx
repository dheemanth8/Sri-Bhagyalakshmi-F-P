import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { businessData } from '../data/business';
import heroBg from '../assets/images/agricultural_hero.jpg';
import heroBgWebp1600 from '../assets/images/agricultural_hero-1600.webp';
import heroBgWebp1024 from '../assets/images/agricultural_hero-1024.webp';
import heroBgWebp640 from '../assets/images/agricultural_hero-640.webp';
import logoImg from '../assets/images/sri_bhagyalakshmi_logo.png';
import logoImgWebp320 from '../assets/images/sri_bhagyalakshmi_logo-320.webp';
import { Award, Compass, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background with Dark Forest Green gradient overlay for text legibility */}
      <div className="hero-bg-wrapper">
        <picture className="hero-bg-picture">
          <source
            type="image/webp"
            srcSet={`${heroBgWebp640} 640w, ${heroBgWebp1024} 1024w, ${heroBgWebp1600} 1376w`}
            sizes="100vw"
          />
          <img
            src={heroBg}
            alt="Lush green agricultural fields at sunrise"
            className="hero-bg-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1376}
            height={768}
          />
        </picture>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Heritage Badge */}
          <div className="hero-badge">
            <Award size={18} className="hero-badge-icon" />
            <span>
              {language === 'te'
                ? 'స్థాపన 1995 • 30+ ఏళ్ల విశేష రైతు సేవ'
                : 'ESTABLISHED 1995 • OVER 30 YEARS OF FARMER TRUST'}
            </span>
          </div>

          {/* Business Title - Single Language based on active selection */}
          <div className="hero-business-title">
            <h2 className={`hero-business-single ${language === 'te' ? 'hero-business-te telugu-preserve' : 'hero-business-en'}`}>
              {businessData.name[language]}
            </h2>
          </div>

          {/* Main Headline & Narrative */}
          <h1 className="hero-headline">
            {t.hero.headline}
          </h1>

          <p className="hero-subheadline">
            {t.hero.subheadline}
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-ctas">
            <button
              type="button"
              id="cta-explore-brands"
              className="btn btn-gold btn-lg hero-btn-primary"
              onClick={() => handleScrollTo('#brands')}
            >
              <Compass size={20} />
              <span>{t.hero.exploreBrandsCta}</span>
              <ArrowRight size={18} />
            </button>

            <a
              id="cta-get-directions"
              href={businessData.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg hero-btn-secondary"
            >
              <MapPin size={20} />
              <span>{t.hero.getDirectionsCta}</span>
            </a>
          </div>

          {/* Trust Value Badges Grid */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-number">{t.hero.experienceYears}</div>
              <div className="stat-label">{t.hero.experienceLabel}</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-number">
                <ShieldCheck size={24} className="stat-icon" />
                <span>{t.hero.localCommitment}</span>
              </div>
              <div className="stat-label">{t.hero.localCommitmentLabel}</div>
            </div>
          </div>
        </div>

        {/* Decorative Heritage Crest Badge */}
        <div className="hero-seal-badge-wrapper">
          <div className="hero-seal-card">
            <picture className="hero-seal-picture">
              <source type="image/webp" srcSet={logoImgWebp320} />
              <img
                src={logoImg}
                alt="Sri Bhagyalakshmi Seal"
                className="hero-seal-img"
                width={160}
                height={160}
                decoding="async"
              />
            </picture>
            <div className="hero-seal-text">
              <h3 className={`hero-seal-title ${language === 'te' ? 'telugu-preserve' : ''}`}>
                {language === 'te' ? 'శ్రీ భాగ్యలక్ష్మి' : 'SRI BHAGYALAKSHMI'}
              </h3>
              <p className="hero-seal-sub">
                {language === 'te' ? 'ఎరువులు & పురుగుమందులు' : 'Fertilizers & Pesticides'}
              </p>
              <div className="hero-seal-year-wrap">
                <span className="hero-seal-year">
                  {language === 'te' ? 'స్థాపన 1995' : 'Estd. 1995'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - var(--header-height));
          display: flex;
          align-items: center;
          color: #FFFFFF;
          padding: 4.5rem 0 5rem 0;
          overflow: hidden;
        }

        .hero-bg-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        .hero-bg-picture {
          display: block;
          width: 100%;
          height: 100%;
        }
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(15, 61, 33, 0.94) 0%,
            rgba(20, 83, 45, 0.88) 50%,
            rgba(15, 30, 20, 0.82) 100%
          );
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1.35fr 0.65fr;
            gap: 4rem;
          }
        }

        .hero-content {
          max-width: 720px;
        }
        @media (min-width: 1280px) {
          .hero-content {
            max-width: 880px;
          }
        }

        /* Top badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(244, 185, 66, 0.18);
          border: 1px solid var(--color-golden-yellow);
          color: var(--color-golden-yellow-light);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }
        .hero-badge-icon {
          color: var(--color-golden-yellow);
        }

        /* Business title */
        .hero-business-title {
          margin-bottom: 1rem;
        }
        .hero-business-te {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-golden-yellow);
          margin-bottom: 0.25rem;
          line-height: 1.3;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        @media (min-width: 768px) {
          .hero-business-te {
            font-size: 2.2rem;
          }
        }
        .hero-business-en {
          font-size: 1.15rem;
          font-weight: 600;
          color: #E2E8F0;
          letter-spacing: 0.02em;
        }
        @media (min-width: 768px) {
          .hero-business-en {
            font-size: 1.35rem;
          }
        }

        /* Main Headline */
        .hero-headline {
          font-size: 2.1rem;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 1.25rem;
          color: #FFFFFF;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        @media (min-width: 768px) {
          .hero-headline {
            font-size: 2.9rem;
          }
        }

        .hero-subheadline {
          font-size: 1.1rem;
          color: #F1F5F9;
          line-height: 1.7;
          margin-bottom: 2.25rem;
          max-width: 650px;
        }
        @media (min-width: 768px) {
          .hero-subheadline {
            font-size: 1.22rem;
          }
        }
        @media (min-width: 1280px) {
          .hero-subheadline {
            max-width: 820px;
          }
        }

        /* CTAs */
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        .hero-btn-primary {
          background-color: var(--color-golden-yellow);
          color: #1F2937;
          font-weight: 700;
        }
        .hero-btn-primary:hover {
          background-color: var(--color-golden-yellow-dark);
          color: #000;
        }

        /* Stats Grid */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 520px;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 640px) {
          .hero-stats-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
        .hero-stat-card {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-golden-yellow);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .stat-icon {
          color: #4ADE80;
        }
        .stat-label {
          font-size: 0.8rem;
          color: #CBD5E1;
          margin-top: 0.25rem;
          line-height: 1.4;
        }

        /* Seal Badge */
        .hero-seal-badge-wrapper {
          display: none;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          .hero-seal-badge-wrapper {
            display: flex;
          }
        }
        .hero-seal-card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 2px solid rgba(244, 185, 66, 0.5);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
          max-width: 320px;
        }
        .hero-seal-picture {
          display: flex;
          justify-content: center;
        }
        .hero-seal-img {
          width: 160px;
          height: 160px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          border: 3px solid var(--color-golden-yellow);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          margin-bottom: 1.25rem;
          background: #fff;
        }
        .hero-seal-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          width: 100%;
        }
        .hero-seal-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.2;
          margin: 0;
        }
        .hero-seal-sub {
          font-size: 0.88rem;
          font-weight: 500;
          color: #E2E8F0;
          letter-spacing: 0.02em;
          margin: 0;
          line-height: 1.3;
        }
        .hero-seal-year-wrap {
          margin-top: 0.5rem;
        }
        .hero-seal-year {
          display: inline-block;
          padding: 0.25rem 0.85rem;
          background: rgba(244, 185, 66, 0.25);
          border: 1px solid var(--color-golden-yellow);
          color: var(--color-golden-yellow);
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  );
};
