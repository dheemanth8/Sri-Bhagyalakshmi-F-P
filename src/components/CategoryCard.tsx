import React from 'react';
import type { ProductCategory } from '../data/categories';
import { useLanguage } from '../hooks/useLanguage';
import { Check, ArrowRight, Sprout, ShieldCheck, Bug, Sparkles, Scissors, Layers, Leaf } from 'lucide-react';

interface CategoryCardProps {
  category: ProductCategory;
  onEnquire: (categoryTitle: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ category, onEnquire }) => {
  const { language, t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Leaf': return <Leaf size={20} />;
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
          border: 1.5px solid rgba(16, 185, 129, 0.18);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          height: 100%;
          box-shadow: 0 4px 20px -2px rgba(6, 78, 59, 0.06);
        }
        .category-card:hover {
          border-color: var(--color-golden-yellow);
          transform: translateY(-6px);
          box-shadow: 0 20px 35px -8px rgba(6, 78, 59, 0.18), 0 8px 18px -4px rgba(245, 158, 11, 0.14);
        }

        .category-card__image-box {
          position: relative;
          height: 200px;
          overflow: hidden;
          background-color: #064E3B;
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
          transform: scale(1.08);
        }

        .category-card__badge-pill {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(6, 78, 59, 0.92);
          color: #FDE68A;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(245, 158, 11, 0.55);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        }

        .category-card__body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .category-card__title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #064E3B;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .category-card__desc {
          font-size: 0.92rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .category-card__benefits {
          background: linear-gradient(135deg, #ECFDF5 0%, #FFFBEB 100%);
          border: 1.5px solid rgba(16, 185, 129, 0.22);
          border-radius: var(--radius-md);
          padding: 0.95rem 1.15rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }
        .benefits-label {
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #065F46;
          margin-bottom: 0.5rem;
        }
        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: #1E293B;
          font-weight: 600;
        }
        .benefit-check {
          color: #10B981;
          flex-shrink: 0;
        }

        .category-card__btn {
          width: 100%;
          justify-content: center;
          font-weight: 800;
          font-size: 0.92rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 100%);
          color: #065F46;
          border: 1.5px solid rgba(16, 185, 129, 0.35);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }
        .category-card__btn:hover {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #FFFFFF;
          border-color: #059669;
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35);
          transform: translateY(-2px);
        }
      `}</style>
    </article>
  );
});
