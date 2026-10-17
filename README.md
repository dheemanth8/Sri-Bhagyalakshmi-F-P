# Sri Bhagyalakshmi Fertilizers & Pesticides
### శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్ (Estd. 1995)

> A production-grade, bilingual (English & Telugu), responsive web application for **Sri Bhagyalakshmi Fertilizers & Pesticides**, an agricultural retail business established in 1995.

---

## 🌟 Highlights

- **Bilingual Experience:** Instant, seamless switching between English and Telugu (`EN | తెలుగు`), with preference persisted in `localStorage`.
- **24 Official Brand Logos:** Bayer, Tata Chemicals, FMC, Corteva, ADAMA, Nova AgriTech, Prism, BASF, Indofil, NACL, Garudha/Gharda, Nichino, IAL, Coromandel International, GSP, Tropical Agrosystem, SPIC, NFL, FACT, KRIBHCO, IFFCO, Mahadhan, PPL, and IPL represented with original visual SVG/PNG/JPG brand logos.
- **Traditional Devotional Heritage:** Combined Lakshmi–Saraswati blessing banner and a custom circular 1995 establishment crest badge.
- **Agricultural Product Categories:** 6 image-based categories (Fertilizers, Crop Protection, Insecticides, Fungicides, Herbicides, Seeds) with active enquiry triggers.
- **Integrated Google Maps & GPS:** Verified store coordinates `15.134773946352793, 78.5041188937342` with an embedded map and direct navigation action.
- **Centralized Business Configuration:** Single source of truth in `src/data/business.ts` for configurable phone, WhatsApp, and store hours.

---

## 📁 Project Architecture & File Structure

