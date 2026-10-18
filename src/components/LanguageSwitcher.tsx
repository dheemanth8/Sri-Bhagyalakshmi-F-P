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
          background: rgba(255, 255, 255, 0.95);
          border: 1.5px solid var(--color-border-subtle);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .language-switcher:hover {
          border-color: var(--color-golden-yellow);
        }
        .lang-icon {
          color: var(--color-forest-green);
          margin-right: 0.15rem;
        }
        .lang-btn {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }
        .lang-btn:hover {
          color: var(--color-forest-green);
        }
        .lang-btn--active {
          color: var(--color-emerald-deep);
          background-color: var(--color-mint-light);
          border: 1px solid var(--color-emerald-vivid);
          font-weight: 700;
        }
        .lang-divider {
          color: #D1D5DB;
          font-size: 0.8rem;
          user-select: none;
        }
        .language-switcher--mobile {
          width: 100%;
          justify-content: center;
          padding: 0.6rem 1rem;
          background: var(--color-mint-light);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .language-switcher--mobile .lang-btn {
          font-size: 1rem;
          padding: 0.4rem 1rem;
        }
      `}</style>
    </div>
  );
};
