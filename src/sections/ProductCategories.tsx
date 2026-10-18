import React, { useCallback } from 'react';
import { productCategories } from '../data/categories';
import { useLanguage } from '../hooks/useLanguage';
import { CategoryCard } from '../components/CategoryCard';
import { Sprout, AlertCircle } from 'lucide-react';
import realMiniPlants from '../assets/images/real-mini-plants-500.webp';

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
      <div
        className="section-plants-backdrop"
        aria-hidden="true"
        style={{ backgroundImage: `url(${realMiniPlants})` }}
      />
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
          <div className="section-accent-bar" />
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
          position: relative;
          background-color: #FFFDF9;
          background-image: 
            radial-gradient(ellipse at 50% 100%, rgba(254, 243, 199, 0.75) 0%, transparent 55%),
            radial-gradient(circle at 8% 85%, rgba(254, 215, 170, 0.5) 0%, transparent 40%),
            radial-gradient(circle at 92% 25%, rgba(253, 230, 138, 0.45) 0%, transparent 45%);
          border-top: none;
          border-bottom: 1.5px solid var(--color-border-subtle);
          padding-top: 2rem;
          overflow: hidden;
        }

        .categories-section::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -80px;
          width: 340px;
          height: 340px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .categories-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
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
          color: var(--color-charcoal-muted);
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
          padding: 1.1rem 1.6rem;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--color-border-subtle);
          border-left: 4.5px solid #F59E0B;
          box-shadow: 0 4px 16px rgba(41, 37, 36, 0.04);
        }
        .disclaimer-icon {
          color: #D97706;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
