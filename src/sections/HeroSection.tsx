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
      {/* Background with warm Sunlit Farm overlay for text legibility */}
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
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.32) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(234, 88, 12, 0.25) 0%, transparent 50%),
            linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.93) 0%,
              rgba(30, 41, 59, 0.88) 50%,
              rgba(15, 23, 42, 0.94) 100%
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

        /* Top Heritage Ribbon - Cute sunlit pill */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(254, 243, 199, 0.22);
          border: 1.5px solid rgba(245, 158, 11, 0.5);
          color: #FEF3C7;
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
          color: #FBBF24;
          flex-shrink: 0;
        }

        /* Business title */
        .hero-business-title {
          margin-bottom: 0.85rem;
        }
        .hero-business-te {
          font-size: 1.65rem;
          font-weight: 800;
          color: #FDE68A;
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
          color: #F1F5F9;
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
          background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%);
          color: #FFFFFF;
          font-weight: 800;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 24px rgba(234, 88, 12, 0.4);
          transition: transform var(--transition-bouncy), box-shadow var(--transition-normal);
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 32px rgba(234, 88, 12, 0.55);
        }
        .hero-btn-secondary {
          border: 1.5px solid rgba(254, 243, 199, 0.4);
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
          transition: transform var(--transition-bouncy), background-color var(--transition-fast);
        }
        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.24);
          border-color: #FEF3C7;
          color: #FFFFFF;
          transform: translateY(-3px);
        }

        /* Stat Pedestals */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 580px;
          padding-top: 2rem;
          border-top: 1px solid rgba(254, 243, 199, 0.2);
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
          padding: 1.15rem 1.4rem;
          background: rgba(255, 255, 255, 0.09);
          border: 1.5px solid rgba(245, 158, 11, 0.35);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          transition: transform var(--transition-bouncy), border-color var(--transition-normal);
        }
        .hero-stat-card:hover {
          transform: translateY(-3px);
          border-color: #F59E0B;
          background: rgba(255, 255, 255, 0.15);
        }
        .stat-number {
          font-family: var(--font-sans);
          font-size: 1.75rem;
          font-weight: 800;
          color: #FEF3C7;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .stat-icon {
          color: #FBBF24;
        }
        .stat-label {
          font-size: 0.88rem;
          color: #E2E8F0;
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
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 2px solid rgba(245, 158, 11, 0.45);
          border-radius: 28px;
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 35px rgba(245, 158, 11, 0.2);
          max-width: 320px;
          transition: transform var(--transition-bouncy), box-shadow var(--transition-normal);
        }
        .hero-seal-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 65px rgba(0, 0, 0, 0.5), 0 0 45px rgba(245, 158, 11, 0.35);
          border-color: #F59E0B;
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
          border: 3.5px solid #F59E0B;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 0 25px rgba(245, 158, 11, 0.4);
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
          font-size: 1.25rem;
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
          color: #E2E8F0;
          margin: 0;
          line-height: 1.4;
        }
        .hero-seal-year-wrap {
          margin-top: 0.85rem;
        }
        .hero-seal-year {
          display: inline-block;
          padding: 0.4rem 1.2rem;
          background: rgba(254, 243, 199, 0.18);
          border: 1.5px solid rgba(245, 158, 11, 0.4);
          color: #FEF3C7;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
      `}</style>
    </section>
  );
};
