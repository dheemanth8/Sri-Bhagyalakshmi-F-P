import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { businessData } from '../data/business';
import { LanguageSwitcher } from './LanguageSwitcher';
import logoImg from '../assets/images/sri_bhagyalakshmi_logo.png';
import { Menu, X, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#brands', label: t.nav.brands },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-wrapper">
      {/* Main Navigation Bar */}
      <nav
        className={`main-nav ${scrolled ? 'main-nav--scrolled' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="container main-nav__inner">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="brand-identity"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            aria-label={`${businessData.name[language]} Home`}
          >
            <div className="logo-box">
              <img
                src={logoImg}
                alt={`${businessData.name[language]} Seal`}
                className="logo-img"
                width={54}
                height={54}
              />
            </div>
            <div className="brand-text">
              <span className={`brand-name-main ${language === 'te' ? 'brand-name-te telugu-preserve' : 'brand-name-en'}`}>
                {businessData.name[language]}
              </span>
              <span className="brand-meta">
                {language === 'te'
                  ? 'వ్యవసాయ ఎరువులు & పురుగుమందులు • 1995 నుండి'
                  : 'Fertilizers & Pesticides • Estd. 1995'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Actions: Language switch & Directions */}
            <div className="nav-actions">
              <LanguageSwitcher />
              <a
                href={businessData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm nav-directions-btn"
                title={t.nav.getDirections}
              >
                <MapPin size={15} />
                <span>{t.nav.getDirections}</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-actions">
            <LanguageSwitcher className="mobile-lang-compact" />
            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer__backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer__content">
          <div className="mobile-drawer__header">
            <div className="mobile-brand">
              <img src={logoImg} alt="Logo" className="mobile-logo" width={42} height={42} />
              <div>
                <div className={`mobile-brand-title ${language === 'te' ? 'telugu-preserve' : ''}`}>
                  {businessData.name[language]}
                </div>
                <div className="mobile-brand-sub">
                  {language === 'te' ? 'స్థాపన 1995' : 'Estd. 1995'}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t.nav.closeMenu}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-drawer__lang">
            <LanguageSwitcher isMobile />
          </div>

          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer__footer">
            <a
              href={businessData.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MapPin size={18} />
              <span>{t.nav.getDirections}</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }

        /* Main Nav */
        .main-nav {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.85);
          transition: all var(--transition-normal);
        }
        .main-nav--scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-bottom-color: rgba(244, 185, 66, 0.4);
        }
        .main-nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
        }

        /* Brand Identity */
        .brand-identity {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          max-width: 70%;
        }
        @media (min-width: 1024px) {
          .brand-identity {
            max-width: 50%;
          }
        }
        .logo-box {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: var(--radius-full);
          border: 2px solid var(--color-golden-yellow);
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
          background: #fff;
        }
        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
          overflow: hidden;
        }
        .brand-name-te {
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--color-forest-green);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .brand-name-en {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-forest-green-dark);
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 1280px) {
          .brand-name-en {
            font-size: 1.15rem;
          }
          .brand-name-te {
            font-size: 1.25rem;
          }
        }
        .brand-meta {
          font-size: 0.8rem;
          color: var(--color-charcoal-muted);
          font-weight: 600;
          margin-top: 3px;
          white-space: nowrap;
        }

        /* Desktop Nav */
        .nav-desktop {
          display: none;
          align-items: center;
          gap: 1.5rem;
        }
        @media (min-width: 1024px) {
          .nav-desktop {
            display: flex;
          }
        }
        @media (min-width: 1280px) {
          .nav-desktop {
            gap: 2.25rem;
          }
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          list-style: none;
        }
        @media (min-width: 1280px) {
          .nav-links {
            gap: 1.75rem;
          }
        }
        .nav-link {
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--color-dark-charcoal);
          position: relative;
          padding: 0.35rem 0.15rem;
        }
        .nav-link:hover {
          color: var(--color-forest-green);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--color-golden-yellow-dark);
          transition: width var(--transition-fast);
          border-radius: var(--radius-full);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .nav-directions-btn {
          border-radius: var(--radius-full);
          padding: 0.55rem 1.15rem;
          font-weight: 600;
          background: var(--color-forest-green);
        }
        .nav-directions-btn:hover {
          background: var(--color-forest-green-dark);
        }

        /* Mobile Hamburger & Actions */
        .mobile-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (min-width: 1024px) {
          .mobile-actions {
            display: none;
          }
        }
        .hamburger-btn {
          color: var(--color-forest-green);
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          background: var(--color-warm-cream);
          border: 1px solid var(--color-golden-yellow-light);
        }
        .hamburger-btn:hover {
          background: #FFEFC4;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          visibility: hidden;
          transition: visibility var(--transition-normal);
        }
        .mobile-drawer--open {
          visibility: visible;
        }
        .mobile-drawer__backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 61, 33, 0.6);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity var(--transition-normal);
        }
        .mobile-drawer--open .mobile-drawer__backdrop {
          opacity: 1;
        }
        .mobile-drawer__content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 85%;
          max-width: 360px;
          background: #FFFFFF;
          box-shadow: -4px 0 25px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform var(--transition-normal);
          overflow-y: auto;
          padding: 1.5rem;
        }
        .mobile-drawer--open .mobile-drawer__content {
          transform: translateX(0);
        }
        .mobile-drawer__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .mobile-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .mobile-logo {
          border-radius: 50%;
          border: 2px solid var(--color-golden-yellow);
        }
        .mobile-brand-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-forest-green);
        }
        .mobile-brand-sub {
          font-size: 0.75rem;
          color: var(--color-charcoal-light);
        }
        .drawer-close-btn {
          color: var(--color-charcoal-muted);
          padding: 0.35rem;
          border-radius: var(--radius-sm);
        }
        .drawer-close-btn:hover {
          color: var(--color-dark-charcoal);
          background: var(--color-warm-cream);
        }
        .mobile-drawer__lang {
          margin: 1.25rem 0;
        }
        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex-grow: 1;
        }
        .mobile-nav-link {
          display: block;
          padding: 0.85rem 1rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-dark-charcoal);
          border-radius: var(--radius-md);
          transition: background-color var(--transition-fast);
        }
        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background-color: var(--color-warm-cream);
          color: var(--color-forest-green);
        }
        .mobile-drawer__footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-subtle);
        }
        .mobile-cta-btn {
          width: 100%;
        }
      `}</style>
    </header>
  );
};
