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
            <ArrowRight size={16} className="cta-btn__arrow" />
          </button>
        </div>
      </div>

      <style>{`
        .brand-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          height: 100%;
          cursor: pointer;
          position: relative;
        }
        .brand-card:hover, .brand-card:focus-visible {
          border-color: var(--color-agricultural-green);
          transform: translateY(-4px);
          box-shadow: 0 14px 28px -6px rgba(20, 83, 45, 0.16), 0 4px 8px -2px rgba(0, 0, 0, 0.06);
          outline: none;
        }

        /* Logo Container - clean white padding, contain object-fit */
        .brand-card__logo-box {
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #FAFDF9 0%, #F1F8EE 100%);
          padding: 1.25rem 1.5rem;
          border-top: 3.5px solid var(--color-golden-yellow);
          border-bottom: 1.5px solid rgba(16, 185, 129, 0.15);
          position: relative;
        }
        .brand-card__logo-img {
          max-width: 100%;
          max-height: 85px;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: transform var(--transition-normal);
        }
        .brand-card:hover .brand-card__logo-img {
          transform: scale(1.06);
        }

        .brand-card__count-pill {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #059669;
          color: #FFFFFF;
          font-size: 0.74rem;
          font-weight: 800;
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid #10B981;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);
        }
        .count-pill-icon {
          color: #D1FAE5;
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
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
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
          font-size: 1.35rem;
          font-weight: 800;
          color: #064E3B;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .brand-card__fullname {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
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
          background: #DCFCE7;
          color: #15803D;
          border: 1px solid #86EFAC;
          font-size: 0.74rem;
          font-weight: 800;
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-full);
          line-height: 1.35;
          max-width: 100%;
        }
        .badge-icon {
          color: #16A34A;
          flex-shrink: 0;
        }

        .brand-card__desc {
          font-size: 0.85rem;
          color: var(--color-charcoal-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        /* Footer CTA Button */
        .brand-card__footer {
          margin-top: auto;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(16, 185, 129, 0.15);
        }
        .brand-card__cta-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 100%);
          color: #065F46;
          font-size: 0.9rem;
          font-weight: 800;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          border: 1.5px solid rgba(16, 185, 129, 0.35);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .brand-card:hover .brand-card__cta-btn,
        .brand-card__cta-btn:hover {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #FFFFFF;
          border-color: #059669;
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35);
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
