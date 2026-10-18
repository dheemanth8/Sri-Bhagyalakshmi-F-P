import React, { useState, useMemo } from 'react';
import type { Brand } from '../data/brands';
import { featuredBrands } from '../data/brands';
import { PRODUCTS_CATALOGUE } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';
import { BrandCard } from '../components/BrandCard';
import { BrandProductsModal } from '../components/BrandProductsModal';
import { ShieldCheck, Info, Sparkles } from 'lucide-react';
import realMiniPlants from '../assets/images/real-mini-plants-500.webp';

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
      <div
        className="section-plants-backdrop"
        aria-hidden="true"
        style={{ backgroundImage: `url(${realMiniPlants})` }}
      />
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
          <div className="section-accent-bar" />
          <p className="section-subtitle">
            {t.brandsSection.subtitle}
          </p>
        </div>

        {/* Brand Filter Pill (All Brands - Clean Mint & Teal Pill) */}
        <div className="brands-toolbar">
          <div className="brands-filter-pills" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected="true"
              className="filter-pill-btn filter-pill-btn--active"
            >
              <Sparkles size={14} className="filter-pill-sparkle" />
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
          position: relative;
          background-color: #FFFDF9;
          background-image: 
            radial-gradient(circle at 10% 15%, rgba(254, 243, 199, 0.75) 0%, transparent 42%),
            radial-gradient(circle at 90% 85%, rgba(254, 215, 170, 0.55) 0%, transparent 45%),
            radial-gradient(circle at 50% 50%, rgba(255, 251, 235, 0.6) 0%, transparent 60%);
          border-top: 1.5px solid var(--color-border-subtle);
          border-bottom: 1.5px solid var(--color-border-subtle);
          overflow: hidden;
        }

        .brands-section::before {
          content: '';
          position: absolute;
          top: -90px;
          right: -90px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .brands-section::after {
          content: '';
          position: absolute;
          bottom: -70px;
          left: -70px;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Toolbar */
        .brands-toolbar {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2.75rem;
        }

        .brands-filter-pills {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .filter-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 1.85rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 18px rgba(245, 158, 11, 0.32);
          cursor: default;
        }
        .filter-pill-sparkle {
          color: #FEF3C7;
        }

        /* 4 columns on desktop, 3 on tablet, 2 on mobile */
        .brands-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.35rem;
          margin-bottom: 3.25rem;
        }

        @media (min-width: 480px) {
          .brands-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .brands-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.65rem;
          }
        }

        @media (min-width: 1100px) {
          .brands-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.65rem;
          }
        }

        .brands-footer-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          max-width: 880px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-left: 4.5px solid #F59E0B;
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          box-shadow: 0 4px 16px rgba(41, 37, 36, 0.04);
        }
        .notice-icon {
          color: #D97706;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .notice-text {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};
