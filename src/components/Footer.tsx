import React from 'react';
import { businessData } from '../data/business';
import { useLanguage } from '../hooks/useLanguage';
import logoImg from '../assets/images/sri_bhagyalakshmi_logo.png';
import logoImgWebp128 from '../assets/images/sri_bhagyalakshmi_logo-128.webp';
import { MapPin, Clock } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Compact Single-Row Brand & Action Header */}
        <div className="footer-main-row">
          <div className="footer-brand-header">
            <picture>
              <source type="image/webp" srcSet={logoImgWebp128} />
              <img
                src={logoImg}
                alt={`${businessData.name[language]} Seal`}
                className="footer-logo"
                width={42}
                height={42}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="footer-brand-info">
              <div className={`footer-brand-title ${language === 'te' ? 'telugu-preserve' : ''}`}>
                {businessData.name[language]}
              </div>
              <div className="footer-brand-sub">
                {language === 'te' ? 'వ్యవసాయ ఎరువులు & పురుగుమందులు • స్థాపన 1995' : 'Fertilizers & Pesticides • Estd. 1995'}
              </div>
            </div>
          </div>

          <div className="footer-contact-summary">
            <div className="footer-store-address">
              <MapPin size={14} className="footer-meta-icon" />
              <span>{language === 'te' ? businessData.contact.addressTelugu : businessData.contact.addressEnglish}</span>
            </div>
            <div className="footer-store-hours">
              <Clock size={14} className="footer-meta-icon" />
              <span>{language === 'te' ? 'సోమ - శని: ఉదయం 8:00 – రాత్రి 8:00' : 'Mon - Sat: 8:00 AM – 8:00 PM'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} {businessData.name[language]}. {t.footer.allRightsReserved}
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: #1C1917;
          color: #FFFFFF;
          padding: 2.75rem 0 1.75rem 0;
          border-top: 3.5px solid #F59E0B;
          box-shadow: 0 -8px 30px rgba(28, 25, 23, 0.45);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-main-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        @media (min-width: 640px) {
          .footer-main-row {
            flex-direction: row;
            align-items: center;
          }
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .footer-logo {
          border-radius: 50%;
          border: 2px solid #F59E0B;
          background: #FFFFFF;
          flex-shrink: 0;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .footer-brand-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          line-height: 1.2;
        }
        html[lang="te"] .footer-brand-title {
          font-family: var(--font-te);
          font-weight: 800;
          letter-spacing: 0;
        }

        .footer-brand-sub {
          font-size: 0.78rem;
          color: #D6C7B7;
          margin-top: 0.2rem;
        }

        .footer-contact-summary {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: #E7E5E4;
        }

        @media (min-width: 640px) {
          .footer-contact-summary {
            align-items: flex-end;
            text-align: right;
          }
        }

        .footer-store-address,
        .footer-store-hours {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-meta-icon {
          color: #FBBF24;
          flex-shrink: 0;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.78rem;
          color: #A8A29E;
        }

        .footer-copyright {
          line-height: 1.4;
        }
      `}</style>
    </footer>
  );
};
