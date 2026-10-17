import React from 'react';
import { featuredBrands } from '../data/brands';
import { useLanguage } from '../hooks/useLanguage';
import { BrandCard } from '../components/BrandCard';
import { ShieldCheck, Info } from 'lucide-react';

export const BrandSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="brands" className="section-pad brands-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={16} />
            <span>{t.brandsSection.badge}</span>
          </div>
          <h2 className="section-title">
            {t.brandsSection.title}
          </h2>
          <p className="section-subtitle">
            {t.brandsSection.subtitle}
          </p>
        </div>

        {/* Brand Logo Cards Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="brands-grid">
          {featuredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Informative Brand Attribution & Quality Notice */}
        <div className="brands-footer-notice">
          <Info size={18} className="notice-icon" />
          <p className="notice-text">
            {t.brandsSection.note}
          </p>
        </div>
      </div>

      <style>{`
        .brands-section {
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        /* 4 columns on desktop, 3 on tablet, 2 on mobile */
        .brands-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 440px) {
          .brands-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 680px) {
          .brands-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1080px) {
          .brands-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        .brands-footer-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          max-width: 820px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px dashed var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
        }
        .notice-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .notice-text {
          font-size: 0.85rem;
          color: var(--color-charcoal-light);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
