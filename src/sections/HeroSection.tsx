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
                : 'ESTD. 1995 • 30+ YEARS OF FARMER TRUST'}
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
              className="btn btn-primary btn-lg hero-btn-primary"
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
              className="btn btn-outline hero-btn-secondary"
            >
              <MapPin size={20} />
              <span>{t.hero.getDirectionsCta}</span>
            </a>
          </div>

          {/* Neat Stat Pedestals */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-number">{t.hero.experienceYears}</div>
              <div className="stat-label">{t.hero.experienceLabel}</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-number">
                <ShieldCheck size={22} className="stat-icon" />
                <span>{t.hero.localCommitment}</span>
              </div>
              <div className="stat-label">{t.hero.localCommitmentLabel}</div>
            </div>
          </div>
        </div>

        {/* Elegant Trust Medallion */}
        <div className="hero-seal-badge-wrapper">
          <div className="hero-seal-card">
            <picture className="hero-seal-picture">
              <source type="image/webp" srcSet={logoImgWebp320} />
              <img
                src={logoImg}
                alt="Sri Bhagyalakshmi Seal"
                className="hero-seal-img"
                width={150}
                height={150}
                decoding="async"
              />
            </picture>
            <div className="hero-seal-text">
              <h3 className={`hero-seal-title ${language === 'te' ? 'telugu-preserve' : ''}`}>
                {language === 'te' ? 'శ్రీ భాగ్యలక్ష్మి' : 'SRI BHAGYALAKSHMI'}
              </h3>
              <p className="hero-seal-sub">
                {language === 'te' ? 'రైతు సేవలో విశేష నమ్మకం' : 'Agricultural Inputs & Farmer Trust'}
              </p>
              <div className="hero-seal-year-wrap">
                <span className="hero-seal-year">
                  {language === 'te' ? 'స్థాపన 1995 • ఆళ్లగడ్డ' : 'ESTD. 1995 • ALLAGADDA'}
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
          padding: 5rem 0 5.5rem 0;
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
          background: 
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 60%),
            linear-gradient(
              135deg,
              rgba(7, 37, 35, 0.95) 0%,
              rgba(10, 46, 44, 0.90) 55%,
              rgba(14, 61, 59, 0.85) 100%
            );
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1.35fr 0.65fr;
            gap: 4.5rem;
          }
        }

        .hero-content {
          max-width: 740px;
        }
        @media (min-width: 1280px) {
          .hero-content {
            max-width: 890px;
          }
        }

        /* Top Heritage Ribbon */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(16, 185, 129, 0.16);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #A7F3D0;
          padding: 0.45rem 1.35rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.65rem;
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        .hero-badge-icon {
          color: #34D399;
          flex-shrink: 0;
        }

        /* Business title */
        .hero-business-title {
          margin-bottom: 0.85rem;
        }
        .hero-business-te {
          font-size: 1.65rem;
          font-weight: 800;
          color: #A7F3D0;
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }
        @media (min-width: 768px) {
          .hero-business-te {
            font-size: 2.35rem;
          }
        }
        .hero-business-en {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        @media (min-width: 768px) {
          .hero-business-en {
            font-size: 1.75rem;
          }
        }

        /* Main Headline */
        .hero-headline {
          font-family: var(--font-sans);
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 1.35rem;
          color: #FFFFFF;
          letter-spacing: -0.02em;
        }
        html[lang="te"] .hero-headline {
          font-family: var(--font-te);
          font-weight: 800;
          letter-spacing: 0;
        }
        @media (min-width: 768px) {
          .hero-headline {
            font-size: 3.15rem;
          }
        }

        .hero-subheadline {
          font-size: 1.15rem;
          color: #E2E8F0;
          line-height: 1.75;
          margin-bottom: 2.5rem;
          max-width: 660px;
        }
        @media (min-width: 768px) {
          .hero-subheadline {
            font-size: 1.25rem;
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
          margin-bottom: 3.25rem;
        }
        .hero-btn-primary {
          background: var(--gradient-emerald);
          color: #FFFFFF;
          font-weight: 800;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(16, 185, 129, 0.5);
        }
        .hero-btn-secondary {
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          backdrop-filter: blur(12px);
        }
        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: #FFFFFF;
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        /* Stat Pedestals */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 580px;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
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
          padding: 1.1rem 1.35rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
          transition: transform var(--transition-normal), border-color var(--transition-normal);
        }
        .hero-stat-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-emerald-vivid);
          background: rgba(255, 255, 255, 0.1);
        }
        .stat-number {
          font-family: var(--font-sans);
          font-size: 1.75rem;
          font-weight: 800;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .stat-icon {
          color: var(--color-emerald-vivid);
        }
        .stat-label {
          font-size: 0.88rem;
          color: #CBD5E1;
          margin-top: 0.35rem;
          line-height: 1.45;
          font-weight: 500;
        }

        /* Trust Medallion */
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
          background: rgba(7, 37, 35, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-xl);
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(16, 185, 129, 0.15);
          max-width: 320px;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .hero-seal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 36px rgba(16, 185, 129, 0.25);
          border-color: var(--color-emerald-vivid);
        }
        .hero-seal-picture {
          display: flex;
          justify-content: center;
        }
        .hero-seal-img {
          width: 140px;
          height: 140px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          border: 3px solid var(--color-emerald-vivid);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 0 20px rgba(16, 185, 129, 0.3);
          margin-bottom: 1.35rem;
          background: #FFFFFF;
        }
        .hero-seal-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          width: 100%;
        }
        .hero-seal-title {
          font-family: var(--font-sans);
          font-size: 1.22rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.25;
          margin: 0;
        }
        html[lang="te"] .hero-seal-title {
          font-family: var(--font-te);
          font-weight: 800;
          letter-spacing: 0;
        }
        .hero-seal-sub {
          font-size: 0.86rem;
          font-weight: 500;
          color: #94A3B8;
          margin: 0;
          line-height: 1.4;
        }
        .hero-seal-year-wrap {
          margin-top: 0.85rem;
        }
        .hero-seal-year {
          display: inline-block;
          padding: 0.35rem 1.15rem;
          background: rgba(16, 185, 129, 0.16);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #A7F3D0;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
      `}</style>
    </section>
  );
};
