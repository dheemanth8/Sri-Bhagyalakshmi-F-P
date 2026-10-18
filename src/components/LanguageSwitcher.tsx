import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', isMobile = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`language-switcher ${isMobile ? 'language-switcher--mobile' : ''} ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className="lang-icon" size={16} aria-hidden="true" />
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'lang-btn--active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden="true">|</span>
      <button
        type="button"
        className={`lang-btn ${language === 'te' ? 'lang-btn--active' : ''}`}
        onClick={() => setLanguage('te')}
        aria-pressed={language === 'te'}
        title="తెలుగు భాషకు మారండి"
      >
        తెలుగు
      </button>
      <style>{`
        .language-switcher {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-subtle);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .language-switcher:hover {
          border-color: #F59E0B;
        }
        .lang-icon {
          color: #D97706;
          margin-right: 0.15rem;
        }
        .lang-btn {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        .lang-btn:hover {
          color: #B45309;
        }
        .lang-btn--active {
          color: #FFFFFF;
          background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%);
          border: 1px solid #EA580C;
          font-weight: 800;
          box-shadow: 0 2px 6px rgba(234, 88, 12, 0.25);
        }
        .lang-divider {
          color: #E7E5E4;
          font-size: 0.8rem;
          user-select: none;
        }
        .language-switcher--mobile {
          width: 100%;
          justify-content: center;
          padding: 0.6rem 1rem;
          background: #FEF3C7;
          border-color: rgba(245, 158, 11, 0.4);
        }
        .language-switcher--mobile .lang-btn {
          font-size: 1rem;
          padding: 0.4rem 1rem;
        }
      `}</style>
    </div>
  );
};
