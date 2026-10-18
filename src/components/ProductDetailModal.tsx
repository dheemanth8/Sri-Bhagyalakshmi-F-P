import React, { useEffect, useState } from 'react';
import type { Product, ProductVariant } from '../data/products';
import { COMPANY_LOGOS } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';
import {
  X,
  Package,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  FileSpreadsheet,
  Send,
  MessageSquare,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  initialVariant?: ProductVariant;
  onClose: () => void;
  onEnquire?: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  initialVariant,
  onClose,
  onEnquire,
}) => {
  const { language } = useLanguage();
  const [selectedPack, setSelectedPack] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedPack(initialVariant?.packSize || product.packSizes[0] || '');
    }
  }, [product, initialVariant]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const companyLogo = COMPANY_LOGOS[product.company.logoKey];
  const activeVariant = product.variants.find(v => v.packSize === selectedPack) || product.variants[0];

  const handleEnquire = () => {
    onClose();
    if (onEnquire) {
      onEnquire(`${product.company.name} ${product.name} (${selectedPack})`);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="product-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="product-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        {/* Modal Header */}
        <div className="product-modal-header">
          <div className="modal-header-brand">
            {companyLogo && (
              <img
                src={companyLogo}
                alt={`${product.company.name} logo`}
                className="modal-company-logo"
              />
            )}
            <div className="modal-header-titles">
              <span className="modal-company-name">{product.company.fullName}</span>
              <h2 id="modal-product-title" className="modal-product-name">
                {product.name}
              </h2>
            </div>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="product-modal-body">
          {/* Top Status Alert */}
          <div className={`verification-banner ${product.isTechnicalSpecVerified ? 'verification-banner--verified' : 'verification-banner--pending'}`}>
            {product.isTechnicalSpecVerified ? (
              <>
                <CheckCircle2 size={18} className="banner-icon" />
                <div className="banner-text">
                  <strong>{language === 'te' ? 'ధృవీకరించబడిన ఇన్వెంటరీ రికార్డు' : 'Verified Inventory Specification'}</strong>
                  <span>{language === 'te' ? 'ఈ ఉత్పత్తి మరియు టెక్నికల్ వివరాలు శ్రీ భాగ్యలక్ష్మి ఇన్వెంటరీ స్ప్రెడ్‌షీట్ నుండి సరిచూడబడ్డాయి.' : 'Transcribed directly from official Sri Bhagyalakshmi Fertilizers & Pesticides store inventory.'}</span>
                </div>
              </>
            ) : (
              <>
                <AlertCircle size={18} className="banner-icon" />
                <div className="banner-text">
                  <strong>{language === 'te' ? 'టెక్నికల్ సమాచారం పరిశీలనలో ఉంది' : 'Technical Specifications Pending Review'}</strong>
                  <span>{language === 'te' ? 'దుకాణంలో స్టాక్ లభ్యత ఉంది. ఖచ్చితమైన టెక్నికల్ వివరాల కోసం అధికారిక లేబుల్ ధృవీకరించబడుతోంది.' : 'Stock is available in store. Technical formula is pending verification against official manufacturer packaging labels.'}</span>
                </div>
              </>
            )}
          </div>

          {/* Grid Layout: Visual + Specifications */}
          <div className="modal-content-grid">
            {/* Left: Product Visual Packaging Box */}
            <div className="modal-visual-col">
              <div className="modal-image-container">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} packaging`}
                    className="modal-pack-img"
                  />
                ) : (
                  <div className="modal-image-placeholder">
                    <Package size={56} className="placeholder-big-icon" />
                    <span className="placeholder-main-title">
                      {language === 'te' ? 'చిత్రం త్వరలో' : 'Official Image Pending'}
                    </span>
                    <p className="placeholder-main-sub">
                      {language === 'te'
                        ? 'అధికారిక కంపెనీ ప్యాకేజింగ్ చిత్రం మాత్రమే ప్రదర్శించబడుతుంది. నకిలీ చిత్రాలు ప్రదర్శించబడవు.'
                        : 'Only authentic manufacturer packaging photos are displayed. No AI or generic bottle imagery used.'}
                    </p>
                  </div>
                )}
              </div>

              {/* Inventory Source Box */}
              <div className="source-reference-card">
                <FileSpreadsheet size={16} className="ref-icon" />
                <div className="ref-details">
                  <span className="ref-label">{language === 'te' ? 'ఇన్వెంటరీ మూలం:' : 'Inventory Data Reference:'}</span>
                  <span className="ref-value">
                    product.xlsx (Row #{activeVariant?.spreadsheetRow || product.spreadsheetRows.join(', #')})
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs Table */}
            <div className="modal-specs-col">
              <div className="specs-table-card">
                <h3 className="specs-section-title">
                  {language === 'te' ? 'సాంకేతిక వివరాలు' : 'Product Technical Specifications'}
                </h3>

                <div className="specs-table">
                  {/* Manufacturer */}
                  <div className="spec-row">
                    <div className="spec-key">{language === 'te' ? 'తయారీదారు' : 'Manufacturer'}</div>
                    <div className="spec-val font-semibold">{product.company.fullName}</div>
                  </div>

                  {/* Category */}
                  <div className="spec-row">
                    <div className="spec-key">{language === 'te' ? 'విభాగం' : 'Category'}</div>
                    <div className="spec-val">
                      <span className={`category-tag category-tag--${product.mainCategory}`}>
                        {product.mainCategory === 'fertilizers'
                          ? (language === 'te' ? 'ఎరువులు (Fertilizer)' : 'Fertilizer')
                          : (language === 'te' ? 'పంట సంరక్షణ (Pesticide)' : 'Pesticide')}
                      </span>
                    </div>
                  </div>

                  {/* Product Type */}
                  {product.rawProductType && (
                    <div className="spec-row">
                      <div className="spec-key">{language === 'te' ? 'ఉత్పత్తి రకం' : 'Product Type'}</div>
                      <div className="spec-val font-semibold text-forest-green">
                        {product.rawProductType}
                      </div>
                    </div>
                  )}

                  {/* Active Ingredient */}
                  <div className="spec-row">
                    <div className="spec-key">{language === 'te' ? 'క్రియాశీల పదార్ధం' : 'Active Ingredient'}</div>
                    <div className="spec-val">
                      {product.activeIngredient ? (
                        <span className="spec-val-highlight">{product.activeIngredient}</span>
                      ) : (
                        <span className="spec-val-pending">
                          {language === 'te' ? 'దుకాణ లేబుల్ నుండి నిర్ధారణ పెండింగ్' : 'Pending verification from official label'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technical Name */}
                  <div className="spec-row">
                    <div className="spec-key">{language === 'te' ? 'టెక్నికల్ ఫార్ములా' : 'Technical Name'}</div>
                    <div className="spec-val">
                      {product.technicalName ? (
                        <span className="spec-val-tech">{product.technicalName}</span>
                      ) : (
                        <span className="spec-val-pending">
                          {language === 'te' ? 'అధికారిక లేబుల్ పరిశీలనలో ఉంది' : 'Awaiting official product label confirmation'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pack Sizes Available */}
                  <div className="spec-row">
                    <div className="spec-key">{language === 'te' ? 'లభ్యమయ్యే ప్యాకింగ్' : 'Available Pack Sizes'}</div>
                    <div className="spec-val">
                      <div className="modal-pack-selector">
                        {product.packSizes.map((pack) => (
                          <button
                            key={pack}
                            type="button"
                            className={`modal-pack-btn ${pack === selectedPack ? 'modal-pack-btn--active' : ''}`}
                            onClick={() => setSelectedPack(pack)}
                          >
                            {pack}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Details (Only rendered if verified data exists) */}
              {product.targetCrops && product.targetCrops.length > 0 && (
                <div className="verified-extra-box">
                  <h4 className="extra-box-title">
                    <CheckCircle2 size={15} />
                    <span>{language === 'te' ? 'సిఫార్సు చేయబడిన పంటలు' : 'Target Crops'}</span>
                  </h4>
                  <div className="crop-tag-list">
                    {product.targetCrops.map(c => (
                      <span key={c} className="crop-tag">{c}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Safety & Retail Availability Note */}
              <div className="retail-guidance-card">
                <ShieldAlert size={18} className="guidance-icon" />
                <div className="guidance-text">
                  <span className="guidance-heading">
                    {language === 'te' ? 'రైతు సలహా & అసలైన నాణ్యత హామీ' : 'Farmer Guidance & Genuine Quality Guarantee'}
                  </span>
                  <p className="guidance-desc">
                    {language === 'te'
                      ? 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ వద్ద అన్ని ఉత్పత్తులు కంపెనీ నుండి నేరుగా వచ్చిన అసలైన స్టాక్. సరైన మోతాదు మరియు పిచికారీ సలహాల కోసం మా దుకాణాన్ని సంప్రదించండి.'
                      : 'All products at Sri Bhagyalakshmi Fertilizers & Pesticides are 100% original, sealed company stock. For exact dosage, water ratio, and spray guidance, consult our experienced shop team.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="product-modal-footer">
          <button
            type="button"
            className="btn btn-outline modal-btn-secondary"
            onClick={onClose}
          >
            {language === 'te' ? 'మూసివేయి' : 'Close'}
          </button>

          <a
            href={`https://wa.me/918500264499?text=${encodeURIComponent(
              `Hello Sri Bhagyalakshmi Fertilizers & Pesticides, I am inquiring about genuine ${product.company.name} ${product.name} (${selectedPack}). Please confirm availability and current price.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn modal-btn-whatsapp"
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              borderColor: '#25D366',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <MessageSquare size={16} />
            <span>{language === 'te' ? 'వాట్సాప్‌లో అడగండి' : 'WhatsApp'}</span>
          </a>

          <button
            type="button"
            className="btn btn-primary modal-btn-primary"
            onClick={handleEnquire}
          >
            <Send size={16} />
            <span>
              {language === 'te'
                ? `స్టోర్ విచారణ (${selectedPack})`
                : `Store Enquiry (${selectedPack})`}
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .product-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 1rem;
          animation: modalFadeIn 0.2s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .product-modal-dialog {
          background: var(--color-cream-surface);
          border-radius: var(--radius-xl);
          border: 2px solid var(--color-border-subtle);
          box-shadow: 0 25px 60px -12px rgba(7, 39, 20, 0.45);
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: modalScaleUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalScaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Header */
        .product-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          background: linear-gradient(180deg, #FFFEFB 0%, #FAF6EE 100%);
          border-bottom: 1.5px solid var(--color-border-subtle);
          gap: 1rem;
        }

        .modal-header-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 0;
        }

        .modal-company-logo {
          height: 38px;
          max-width: 80px;
          object-fit: contain;
          flex-shrink: 0;
          background: #FFFFFF;
          padding: 4px;
          border-radius: var(--radius-sm);
          border: 1.5px solid rgba(16, 185, 129, 0.2);
          box-shadow: 0 2px 6px rgba(6, 78, 59, 0.05);
        }

        .modal-header-titles {
          min-width: 0;
        }

        .modal-company-name {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-agricultural-green);
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-product-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-forest-green-dark);
          line-height: 1.2;
          margin: 0.15rem 0 0 0;
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--color-border-subtle);
          background: #FFFFFF;
          color: var(--color-charcoal-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .modal-close-btn:hover {
          background: #FEE2E2;
          color: #DC2626;
          border-color: #FCA5A5;
        }

        /* Body */
        .product-modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Verification Banner */
        .verification-banner {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
        }

        .verification-banner--verified {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          color: #166534;
        }

        .verification-banner--pending {
          background: #FEF3C7;
          border: 1px solid #FDE68A;
          color: #92400E;
        }

        .banner-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .banner-text {
          font-size: 0.84rem;
          line-height: 1.45;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        /* Grid Layout */
        .modal-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 680px) {
          .modal-content-grid {
            grid-template-columns: 240px 1fr;
          }
        }

        /* Visual Col */
        .modal-visual-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .modal-image-container {
          background: #F8FAF7;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          padding: 1rem;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-pack-img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        .modal-image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.5rem;
          color: var(--color-charcoal-light);
        }

        .placeholder-big-icon {
          color: var(--color-agricultural-green);
          opacity: 0.75;
        }

        .placeholder-main-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-forest-green);
        }

        .placeholder-main-sub {
          font-size: 0.75rem;
          line-height: 1.35;
          color: var(--color-charcoal-light);
          margin: 0;
        }

        .source-reference-card {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.85rem;
          background: #F1F5F9;
          border-radius: var(--radius-md);
          font-size: 0.76rem;
        }

        .ref-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
        }

        .ref-details {
          display: flex;
          flex-direction: column;
        }

        .ref-label {
          font-weight: 700;
          color: #475569;
        }

        .ref-value {
          color: #0F172A;
          font-family: monospace;
          font-size: 0.78rem;
        }

        /* Specs Col */
        .modal-specs-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .specs-table-card {
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #FFFFFF;
        }

        .specs-section-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-forest-green);
          padding: 0.75rem 1rem;
          background: #FAFBF9;
          border-bottom: 1px solid var(--color-border-subtle);
          margin: 0;
        }

        .specs-table {
          display: flex;
          flex-direction: column;
        }

        .spec-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          padding: 0.65rem 1rem;
          border-bottom: 1px solid #F1F5F9;
          font-size: 0.86rem;
          align-items: center;
        }

        .spec-row:last-child {
          border-bottom: none;
        }

        .spec-key {
          font-weight: 700;
          color: var(--color-charcoal-light);
        }

        .spec-val {
          color: var(--color-dark-charcoal);
        }

        .spec-val-highlight {
          font-weight: 700;
          color: var(--color-forest-green-dark);
        }

        .spec-val-tech {
          font-weight: 600;
          color: #0F172A;
          font-family: inherit;
        }

        .spec-val-pending {
          color: #92400E;
          font-style: italic;
          font-size: 0.82rem;
        }

        .modal-pack-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .modal-pack-btn {
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          color: #334155;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-pack-btn:hover {
          border-color: var(--color-golden-yellow);
          background: #FEF9C3;
        }

        .modal-pack-btn--active {
          background: var(--color-agricultural-green);
          border-color: var(--color-forest-green);
          color: #FFFFFF;
        }

        /* Retail Guidance */
        .retail-guidance-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: var(--color-warm-cream);
          border: 1px solid rgba(244, 185, 66, 0.4);
          border-radius: var(--radius-md);
        }

        .guidance-icon {
          color: var(--color-forest-green);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .guidance-text {
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .guidance-heading {
          font-weight: 800;
          color: var(--color-forest-green-dark);
          display: block;
          margin-bottom: 0.15rem;
        }

        .guidance-desc {
          margin: 0;
          color: var(--color-charcoal-muted);
        }

        /* Footer */
        .product-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          padding: 1.1rem 1.5rem;
          background: #F8FAF7;
          border-top: 1.5px solid rgba(16, 185, 129, 0.15);
        }

        .modal-btn-secondary {
          padding: 0.65rem 1.25rem;
          font-weight: 700;
        }

        .modal-btn-primary {
          padding: 0.65rem 1.4rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 800;
          background: var(--gradient-forest-vibrant);
          color: #FAF6EE;
          box-shadow: 0 4px 14px rgba(13, 59, 31, 0.35);
        }
        .modal-btn-primary:hover {
          background: linear-gradient(135deg, #072714 0%, #0D3B1F 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(13, 59, 31, 0.45);
        }
      `}</style>
    </div>
  );
};
