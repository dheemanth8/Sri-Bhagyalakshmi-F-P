import React, { useState } from 'react';
import type { Brand } from '../data/brands';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
}

export const BrandCard: React.FC<BrandCardProps> = React.memo(({ brand }) => {
  const { language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <article className="brand-card card-surface" aria-labelledby={`brand-name-${brand.id}`}>
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
      </div>

      {/* Brand Content */}
      <div className="brand-card__content">
        <div className="brand-card__header">
          <h3 id={`brand-name-${brand.id}`} className="brand-card__title">
            {brand.name}
          </h3>
          <div className="brand-card__badge-wrap">
            <span className="brand-card__badge">
              <CheckCircle2 size={13} className="badge-icon" />
              <span>{brand.category[language]}</span>
            </span>
          </div>
        </div>

        <p className="brand-card__fullname">
          {brand.fullName[language]}
        </p>

        <p className="brand-card__desc">
          {brand.description[language]}
        </p>
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
        }
        .brand-card:hover {
          border-color: var(--color-golden-yellow);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -4px rgba(20, 83, 45, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        /* Logo Container - clean white padding, contain object-fit */
        .brand-card__logo-box {
          height: 125px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(229, 231, 235, 0.8);
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
          transform: scale(1.04);
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
          margin-bottom: 0.6rem;
        }
        .brand-card__title {
          font-size: 1.32rem;
          font-weight: 800;
          color: var(--color-forest-green);
          letter-spacing: 0.02em;
          line-height: 1.2;
          width: 100%;
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
          background: var(--color-agricultural-green-subtle);
          color: var(--color-agricultural-green);
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-full);
          line-height: 1.35;
          max-width: 100%;
        }
        .badge-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
        }

        .brand-card__fullname {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          margin-bottom: 0.65rem;
        }
        .brand-card__desc {
          font-size: 0.84rem;
          color: var(--color-charcoal-light);
          line-height: 1.5;
          margin-top: auto;
        }
      `}</style>
    </article>
  );
});
