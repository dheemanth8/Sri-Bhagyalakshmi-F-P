import React, { useState } from 'react';
import type { Brand } from '../data/brands';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle2, AlertCircle, Package, ArrowRight } from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
  productCount: number;
  onViewProducts: (brand: Brand) => void;
}

export const BrandCard: React.FC<BrandCardProps> = React.memo(({ brand, productCount, onViewProducts }) => {
  const { language, t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    onViewProducts(brand);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onViewProducts(brand);
    }
  };

  return (
    <article
      className="brand-card card-surface"
      aria-labelledby={`brand-name-${brand.id}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {/* Visual Logo Container with Preserved Proportions */}
      <div className="brand-card__logo-box">
        {!imageError ? (
          <img
            src={brand.logo}
            alt={brand.altText}
            className="brand-card__logo-img"
            loading="lazy"
            decoding="async"
            width={200}
            height={85}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="brand-card__fallback" role="alert">
            <AlertCircle size={28} className="fallback-icon" />
            <span className="fallback-text">Official Logo Loading...</span>
          </div>
        )}

        {/* Product count pill on top corner */}
        {productCount > 0 && (
          <span className="brand-card__count-pill" title={`${productCount} products in store`}>
            <Package size={12} className="count-pill-icon" />
            <span>{productCount}</span>
          </span>
        )}
      </div>

      {/* Brand Content */}
      <div className="brand-card__content">
        <div className="brand-card__header">
          <div className="brand-card__title-row">
            <h3 id={`brand-name-${brand.id}`} className="brand-card__title">
              {brand.name}
            </h3>
            {brand.fullName[language] !== brand.name && (
              <span className="brand-card__fullname">
                {brand.fullName[language]}
              </span>
            )}
          </div>

          <div className="brand-card__badge-wrap">
            <span className="brand-card__badge">
              <CheckCircle2 size={13} className="badge-icon" />
              <span>{brand.category[language]}</span>
            </span>
          </div>
        </div>

        <p className="brand-card__desc">
          {brand.description[language]}
        </p>

        {/* Action Button: View Products */}
        <div className="brand-card__footer">
          <button
            type="button"
            className="brand-card__cta-btn"
            onClick={(e) => {
              e.stopPropagation();
              onViewProducts(brand);
            }}
            aria-label={`${t.brandsSection.viewProducts} - ${brand.name}`}
          >
            <span className="cta-btn__text">
              {productCount > 0
                ? `${t.brandsSection.viewProducts} (${productCount})`
                : t.brandsSection.viewProducts}
            </span>
            <ArrowRight size={15} className="cta-btn__arrow" />
          </button>
        </div>
      </div>

      <style>{`
        .brand-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          height: 100%;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 16px rgba(10, 46, 44, 0.04);
        }
        .brand-card:hover, .brand-card:focus-visible {
          border-color: var(--color-emerald-vivid);
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(10, 46, 44, 0.12), 0 0 0 1px var(--color-emerald-vivid);
          outline: none;
        }

        /* Logo Pedestal */
        .brand-card__logo-box {
          height: 135px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          padding: 1.35rem 1.6rem;
          border-bottom: 1px solid var(--color-border-subtle);
          position: relative;
        }
        .brand-card__logo-img {
          max-width: 100%;
          max-height: 80px;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: transform var(--transition-normal);
        }
        .brand-card:hover .brand-card__logo-img {
          transform: scale(1.05);
        }

        .brand-card__count-pill {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--color-primary-deep);
          color: #A7F3D0;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .count-pill-icon {
          color: #34D399;
        }

        .brand-card__fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #DC2626;
        }
        .fallback-text {
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Content Area */
        .brand-card__content {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background: #FFFFFF;
        }
        .brand-card__header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
          margin-bottom: 0.75rem;
        }
        .brand-card__title-row {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          width: 100%;
        }
        .brand-card__title {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-primary-deep);
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        html[lang="te"] .brand-card__title {
          font-family: var(--font-te);
          font-weight: 800;
          letter-spacing: 0;
        }
        .brand-card__fullname {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-charcoal-light);
          line-height: 1.3;
        }
        .brand-card__badge-wrap {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
        .brand-card__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--color-mint-light);
          color: var(--color-emerald-deep);
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .badge-icon {
          color: var(--color-emerald-vivid);
          flex-shrink: 0;
        }

        .brand-card__desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
          margin-bottom: 1.35rem;
          flex-grow: 1;
        }

        /* Footer CTA Button */
        .brand-card__footer {
          margin-top: auto;
          padding-top: 0.95rem;
          border-top: 1px solid var(--color-border-subtle);
        }
        .brand-card__cta-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--color-primary-deep);
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.25);
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 2px 8px rgba(10, 46, 44, 0.15);
        }
        .brand-card:hover .brand-card__cta-btn,
        .brand-card__cta-btn:hover {
          background: var(--gradient-emerald);
          color: #FFFFFF;
          border-color: var(--color-emerald-vivid);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
          transform: translateY(-1px);
        }
        .cta-btn__arrow {
          transition: transform var(--transition-fast);
        }
        .brand-card:hover .cta-btn__arrow,
        .brand-card__cta-btn:hover .cta-btn__arrow {
          transform: translateX(4px);
        }
      `}</style>
    </article>
  );
});
