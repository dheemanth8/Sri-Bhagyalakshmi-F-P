import React, { useState, useMemo } from 'react';
import type { Brand } from '../data/brands';
import { featuredBrands } from '../data/brands';
import { PRODUCTS_CATALOGUE } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';
import { BrandCard } from '../components/BrandCard';
import { BrandProductsModal } from '../components/BrandProductsModal';
import { ShieldCheck, Info, Sparkles } from 'lucide-react';

interface BrandSectionProps {
  onSelectProductForEnquiry?: (productName: string) => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({
  onSelectProductForEnquiry,
}) => {
  const { t } = useLanguage();
  const [selectedBrandForModal, setSelectedBrandForModal] = useState<Brand | null>(null);

  // Compute product counts per brand
  const brandProductCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    PRODUCTS_CATALOGUE.forEach((p) => {
      let cId = p.company.id.toLowerCase();
      if (cId === 'coramandal') cId = 'coromandel';
      if (cId === 'garudha') cId = 'gharda';
      if (cId === 'indofill') cId = 'indofil';
      counts[cId] = (counts[cId] || 0) + 1;
    });

    return counts;
  }, []);


  const handleOpenBrandProducts = (brand: Brand) => {
    setSelectedBrandForModal(brand);
  };

  const handleCloseModal = () => {
    setSelectedBrandForModal(null);
  };

  return (
    <section id="brands" className="section-pad brands-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={16} />
            <span>{t.brandsSection.badge}</span>
          </div>
          <h2 className="section-title">
            {t.brandsSection.title}
          </h2>
          <p className="section-subtitle">
            {t.brandsSection.subtitle}
          </p>
        </div>

        {/* Brand Filter Pill (Only All Brands, no numbers) */}
        <div className="brands-toolbar">
          <div className="brands-filter-pills" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected="true"
              className="filter-pill-btn filter-pill-btn--active"
            >
              <Sparkles size={14} />
              <span>{t.brandsSection.allBrands}</span>
            </button>
          </div>
        </div>

        {/* Brand Logo Cards Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="brands-grid">
          {featuredBrands.map((brand) => {
            const count = brandProductCounts[brand.id.toLowerCase()] || 0;
            return (
              <BrandCard
                key={brand.id}
                brand={brand}
                productCount={count}
                onViewProducts={handleOpenBrandProducts}
              />
            );
          })}
        </div>

        {/* Informative Brand Attribution & Quality Notice */}
        <div className="brands-footer-notice">
          <Info size={18} className="notice-icon" />
          <p className="notice-text">
            {t.brandsSection.note}
          </p>
        </div>
      </div>

      {/* Brand Products Modal */}
      {selectedBrandForModal && (
        <BrandProductsModal
          brand={selectedBrandForModal}
          isOpen={!!selectedBrandForModal}
          onClose={handleCloseModal}
          onSelectProductForEnquiry={onSelectProductForEnquiry}
        />
      )}

      <style>{`
        .brands-section {
          background: 
            radial-gradient(circle at 50% 0%, rgba(20, 83, 45, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 10% 100%, rgba(245, 158, 11, 0.09) 0%, transparent 50%),
            var(--color-cream-base);
          border-top: 1.5px solid var(--color-border-subtle);
          border-bottom: 1.5px solid var(--color-border-subtle);
        }

        /* Toolbar */
        .brands-toolbar {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2.25rem;
        }

        .brands-filter-pills {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .filter-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.35rem;
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          font-weight: 800;
          background: var(--gradient-forest-vibrant);
          color: #FAF6EE;
          border: 1.5px solid #F59E0B;
          box-shadow: 0 4px 16px rgba(13, 59, 31, 0.3);
          cursor: default;
        }

        /* 4 columns on desktop, 3 on tablet, 2 on mobile */
        .brands-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 480px) {
          .brands-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .brands-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1100px) {
          .brands-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        .brands-empty-state {
          text-align: center;
          padding: 3rem 1rem;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-border-subtle);
          margin-bottom: 2.5rem;
        }
        .brands-empty-text {
          font-size: 1rem;
          color: var(--color-charcoal-light);
          margin-bottom: 1rem;
        }
        .brands-empty-reset {
          background: var(--color-forest-green);
          color: #FFFFFF;
          border: none;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
        }

        .brands-footer-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          max-width: 860px;
          margin: 0 auto;
          background: linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%);
          border: 1.5px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-lg);
          padding: 1.15rem 1.35rem;
          box-shadow: 0 4px 16px rgba(6, 78, 59, 0.04);
        }
        .notice-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .notice-text {
          font-size: 0.86rem;
          color: var(--color-charcoal-muted);
          line-height: 1.55;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};
