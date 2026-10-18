import React, { useState } from 'react';
import { businessData } from '../data/business';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Navigation, ExternalLink, Clock, Store } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [mapLoaded, setMapLoaded] = useState(false);

  const address = language === 'te'
    ? businessData.contact.addressTelugu
    : businessData.contact.addressEnglish;

  const hours = language === 'te'
    ? businessData.contact.openingHoursTelugu
    : businessData.contact.openingHoursEnglish;

  return (
    <section id="location" className="section-pad location-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={16} />
            <span>{t.locationSection.badge}</span>
          </div>
          <h2 className="section-title">
            {t.locationSection.title}
          </h2>
          <div className="section-accent-bar" />
          <p className="section-subtitle">
            {t.locationSection.subtitle}
          </p>
        </div>

        {/* Location Layout: Info Card + Responsive Map */}
        <div className="location-container">
          {/* Left Details Card */}
          <div className="location-info-card">
            <div className="location-header-row">
              <div className="location-pin-icon">
                <Store size={26} />
              </div>
              <div>
                <h3 className="location-card-title">
                  {language === 'te'
                    ? businessData.name.te
                    : businessData.name.en}
                </h3>
                <p className="location-card-sub">
                  {language === 'te'
                    ? 'ఆళ్లగడ్డ, ఆంధ్రప్రదేశ్'
                    : 'Allagadda, Andhra Pradesh'}
                </p>
              </div>
            </div>

            {/* Store Address Block */}
            <div className="location-detail-block">
              <div className="detail-block-header">
                <MapPin size={18} className="detail-block-icon" />
                <span className="detail-block-label">
                  {language === 'te' ? 'దుకాణ చిరునామా' : 'Retail Store Address'}
                </span>
              </div>
              <p className="detail-block-value address-highlight">
                {address}
              </p>
              <span className="landmark-badge">
                {language === 'te' ? 'ల్యాండ్‌మార్క్: కె.వి.బి బ్యాంక్ ఎదురుగా' : 'Landmark: Opposite to KVB Bank'}
              </span>
            </div>

            {/* Opening Hours Block */}
            <div className="location-detail-block">
              <div className="detail-block-header">
                <Clock size={18} className="detail-block-icon" />
                <span className="detail-block-label">
                  {language === 'te' ? 'పనివేళలు' : 'Opening Hours'}
                </span>
              </div>
              <p className="detail-block-value hours-highlight">
                {hours}
              </p>
            </div>

            {/* Prominent Get Directions CTA -> Opens provided Google Maps Link */}
            <div className="location-actions">
              <a
                id="location-directions-btn"
                href={businessData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg location-cta"
              >
                <Navigation size={20} />
                <span>{t.locationSection.directionsBtn}</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="location-note">
              <span>{language === 'te' ? 'ఆంధ్రప్రదేశ్ లోని రైతులకు అందుబాటులో' : 'Serving cultivators and farmers across the local region'}</span>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="map-frame-wrapper">
            <div className="map-status-layer">
              {!mapLoaded && (
                <div className="map-skeleton">
                  <div className="skeleton-pulse" />
                  <span>Loading Google Maps preview...</span>
                </div>
              )}
            </div>
            <iframe
              title={`Location map of ${businessData.name.en}`}
              src={businessData.location.embedUrl}
              className="map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <style>{`
        .location-section {
          position: relative;
          background-color: #FFFDF8;
          background-image: 
            radial-gradient(circle at 50% 20%, rgba(254, 243, 199, 0.75) 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, rgba(254, 215, 170, 0.55) 0%, transparent 45%),
            radial-gradient(circle at 10% 80%, rgba(253, 230, 138, 0.45) 0%, transparent 40%);
          border-top: 1.5px solid var(--color-border-subtle);
          border-bottom: 1.5px solid var(--color-border-subtle);
          overflow: hidden;
        }

        .location-section::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .location-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .location-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-border-subtle);
          border-top: 4px solid #F59E0B;
          overflow: hidden;
          box-shadow: 0 16px 40px -10px rgba(41, 37, 36, 0.05);
        }

        @media (min-width: 1024px) {
          .location-container {
            grid-template-columns: 1fr 1.35fr;
          }
        }

        /* Left Card */
        .location-info-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #FFFFFF;
        }
        @media (min-width: 768px) {
          .location-info-card {
            padding: 3rem 2.5rem;
          }
        }

        .location-header-row {
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
          margin-bottom: 1.75rem;
        }

        .location-pin-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: #FEF3C7;
          border: 2px solid #F59E0B;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D97706;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.25);
          flex-shrink: 0;
        }

        .location-card-title {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.3;
        }
        html[lang="te"] .location-card-title {
          font-family: var(--font-te);
          font-weight: 800;
        }

        .location-card-sub {
          font-size: 0.92rem;
          color: var(--color-charcoal-muted);
          margin-top: 0.25rem;
          font-weight: 600;
        }

        /* Location Details Blocks */
        .location-detail-block {
          background: #FFFDF9;
          border: 1.5px solid var(--color-border-subtle);
          border-left: 4.5px solid #F59E0B;
          border-radius: var(--radius-lg);
          padding: 1.15rem 1.35rem;
          margin-bottom: 1.15rem;
          box-shadow: 0 2px 8px rgba(41, 37, 36, 0.03);
        }

        .detail-block-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.45rem;
        }

        .detail-block-icon {
          color: #D97706;
          flex-shrink: 0;
        }

        .detail-block-label {
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #B45309;
        }

        .detail-block-value {
          font-size: 0.98rem;
          color: var(--color-text-main);
          font-weight: 700;
          line-height: 1.55;
        }

        .address-highlight {
          color: var(--color-text-main);
        }

        .landmark-badge {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          color: #B45309;
          background: #FEF3C7;
          border: 1px solid rgba(245, 158, 11, 0.35);
          padding: 0.25rem 0.85rem;
          border-radius: var(--radius-full);
        }

        .hours-highlight {
          color: var(--color-text-main);
        }

        .location-actions {
          margin-top: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .location-cta {
          width: 100%;
          font-weight: 800;
          font-size: 1.05rem;
          background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%);
          color: #FFFFFF;
          border-radius: var(--radius-full);
          border: none;
          box-shadow: 0 6px 20px rgba(234, 88, 12, 0.35);
          transition: transform var(--transition-bouncy), box-shadow var(--transition-normal);
        }
        .location-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(234, 88, 12, 0.45);
        }

        .location-note {
          font-size: 0.8rem;
          color: var(--color-charcoal-muted);
          text-align: center;
        }

        /* Map Embed */
        .map-frame-wrapper {
          position: relative;
          min-height: 380px;
          background: #F1F5F9;
        }
        @media (min-width: 1024px) {
          .map-frame-wrapper {
            min-height: 100%;
          }
        }
        .map-status-layer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        .map-skeleton {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #F1F5F9;
          color: var(--color-charcoal-light);
          font-size: 0.88rem;
          gap: 0.75rem;
        }
        .skeleton-pulse {
          width: 44px;
          height: 44px;
          border: 3px solid #F59E0B;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .map-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </section>
  );
};
