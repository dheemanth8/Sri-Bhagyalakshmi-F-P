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
                className="btn btn-gold btn-lg location-cta"
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
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .location-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-border-subtle);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
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
        }
        @media (min-width: 768px) {
          .location-info-card {
            padding: 3rem 2.5rem;
          }
        }

        .location-header-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .location-pin-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: var(--color-warm-cream);
          border: 1px solid var(--color-golden-yellow-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-forest-green);
          flex-shrink: 0;
        }

        .location-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-forest-green);
          line-height: 1.3;
        }

        .location-card-sub {
          font-size: 0.9rem;
          color: var(--color-charcoal-muted);
          margin-top: 0.2rem;
          font-weight: 500;
        }

        /* Location Details Blocks */
        .location-detail-block {
          background: #FAFBF9;
          border: 1px solid rgba(20, 83, 45, 0.12);
          border-radius: var(--radius-md);
          padding: 1rem 1.15rem;
          margin-bottom: 1rem;
        }

        .detail-block-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .detail-block-icon {
          color: var(--color-agricultural-green);
          flex-shrink: 0;
        }

        .detail-block-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--color-forest-green);
        }

        .detail-block-value {
          font-size: 0.95rem;
          color: var(--color-dark-charcoal);
          font-weight: 600;
          line-height: 1.5;
        }

        .address-highlight {
          color: var(--color-forest-green-dark);
        }

        .landmark-badge {
          display: inline-block;
          margin-top: 0.4rem;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-forest-green);
          background: var(--color-warm-cream);
          border: 1px solid var(--color-golden-yellow-light);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
        }

        .hours-highlight {
          color: var(--color-dark-charcoal);
        }

        .location-actions {
          margin-bottom: 1.25rem;
        }
        .location-cta {
          width: 100%;
          font-weight: 700;
        }

        .location-note {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
          text-align: center;
        }

        /* Map Embed */
        .map-frame-wrapper {
          position: relative;
          min-height: 380px;
          background: #E5E7EB;
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
          background: #F3F4F6;
          color: var(--color-charcoal-light);
          font-size: 0.88rem;
          gap: 0.75rem;
        }
        .skeleton-pulse {
          width: 48px;
          height: 48px;
          border: 3px solid var(--color-golden-yellow);
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
