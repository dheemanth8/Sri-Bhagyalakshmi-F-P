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
          background: 
            radial-gradient(ellipse at 15% 20%, rgba(245, 158, 11, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 60%),
            linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 50%, #F0FDF4 100%);
          border-top: 1px solid rgba(245, 158, 11, 0.2);
          border-bottom: 1px solid rgba(16, 185, 129, 0.2);
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
          font-size: 0.88rem;
          font-weight: 600;
          color: #92400E;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          padding: 0.85rem 1.35rem;
          background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
          border-radius: var(--radius-md);
          border: 1.5px solid #F59E0B;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.15);
        }
        .disclaimer-icon {
          color: #D97706;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
