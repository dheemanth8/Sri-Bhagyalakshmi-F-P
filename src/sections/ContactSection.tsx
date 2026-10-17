import React, { useState } from 'react';
import { businessData } from '../data/business';
import { productCategories } from '../data/categories';
import { useLanguage } from '../hooks/useLanguage';
import {
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Navigation,
} from 'lucide-react';

interface ContactSectionProps {
  selectedCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedCategory = '' }) => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: selectedCategory,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg(language === 'te' ? 'దయచేసి మీ పేరు నమోదు చేయండి' : 'Please enter your name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMsg(
        language === 'te'
          ? 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి'
          : 'Please enter a valid 10-digit mobile number'
      );
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
    // Keep enquiry in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('sb_enquiries') || '[]');
      existing.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('sb_enquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }
  };

  const hasWhatsapp = Boolean(businessData.contact.whatsapp);

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageCircle size={16} />
            <span>{t.contactSection.badge}</span>
          </div>
          <h2 className="section-title">
            {t.contactSection.title}
          </h2>
          <p className="section-subtitle">
            {t.contactSection.subtitle}
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Configurable Contact Channels */}
          <div className="contact-cards-col">

            {/* WhatsApp Card */}
            <div className="contact-channel-card card-surface">
              <div className="channel-icon-box channel-icon-box--wa">
                <MessageCircle size={24} />
              </div>
              <div className="channel-info">
                <h3 className="channel-title">{t.contactSection.whatsappCardTitle}</h3>
                <p className="channel-desc">{t.contactSection.whatsappCardDesc}</p>
                {hasWhatsapp ? (
                  <a
                    href={`https://wa.me/${businessData.contact.whatsapp}?text=Hello%20Sri%20Bhagyalakshmi%20Fertilizers,%20I%20would%20like%20to%20enquire%20about%20products`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm channel-btn"
                  >
                    <MessageCircle size={15} />
                    <span>{t.contactSection.whatsappAction}</span>
                  </a>
                ) : (
                  <div className="pending-badge">
                    <AlertCircle size={14} />
                    <span>{t.common.pendingConfiguration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Address & Store Card */}
            <div className="contact-channel-card card-surface">
              <div className="channel-icon-box">
                <MapPin size={24} />
              </div>
              <div className="channel-info">
                <h3 className="channel-title">{t.contactSection.addressCardTitle}</h3>
                <p className="channel-desc">{t.contactSection.addressPendingNotice}</p>
                <a
                  href={businessData.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm channel-btn"
                >
                  <Navigation size={14} />
                  <span>{t.nav.getDirections}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="contact-channel-card card-surface">
              <div className="channel-icon-box">
                <Clock size={24} />
              </div>
              <div className="channel-info">
                <h3 className="channel-title">{t.contactSection.hoursCardTitle}</h3>
                <p className="channel-desc">{t.contactSection.hoursPendingNotice}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Farmer Direct Enquiry Form */}
          <div className="contact-form-col">
            <div className="enquiry-card card-surface">
              <div className="enquiry-header">
                <h3 className="enquiry-title">{t.contactSection.enquiryFormTitle}</h3>
                <p className="enquiry-subtitle">{t.contactSection.enquiryFormSubtitle}</p>
              </div>

              {submitted ? (
                <div className="enquiry-success" role="status">
                  <CheckCircle size={48} className="success-icon" />
                  <h4 className="success-title">{t.contactSection.formSuccessTitle}</h4>
                  <p className="success-msg">{t.contactSection.formSuccessMsg}</p>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', category: '', message: '' });
                    }}
                  >
                    <span>{language === 'te' ? 'మరొక విచారణ పంపండి' : 'Send Another Enquiry'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form">
                  {errorMsg && (
                    <div className="form-error" role="alert">
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="customer-name" className="form-label">
                      {t.contactSection.nameLabel} *
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      className="form-input"
                      placeholder={t.contactSection.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customer-phone" className="form-label">
                      {t.contactSection.phoneLabel} *
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      className="form-input"
                      placeholder={t.contactSection.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enquiry-category" className="form-label">
                      {t.contactSection.categoryLabel}
                    </label>
                    <select
                      id="enquiry-category"
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="">{t.contactSection.categorySelectDefault}</option>
                      {productCategories.map((c) => (
                        <option key={c.id} value={c.title[language]}>
                          {c.title[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enquiry-message" className="form-label">
                      {t.contactSection.messageLabel}
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={3}
                      className="form-textarea"
                      placeholder={t.contactSection.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg submit-btn">
                    <Send size={18} />
                    <span>{t.contactSection.submitEnquiry}</span>
                  </button>

                  <div className="form-notice">
                    <AlertCircle size={14} />
                    <span>{t.contactSection.formConfigNotice}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #FFFFFF;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
          }
        }

        /* Contact Channels Left Column */
        .contact-cards-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-channel-card {
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--color-border-subtle);
          background: #FFFFFF;
        }

        .channel-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: var(--color-warm-cream);
          border: 1px solid var(--color-golden-yellow-light);
          color: var(--color-forest-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .channel-icon-box--wa {
          background: #DCFCE7;
          border-color: #86EFAC;
          color: #15803D;
        }

        .channel-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .channel-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-forest-green);
          margin-bottom: 0.25rem;
        }

        .channel-desc {
          font-size: 0.86rem;
          color: var(--color-charcoal-muted);
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .channel-btn {
          width: fit-content;
        }

        .pending-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #F3F4F6;
          color: var(--color-charcoal-light);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          width: fit-content;
          border: 1px solid #E5E7EB;
        }

        /* Form Right Column */
        .enquiry-card {
          padding: 2.25rem 2rem;
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-border-subtle);
          background: #FFFFFF;
          height: 100%;
        }
        @media (min-width: 768px) {
          .enquiry-card {
            padding: 2.5rem 2.5rem;
          }
        }

        .enquiry-header {
          margin-bottom: 1.75rem;
        }
        .enquiry-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-forest-green);
          margin-bottom: 0.35rem;
        }
        .enquiry-subtitle {
          font-size: 0.9rem;
          color: var(--color-charcoal-muted);
        }

        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-error {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background-color: #FEF2F2;
          border: 1px solid #FCA5A5;
          border-radius: var(--radius-md);
          color: #DC2626;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-dark-charcoal);
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.92rem;
          font-family: inherit;
          border: 1.5px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          background-color: #FFFFFF;
          color: var(--color-dark-charcoal);
          transition: border-color var(--transition-fast);
        }
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-forest-green);
          box-shadow: 0 0 0 3px rgba(20, 83, 45, 0.1);
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          font-weight: 700;
        }

        .form-notice {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--color-charcoal-light);
          margin-top: 0.5rem;
          line-height: 1.4;
        }

        /* Success State */
        .enquiry-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 1.5rem;
          gap: 1rem;
        }
        .success-icon {
          color: var(--color-agricultural-green);
        }
        .success-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-forest-green);
        }
        .success-msg {
          font-size: 0.95rem;
          color: var(--color-charcoal-muted);
          max-width: 420px;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
