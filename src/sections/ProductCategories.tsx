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
          <div className="heritage-divider">
            <span className="heritage-divider__line" />
            <span className="heritage-divider__diamond">◆</span>
            <span className="heritage-divider__line" />
          </div>
          <p className="section-subtitle">
            {t.categoriesSection.subtitle}
          </p>
        </div>

        {/* Categories Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="categories-grid">
          {productCategories.map((cat, index) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              folioIndex={index + 1}
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
          background: 
            radial-gradient(ellipse at 15% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 80%, rgba(5, 27, 18, 0.06) 0%, transparent 60%),
            var(--color-cream-base);
          border-top: 1px solid var(--color-gold-hairline);
          border-bottom: 1px solid var(--color-gold-hairline);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
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
          gap: 0.65rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #785811;
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
          padding: 1rem 1.6rem;
          background: #FFFEFC;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-gold-hairline);
          border-left: 3.5px solid var(--color-gold-metallic);
          box-shadow: 0 4px 16px rgba(5, 27, 18, 0.04);
        }
        .disclaimer-icon {
          color: var(--color-gold-metallic);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
