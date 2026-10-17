import React from 'react';
import type { ProductCategory } from '../data/categories';
import { useLanguage } from '../hooks/useLanguage';
import { Check, ArrowRight, Sprout, ShieldCheck, Bug, Sparkles, Scissors, Layers } from 'lucide-react';

interface CategoryCardProps {
  category: ProductCategory;
  onEnquire: (categoryTitle: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onEnquire }) => {
  const { language, t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sprout': return <Sprout size={20} />;
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      case 'Bug': return <Bug size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Scissors': return <Scissors size={20} />;
      default: return <Layers size={20} />;
    }
  };

  return (
    <article className="category-card card-surface" aria-labelledby={`cat-${category.id}`}>
      {/* Visual Image Banner */}
      <div className="category-card__image-box">
        <img
          src={category.image}
          alt={category.title[language]}
          className="category-card__img"
          loading="lazy"
        />
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
          className="btn btn-outline category-card__btn"
          onClick={() => onEnquire(category.title[language])}
        >
          <span>{t.categoriesSection.enquireBtn}</span>
          <ArrowRight size={16} />
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
        }
        .category-card:hover {
          border-color: var(--color-golden-yellow-light);
          transform: translateY(-5px);
          box-shadow: 0 16px 30px -6px rgba(20, 83, 45, 0.12);
        }

        .category-card__image-box {
          position: relative;
          height: 200px;
          overflow: hidden;
          background-color: var(--color-forest-green);
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
          gap: 0.4rem;
          background: rgba(15, 61, 33, 0.88);
          color: #FFFFFF;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(244, 185, 66, 0.4);
        }

        .category-card__body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .category-card__title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-forest-green);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .category-card__desc {
          font-size: 0.9rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .category-card__benefits {
          background-color: var(--color-warm-cream);
          border: 1px solid rgba(244, 185, 66, 0.25);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }
        .benefits-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-forest-green);
          margin-bottom: 0.45rem;
        }
        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.82rem;
          color: var(--color-dark-charcoal);
          font-weight: 500;
        }
        .benefit-check {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
        }

        .category-card__btn {
          width: 100%;
          justify-content: center;
          font-weight: 600;
          font-size: 0.88rem;
          padding: 0.75rem 1rem;
        }
      `}</style>
    </article>
  );
};
