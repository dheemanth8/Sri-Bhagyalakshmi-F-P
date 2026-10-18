import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { BrandSection } from './sections/BrandSection';
import { ProductCategories } from './sections/ProductCategories';
import { LocationSection } from './sections/LocationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [selectedCategoryForEnquiry, setSelectedCategoryForEnquiry] = useState<string>('');
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('');

  return (
    <div className="app-layout">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Header & Sticky Navigation */}
      <Header />

      {/* Main Page Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <BrandSection onSelectProductForEnquiry={setSelectedProductForEnquiry} />
        <ProductCategories onSelectCategoryForEnquiry={setSelectedCategoryForEnquiry} />
        <LocationSection />
        <ContactSection
          key={`${selectedCategoryForEnquiry}-${selectedProductForEnquiry}`}
          selectedCategory={selectedCategoryForEnquiry}
          selectedProduct={selectedProductForEnquiry}
        />
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .skip-to-content {
          position: absolute;
          top: -100px;
          left: 1rem;
          background: var(--color-forest-green);
          color: #FFFFFF;
          padding: 0.5rem 1rem;
          z-index: 10000;
          font-weight: 700;
          border-radius: var(--radius-md);
          transition: top var(--transition-fast);
        }
        .skip-to-content:focus {
          top: 1rem;
        }
      `}</style>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
