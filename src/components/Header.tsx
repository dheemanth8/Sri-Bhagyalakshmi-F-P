import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { businessData } from '../data/business';
import { LanguageSwitcher } from './LanguageSwitcher';
import logoImg from '../assets/images/sri_bhagyalakshmi_logo.png';
import logoImgWebp128 from '../assets/images/sri_bhagyalakshmi_logo-128.webp';
import headerBgImg from '../assets/images/agricultural_hero-640.webp';
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
    <header
      className="header-wrapper"
      style={{ '--header-bg-img': `url(${headerBgImg})` } as React.CSSProperties}
    >
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

        /* Main Nav - Cute & Professional Frosted Cream with Translucent Background Image */
        .main-nav {
          position: relative;
          background-color: rgba(255, 253, 249, 0.88);
          background-image: 
            linear-gradient(135deg, rgba(255, 253, 249, 0.91) 0%, rgba(254, 243, 199, 0.85) 50%, rgba(255, 237, 213, 0.82) 100%),
            var(--header-bg-img);
          background-size: cover;
          background-position: center 30%;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 2px solid rgba(245, 158, 11, 0.35);
          box-shadow: 0 4px 20px rgba(180, 83, 9, 0.08);
          transition: all var(--transition-normal);
        }
        .main-nav--scrolled {
          background-color: rgba(255, 253, 249, 0.95);
          background-image: 
            linear-gradient(135deg, rgba(255, 253, 249, 0.96) 0%, rgba(254, 243, 199, 0.92) 100%),
            var(--header-bg-img);
          box-shadow: 0 8px 30px rgba(180, 83, 9, 0.12);
          border-bottom-color: rgba(245, 158, 11, 0.5);
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
          gap: 0.85rem;
          text-decoration: none;
          min-width: 0;
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .brand-identity:hover {
          transform: translateY(-1px) scale(1.01);
        }
        @media (min-width: 640px) {
          .brand-identity {
            gap: 0.95rem;
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
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          border: 2px solid var(--color-primary);
          overflow: hidden;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15), 0 3px 10px rgba(120, 53, 15, 0.08);
          flex-shrink: 0;
          background: #FFFFFF;
          transition: transform var(--transition-bouncy), box-shadow var(--transition-bouncy);
        }
        .brand-identity:hover .logo-box {
          transform: scale(1.06) rotate(3deg);
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.25), 0 4px 14px rgba(234, 88, 12, 0.2);
        }
        @media (min-width: 640px) {
          .logo-box {
            width: 52px;
            height: 52px;
          }
        }
        @media (min-width: 1280px) {
          .logo-box {
            width: 56px;
            height: 56px;
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
          font-family: var(--font-sans);
          font-size: 1.22rem;
          font-weight: 800;
          color: var(--color-text-main);
          letter-spacing: -0.01em;
        }
        .brand-name-te {
          font-size: 1.26rem;
          font-weight: 800;
          color: var(--color-primary-dark);
        }
        @media (min-width: 640px) {
          .brand-name-en {
            font-size: 1.32rem;
          }
          .brand-name-te {
            font-size: 1.36rem;
          }
        }
        @media (min-width: 1280px) {
          .brand-name-en {
            font-size: 1.38rem;
          }
          .brand-name-te {
            font-size: 1.42rem;
          }
        }

        .brand-meta {
          color: var(--color-text-muted);
          font-weight: 600;
          margin-top: 2px;
          white-space: nowrap;
          letter-spacing: 0.01em;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .brand-meta-desktop {
          display: none;
          font-size: 0.78rem;
        }
        .brand-meta-mobile {
          display: inline;
          font-size: 0.74rem;
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
          gap: 0.65rem;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
        }
        @media (min-width: 1180px) {
          .nav-links {
            gap: 0.95rem;
          }
        }
        @media (min-width: 1280px) {
          .nav-links {
            gap: 1.25rem;
          }
        }
        @media (min-width: 1440px) {
          .nav-links {
            gap: 1.65rem;
          }
        }

        /* Cute Nav Link Pill */
        .nav-link {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-text-secondary);
          position: relative;
          padding: 0.45rem 0.95rem;
          white-space: nowrap;
          display: inline-block;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        @media (min-width: 1280px) {
          .nav-link {
            font-size: 0.96rem;
            padding: 0.5rem 1.05rem;
          }
        }
        .nav-link:hover {
          color: var(--color-primary-dark);
          background-color: var(--color-butter-light);
          transform: translateY(-1px);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 0.95rem;
          right: 0.95rem;
          height: 2.5px;
          background: var(--gradient-honey);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform var(--transition-fast);
          border-radius: var(--radius-full);
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.7);
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

        /* Language Switcher Styling in Header */
        .header-wrapper .language-switcher {
          background: var(--color-butter-surface);
          border: 1.5px solid rgba(245, 158, 11, 0.35);
          backdrop-filter: blur(8px);
          color: var(--color-text-main);
          box-shadow: 0 2px 6px rgba(120, 53, 15, 0.04);
        }
        .header-wrapper .language-switcher:hover {
          border-color: var(--color-primary);
          background: var(--color-butter-light);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.25);
        }
        .header-wrapper .lang-icon {
          color: var(--color-primary);
        }
        .header-wrapper .lang-btn {
          color: var(--color-text-secondary);
        }
        .header-wrapper .lang-btn:hover {
          color: var(--color-primary-dark);
        }
        .header-wrapper .lang-btn--active {
          background: var(--gradient-honey);
          color: #FFFFFF;
          border-color: transparent;
          font-weight: 800;
          box-shadow: 0 2px 6px rgba(234, 88, 12, 0.3);
        }
        .header-wrapper .lang-divider {
          color: rgba(245, 158, 11, 0.4);
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

        /* Cute Hamburger Button */
        .hamburger-btn {
          color: var(--color-primary-dark);
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          background: var(--color-butter-light);
          border: 1.5px solid var(--color-primary);
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.15);
          flex-shrink: 0;
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .hamburger-btn:hover,
        .hamburger-btn:active {
          background: var(--gradient-honey);
          color: #FFFFFF;
          transform: scale(1.05);
          border-color: var(--color-primary);
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
          background: rgba(41, 37, 36, 0.6);
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
          background: #FFFDF9;
          box-shadow: -8px 0 35px rgba(120, 53, 15, 0.15);
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
          background-image: 
            linear-gradient(135deg, rgba(255, 251, 235, 0.94) 0%, rgba(254, 243, 199, 0.90) 100%),
            var(--header-bg-img);
          background-size: cover;
          background-position: center;
          border-bottom: 2px solid var(--color-primary);
        }
        .mobile-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .mobile-logo {
          border-radius: 50%;
          border: 2px solid var(--color-primary);
          background: #FFFFFF;
        }
        .mobile-brand-title {
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--color-text-main);
        }
        .mobile-brand-sub {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .drawer-close-btn {
          color: var(--color-primary-dark);
          padding: 0.4rem;
          border-radius: var(--radius-full);
          background: #FDE68A;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .drawer-close-btn:hover {
          color: #FFFFFF;
          background: var(--color-primary);
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
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--color-text-main);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          border: 1px solid transparent;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background-color: var(--color-butter-light);
          color: var(--color-primary-dark);
          border-color: rgba(245, 158, 11, 0.25);
          transform: translateX(4px);
        }
        .mobile-drawer__footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1.5px solid var(--color-border-subtle);
        }
        .mobile-cta-btn {
          width: 100%;
          background: var(--gradient-honey);
          color: #FFFFFF;
        }
      `}</style>
    </header>
  );
};
