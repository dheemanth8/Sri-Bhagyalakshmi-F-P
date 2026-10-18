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

          {/* Architectural Heritage Stat Pedestals */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-roman">EST. MCMXCV</div>
              <div className="stat-number">{t.hero.experienceYears}</div>
              <div className="stat-label">{t.hero.experienceLabel}</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-roman">VERIFIED AUTHENTIC</div>
              <div className="stat-number">
                <ShieldCheck size={22} className="stat-icon" />
                <span>{t.hero.localCommitment}</span>
              </div>
              <div className="stat-label">{t.hero.localCommitmentLabel}</div>
            </div>
          </div>
        </div>

        {/* Decorative Gilded Archival Medallion */}
        <div className="hero-seal-badge-wrapper">
          <div className="hero-seal-medallion">
            <div className="hero-seal-ring-orbit" />
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
                <div className="hero-seal-flourish">✦ ✦ ✦</div>
                <h3 className={`hero-seal-title ${language === 'te' ? 'telugu-preserve' : ''}`}>
                  {language === 'te' ? 'శ్రీ భాగ్యలక్ష్మి' : 'SRI BHAGYALAKSHMI'}
                </h3>
                <p className="hero-seal-sub">
                  {language === 'te' ? 'రైతు సేవలో విశేష నమ్మకం' : 'Agronomic Excellence & Trust'}
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
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - var(--header-height));
          display: flex;
          align-items: center;
          color: #FAF7F0;
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
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.22) 0%, transparent 55%),
            radial-gradient(circle at 10% 85%, rgba(5, 27, 18, 0.7) 0%, transparent 60%),
            linear-gradient(
              135deg,
              rgba(4, 21, 13, 0.96) 0%,
              rgba(7, 34, 23, 0.92) 50%,
              rgba(10, 46, 32, 0.88) 100%
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
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(14, 61, 43, 0.3) 100%);
          border: 1px solid var(--color-gold-metallic);
          color: #FAF2D6;
          padding: 0.45rem 1.35rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.65rem;
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 16px rgba(212, 175, 55, 0.25);
        }
        .hero-badge-icon {
          color: var(--color-gold-metallic);
          flex-shrink: 0;
        }

        /* Business title */
        .hero-business-title {
          margin-bottom: 0.85rem;
        }
        .hero-business-te {
          font-size: 1.65rem;
          font-weight: 800;
          color: #F8E7BE;
          margin-bottom: 0.25rem;
          line-height: 1.3;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }
        @media (min-width: 768px) {
          .hero-business-te {
            font-size: 2.35rem;
          }
        }
        .hero-business-en {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 800;
          color: #FAF7F0;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        @media (min-width: 768px) {
          .hero-business-en {
            font-size: 1.65rem;
          }
        }

        /* Main Headline with dual-tone editorial gradient */
        .hero-headline {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 1.35rem;
          color: #FFFDF7;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.5);
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
          color: #EADDC9;
          line-height: 1.75;
          margin-bottom: 2.5rem;
          max-width: 660px;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
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
          background: linear-gradient(135deg, #E5C578 0%, #D4AF37 50%, #B38738 100%);
          color: #051B12;
          font-weight: 800;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 6px 25px rgba(212, 175, 55, 0.45);
        }
        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #F3E5AB 0%, #DFBA73 50%, #C59B4E 100%);
          color: #051B12;
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(212, 175, 55, 0.6);
        }
        .hero-btn-secondary {
          border: 1.5px solid var(--color-gold-metallic);
          background: rgba(5, 27, 18, 0.45);
          color: #FAF7F0;
          backdrop-filter: blur(12px);
        }
        .hero-btn-secondary:hover {
          background: var(--color-gold-metallic);
          color: #051B12;
          border-color: var(--color-gold-metallic);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
        }

        /* Architectural Stat Pedestals */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 580px;
          padding-top: 2.25rem;
          border-top: 1px solid var(--color-gold-hairline);
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
          padding: 1rem 1.25rem;
          background: rgba(5, 27, 18, 0.4);
          border: 1px solid var(--color-gold-hairline);
          border-radius: var(--radius-md);
          backdrop-filter: blur(10px);
          transition: transform var(--transition-normal), border-color var(--transition-normal);
        }
        .hero-stat-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-gold-metallic);
        }
        .stat-roman {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--color-gold-amber);
          font-weight: 800;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }
        .stat-number {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          font-weight: 700;
          color: #FAF2D6;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .stat-icon {
          color: var(--color-emerald-vivid);
        }
        .stat-label {
          font-size: 0.84rem;
          color: #D2C8B0;
          margin-top: 0.35rem;
          line-height: 1.45;
          font-weight: 500;
        }

        /* Decorative Gilded Archival Medallion */
        .hero-seal-badge-wrapper {
          display: none;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          .hero-seal-badge-wrapper {
            display: flex;
          }
        }
        .hero-seal-medallion {
          position: relative;
          padding: 1.5rem;
        }
        .hero-seal-ring-orbit {
          position: absolute;
          inset: 0.25rem;
          border-radius: 50%;
          border: 1.5px dashed rgba(212, 175, 55, 0.45);
          pointer-events: none;
          animation: slowOrbit 60s linear infinite;
        }
        .hero-seal-card {
          background: linear-gradient(160deg, rgba(14, 61, 43, 0.75) 0%, rgba(5, 27, 18, 0.88) 100%);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid var(--color-gold-metallic);
          border-radius: var(--radius-xl);
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.22);
          max-width: 330px;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .hero-seal-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(212, 175, 55, 0.35);
        }
        .hero-seal-picture {
          display: flex;
          justify-content: center;
        }
        .hero-seal-img {
          width: 155px;
          height: 155px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          border: 3px solid var(--color-gold-metallic);
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.5), 0 0 24px rgba(212, 175, 55, 0.4);
          margin-bottom: 1.35rem;
          background: #FAF7F0;
        }
        .hero-seal-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          width: 100%;
        }
        .hero-seal-flourish {
          color: var(--color-gold-metallic);
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          margin-bottom: 0.2rem;
          opacity: 0.85;
        }
        .hero-seal-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFFDF7;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.25;
          margin: 0;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        html[lang="te"] .hero-seal-title {
          font-family: var(--font-te);
          font-weight: 800;
          letter-spacing: 0;
        }
        .hero-seal-sub {
          font-size: 0.85rem;
          font-weight: 500;
          color: #D2C8B0;
          letter-spacing: 0.02em;
          margin: 0;
          line-height: 1.35;
        }
        .hero-seal-year-wrap {
          margin-top: 0.85rem;
        }
        .hero-seal-year {
          display: inline-block;
          padding: 0.32rem 1.05rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(14, 61, 43, 0.4) 100%);
          border: 1px solid var(--color-gold-metallic);
          color: #FAF2D6;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};
