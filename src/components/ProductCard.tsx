import React, { useState } from 'react';
import type { Product, ProductVariant } from '../data/products';
import { COMPANY_LOGOS } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';
import {
  Package,
  Layers,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product, selectedVariant?: ProductVariant) => void;
  onEnquire?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onEnquire,
}) => {
  const { language } = useLanguage();
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);

  const activeVariant = product.variants[selectedPackIndex] || product.variants[0];
  const companyLogo = COMPANY_LOGOS[product.company.logoKey];

  const handleCardClick = () => {
    onViewDetails(product, activeVariant);
  };

  const handlePackClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setSelectedPackIndex(idx);
  };

  const handleEnquireClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEnquire) {
      onEnquire(`${product.company.name} ${product.name} (${activeVariant?.packSize || product.packSizes[0]})`);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Category badge formatting
  const categoryBadgeText =
    product.mainCategory === 'fertilizers'
      ? (language === 'te' ? 'ఎరువులు' : 'Fertilizer')
      : (language === 'te' ? 'పంట సంరక్షణ' : 'Crop Protection');

  return (
    <div className="product-card" onClick={handleCardClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(); }}>
      {/* Top Header: Company Logo & Brand Name */}
      <div className="product-card__header">
        <div className="company-badge" title={product.company.fullName}>
          {companyLogo ? (
            <img
              src={companyLogo}
              alt={`${product.company.name} logo`}
              className="company-logo-img"
              loading="lazy"
            />
          ) : (
            <span className="company-fallback-text">{product.company.name}</span>
          )}
          <span className="company-name-text">{product.company.name}</span>
        </div>

        <span className={`category-tag category-tag--${product.mainCategory}`}>
          {categoryBadgeText}
        </span>
      </div>

      {/* Product Image Area */}
      <div className="product-card__image-box">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} packaging`}
            className="product-pack-img"
            loading="lazy"
          />
        ) : (
          <div className="product-image-placeholder" title="Authentic packaging photo awaiting verified official label">
            <div className="placeholder-icon-wrap">
              <Package size={34} className="placeholder-pack-icon" />
            </div>
            <div className="placeholder-text-wrap">
              <span className="placeholder-title">
                {language === 'te' ? 'చిత్రం త్వరలో' : 'Image Unavailable'}
              </span>
              <span className="placeholder-sub">
                {language === 'te' ? 'అధికారిక లేబుల్ ధృవీకరణ పెండింగ్' : 'Official pack label pending'}
              </span>
            </div>
          </div>
        )}

        {/* Verification Status Pill */}
        <div className="product-card__status-overlay">
          {product.isTechnicalSpecVerified ? (
            <span className="status-pill status-pill--verified" title="Technical formula verified from inventory spreadsheet">
              <CheckCircle2 size={12} />
              <span>{language === 'te' ? 'ధృవీకరించబడింది' : 'Inventory Verified'}</span>
            </span>
          ) : (
            <span className="status-pill status-pill--pending" title="Technical formula awaiting official label review">
              <AlertCircle size={12} />
              <span>{language === 'te' ? 'లేబుల్ పరిశీలనలో ఉంది' : 'Specs In Review'}</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="product-card__body">
        {/* Product Title */}
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Technical Name or Active Ingredient */}
        {product.technicalName ? (
          <div className="technical-name-snippet" title={product.technicalName}>
            <span className="technical-label">{language === 'te' ? 'ఫార్ములా:' : 'Formula:'}</span>
            <span className="technical-value">{product.technicalName}</span>
          </div>
        ) : product.activeIngredient ? (
          <div className="technical-name-snippet" title={product.activeIngredient}>
            <span className="technical-label">{language === 'te' ? 'క్రియాశీల:' : 'Active:'}</span>
            <span className="technical-value">{product.activeIngredient}</span>
          </div>
        ) : (
          <div className="technical-pending-snippet">
            <span className="pending-text">
              {language === 'te' ? 'సాంకేతిక వివరాలు దుకాణంలో అందుబాటులో ఉన్నాయి' : 'Technical formula details available in store'}
            </span>
          </div>
        )}

        {/* Pack Size Variants Selector */}
        <div className="product-card__packs">
          <span className="packs-label">
            <Layers size={13} />
            <span>{language === 'te' ? 'ప్యాకింగ్:' : 'Available Packs:'}</span>
          </span>
          <div className="packs-list">
            {product.packSizes.map((pack, idx) => (
              <button
                key={pack}
                type="button"
                className={`pack-pill ${idx === selectedPackIndex ? 'pack-pill--active' : ''}`}
                onClick={(e) => handlePackClick(e, idx)}
                title={`Select ${pack}`}
              >
                {pack}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Actions */}
      <div className="product-card__footer">
        <button
          type="button"
          className="btn-card-action btn-card-details"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product, activeVariant);
          }}
        >
          <span>{language === 'te' ? 'వివరాలు' : 'View Specs'}</span>
          <ChevronRight size={14} />
        </button>

        <button
          type="button"
          className="btn-card-action btn-card-enquire"
          onClick={handleEnquireClick}
        >
          <span>{language === 'te' ? 'లభ్యత విచారణ' : 'Enquire'}</span>
        </button>
      </div>

      <style>{`
        .product-card {
          background: #FFFEFC;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 18px rgba(5, 27, 18, 0.05), 0 0 0 1px rgba(212, 175, 55, 0.08);
        }

        .product-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-gold-metallic);
          box-shadow: 0 18px 36px -6px rgba(5, 27, 18, 0.16), 0 0 0 1.5px var(--color-gold-metallic);
        }

        .product-card:focus-visible {
          outline: 2px solid var(--color-gold-metallic);
          outline-offset: 2px;
        }

        /* Header */
        .product-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF7F0 100%);
          border-top: 3px solid var(--color-gold-metallic);
          border-bottom: 1px solid var(--color-border-subtle);
          gap: 0.5rem;
        }

        .company-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
        }

        .company-logo-img {
          height: 24px;
          max-width: 70px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .company-fallback-text {
          font-weight: 800;
          font-size: 0.82rem;
          color: var(--color-forest-green-dark);
        }

        .company-name-text {
          font-size: 0.84rem;
          font-weight: 800;
          color: var(--color-dark-charcoal);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .category-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.22rem 0.65rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .category-tag--fertilizers {
          background: #FEF3C7;
          color: #92400E;
          border: 1.5px solid #F59E0B;
          box-shadow: 0 1px 4px rgba(245, 158, 11, 0.15);
        }

        .category-tag--pesticides {
          background: #ECFDF5;
          color: #065F46;
          border: 1.5px solid #10B981;
          box-shadow: 0 1px 4px rgba(16, 185, 129, 0.15);
        }

        /* Image Box */
        .product-card__image-box {
          height: 180px;
          position: relative;
          background: #F8FAF7;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow: hidden;
        }

        .product-pack-img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-pack-img {
          transform: scale(1.05);
        }

        /* Neutral Awaiting Image Placeholder */
        .product-image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0.75rem;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #F9FBF8 0%, #EFF4ED 100%);
          border-radius: var(--radius-md);
          border: 1px dashed rgba(20, 83, 45, 0.15);
        }

        .placeholder-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(20, 83, 45, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.45rem;
          border: 1px solid rgba(20, 83, 45, 0.1);
        }

        .placeholder-pack-icon {
          color: var(--color-agricultural-green);
          opacity: 0.85;
        }

        .placeholder-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-forest-green);
          display: block;
        }

        .placeholder-sub {
          font-size: 0.7rem;
          color: var(--color-charcoal-light);
          display: block;
          margin-top: 0.15rem;
        }

        .product-card__status-overlay {
          position: absolute;
          top: 0.65rem;
          right: 0.65rem;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          font-size: 0.68rem;
          font-weight: 700;
          backdrop-filter: blur(4px);
        }

        .status-pill--verified {
          background: rgba(240, 253, 244, 0.95);
          color: #15803D;
          border: 1px solid #86EFAC;
        }

        .status-pill--pending {
          background: rgba(254, 243, 199, 0.95);
          color: #B45309;
          border: 1px solid #FCD34D;
        }

        /* Body */
        .product-card__body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 0.65rem;
        }

        .product-title {
          font-size: 1.12rem;
          font-weight: 800;
          color: var(--color-forest-green-dark);
          line-height: 1.3;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .technical-name-snippet {
          font-size: 0.82rem;
          line-height: 1.4;
          background: var(--color-mint-light);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-sm);
          padding: 0.4rem 0.6rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .technical-label {
          font-weight: 700;
          color: var(--color-forest-green);
          margin-right: 0.3rem;
        }

        .technical-value {
          color: var(--color-dark-charcoal);
        }

        .technical-pending-snippet {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
          font-style: italic;
          padding: 0.35rem 0.5rem;
          background: #F9FAFB;
          border-radius: var(--radius-sm);
        }

        /* Pack Sizes */
        .product-card__packs {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .packs-label {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-charcoal-light);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .packs-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .pack-pill {
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          color: #334155;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 0.22rem 0.55rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .pack-pill:hover {
          border-color: var(--color-golden-yellow);
          background: #FEF9C3;
          color: #854D0E;
        }

        .pack-pill--active {
          background: var(--color-obsidian);
          border-color: var(--color-gold-metallic);
          color: #FAF2D6;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        }

        /* Footer */
        .product-card__footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--color-border-subtle);
          background: #FAF7F0;
        }

        .btn-card-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.75rem 0.5rem;
          font-size: 0.84rem;
          font-weight: 700;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-card-details {
          color: var(--color-obsidian);
          border-right: 1px solid var(--color-border-subtle);
          font-weight: 700;
        }

        .btn-card-details:hover {
          background: #F3ECE0;
          color: var(--color-obsidian);
        }

        .btn-card-enquire {
          background: linear-gradient(135deg, #051B12 0%, #0A2E20 50%, #0E3D2B 100%);
          color: #FAF7F0;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .btn-card-enquire:hover {
          background: linear-gradient(135deg, #E5C578 0%, #D4AF37 50%, #B38738 100%);
          color: #051B12;
        }
      `}</style>
    </div>
  );
};
