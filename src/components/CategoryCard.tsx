import React from 'react';
import type { ProductCategory } from '../data/categories';
import { useLanguage } from '../hooks/useLanguage';
import { Check, ArrowRight, Sprout, ShieldCheck, Bug, Sparkles, Scissors, Layers, Leaf } from 'lucide-react';

interface CategoryCardProps {
  category: ProductCategory;
  folioIndex?: number;
  onEnquire: (categoryTitle: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ category, onEnquire }) => {
  const { language, t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Leaf': return <Leaf size={18} />;
      case 'Sprout': return <Sprout size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      case 'Bug': return <Bug size={18} />;
      case 'Sparkles': return <Sparkles size={18} />;
      case 'Scissors': return <Scissors size={18} />;
      default: return <Layers size={18} />;
    }
  };

  return (
    <article className="category-card card-surface" aria-labelledby={`cat-${category.id}`}>
      {/* Visual Image Banner */}
      <div className="category-card__image-box">
        <picture className="category-card__picture">
          <source type="image/webp" srcSet={category.imageWebp} />
          <img
            src={category.image}
            alt={category.title[language]}
            className="category-card__img"
            loading="lazy"
            decoding="async"
            width={category.width}
            height={category.height}
          />
        </picture>
        <div className="category-card__badge-pill">
          {getIcon(category.iconName)}
          <span>{category.subtitle[language]}</span>
        </div>
      </div>

      {/* Content */}
      <div className="category-card__body">
        <h3 id={`cat-${category.id}`} className="category-card__title">
          {category.title[language]}
        </h3>

        <p className="category-card__desc">
          {category.description[language]}
        </p>

        {/* Key highlights */}
        <div className="category-card__benefits">
          <div className="benefits-label">{t.categoriesSection.keyFeatures}</div>
          <ul className="benefits-list">
            {category.keyBenefits[language].map((benefit, i) => (
              <li key={i} className="benefit-item">
                <Check size={14} className="benefit-check" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Enquire Action -> Scrolls to contact */}
        <button
          type="button"
          className="btn category-card__btn"
          onClick={() => onEnquire(category.title[language])}
        >
          <span>{t.categoriesSection.enquireBtn}</span>
          <ArrowRight size={15} />
        </button>
      </div>

      <style>{`
        .category-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          height: 100%;
          box-shadow: 0 4px 16px rgba(10, 46, 44, 0.04);
        }
        .category-card:hover {
          border-color: var(--color-emerald-vivid);
          transform: translateY(-4px);
          box-shadow: 0 16px 36px -10px rgba(10, 46, 44, 0.12), 0 0 0 1px var(--color-emerald-vivid);
        }

        .category-card__image-box {
          position: relative;
          height: 205px;
          overflow: hidden;
          background-color: var(--color-primary-deep);
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .category-card__picture {
          display: block;
          width: 100%;
          height: 100%;
        }
        .category-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .category-card:hover .category-card__img {
          transform: scale(1.06);
        }

        .category-card__badge-pill {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(7, 37, 35, 0.92);
          color: #FFFFFF;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(16, 185, 129, 0.35);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .category-card__body {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background: #FFFFFF;
        }

        .category-card__title {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-primary-deep);
          margin-bottom: 0.75rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        html[lang="te"] .category-card__title {
          font-family: var(--font-te);
          font-weight: 800;
          letter-spacing: 0;
        }

        .category-card__desc {
          font-size: 0.9rem;
          color: var(--color-charcoal-muted);
          line-height: 1.65;
          margin-bottom: 1.35rem;
        }

        .category-card__benefits {
          background: var(--color-mint-light);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-left: 3px solid var(--color-emerald-vivid);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }
        .benefits-label {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-emerald-deep);
          margin-bottom: 0.6rem;
        }
        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.84rem;
          color: var(--color-dark-charcoal);
          font-weight: 600;
        }
        .benefit-check {
          color: var(--color-emerald-vivid);
          flex-shrink: 0;
        }

        .category-card__btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.72rem 1rem;
          background: var(--color-primary-deep);
          color: #FFFFFF;
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          box-shadow: 0 2px 8px rgba(10, 46, 44, 0.15);
        }
        .category-card__btn:hover {
          background: var(--gradient-emerald);
          color: #FFFFFF;
          border-color: var(--color-emerald-vivid);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
          transform: translateY(-2px);
        }
      `}</style>
    </article>
  );
});
