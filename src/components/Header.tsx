import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { businessData } from '../data/business';
import { LanguageSwitcher } from './LanguageSwitcher';
import logoImg from '../assets/images/sri_bhagyalakshmi_logo.png';
import logoImgWebp128 from '../assets/images/sri_bhagyalakshmi_logo-128.webp';
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
    { href: '#brands', label: language === 'te' ? 'బ్రాండ్లు & ఉత్పత్తులు' : 'Brands & Products' },
    { href: '#categories', label: language === 'te' ? 'విభాగాలు' : 'Categories' },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetHref = href === '#products' ? '#brands' : href;
    const element = document.querySelector(targetHref);
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
              <picture>
                <source type="image/webp" srcSet={logoImgWebp128} />
                <img
                  src={logoImg}
                  alt={`${businessData.name[language]} Seal`}
                  className="logo-img"
                  width={54}
                  height={54}
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <div className="brand-text">
              <span className={`brand-name-main ${language === 'te' ? 'brand-name-te telugu-preserve' : 'brand-name-en'}`}>
                {language === 'te' ? 'శ్రీ భాగ్యలక్ష్మి' : 'Sri Bhagyalakshmi'}
              </span>
              <span className="brand-meta">
                <span className="brand-meta-desktop">
                  {language === 'te'
                    ? 'వ్యవసాయ ఎరువులు & పురుగుమందులు • 1995 నుండి'
                    : 'Fertilizers & Pesticides • Estd. 1995'}
                </span>
                <span className="brand-meta-mobile">
                  {language === 'te' ? 'స్థాపన 1995' : 'Estd. 1995'}
                </span>
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

            {/* Desktop Actions: Language switch only */}
            <div className="nav-actions">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button & Language Switch */}
          <div className="mobile-actions">
            <LanguageSwitcher className="mobile-lang-compact" />
            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
              <picture>
                <source type="image/webp" srcSet={logoImgWebp128} />
                <img
                  src={logoImg}
                  alt="Logo"
                  className="mobile-logo"
                  width={42}
                  height={42}
                  decoding="async"
                />
              </picture>
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

        /* Main Nav - Regal Forest Green & Warm Cream */
        .main-nav {
          background: linear-gradient(135deg, #072714 0%, #0D3B1F 55%, #14532D 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 3.5px solid var(--color-golden-yellow);
          border-bottom: 1.5px solid rgba(245, 158, 11, 0.35);
          box-shadow: 0 4px 20px rgba(7, 39, 20, 0.35);
          transition: all var(--transition-normal);
        }
        .main-nav--scrolled {
          background: rgba(7, 39, 20, 0.96);
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.45), 0 1px 0 rgba(245, 158, 11, 0.45);
          border-bottom-color: var(--color-golden-yellow);
        }
        .main-nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          width: 100%;
        }

        /* Brand Identity */
        .brand-identity {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          min-width: 0;
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .brand-identity:hover {
          transform: translateY(-1px);
        }
        @media (min-width: 640px) {
          .brand-identity {
            gap: 0.85rem;
          }
        }
        @media (min-width: 1024px) {
          .brand-identity {
            margin-right: 2rem;
          }
        }
        @media (min-width: 1280px) {
          .brand-identity {
            margin-right: 3rem;
          }
        }

        .logo-box {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          border: 2px solid var(--color-golden-yellow);
          overflow: hidden;
          box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.35), 0 4px 14px rgba(0, 0, 0, 0.35);
          flex-shrink: 0;
          background: #FAF6EE;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }
        .brand-identity:hover .logo-box {
          transform: scale(1.06);
          box-shadow: 0 0 0 3px var(--color-golden-yellow), 0 6px 18px rgba(245, 158, 11, 0.5);
        }
        @media (min-width: 640px) {
          .logo-box {
            width: 48px;
            height: 48px;
          }
        }
        @media (min-width: 1280px) {
          .logo-box {
            width: 54px;
            height: 54px;
          }
        }
        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          overflow: hidden;
          white-space: nowrap;
          min-width: 0;
        }
        .brand-name-main {
          font-weight: 800;
          white-space: nowrap;
          letter-spacing: -0.01em;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .brand-name-en {
          font-size: 1.05rem;
          color: #FFFEFB;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        .brand-name-te {
          font-size: 1.15rem;
          color: #FEF3C7;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        @media (min-width: 640px) {
          .brand-name-en {
            font-size: 1.15rem;
          }
          .brand-name-te {
            font-size: 1.25rem;
          }
        }
        @media (min-width: 1280px) {
          .brand-name-en {
            font-size: 1.22rem;
          }
          .brand-name-te {
            font-size: 1.34rem;
          }
        }

        .brand-meta {
          color: #D2C8B0;
          font-weight: 600;
          margin-top: 2px;
          white-space: nowrap;
          letter-spacing: 0.02em;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .brand-meta-desktop {
          display: none;
          font-size: 0.78rem;
        }
        .brand-meta-mobile {
          display: inline;
          font-size: 0.72rem;
        }
        @media (min-width: 640px) {
          .brand-meta-desktop {
            display: inline;
          }
          .brand-meta-mobile {
            display: none;
          }
        }

        /* Desktop Nav */
        .nav-desktop {
          display: none;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          min-width: 0;
        }
        @media (min-width: 1024px) {
          .nav-desktop {
            display: flex;
          }
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
        }
        @media (min-width: 1180px) {
          .nav-links {
            gap: 1.15rem;
          }
        }
        @media (min-width: 1280px) {
          .nav-links {
            gap: 1.5rem;
          }
        }
        @media (min-width: 1440px) {
          .nav-links {
            gap: 2rem;
          }
        }

        /* Interactive Nav Link Pill Hover Effect */
        .nav-link {
          font-size: 0.94rem;
          font-weight: 700;
          color: #F4EEDF;
          position: relative;
          padding: 0.45rem 0.85rem;
          white-space: nowrap;
          display: inline-block;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        @media (min-width: 1280px) {
          .nav-link {
            font-size: 0.98rem;
            padding: 0.5rem 0.95rem;
          }
        }
        .nav-link:hover {
          color: #FEF3C7;
          background-color: rgba(250, 246, 238, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0.85rem;
          right: 0.85rem;
          height: 2.5px;
          background: linear-gradient(90deg, #F59E0B 0%, #FEF08A 100%);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform var(--transition-fast);
          border-radius: var(--radius-full);
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.8);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        html[lang="te"] .nav-link {
          font-size: 0.88rem;
        }
        @media (min-width: 1280px) {
          html[lang="te"] .nav-link {
            font-size: 0.94rem;
          }
        }

        .nav-actions {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-left: 1.25rem;
        }
        @media (min-width: 1280px) {
          .nav-actions {
            margin-left: 1.75rem;
          }
        }

        /* Language Switcher Styling in Forest Green Header */
        .header-wrapper .language-switcher {
          background: rgba(250, 246, 238, 0.12);
          border: 1.5px solid rgba(250, 246, 238, 0.25);
          backdrop-filter: blur(8px);
          color: #FAF6EE;
        }
        .header-wrapper .language-switcher:hover {
          border-color: var(--color-golden-yellow);
          background: rgba(250, 246, 238, 0.2);
          box-shadow: 0 0 12px rgba(245, 158, 11, 0.35);
        }
        .header-wrapper .lang-icon {
          color: var(--color-golden-yellow-light);
        }
        .header-wrapper .lang-btn {
          color: #FAF6EE;
        }
        .header-wrapper .lang-btn:hover {
          color: #FEF3C7;
        }
        .header-wrapper .lang-btn--active {
          background: #FAF6EE;
          color: #072714;
          border-color: #FAF6EE;
          font-weight: 800;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        }
        .header-wrapper .lang-divider {
          color: rgba(250, 246, 238, 0.4);
        }

        /* Mobile Hamburger & Actions */
        .mobile-actions {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-shrink: 0;
          margin-left: auto;
          z-index: 10;
        }
        @media (min-width: 1024px) {
          .mobile-actions {
            display: none;
          }
        }

        /* Compact language switcher on mobile topbar */
        .mobile-lang-compact {
          padding: 0.22rem 0.45rem;
          border-radius: var(--radius-full);
          gap: 0.2rem;
          flex-shrink: 0;
        }
        .mobile-lang-compact .lang-icon {
          display: none;
        }
        .mobile-lang-compact .lang-btn {
          font-size: 0.76rem;
          padding: 0.15rem 0.35rem;
        }

        /* Interactive Hamburger Button */
        .hamburger-btn {
          color: #FAF6EE;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          background: rgba(250, 246, 238, 0.14);
          border: 1.5px solid var(--color-golden-yellow);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .hamburger-btn:hover,
        .hamburger-btn:active {
          background: #FAF6EE;
          color: #072714;
          transform: scale(1.06);
          box-shadow: 0 0 14px rgba(245, 158, 11, 0.5);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10000;
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
          background: rgba(7, 39, 20, 0.75);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
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
          width: 86%;
          max-width: 360px;
          background: #FAF6EE;
          box-shadow: -8px 0 35px rgba(7, 39, 20, 0.45);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform var(--transition-normal);
          overflow-y: auto;
          padding: 1.5rem;
          z-index: 10001;
        }
        .mobile-drawer--open .mobile-drawer__content {
          transform: translateX(0);
        }
        .mobile-drawer__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          margin: -1.5rem -1.5rem 1.25rem -1.5rem;
          background: linear-gradient(135deg, #072714 0%, #0D3B1F 100%);
          border-bottom: 2px solid var(--color-golden-yellow);
        }
        .mobile-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .mobile-logo {
          border-radius: 50%;
          border: 2px solid var(--color-golden-yellow);
          background: #FAF6EE;
        }
        .mobile-brand-title {
          font-size: 0.98rem;
          font-weight: 800;
          color: #FFFEFB;
        }
        .mobile-brand-sub {
          font-size: 0.75rem;
          color: #D2C8B0;
        }
        .drawer-close-btn {
          color: #FAF6EE;
          padding: 0.4rem;
          border-radius: var(--radius-full);
          background: rgba(250, 246, 238, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .drawer-close-btn:hover {
          color: #072714;
          background: #FAF6EE;
          transform: rotate(90deg);
        }
        .mobile-drawer__lang {
          margin: 1rem 0;
        }
        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex-grow: 1;
        }
        .mobile-nav-link {
          display: block;
          padding: 0.85rem 1rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0D3B1F;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          border: 1px solid transparent;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background-color: #EFE7D3;
          color: #072714;
          border-color: rgba(13, 59, 31, 0.15);
          transform: translateX(4px);
        }
        .mobile-drawer__footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1.5px solid #E5DAC1;
        }
        .mobile-cta-btn {
          width: 100%;
          background: var(--gradient-forest-vibrant);
          color: #FAF6EE;
        }
      `}</style>
    </header>
  );
};
