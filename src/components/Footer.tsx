import React from 'react';
import { businessData } from '../data/business';
import { useLanguage } from '../hooks/useLanguage';
import logoImg from '../assets/images/sri_bhagyalakshmi_logo.png';
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
            <img
              src={logoImg}
              alt={`${businessData.name[language]} Seal`}
              className="footer-logo"
              width={42}
              height={42}
            />
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
          background-color: var(--color-forest-green-dark);
          color: #E2E8F0;
          padding: 1.5rem 0 1rem 0;
          border-top: 3px solid var(--color-golden-yellow);
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
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
          gap: 0.75rem;
        }

        .footer-logo {
          border-radius: 50%;
          border: 2px solid var(--color-golden-yellow);
          background: #fff;
          flex-shrink: 0;
          object-fit: cover;
        }

        .footer-brand-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-golden-yellow);
          line-height: 1.2;
        }

        .footer-brand-sub {
          font-size: 0.78rem;
          color: #CBD5E1;
          margin-top: 0.15rem;
        }

        .footer-contact-summary {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: #E2E8F0;
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
          gap: 0.45rem;
        }

        .footer-meta-icon {
          color: var(--color-golden-yellow);
          flex-shrink: 0;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.78rem;
          color: #94A3B8;
        }

        .footer-copyright {
          line-height: 1.4;
        }
      `}</style>
    </footer>
  );
};
