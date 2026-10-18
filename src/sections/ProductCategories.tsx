import React, { useCallback } from 'react';
import { productCategories } from '../data/categories';
import { useLanguage } from '../hooks/useLanguage';
import { CategoryCard } from '../components/CategoryCard';
import { Sprout, AlertCircle } from 'lucide-react';

interface ProductCategoriesProps {
  onSelectCategoryForEnquiry?: (categoryName: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  onSelectCategoryForEnquiry,
}) => {
  const { t } = useLanguage();

  const handleEnquire = useCallback((categoryTitle: string) => {
    if (onSelectCategoryForEnquiry) {
      onSelectCategoryForEnquiry(categoryTitle);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onSelectCategoryForEnquiry]);

  return (
    <section id="categories" className="section-pad categories-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sprout size={16} />
            <span>{t.categoriesSection.badge}</span>
          </div>
          <h2 className="section-title">
            {t.categoriesSection.title}
          </h2>
          <p className="section-subtitle">
            {t.categoriesSection.subtitle}
          </p>
        </div>

        {/* Categories Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="categories-grid">
          {productCategories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Disclaimer about seasonal retail stock */}
        <div className="categories-disclaimer">
          <AlertCircle size={16} className="disclaimer-icon" />
          <span>{t.categoriesSection.disclaimer}</span>
        </div>
      </div>

      <style>{`
        .categories-section {
          background-color: #FFFFFF;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 640px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .categories-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .categories-disclaimer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--color-charcoal-light);
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          padding: 0.75rem 1.25rem;
          background: var(--color-warm-cream);
          border-radius: var(--radius-md);
          border: 1px solid rgba(244, 185, 66, 0.25);
        }
        .disclaimer-icon {
          color: var(--color-golden-yellow-dark);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