```
sri-bhagyalakshmi/
├── index.html                           # SEO meta tags, Open Graph, Inter & Telugu fonts
├── package.json                         # Dependencies (React 19, Lucide React, Vite, TS)
├── tsconfig.json                        # Root TypeScript config
├── tsconfig.app.json                    # App TypeScript config
├── vite.config.ts                       # Vite configuration
├── public/
│   └── logo.jpg                         # Circular company emblem (Favicon & preview)
├── src/
│   ├── main.tsx                         # React entrypoint
│   ├── App.tsx                          # Main application layout and section assembly
│   ├── index.css                        # Global CSS entrypoint
│   │
│   ├── assets/
│   │   ├── images/                      # High-resolution agricultural imagery
│   │   │   ├── agricultural_hero.jpg    # Panoramic golden hour agricultural hero photo
│   │   │   ├── lakshmi_saraswati_banner.jpg # Traditional devotional heritage banner
│   │   │   ├── sri_bhagyalakshmi_logo.jpg   # Circular Estd. 1995 company seal badge
│   │   │   ├── cat_fertilizers.jpg      # Fertilizer granules & healthy crop rows
│   │   │   ├── cat_crop_protection.jpg  # Healthy foliage with morning dew droplets
│   │   │   ├── cat_insecticides.jpg     # Targeted crop protection mist
│   │   │   ├── cat_fungicides.jpg       # Disease-free green plant leaves
│   │   │   ├── cat_herbicides.jpg       # Clean, weed-free crop field rows
│   │   │   └── cat_seeds.jpg            # Certified agricultural crop seeds
│   │   └── logos/                       # 24 Official Brand Logos (Original SVG & PNG)
│   │       ├── bayer.svg                # Bayer CropScience official vector logo
│   │       ├── tata.svg                 # Tata Chemicals official vector logo
│   │       ├── fmc.svg                  # FMC Corporation official vector logo
│   │       ├── corteva.svg              # Corteva Agriscience official vector logo
│   │       ├── adama.svg                # ADAMA Agricultural Solutions official vector logo
│   │       ├── nova.png                 # Nova AgriTech Ltd. official transparent logo
│   │       ├── prism.png                # Prism Crop Science official logo
│   │       ├── basf.svg                 # BASF official vector logo
│   │       ├── indofil.png              # Indofil Industries official logo
│   │       ├── nacl.png                 # NACL Industries official logo
│   │       ├── garudha.png              # Gharda / Garuda Chemicals official logo
│   │       ├── nichino.png              # Nichino India official logo
│   │       ├── ial.png                  # India Pesticides Limited official logo
│   │       ├── coramandal.svg           # Coromandel International official vector logo
│   │       ├── gsp.png                  # GSP Crop Science official logo
│   │       ├── tropical.png             # Tropical Agrosystem official logo
│   │       ├── spic.svg                 # SPIC Fertilizers official vector logo
│   │       ├── nfl.svg                  # National Fertilizers Limited official vector logo
│   │       ├── fact.png                 # FACT Fertilizers official logo
│   │       ├── kribhco.png              # KRIBHCO official logo
│   │       ├── iffco.svg                # IFFCO official logo
│   │       ├── mahadhan.png             # Mahadhan (Deepak Fertilisers) official logo
│   │       ├── ppl.svg                  # Paradeep Phosphates Limited official vector logo
│   │       └── ipl.jpg                  # Indian Potash Limited official logo
│   │
│   ├── components/
│   │   ├── Header.tsx                   # Sticky nav, devotional topbar, mobile drawer
│   │   ├── LanguageSwitcher.tsx         # Accessible EN | తెలుగు toggle
│   │   ├── BrandCard.tsx                # Brand logo container with error fallback
│   │   ├── CategoryCard.tsx             # Image card with benefits list & enquire CTA
│   │   └── Footer.tsx                   # Dynamic copyright, brand mentions, location
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx              # Panoramic hero, 1995 badge, dual CTAs
│   │   ├── BrandSection.tsx             # Responsive grid of 7 official logos
│   │   ├── ProductCategories.tsx        # 6 category cards with enquire action
│   │   ├── AboutSection.tsx             # Estd. 1995 narrative & Lakshmi-Saraswati banner
│   │   ├── WhyChooseUs.tsx              # 4 value proposition cards
│   │   ├── LocationSection.tsx          # Embedded Google Map & Directions CTA
│   │   └── ContactSection.tsx           # Configurable contact & interactive enquiry form
│   │
│   ├── context/
│   │   ├── languageContextDefinition.ts # Context type and createContext definition
│   │   └── LanguageContext.tsx          # Language provider & localStorage persistence
│   │
│   ├── hooks/
│   │   └── useLanguage.ts               # Custom hook for active language & translations
│   │
│   ├── data/
│   │   ├── business.ts                  # Centralized business info & contact config
│   │   ├── brands.ts                    # 7 featured brands metadata
│   │   ├── categories.ts                # 6 product categories metadata
│   │   └── translations.ts              # Complete English & Telugu dictionary
│   │
│   └── styles/
│       ├── variables.css                # Brand color tokens & typography scale
│       └── global.css                   # Responsive layout, accessibility & resets
```

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v20+ LTS recommended)
- npm (v10+)

### Commands

```powershell
# 1. Install dependencies
npm install

# 2. Start the local development server (with HMR)
npm run dev

# 3. Create production bundle
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Run linter
npm run lint
```

---

## 🎨 Color Palette & Design Tokens

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Forest Green** | `#14532D` | Primary brand color, headers, CTAs |
| **Agricultural Green** | `#2E7D32` | Secondary accent, badges, icons |
| **Golden Yellow** | `#F4B942` | Heritage highlights, borders, primary buttons |
| **Warm Cream** | `#FFF9E8` | Card backgrounds, badge surfaces |
| **Dark Charcoal** | `#1F2937` | Typography, readable text |
| **White** | `#FFFFFF` | Card surfaces, clean logo containers |

---

## ⚙️ Configuration for Store Owner

To update contact numbers, street address, or operating hours, edit `src/data/business.ts`:

```typescript
export const businessData = {
  // ...
  contact: {
    phone: "91XXXXXXXXXX",          // Voice call number
    phoneDisplay: "+91 XXXXX XXXXX", // Display label
    whatsapp: "91XXXXXXXXXX",        // WhatsApp number
    whatsappDisplay: "+91 XXXXX XXXXX",
    addressEnglish: "Your street address here",
    addressTelugu: "మీ చిరునామా ఇక్కడ",
    openingHoursEnglish: "Mon - Sat: 8:00 AM - 8:00 PM",
    openingHoursTelugu: "సోమ - శని: ఉదయం 8:00 - రాత్రి 8:00",
    email: "contact@example.com",
  }
};
```
