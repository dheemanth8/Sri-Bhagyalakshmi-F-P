import React, { useState } from 'react';
import { businessData } from '../data/business';
import { productCategories } from '../data/categories';
import { useLanguage } from '../hooks/useLanguage';
import {
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Navigation,
  MessageSquare,
  Phone,
  Loader2,
} from 'lucide-react';

interface ContactSectionProps {
  selectedCategory?: string;
  selectedProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedCategory = '',
  selectedProduct = '',
}) => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: selectedCategory,
    message: selectedProduct
      ? (language === 'te'
          ? `నేను ${selectedProduct} లభ్యత మరియు ధర గురించి తెలుసుకోవాలనుకుంటున్నాను.`
          : `I would like to enquire about the availability and details of ${selectedProduct}.`)
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const whatsappNumber = '918500264499';
  const whatsappDisplay = '+91 85002 64499';

  const whatsappEnquiryUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    formData.name
      ? `*Agricultural Enquiry - Sri Bhagyalakshmi Fertilizers & Pesticides*\n\n*Name:* ${formData.name}\n*Mobile:* ${formData.phone}\n*Category / Product:* ${formData.category || 'General Enquiry'}\n*Message:* ${formData.message || 'Availability and price enquiry'}\n\n_Sent via Sri Bhagyalakshmi Website_`
      : `Hello Sri Bhagyalakshmi Fertilizers & Pesticides, I would like to enquire about fertilizer and pesticide stock availability.`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
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
    setIsSubmitting(true);

    try {
      // Forward enquiry securely in the background without displaying email to users
      await fetch('https://formsubmit.co/ajax/dheemanthannem@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Store Enquiry: ${formData.name} (${formData.phone})`,
          name: formData.name,
          phone: formData.phone,
          category: formData.category || 'General Agricultural Input',
          message: formData.message || 'No additional note provided',
          submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          _template: 'table',
        }),
      });
    } catch {
      // Graceful offline fallback
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem('sb_enquiries') || '[]');
        existing.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('sb_enquiries', JSON.stringify(existing));
      } catch {
        // ignore
      }
    }
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Send size={16} />
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
          {/* Left Column: Direct Contact Channels */}
          <div className="contact-cards-col">
            {/* WhatsApp Business Card */}
            <div className="contact-channel-card card-surface contact-channel-card--whatsapp">
              <div className="channel-icon-box channel-icon-box--whatsapp">
                <MessageSquare size={24} />
              </div>
              <div className="channel-info">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <h3 className="channel-title" style={{ margin: 0 }}>
                    {language === 'te' ? 'వాట్సాప్ బిజినెస్' : 'WhatsApp Business'}
                  </h3>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '9999px', background: '#DCFCE7', color: '#15803D' }}>
                    {language === 'te' ? 'యాక్టివ్' : 'Active'}
                  </span>
                </div>
                <p className="channel-desc" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#15803D', margin: '0.2rem 0' }}>
                  {whatsappDisplay}
                </p>
                <p className="channel-desc" style={{ fontSize: '0.82rem', marginBottom: '0.85rem' }}>
                  {language === 'te'
                    ? 'ఎరువులు, పురుగుమందుల లభ్యత మరియు ధరల వివరాల కోసం వాట్సాప్‌లో సందేశం పంపండి.'
                    : 'Instant assistance on product stock, pricing, and genuine company inputs.'}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappEnquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm channel-btn"
                    style={{ background: '#25D366', color: '#FFFFFF', borderColor: '#25D366', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <MessageSquare size={14} />
                    <span>{language === 'te' ? 'వాట్సాప్‌లో చాట్ చేయండి' : 'Chat on WhatsApp'}</span>
                  </a>
                  <a
                    href={`tel:+${whatsappNumber}`}
                    className="btn btn-outline btn-sm channel-btn"
                  >
                    <Phone size={14} />
                    <span>{language === 'te' ? 'కాల్ చేయండి' : 'Call'}</span>
                  </a>
                </div>
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
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.25rem' }}>
                    <a
                      href={whatsappEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                      style={{ background: '#25D366', color: '#FFFFFF', borderColor: '#25D366', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <MessageSquare size={16} />
                      <span>{language === 'te' ? 'వాట్సాప్‌లో పంపండి (8500264499)' : 'Send on WhatsApp (8500264499)'}</span>
                    </a>
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

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>{language === 'te' ? 'పంపుతోంది...' : 'Sending...'}</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t.contactSection.submitEnquiry}</span>
                      </>
                    )}
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
          background: radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
                      radial-gradient(circle at 15% 85%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
                      #FFFFFF;
          position: relative;
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
          padding: 1.6rem;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          border-radius: var(--radius-lg);
          border: 1.5px solid rgba(16, 185, 129, 0.2);
          background: #FFFFFF;
          box-shadow: 0 4px 16px rgba(6, 78, 59, 0.05);
          transition: all var(--transition-normal);
        }

        .contact-channel-card:hover {
          border-color: var(--color-golden-yellow);
          box-shadow: 0 12px 28px rgba(6, 78, 59, 0.12);
          transform: translateY(-3px);
        }

        .contact-channel-card--whatsapp {
          border: 2px solid #22C55E;
          background: linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%);
          box-shadow: 0 6px 22px rgba(34, 197, 94, 0.18);
        }
        .contact-channel-card--whatsapp:hover {
          border-color: #16A34A;
          box-shadow: 0 12px 30px rgba(34, 197, 94, 0.28);
        }

        .channel-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #ECFDF5 0%, #FEF3C7 100%);
          border: 1.5px solid var(--color-golden-yellow);
          color: var(--color-forest-green-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.2);
        }

        .channel-icon-box--whatsapp {
          background: linear-gradient(135deg, #25D366 0%, #16A34A 100%);
          border: none;
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
        }

        .channel-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .channel-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-forest-green-dark);
          margin-bottom: 0.25rem;
        }

        .channel-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.55;
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
          border: 2px solid rgba(16, 185, 129, 0.25);
          border-top: 5px solid var(--color-golden-yellow);
          background: #FFFFFF;
          box-shadow: 0 20px 40px -10px rgba(6, 78, 59, 0.12), 0 0 0 1px rgba(245, 158, 11, 0.12);
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
          padding: 0.8rem 1.1rem;
          font-size: 0.94rem;
          font-family: inherit;
          border: 1.5px solid #CBD5E1;
          border-radius: var(--radius-md);
          background-color: #FFFFFF;
          color: var(--color-dark-charcoal);
          transition: all var(--transition-fast);
        }
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-agricultural-green);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
          background-color: #F0FDF4;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          font-weight: 800;
          font-size: 1.05rem;
          background: var(--gradient-emerald-vibrant);
          box-shadow: 0 6px 20px rgba(5, 150, 105, 0.35);
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(5, 150, 105, 0.45);
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
