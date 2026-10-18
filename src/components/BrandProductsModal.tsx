import React, { useState, useMemo, useEffect } from 'react';
import type { Brand } from '../data/brands';
import type { Product, ProductVariant } from '../data/products';
import { PRODUCTS_CATALOGUE } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { useLanguage } from '../hooks/useLanguage';
import {
  X,
  Search,
  Package,
  ShieldCheck,
  RotateCcw,
  Phone,
  MessageCircle,
  Building2,
} from 'lucide-react';
import { businessData } from '../data/business';

interface BrandProductsModalProps {
  brand: Brand | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProductForEnquiry?: (productName: string) => void;
}

export const BrandProductsModal: React.FC<BrandProductsModalProps> = ({
  brand,
  isOpen,
  onClose,
  onSelectProductForEnquiry,
}) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  // Nested Product Detail Modal state
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [detailVariant, setDetailVariant] = useState<ProductVariant | undefined>(undefined);

  // Reset filters when brand changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedSubCategory('all');
      setDetailProduct(null);
    }
  }, [brand, isOpen]);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (detailProduct) {
          setDetailProduct(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, detailProduct]);

  // Find all products for this brand
  const brandProducts = useMemo(() => {
    if (!brand) return [];
    const bId = brand.id.toLowerCase();

    return PRODUCTS_CATALOGUE.filter((p) => {
      const pCompId = p.company.id.toLowerCase();
      if (pCompId === bId) return true;
      if (bId === 'coromandel' && (pCompId === 'coramandal' || pCompId === 'coromandel')) return true;
      if (bId === 'gharda' && (pCompId === 'garudha' || pCompId === 'gharda')) return true;
      if (bId === 'indofil' && (pCompId === 'indofill' || pCompId === 'indofil')) return true;
      return false;
    });
  }, [brand]);

  // Compute available subcategories for this brand
  const subCategoryTabs = useMemo(() => {
    const counts: Record<string, number> = { all: brandProducts.length };

    brandProducts.forEach((p) => {
      const key = p.mainCategory === 'fertilizers' ? 'fertilizer' : p.subCategory;
      counts[key] = (counts[key] || 0) + 1;
    });

    const labels: Record<string, { en: string; te: string }> = {
      all: { en: 'All Products', te: 'అన్ని ఉత్పత్తులు' },
      fertilizer: { en: 'Fertilizers', te: 'ఎరువులు' },
      insecticide: { en: 'Insecticides', te: 'పురుగుమందులు' },
      fungicide: { en: 'Fungicides', te: 'శిలీంద్రనాశకాలు' },
      herbicide: { en: 'Herbicides', te: 'కలుపునాశకాలు' },
      plant_growth_regulator: { en: 'Growth Regulators', te: 'పీజీఆర్' },
      seed_treatment: { en: 'Seed Treatment', te: 'విత్తన శుద్ధి' },
      bio_stimulant: { en: 'Bio-stimulants', te: 'బయో-స్టిమ్యులెంట్లు' },
      crop_protection_nutrition: { en: 'Plant Nutrition', te: 'పంట పోషణ' },
      adjuvant: { en: 'Adjuvants', te: 'అడ్జువెంట్లు' },
      other: { en: 'Specialty', te: 'ఇతర ఉత్పత్తులు' },
    };

    const keys = Object.keys(counts).filter((k) => counts[k] > 0);
    return keys.map((key) => ({
      key,
      count: counts[key],
      label: labels[key]?.[language] || key,
    }));
  }, [brandProducts, language]);

  // Filter products by search and category
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return brandProducts.filter((p) => {
      // Subcategory filter
      if (selectedSubCategory !== 'all') {
        if (selectedSubCategory === 'fertilizer') {
          if (p.mainCategory !== 'fertilizers' && p.subCategory !== 'fertilizer') {
            return false;
          }
        } else if (p.subCategory !== selectedSubCategory) {
          return false;
        }
      }

      // Search query filter
      if (query) {
        const matchName = p.name.toLowerCase().includes(query);
        const matchActive = (p.activeIngredient || '').toLowerCase().includes(query);
        const matchTech = (p.technicalName || '').toLowerCase().includes(query);
        const matchPacks = p.packSizes.some((s) => s.toLowerCase().includes(query));
        if (!matchName && !matchActive && !matchTech && !matchPacks) {
          return false;
        }
      }

      return true;
    });
  }, [brandProducts, selectedSubCategory, searchQuery]);

  if (!isOpen || !brand) return null;

  const handleOpenDetail = (product: Product, variant?: ProductVariant) => {
    setDetailProduct(product);
    setDetailVariant(variant);
  };

  const handleCloseDetail = () => {
    setDetailProduct(null);
    setDetailVariant(undefined);
  };

  const handleEnquireProduct = (productName: string) => {
    onClose();
    if (onSelectProductForEnquiry) {
      onSelectProductForEnquiry(productName);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="brand-modal-overlay"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="brand-modal-title"
      >
        <div className="brand-modal-dialog">
          {/* Header */}
          <div className="brand-modal-header">
            <div className="brand-modal-header__info">
              <div className="brand-modal__logo-box">
                <img
                  src={brand.logo}
                  alt={`${brand.name} official logo`}
                  className="brand-modal__logo-img"
                  width={140}
                  height={60}
                />
              </div>

              <div className="brand-modal__titles">
                <div className="brand-modal__title-row">
                  <h2 id="brand-modal-title" className="brand-modal__title">
                    {brand.name}
                  </h2>
                  <span className="brand-modal__badge">
                    <ShieldCheck size={14} className="badge-shield" />
                    <span>{t.brandsSection.authorizedDealerNotice}</span>
                  </span>
                </div>

                <p className="brand-modal__fullname">
                  {brand.fullName[language]}
                </p>

                <p className="brand-modal__desc">
                  {brand.description[language]}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="brand-modal__close-btn"
              onClick={onClose}
              aria-label="Close brand products modal"
            >
              <X size={22} />
            </button>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="brand-modal-toolbar">
            {/* Search Input */}
            <div className="brand-modal__search-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="brand-modal__search-input"
                placeholder={
                  language === 'te'
                    ? `${brand.name} ఉత్పత్తులలో వెతకండి (ఉదా: మందు పేరు, ప్యాకింగ్)...`
                    : `Search inside ${brand.name} products (e.g. name, formulation)...`
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

            {/* Sub-Category Filter Tabs */}
            {subCategoryTabs.length > 2 && (
              <div className="brand-modal__tabs-wrap" role="tablist">
                {subCategoryTabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={selectedSubCategory === tab.key}
                    className={`brand-modal__tab-btn ${
                      selectedSubCategory === tab.key ? 'brand-modal__tab-btn--active' : ''
                    }`}
                    onClick={() => setSelectedSubCategory(tab.key)}
                  >
                    <span>{tab.label}</span>
                    <span className="tab-count">({tab.count})</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Count & Status Row */}
          <div className="brand-modal-count-row">
            <span className="count-text">
              <strong>{filteredProducts.length}</strong>{' '}
              {language === 'te'
                ? `ఉత్పత్తులు లభ్యం (${brand.name})`
                : `Products Available from ${brand.name}`}
            </span>
            {(searchQuery || selectedSubCategory !== 'all') && (
              <button
                type="button"
                className="reset-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSubCategory('all');
                }}
              >
                <RotateCcw size={13} />
                <span>{t.brandsSection.resetFilters}</span>
              </button>
            )}
          </div>

          {/* Modal Body / Product Grid */}
          <div className="brand-modal-body">
            {filteredProducts.length > 0 ? (
              <div className="brand-modal__products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleOpenDetail}
                    onEnquire={handleEnquireProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="brand-modal-empty">
                <Package size={48} className="empty-icon" />
                <h4 className="empty-title">{t.brandsSection.noProductsFound}</h4>
                <p className="empty-sub">
                  {language === 'te'
                    ? 'మీరు వెతుకుతున్న ఉత్పత్తి కోసం ఇతర పదాలను ప్రయత్నించండి లేదా ఫిల్టర్లను తొలగించండి.'
                    : 'Try checking your spelling, or reset filters to view all products from this brand.'}
                </p>
                <button
                  type="button"
                  className="empty-reset-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSubCategory('all');
                  }}
                >
                  <RotateCcw size={15} />
                  <span>{t.brandsSection.resetFilters}</span>
                </button>
              </div>
            )}
          </div>

          {/* Footer Assistance & Direct Contact Bar */}
          <div className="brand-modal-footer">
            <div className="modal-footer-notice">
              <Building2 size={18} className="store-icon" />
              <div className="store-text">
                <strong>{businessData.name[language]}</strong>
                <span>
                  {language === 'te'
                    ? `శ్రీ భాగ్యలక్ష్మి దుగ్గిరాల దుకాణంలో ${brand.name} యొక్క 100% అసలైన ఉత్పత్తులు నేరుగా లభిస్తాయి.`
                    : `Authorized stockist for ${brand.fullName.en}. Spot availability and genuine manufacturer sealing guaranteed.`}
                </span>
              </div>
            </div>

            <div className="modal-footer-actions">
              <a
                href={`tel:${(businessData.contact.phone || '+918500264499').replace(/[^0-9+]/g, '')}`}
                className="modal-action-btn modal-action-btn--phone"
              >
                <Phone size={16} />
                <span>{t.brandsSection.callForPricing}</span>
              </a>

              <a
                href={`https://wa.me/91${(businessData.contact.whatsapp || businessData.contact.phone || '8500264499').replace(/[^0-9]/g, '').slice(-10)}?text=${encodeURIComponent(
                  `Hello Sri Bhagyalakshmi Fertilizers, I am inquiring about genuine products from ${brand.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn modal-action-btn--whatsapp"
              >
                <MessageCircle size={16} />
                <span>{t.brandsSection.whatsappInquiry}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nested Product Detail Modal */}
      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          initialVariant={detailVariant}
          onClose={handleCloseDetail}
          onEnquire={handleEnquireProduct}
        />
      )}

      <style>{`
        .brand-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(6px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: brandOverlayFade 0.2s ease-out;
        }

        @keyframes brandOverlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .brand-modal-dialog {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 1180px;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px -12px rgba(6, 78, 59, 0.35);
          overflow: hidden;
          animation: brandDialogSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 2px solid rgba(16, 185, 129, 0.3);
        }

        @keyframes brandDialogSlide {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Header */
        .brand-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1.5rem 1.75rem 1.25rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAF7 100%);
          border-bottom: 1.5px solid rgba(16, 185, 129, 0.18);
          gap: 1.25rem;
        }

        .brand-modal-header__info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-grow: 1;
        }

        .brand-modal__logo-box {
          width: 150px;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border: 1.5px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-lg);
          padding: 0.6rem 1rem;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(6, 78, 59, 0.06);
        }
        .brand-modal__logo-img {
          max-width: 100%;
          max-height: 60px;
          object-fit: contain;
        }

        .brand-modal__titles {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .brand-modal__title-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .brand-modal__title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-forest-green-dark);
          line-height: 1.2;
          margin: 0;
        }
        .brand-modal__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #ECFDF5;
          color: #065F46;
          font-size: 0.76rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid #10B981;
        }
        .badge-shield {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
        }

        .brand-modal__fullname {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          margin: 0;
        }
        .brand-modal__desc {
          font-size: 0.86rem;
          color: var(--color-charcoal-light);
          margin: 0;
          max-width: 780px;
          line-height: 1.45;
        }

        .brand-modal__close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #F3F4F6;
          border: none;
          color: var(--color-charcoal-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }
        .brand-modal__close-btn:hover {
          background: #E5E7EB;
          color: #111827;
          transform: rotate(90deg);
        }

        /* Toolbar */
        .brand-modal-toolbar {
          padding: 0.9rem 1.75rem;
          background: #F8FAF7;
          border-bottom: 1px solid rgba(16, 185, 129, 0.15);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .brand-modal__search-wrap {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--color-charcoal-muted);
          pointer-events: none;
        }
        .brand-modal__search-input {
          width: 100%;
          padding: 0.65rem 2.5rem 0.65rem 2.6rem;
          font-size: 0.92rem;
          background: #FFFFFF;
          border: 1.5px solid #CBD5E1;
          border-radius: var(--radius-md);
          color: var(--color-charcoal-dark);
          transition: all var(--transition-fast);
          outline: none;
        }
        .brand-modal__search-input:focus {
          border-color: var(--color-agricultural-green);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }
        .search-clear-btn {
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

        .brand-modal__tabs-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: thin;
        }
        .brand-modal__tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          color: var(--color-charcoal-dark);
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .brand-modal__tab-btn:hover {
          border-color: var(--color-agricultural-green);
          background: rgba(16, 185, 129, 0.08);
        }
        .brand-modal__tab-btn--active {
          background: linear-gradient(135deg, #059669 0%, #064E3B 100%);
          color: #FFFFFF;
          border-color: #064E3B;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.35);
        }
        .tab-count {
          opacity: 0.85;
          font-size: 0.74rem;
        }

        /* Count Row */
        .brand-modal-count-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 1.75rem;
          background: #FFFFFF;
          border-bottom: 1px solid var(--color-border-subtle);
          font-size: 0.84rem;
        }
        .count-text {
          color: var(--color-charcoal-muted);
        }
        .count-text strong {
          color: var(--color-forest-green);
        }
        .reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          color: var(--color-agricultural-green);
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
        }
        .reset-btn:hover {
          text-decoration: underline;
        }

        /* Body & Grid */
        .brand-modal-body {
          flex: 1 1 auto;
          overflow-y: auto;
          padding: 1.5rem 1.75rem;
          background: #FAFCF9;
        }

        .brand-modal__products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.25rem;
        }

        @media (min-width: 600px) {
          .brand-modal__products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 950px) {
          .brand-modal__products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        /* Empty State */
        .brand-modal-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 1.5rem;
        }
        .empty-icon {
          color: var(--color-charcoal-muted);
          opacity: 0.6;
          margin-bottom: 1rem;
        }
        .empty-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-forest-green);
          margin-bottom: 0.4rem;
        }
        .empty-sub {
          font-size: 0.88rem;
          color: var(--color-charcoal-light);
          max-width: 420px;
          margin-bottom: 1.25rem;
          line-height: 1.45;
        }
        .empty-reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.2rem;
          background: var(--color-forest-green);
          color: #FFFFFF;
          border: none;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* Footer */
        .brand-modal-footer {
          padding: 1rem 1.75rem;
          background: #FFFFFF;
          border-top: 1px solid var(--color-border-subtle);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .modal-footer-notice {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .store-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
        }
        .store-text {
          display: flex;
          flex-direction: column;
          font-size: 0.82rem;
        }
        .store-text strong {
          color: var(--color-forest-green);
        }
        .store-text span {
          color: var(--color-charcoal-muted);
        }

        .modal-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .modal-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border-radius: var(--radius-md);
          font-size: 0.86rem;
          font-weight: 700;
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .modal-action-btn--phone {
          background: #F3F4F6;
          color: var(--color-charcoal-dark);
          border: 1px solid var(--color-border-subtle);
        }
        .modal-action-btn--phone:hover {
          background: #E5E7EB;
        }
        .modal-action-btn--whatsapp {
          background: #25D366;
          color: #FFFFFF;
          border: 1px solid #20BD5A;
        }
        .modal-action-btn--whatsapp:hover {
          background: #1EBE5D;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }

        @media (max-width: 640px) {
          .brand-modal-header {
            padding: 1rem;
            flex-direction: column-reverse;
          }
          .brand-modal__close-btn {
            align-self: flex-end;
          }
          .brand-modal-header__info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
          .brand-modal__logo-box {
            width: 120px;
            height: 60px;
          }
          .brand-modal-toolbar,
          .brand-modal-count-row,
          .brand-modal-body,
          .brand-modal-footer {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .modal-footer-actions {
            width: 100%;
            justify-content: stretch;
          }
          .modal-action-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};
