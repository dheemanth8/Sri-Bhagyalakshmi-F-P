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
          background: 
            radial-gradient(circle at 75% 20%, rgba(245, 158, 11, 0.28) 0%, transparent 55%),
            radial-gradient(circle at 15% 85%, rgba(13, 59, 31, 0.55) 0%, transparent 60%),
            linear-gradient(
              135deg,
              rgba(7, 39, 20, 0.95) 0%,
              rgba(13, 59, 31, 0.91) 45%,
              rgba(20, 83, 45, 0.88) 100%
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

        /* Top badge with vibrant golden glow */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(245, 158, 11, 0.22);
          border: 1.5px solid #FBBF24;
          color: #FEF3C7;
          padding: 0.45rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 18px rgba(245, 158, 11, 0.28);
        }
        .hero-badge-icon {
          color: #FBBF24;
        }

        /* Business title */
        .hero-business-title {
          margin-bottom: 1rem;
        }
        .hero-business-te {
          font-size: 1.6rem;
          font-weight: 800;
          color: #FDE68A;
          margin-bottom: 0.25rem;
          line-height: 1.3;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
        }
        @media (min-width: 768px) {
          .hero-business-te {
            font-size: 2.2rem;
          }
        }
        .hero-business-en {
          font-size: 1.15rem;
          font-weight: 700;
          color: #FEF3C7;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
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
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.35);
        }
        @media (min-width: 768px) {
          .hero-headline {
            font-size: 3rem;
          }
        }

        .hero-subheadline {
          font-size: 1.12rem;
          color: #F8FAFC;
          line-height: 1.7;
          margin-bottom: 2.25rem;
          max-width: 650px;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
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
          margin-bottom: 3rem;
        }
        .hero-btn-primary {
          background: var(--gradient-gold-vibrant);
          color: #064E3B;
          font-weight: 800;
          box-shadow: var(--shadow-gold);
        }
        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(245, 158, 11, 0.55);
        }

        /* Stats Grid */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 520px;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.25);
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
          font-size: 1.55rem;
          font-weight: 800;
          color: #FDE68A;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .stat-icon {
          color: #34D399;
        }
        .stat-label {
          font-size: 0.84rem;
          color: #E2E8F0;
          margin-top: 0.25rem;
          line-height: 1.4;
          font-weight: 500;
        }

        /* Decorative Heritage Crest Card with Vibrant Golden Aura */
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
          background: linear-gradient(145deg, rgba(250, 246, 238, 0.22) 0%, rgba(250, 246, 238, 0.08) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 2px solid rgba(245, 158, 11, 0.7);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35), 0 0 35px rgba(245, 158, 11, 0.25);
          max-width: 320px;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .hero-seal-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 45px rgba(245, 158, 11, 0.4);
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
          border: 3.5px solid #F59E0B;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 0 25px rgba(245, 158, 11, 0.45);
          margin-bottom: 1.25rem;
          background: #FAF6EE;
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
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .hero-seal-sub {
          font-size: 0.88rem;
          font-weight: 600;
          color: #FEF3C7;
          letter-spacing: 0.02em;
          margin: 0;
          line-height: 1.3;
        }
        .hero-seal-year-wrap {
          margin-top: 0.65rem;
        }
        .hero-seal-year {
          display: inline-block;
          padding: 0.28rem 0.95rem;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.4) 100%);
          border: 1px solid #FBBF24;
          color: #FEF3C7;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          box-shadow: 0 2px 10px rgba(245, 158, 11, 0.25);
        }
      `}</style>
    </section>
  );
};
