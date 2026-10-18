import React, { useState, useMemo } from 'react';
import type { Brand } from '../data/brands';
import { featuredBrands } from '../data/brands';
import { PRODUCTS_CATALOGUE } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';
import { BrandCard } from '../components/BrandCard';
import { BrandProductsModal } from '../components/BrandProductsModal';
import { ShieldCheck, Info, Search, X, Sparkles } from 'lucide-react';

interface BrandSectionProps {
  onSelectProductForEnquiry?: (productName: string) => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({
  onSelectProductForEnquiry,
}) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'pesticides' | 'fertilizers'>('all');
  const [selectedBrandForModal, setSelectedBrandForModal] = useState<Brand | null>(null);

  // Compute product counts per brand
  const brandProductCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    PRODUCTS_CATALOGUE.forEach((p) => {
      const cId = p.company.id.toLowerCase();
      counts[cId] = (counts[cId] || 0) + 1;
      // Handle aliases
      if (cId === 'coramandal' || cId === 'coromandel') {
        counts['coromandel'] = (counts['coromandel'] || 0) + 1;
        counts['coramandal'] = (counts['coramandal'] || 0) + 1;
      }
      if (cId === 'garudha' || cId === 'gharda') {
        counts['gharda'] = (counts['gharda'] || 0) + 1;
        counts['garudha'] = (counts['garudha'] || 0) + 1;
      }
      if (cId === 'indofil' || cId === 'indofill') {
        counts['indofil'] = (counts['indofil'] || 0) + 1;
      }
    });

    return counts;
  }, []);

  // Filter brands based on search and type
  const filteredBrands = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return featuredBrands.filter((brand) => {
      // Type filter
      if (filterType !== 'all') {
        if (filterType === 'pesticides' && brand.productType === 'fertilizers') return false;
        if (filterType === 'fertilizers' && brand.productType === 'pesticides') return false;
      }

      // Search query
      if (query) {
        const matchName = brand.name.toLowerCase().includes(query);
        const matchFullEn = brand.fullName.en.toLowerCase().includes(query);
        const matchFullTe = brand.fullName.te.toLowerCase().includes(query);
        const matchCat = brand.category[language].toLowerCase().includes(query);
        if (!matchName && !matchFullEn && !matchFullTe && !matchCat) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, filterType, language]);

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

        {/* Brand Filters & Search Toolbar */}
        <div className="brands-toolbar">
          {/* Brand Category Filter Pills */}
          <div className="brands-filter-pills" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={filterType === 'all'}
              className={`filter-pill-btn ${filterType === 'all' ? 'filter-pill-btn--active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              <Sparkles size={14} />
              <span>{t.brandsSection.allBrands} ({featuredBrands.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={filterType === 'pesticides'}
              className={`filter-pill-btn ${filterType === 'pesticides' ? 'filter-pill-btn--active' : ''}`}
              onClick={() => setFilterType('pesticides')}
            >
              <span>{t.brandsSection.pesticidesFilter}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={filterType === 'fertilizers'}
              className={`filter-pill-btn ${filterType === 'fertilizers' ? 'filter-pill-btn--active' : ''}`}
              onClick={() => setFilterType('fertilizers')}
            >
              <span>{t.brandsSection.fertilizersFilter}</span>
            </button>
          </div>

          {/* Brand Search Bar */}
          <div className="brands-search-wrap">
            <Search size={18} className="brands-search-icon" />
            <input
              type="text"
              className="brands-search-input"
              placeholder={t.brandsSection.searchBrands}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="brands-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear brand search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Brand Logo Cards Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
        {filteredBrands.length > 0 ? (
          <div className="brands-grid">
            {filteredBrands.map((brand) => {
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
        ) : (
          <div className="brands-empty-state">
            <p className="brands-empty-text">{t.brandsSection.noProductsFound}</p>
            <button
              type="button"
              className="brands-empty-reset"
              onClick={() => {
                setSearchQuery('');
                setFilterType('all');
              }}
            >
              {t.brandsSection.resetFilters}
            </button>
          </div>
        )}

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
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        /* Toolbar */
        .brands-toolbar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.25rem;
          max-width: 980px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 768px) {
          .brands-toolbar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .brands-filter-pills {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 700;
          background: #FFFFFF;
          color: var(--color-charcoal-dark);
          border: 1.5px solid var(--color-border-subtle);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-pill-btn:hover {
          border-color: var(--color-agricultural-green);
          background: rgba(20, 83, 45, 0.04);
        }
        .filter-pill-btn--active {
          background: var(--color-forest-green);
          color: #FFFFFF;
          border-color: var(--color-forest-green);
          box-shadow: 0 4px 10px rgba(20, 83, 45, 0.2);
        }

        .brands-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 420px;
        }
        .brands-search-icon {
          position: absolute;
          left: 1rem;
          color: var(--color-charcoal-muted);
          pointer-events: none;
        }
        .brands-search-input {
          width: 100%;
          padding: 0.55rem 2.4rem 0.55rem 2.5rem;
          font-size: 0.88rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-full);
          color: var(--color-charcoal-dark);
          outline: none;
          transition: all var(--transition-fast);
        }
        .brands-search-input:focus {
          border-color: var(--color-agricultural-green);
          box-shadow: 0 0 0 3px rgba(20, 83, 45, 0.1);
        }
        .brands-search-clear {
          position: absolute;
          right: 0.85rem;
          background: none;
          border: none;
          color: var(--color-charcoal-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
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
          background: #FFFFFF;
          border: 1px dashed var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
        }
        .notice-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .notice-text {
          font-size: 0.85rem;
          color: var(--color-charcoal-light);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
