import React, { useState, useMemo } from 'react';
import type { Product, ProductVariant } from '../data/products';
import {
  PRODUCTS_CATALOGUE,
  ALL_SPREADSHEET_ITEMS,
  ALL_COMPANIES,
  CATEGORY_DEFINITIONS,
  COMPANY_LOGOS,
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { useLanguage } from '../hooks/useLanguage';
import {
  Package,
  Search,
  X,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Layers,
  ChevronDown,
  ShieldCheck,
  Building2,
  Send,
} from 'lucide-react';

interface ProductsSectionProps {
  onSelectProductForEnquiry?: (productName: string) => void;
}

const ITEMS_PER_PAGE = 18;

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProductForEnquiry,
}) => {
  const { language } = useLanguage();

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [verificationFilter, setVerificationFilter] = useState<'all' | 'verified' | 'pending'>('all');
  const [viewMode, setViewMode] = useState<'grouped' | 'rows'>('grouped');

  // Pagination
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  // Modal State
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [activeModalVariant, setActiveModalVariant] = useState<ProductVariant | undefined>(undefined);

  // Calculate dynamic counts for companies
  const companyCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS_CATALOGUE.length };
    PRODUCTS_CATALOGUE.forEach((p) => {
      counts[p.company.id] = (counts[p.company.id] || 0) + 1;
    });
    return counts;
  }, []);

  // Calculate dynamic counts for categories
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS_CATALOGUE.length };
    PRODUCTS_CATALOGUE.forEach((p) => {
      counts[p.subCategory] = (counts[p.subCategory] || 0) + 1;
      if (p.mainCategory === 'fertilizers') {
        counts['fertilizer'] = (counts['fertilizer'] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return PRODUCTS_CATALOGUE.filter((p) => {
      // 1. Company filter
      if (selectedCompanyId !== 'all' && p.company.id !== selectedCompanyId) {
        return false;
      }

      // 2. Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'fertilizer') {
          if (p.mainCategory !== 'fertilizers' && p.subCategory !== 'fertilizer') {
            return false;
          }
        } else if (p.subCategory !== selectedCategory) {
          return false;
        }
      }

      // 3. Verification filter
      if (verificationFilter === 'verified' && !p.isTechnicalSpecVerified) {
        return false;
      }
      if (verificationFilter === 'pending' && p.isTechnicalSpecVerified) {
        return false;
      }

      // 4. Search query
      if (query) {
        const matchName = p.name.toLowerCase().includes(query);
        const matchCompany = p.company.name.toLowerCase().includes(query) || p.company.fullName.toLowerCase().includes(query);
        const matchActive = (p.activeIngredient || '').toLowerCase().includes(query);
        const matchTech = (p.technicalName || '').toLowerCase().includes(query);
        const matchPacks = p.packSizes.some((pack) => pack.toLowerCase().includes(query));
        const matchRawType = (p.rawProductType || '').toLowerCase().includes(query);

        if (!matchName && !matchCompany && !matchActive && !matchTech && !matchPacks && !matchRawType) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCompanyId, selectedCategory, verificationFilter]);

  // Filter raw spreadsheet rows when in 'rows' mode
  const filteredSpreadsheetRows = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return ALL_SPREADSHEET_ITEMS.filter((item) => {
      if (selectedCompanyId !== 'all' && item.company.id !== selectedCompanyId) {
        return false;
      }
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'fertilizer') {
          if (item.mainCategory !== 'fertilizers' && item.subCategory !== 'fertilizer') return false;
        } else if (item.subCategory !== selectedCategory) {
          return false;
        }
      }
      if (verificationFilter === 'verified' && !item.isTechnicalSpecVerified) return false;
      if (verificationFilter === 'pending' && item.isTechnicalSpecVerified) return false;

      if (query) {
        const matchRaw = item.rawName.toLowerCase().includes(query);
        const matchDisplay = item.displayName.toLowerCase().includes(query);
        const matchCompany = item.company.name.toLowerCase().includes(query);
        const matchActive = (item.activeIngredient || '').toLowerCase().includes(query);
        const matchTech = (item.technicalName || '').toLowerCase().includes(query);
        const matchPack = item.packSize.toLowerCase().includes(query);
        const matchRow = String(item.spreadsheetRow).includes(query);

        if (!matchRaw && !matchDisplay && !matchCompany && !matchActive && !matchTech && !matchPack && !matchRow) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCompanyId, selectedCategory, verificationFilter]);

  // Reset all filters
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCompanyId !== 'all' ||
    selectedCategory !== 'all' ||
    verificationFilter !== 'all';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCompanyId('all');
    setSelectedCategory('all');
    setVerificationFilter('all');
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleOpenDetails = (product: Product, variant?: ProductVariant) => {
    setActiveModalProduct(product);
    setActiveModalVariant(variant);
  };

  const handleCloseModal = () => {
    setActiveModalProduct(null);
    setActiveModalVariant(undefined);
  };

  const handleEnquireFromCatalogue = (prodName: string) => {
    if (onSelectProductForEnquiry) {
      onSelectProductForEnquiry(prodName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentListLength = viewMode === 'grouped' ? filteredProducts.length : filteredSpreadsheetRows.length;
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const visibleRows = filteredSpreadsheetRows.slice(0, visibleCount);

  return (
    <section id="products" className="section-pad products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Package size={16} />
            <span>{language === 'te' ? 'ఉత్పత్తుల కేటలాగ్' : 'Product Catalogue'}</span>
          </div>
          <h2 className="section-title">
            {language === 'te' ? 'మా సమగ్ర వ్యవసాయ ఉత్పత్తులు' : 'Complete Agricultural Product Catalogue'}
          </h2>
          <p className="section-subtitle">
            {language === 'te'
              ? '27 ప్రముఖ కంపెనీల నుండి 285 అసలైన ఎరువులు, పురుగుమందులు మరియు పంట రక్షణ ఉత్పత్తుల సమగ్ర జాబితా.'
              : 'Browse genuine fertilizers, insecticides, fungicides, herbicides and crop protection products from 27 certified agricultural manufacturers.'}
          </p>
        </div>

        {/* 1. Brand / Company Quick Filter Bar */}
        <div className="brand-selector-wrapper">
          <div className="brand-selector-header">
            <span className="brand-selector-title">
              <Building2 size={15} />
              <span>{language === 'te' ? 'కంపెనీల వారీగా ఫిల్టర్ చేయండి' : 'Filter by Certified Company'}</span>
            </span>
            <span className="brand-count-info">
              {ALL_COMPANIES.length} {language === 'te' ? 'కంపెనీలు' : 'Companies'}
            </span>
          </div>

          <div className="brand-selector-scroll">
            <button
              type="button"
              className={`brand-chip ${selectedCompanyId === 'all' ? 'brand-chip--active' : ''}`}
              onClick={() => { setSelectedCompanyId('all'); setVisibleCount(ITEMS_PER_PAGE); }}
            >
              <span className="brand-chip-name">{language === 'te' ? 'అన్ని కంపెనీలు' : 'All Companies'}</span>
              <span className="brand-chip-badge">{companyCounts.all || PRODUCTS_CATALOGUE.length}</span>
            </button>

            {ALL_COMPANIES.map((comp) => {
              const logo = COMPANY_LOGOS[comp.logoKey];
              const count = companyCounts[comp.id] || 0;
              return (
                <button
                  key={comp.id}
                  type="button"
                  className={`brand-chip ${selectedCompanyId === comp.id ? 'brand-chip--active' : ''}`}
                  onClick={() => { setSelectedCompanyId(comp.id); setVisibleCount(ITEMS_PER_PAGE); }}
                  title={`${comp.fullName} (${count} products)`}
                >
                  {logo && (
                    <img src={logo} alt="" className="brand-chip-logo" loading="lazy" />
                  )}
                  <span className="brand-chip-name">{comp.name}</span>
                  <span className="brand-chip-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Combined Filter & Search Bar */}
        <div className="catalogue-controls-card">
          <div className="controls-primary-row">
            {/* Search Input */}
            <div className="search-input-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={
                  language === 'te'
                    ? 'ఉత్పత్తి పేరు, టెక్నికల్ ఫార్ములా, కంపెనీ ద్వారా వెతకండి...'
                    : 'Search product name, active ingredient, technical formula, or company...'
                }
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Verification Status Filter */}
            <div className="verification-filter-group">
              <button
                type="button"
                className={`filter-btn ${verificationFilter === 'all' ? 'filter-btn--active' : ''}`}
                onClick={() => { setVerificationFilter('all'); setVisibleCount(ITEMS_PER_PAGE); }}
              >
                {language === 'te' ? 'అన్నీ' : 'All Specs'}
              </button>
              <button
                type="button"
                className={`filter-btn ${verificationFilter === 'verified' ? 'filter-btn--active' : ''}`}
                onClick={() => { setVerificationFilter('verified'); setVisibleCount(ITEMS_PER_PAGE); }}
                title="Products with verified active ingredient and technical formula"
              >
                <CheckCircle2 size={13} />
                <span>{language === 'te' ? 'ధృవీకరించబడినవి' : 'Verified'}</span>
              </button>
              <button
                type="button"
                className={`filter-btn ${verificationFilter === 'pending' ? 'filter-btn--active' : ''}`}
                onClick={() => { setVerificationFilter('pending'); setVisibleCount(ITEMS_PER_PAGE); }}
                title="Products with technical specifications awaiting official packaging verification"
              >
                <AlertCircle size={13} />
                <span>{language === 'te' ? 'పరిశీలనలో' : 'In Review'}</span>
              </button>
            </div>

            {/* View Mode Toggle: Grouped Products vs All 285 Rows */}
            <div className="view-mode-group">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'grouped' ? 'view-toggle-btn--active' : ''}`}
                onClick={() => { setViewMode('grouped'); setVisibleCount(ITEMS_PER_PAGE); }}
                title="Group pack size variants under each product"
              >
                <Layers size={14} />
                <span>{language === 'te' ? 'ఉత్పత్తులు (180)' : 'Products (180)'}</span>
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'rows' ? 'view-toggle-btn--active' : ''}`}
                onClick={() => { setViewMode('rows'); setVisibleCount(ITEMS_PER_PAGE); }}
                title="View all 285 individual spreadsheet rows"
              >
                <Package size={14} />
                <span>{language === 'te' ? 'అన్ని 285 వరుసలు' : 'All 285 Rows'}</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="category-pills-bar">
            {CATEGORY_DEFINITIONS.map((cat) => {
              const count = categoryCounts[cat.countKey] || 0;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill ${isActive ? 'category-pill--active' : ''}`}
                  onClick={() => { setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
                >
                  <span>{language === 'te' ? cat.nameTe : cat.name}</span>
                  {cat.id !== 'all' && <span className="cat-pill-count">{count}</span>}
                </button>
              );
            })}
          </div>

          {/* Active Filters Summary & Reset */}
          <div className="controls-summary-row">
            <div className="results-counter">
              <span>{language === 'te' ? 'చూపిస్తున్నవి:' : 'Showing'}</span>
              <strong>{Math.min(visibleCount, currentListLength)}</strong>
              <span>{language === 'te' ? 'మొత్తం' : 'of'}</span>
              <strong>{currentListLength}</strong>
              <span>{viewMode === 'grouped' ? (language === 'te' ? 'ఉత్పత్తులు' : 'products') : (language === 'te' ? 'వస్తువులు' : 'items')}</span>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                className="reset-filters-btn"
                onClick={handleResetFilters}
              >
                <RotateCcw size={13} />
                <span>{language === 'te' ? 'ఫిల్టర్లు క్లియర్ చేయండి' : 'Clear All Filters'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 3. Products Grid / List Display */}
        {currentListLength === 0 ? (
          <div className="catalogue-empty-state">
            <Package size={48} className="empty-state-icon" />
            <h3 className="empty-state-title">
              {language === 'te' ? 'ఉత్పత్తులు ఏవీ కనుగొనబడలేదు' : 'No Products Match Your Criteria'}
            </h3>
            <p className="empty-state-desc">
              {language === 'te'
                ? 'మీరు ఎంచుకున్న ఫిల్టర్లు లేదా వెతుకులాట పదాలకు సరిపోయే ఉత్పత్తులు లేవు. ఫిల్టర్లను రీసెట్ చేసి మళ్లీ ప్రయత్నించండి.'
                : 'Try adjusting your search terms, changing the category, or clearing active brand filters.'}
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm empty-state-btn"
              onClick={handleResetFilters}
            >
              <RotateCcw size={14} />
              <span>{language === 'te' ? 'అన్ని ఉత్పత్తులను చూపించండి' : 'Reset All Filters'}</span>
            </button>
          </div>
        ) : viewMode === 'grouped' ? (
          /* Grouped Product Cards Grid */
          <div className="products-grid">
            {visibleProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewDetails={handleOpenDetails}
                onEnquire={handleEnquireFromCatalogue}
              />
            ))}
          </div>
        ) : (
          /* All 285 Spreadsheet Rows Table/Card View */
          <div className="spreadsheet-items-grid">
            {visibleRows.map((item) => {
              const compLogo = COMPANY_LOGOS[item.company.logoKey];
              return (
                <div key={item.spreadsheetRow} className="spreadsheet-item-card">
                  <div className="item-row-badge">Row #{item.spreadsheetRow}</div>
                  <div className="item-company-row">
                    {compLogo ? (
                      <img src={compLogo} alt="" className="item-comp-logo" />
                    ) : (
                      <span className="item-comp-name">{item.company.name}</span>
                    )}
                    <span className={`category-tag category-tag--${item.mainCategory}`}>
                      {item.mainCategory}
                    </span>
                  </div>

                  <h4 className="item-raw-name">{item.rawName}</h4>

                  <div className="item-meta-grid">
                    <div className="item-meta-col">
                      <span className="item-meta-lbl">Pack Size:</span>
                      <span className="item-meta-val item-pack-badge">{item.packSize}</span>
                    </div>
                    {item.rawProductType && (
                      <div className="item-meta-col">
                        <span className="item-meta-lbl">Type:</span>
                        <span className="item-meta-val">{item.rawProductType}</span>
                      </div>
                    )}
                  </div>

                  {item.technicalName ? (
                    <div className="item-tech-box">
                      <span className="item-tech-lbl">Formula:</span>
                      <span className="item-tech-val">{item.technicalName}</span>
                    </div>
                  ) : (
                    <div className="item-tech-box item-tech-box--pending">
                      <AlertCircle size={12} />
                      <span>Specifications pending review</span>
                    </div>
                  )}

                  <div className="item-card-actions">
                    <button
                      type="button"
                      className="btn-item-enquire"
                      onClick={() => handleEnquireFromCatalogue(`${item.company.name} ${item.rawName}`)}
                    >
                      <Send size={13} />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < currentListLength && (
          <div className="catalogue-load-more">
            <button
              type="button"
              className="btn btn-outline btn-lg load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            >
              <span>
                {language === 'te'
                  ? `మరిన్ని ఉత్పత్తులు చూడండి (మిగిలినవి ${currentListLength - visibleCount})`
                  : `Load More Products (${currentListLength - visibleCount} remaining)`}
              </span>
              <ChevronDown size={18} />
            </button>
          </div>
        )}

        {/* Catalogue Trust & Information Notice */}
        <div className="catalogue-notice-banner">
          <ShieldCheck size={22} className="catalogue-notice-icon" />
          <div className="catalogue-notice-content">
            <h4 className="catalogue-notice-title">
              {language === 'te' ? 'అధికారిక ఇన్వెంటరీ హామీ & నాణ్యత' : 'Authentic Certified Agricultural Inventory'}
            </h4>
            <p className="catalogue-notice-text">
              {language === 'te'
                ? 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్ వద్ద లభించే అన్ని ఉత్పత్తులు కంపెనీ డీలర్‌షిప్ ద్వారా నేరుగా సరఫరా చేయబడిన అసలైన స్టాక్. స్ప్రెడ్‌షీట్ నుండి పొందుపరచబడిన ప్రతి ఉత్పత్తి అధికారిక సిఫార్సుల ప్రకారం రైతులకు అందించబడుతుంది.'
                : 'All products are procured directly from certified manufacturer channels. Specifications reflect verified store inventory. Packaging photos are strictly authentic manufacturer assets without simulated imagery.'}
            </p>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        initialVariant={activeModalVariant}
        onClose={handleCloseModal}
        onEnquire={handleEnquireFromCatalogue}
      />

      <style>{`
        .products-section {
          background-color: #F8FAF7;
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        /* Brand Selector Bar */
        .brand-selector-wrapper {
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-xl);
          padding: 1.15rem 1.25rem;
          margin-bottom: 1.75rem;
          box-shadow: 0 4px 16px rgba(20, 83, 45, 0.04);
        }

        .brand-selector-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .brand-selector-title {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--color-forest-green);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .brand-count-info {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-charcoal-light);
        }

        .brand-selector-scroll {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          overflow-x: auto;
          padding-bottom: 0.4rem;
          scrollbar-width: thin;
        }

        .brand-selector-scroll::-webkit-scrollbar {
          height: 5px;
        }
        .brand-selector-scroll::-webkit-scrollbar-thumb {
          background: rgba(20, 83, 45, 0.15);
          border-radius: 4px;
        }

        .brand-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.75rem;
          background: #FAFBF9;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-dark-charcoal);
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .brand-chip:hover {
          background: var(--color-warm-cream);
          border-color: var(--color-golden-yellow);
          color: var(--color-forest-green-dark);
        }

        .brand-chip--active {
          background: var(--color-forest-green);
          border-color: var(--color-forest-green);
          color: #FFFFFF !important;
        }

        .brand-chip-logo {
          height: 16px;
          max-width: 45px;
          object-fit: contain;
        }

        .brand-chip-badge {
          background: rgba(0, 0, 0, 0.06);
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 800;
        }

        .brand-chip--active .brand-chip-badge {
          background: rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
        }

        /* Controls Card */
        .catalogue-controls-card {
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          box-shadow: 0 6px 20px rgba(20, 83, 45, 0.04);
        }

        .controls-primary-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .controls-primary-row {
            flex-direction: row;
            align-items: center;
          }
        }

        .search-input-box {
          position: relative;
          display: flex;
          align-items: center;
          flex-grow: 1;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--color-agricultural-green);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 2.6rem;
          font-size: 0.92rem;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          background: #FAFBF9;
          color: var(--color-dark-charcoal);
          transition: border-color var(--transition-fast), background var(--transition-fast);
        }

        .search-input:focus {
          outline: none;
          background: #FFFFFF;
          border-color: var(--color-forest-green);
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.12);
        }

        .search-clear-btn {
          position: absolute;
          right: 0.75rem;
          background: none;
          border: none;
          color: var(--color-charcoal-light);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
          border-radius: 50%;
        }

        .search-clear-btn:hover {
          color: #DC2626;
          background: #FEE2E2;
        }

        .verification-filter-group {
          display: inline-flex;
          background: #F1F5F9;
          padding: 0.25rem;
          border-radius: var(--radius-md);
          gap: 0.2rem;
          flex-shrink: 0;
        }

        .filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.75rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-charcoal-muted);
          border: none;
          background: transparent;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--color-forest-green);
        }

        .filter-btn--active {
          background: #FFFFFF;
          color: var(--color-forest-green);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
        }

        .view-mode-group {
          display: inline-flex;
          background: #F1F5F9;
          padding: 0.25rem;
          border-radius: var(--radius-md);
          gap: 0.2rem;
          flex-shrink: 0;
        }

        .view-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.75rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-charcoal-muted);
          border: none;
          background: transparent;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .view-toggle-btn:hover {
          color: var(--color-forest-green);
        }

        .view-toggle-btn--active {
          background: var(--color-agricultural-green);
          color: #FFFFFF;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Category Pills Bar */
        .category-pills-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          padding-top: 0.5rem;
          border-top: 1px dashed var(--color-border-subtle);
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-dark-charcoal);
          background: #FAFBF9;
          border: 1px solid var(--color-border-subtle);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .category-pill:hover {
          background: var(--color-warm-cream);
          border-color: var(--color-golden-yellow);
        }

        .category-pill--active {
          background: var(--color-golden-yellow);
          border-color: var(--color-golden-yellow-dark);
          color: #451A03;
        }

        .cat-pill-count {
          background: rgba(0, 0, 0, 0.08);
          font-size: 0.72rem;
          padding: 0.05rem 0.35rem;
          border-radius: var(--radius-full);
        }

        /* Controls Summary */
        .controls-summary-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
          font-size: 0.84rem;
          color: var(--color-charcoal-light);
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .results-counter {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .results-counter strong {
          color: var(--color-forest-green);
        }

        .reset-filters-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.75rem;
          border: 1px solid #CBD5E1;
          border-radius: var(--radius-md);
          background: #F8FAFC;
          color: #475569;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .reset-filters-btn:hover {
          background: #F1F5F9;
          color: #0F172A;
          border-color: #94A3B8;
        }

        /* Products Grid (Grouped) */
        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.75rem;
          }
        }

        /* Spreadsheet Rows Grid */
        .spreadsheet-items-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.15rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 640px) {
          .spreadsheet-items-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .spreadsheet-items-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .spreadsheet-item-card {
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: relative;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .spreadsheet-item-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-golden-yellow);
          box-shadow: 0 6px 18px rgba(20, 83, 45, 0.08);
        }

        .item-row-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: #F1F5F9;
          color: #475569;
          font-family: monospace;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
        }

        .item-company-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .item-comp-logo {
          height: 18px;
          max-width: 60px;
          object-fit: contain;
        }

        .item-comp-name {
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--color-forest-green);
        }

        .item-raw-name {
          font-size: 1.02rem;
          font-weight: 800;
          color: var(--color-dark-charcoal);
          margin: 0;
          padding-right: 3.5rem;
        }

        .item-meta-grid {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
        }

        .item-meta-col {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .item-meta-lbl {
          font-weight: 700;
          color: var(--color-charcoal-light);
        }

        .item-pack-badge {
          background: #EFF6FF;
          color: #1E40AF;
          font-weight: 700;
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-sm);
        }

        .item-tech-box {
          font-size: 0.78rem;
          background: #FAFBF9;
          border: 1px solid var(--color-border-subtle);
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .item-tech-box--pending {
          background: #FEF3C7;
          border-color: #FDE68A;
          color: #92400E;
        }

        .item-card-actions {
          margin-top: auto;
          padding-top: 0.5rem;
          border-top: 1px solid #F1F5F9;
        }

        .btn-item-enquire {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-forest-green);
          background: var(--color-agricultural-green-subtle);
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background-color var(--transition-fast);
        }

        .btn-item-enquire:hover {
          background: var(--color-golden-yellow);
          color: #451A03;
        }

        /* Empty State */
        .catalogue-empty-state {
          background: #FFFFFF;
          border: 1.5px dashed var(--color-border-subtle);
          border-radius: var(--radius-xl);
          padding: 3.5rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        .empty-state-icon {
          color: var(--color-agricultural-green);
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .empty-state-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-forest-green-dark);
          margin-bottom: 0.5rem;
        }

        .empty-state-desc {
          font-size: 0.9rem;
          color: var(--color-charcoal-muted);
          max-width: 460px;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .empty-state-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Load More */
        .catalogue-load-more {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          font-size: 0.95rem;
          font-weight: 700;
        }

        /* Quality Banner */
        .catalogue-notice-banner {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: #FFFFFF;
          border: 1.5px solid rgba(244, 185, 66, 0.4);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          box-shadow: 0 4px 14px rgba(20, 83, 45, 0.04);
        }

        .catalogue-notice-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .catalogue-notice-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .catalogue-notice-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-forest-green-dark);
          margin: 0;
        }

        .catalogue-notice-text {
          font-size: 0.84rem;
          color: var(--color-charcoal-muted);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </section>
  );
};
