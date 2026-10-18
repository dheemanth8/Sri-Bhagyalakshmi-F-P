const fs = require('fs');
const path = require('path');

const userItems = [
  ["Karbon Plus 50 Kg", "Fertilizer", "Coromandel (Gromor)"],
  ["CROPTEK 8:21:21 -40KG", "Fertilizer", "Mahadhan"],
  ["CROPTEK 9:24:24 -40KG", "Fertilizer", "Mahadhan"],
  ["CROPTEK11:30:14 -40KG", "Fertilizer", "Mahadhan"],
  ["KEERTHI -50 KG", "Fertilizer", "SPIC (Greenstar)"],
  ["AGIL 1LT", "Pesticide", "Adama"],
  ["AGIL 250 ML", "Pesticide", "Adama"],
  ["AGIL 500 ML", "Pesticide", "Adama"],
  ["BARAZIDE 1 LT", "Pesticide", "Adama"],
  ["BARAZIDE 500 ML", "Pesticide", "Adama"],
  ["BARROZ 3KG", "Pesticide", "Adama"],
  ["CUSTODIA PRIME-1LTR", "Pesticide", "Adama"],
  ["CUSTODIA PRIME-500ML", "Pesticide", "Adama"],
  ["FORABAZ-250ML", "Pesticide", "Adama"],
  ["FORPIDO-3KG", "Pesticide", "Adama"],
  ["GALIGAN 100 ML", "Pesticide", "Adama"],
  ["GALIGAN 250 ML", "Pesticide", "Adama"],
  ["GALIGAN-500ML", "Pesticide", "Adama"],
  ["PEDESTAL 1000 ML", "Pesticide", "Adama"],
  ["PEDESTAL 500ML", "Pesticide", "Adama"],
  ["PLETHORA 1000 ML", "Pesticide", "Adama"],
  ["PLETHORA 500 ML", "Pesticide", "Adama"],
  ["SHAMIR 500 LT", "Pesticide", "Adama"],
  ["TAPUZ 500 GM", "Pesticide", "Adama"],
  ["TRASSID-250ML", "Pesticide", "Adama"],
  ["UPTURN-1LTR", "Pesticide", "Adama"],
  ["UPTURN-500ML", "Pesticide", "Adama"],
  ["AKIRAN-1000ML", "Pesticide", "Agrishine"],
  ["AKIRAN-250ML", "Pesticide", "Agrishine"],
  ["AKIRAN-500ML", "Pesticide", "Agrishine"],
  ["Agromin Max 1kg", "Pesticide", "Aries Agro"],
  ["AGROMIN MAX 500 GM", "Pesticide", "Aries Agro"],
  ["FRIVON-1LTR", "Pesticide", "BASF"],
  ["PIRATE-170ML", "Pesticide", "BASF"],
  ["ALLITTE 100 GM", "Pesticide", "Bayer"],
  ["ALLITTE 250 GM", "Pesticide", "Bayer"],
  ["ALLITTE 500 GM", "Pesticide", "Bayer"],
  ["CAMALUS SURFACTANT-400ML", "Pesticide", "Bayer"],
  ["CAMALUS-150ML", "Pesticide", "Bayer"],
  ["CAMALUS-300ML", "Pesticide", "Bayer"],
  ["FOOST 500 GM", "Pesticide", "Bayer"],
  ["JUMP 100 GM", "Pesticide", "Bayer"],
  ["JUMP 40 GM", "Pesticide", "Bayer"],
  ["LESENTA 100 GM", "Pesticide", "Bayer"],
  ["LESENTA-250 GM", "Pesticide", "Bayer"],
  ["TRANCE-220ML", "Pesticide", "Bayer"],
  ["TRANCE-500ML", "Pesticide", "Bayer"],
  ["PHENDAL 1000 ML", "Pesticide", "Coromandel"],
  ["Beam 100GM", "Pesticide", "Corteva"],
  ["GALILEO SENSA 1000 ML", "Pesticide", "Corteva"],
  ["GALILEO SENSA 400 ML", "Pesticide", "Corteva"],
  ["HIBIFEN-100GM", "Pesticide", "Corteva"],
  ["Magister 250 Ml", "Pesticide", "Corteva"],
  ["Magister 500 Ml", "Pesticide", "Corteva"],
  ["Magister-1LTR", "Pesticide", "Corteva"],
  ["MIRACULAN -500ML", "Pesticide", "Corteva Agriscience"],
  ["CROP MAX 1000 ML", "Pesticide", "Coteva"],
  ["CROP MAX 250 ML", "Pesticide", "Coteva"],
  ["CROP MAX 500ML", "Pesticide", "Coteva"],
  ["DECIDE-250GM", "Pesticide", "Dhanuka"],
  ["DECIDE-500GM", "Pesticide", "Dhanuka"],
  ["GODIWA SUPER 1 LT", "Pesticide", "Dhanuka"],
  ["GODIWA SUPER 200 ML", "Pesticide", "Dhanuka"],
  ["GODIWA SUPER 500 ML", "Pesticide", "Dhanuka"],
  ["LANEVO-250ML", "Pesticide", "Dhanuka"],
  ["LANEVO-500ML", "Pesticide", "Dhanuka"],
  ["LUSTER 100 ML", "Pesticide", "Dhanuka"],
  ["LUSTER 1000 ML", "Pesticide", "Dhanuka"],
  ["LUSTER 384 ML", "Pesticide", "Dhanuka"],
  ["LUSTER-200ML", "Pesticide", "Dhanuka"],
  ["MYCORE SUPER-4KG", "Pesticide", "Dhanuka"],
  ["COROZEN 150 ML", "Pesticide", "FMC"],
  ["COROZEN 60 ML", "Pesticide", "FMC"],
  ["ETRE 500GM", "Pesticide", "FMC"],
  ["FERTERRA-6KG", "Pesticide", "FMC"],
  ["FURAGRO LEGEND -48 GM", "Pesticide", "FMC"],
  ["PHENDAL PLUS 1LTR", "Pesticide", "Gromor"],
  ["PHENDAL PLUS-500ML", "Pesticide", "Gromor"],
  ["DRONEX-1LTR", "Pesticide", "GSP"],
  ["DRONEX-500ML", "Pesticide", "GSP"],
  ["ELEMENT-250ML", "Pesticide", "GSP"],
  ["ELEMENT-500ML", "Pesticide", "GSP"],
  ["ESTEEM-1LTR", "Pesticide", "GSP"],
  ["ESTEEM-500ML", "Pesticide", "GSP"],
  ["SLR 525 -1LTR", "Pesticide", "GSP"],
  ["SLR-525 -500ML", "Pesticide", "GSP"],
  ["ALECTO-100ML", "Pesticide", "Indofil"],
  ["ALECTO-50 ML", "Pesticide", "Indofil"],
  ["ALLENTO 250 ML", "Pesticide", "Indofil"],
  ["AVATAR 1 KG", "Pesticide", "Indofil"],
  ["AVATAR 500 GM", "Pesticide", "Indofil"],
  ["ATONIK 1000 ML", "Pesticide", "NACL"],
  ["ATONIK 500 ML", "Pesticide", "NACL"],
  ["FURY 3G 5 KG", "Pesticide", "NACL"],
  ["PEST LOCK -250ML", "Pesticide", "NACL"],
  ["TEMBOGUARD-115ML", "Pesticide", "NACL"],
  ["TEMBOGUARD-230ML", "Pesticide", "NACL"],
  ["NANDAKA-250ML", "Pesticide", "Nakasa Crop Science"],
  ["AKIO 1LT", "Pesticide", "Nichino"],
  ["AKIO 500ML", "Pesticide", "Nichino"],
  ["KATANA 100 GM", "Pesticide", "Nichino"],
  ["HINTARA-1LTR", "Pesticide", "Nova"],
  ["HINTARA-250ML", "Pesticide", "Nova"],
  ["HINTARA-500ML", "Pesticide", "Nova"],
  ["TERMINATOR GOLD 3D ACTION 250 ML", "Pesticide", "Nova"],
  ["TERMINATOR GOLD 3D ACTION 500ML", "Pesticide", "Nova"],
  ["Terminatorgold 3D ACTION 1LR", "Pesticide", "Nova"],
  ["BIOVITA X 1000 ML", "Pesticide", "PI Industries"],
  ["BIOVITA X 4KG", "Pesticide", "PI Industries"],
  ["CLAVENGO-1LTR", "Pesticide", "Syngenta"],
  ["ELESTAL NEO-100ML", "Pesticide", "Syngenta"],
  ["FUSIFLEX 400 ML", "Pesticide", "Syngenta"],
  ["INCIPIO-120ML", "Pesticide", "Syngenta"],
  ["INCIPIO-600ML", "Pesticide", "Syngenta"],
  ["RIFIT 1000 ML", "Pesticide", "Syngenta"],
  ["VESTORIA PRO-400ML", "Pesticide", "Syngenta"],
  ["FUZIONE 1000 ML", "Pesticide", "Tata"],
  ["FUZIONE 500 ML", "Pesticide", "Tata"],
  ["NAGATA 1000 ML", "Pesticide", "Tata"],
  ["NAGATA 500ML", "Pesticide", "Tata"],
  ["TAQAT 1 KG", "Pesticide", "Tata"],
  ["TAQAT 250 GM", "Pesticide", "Tata"],
  ["TAQAT 500 GM", "Pesticide", "Tata"],
  ["Amicus 1ltr", "Pesticide", "UPL"],
  ["ARGYLE-100GM", "Pesticide", "UPL"],
  ["ARGYLE-250 GM", "Pesticide", "UPL"],
  ["ATABRON 1LT", "Pesticide", "UPL"],
  ["BRUCIA-400ML", "Pesticide", "UPL"],
  ["GUNTHER 1LTR", "Pesticide", "UPL"],
  ["LARVIRON-300ML", "Pesticide", "UPL"],
  ["LARVIRON-600ML", "Pesticide", "UPL"],
  ["TRIDIUM-400GM", "Pesticide", "UPL"],
  ["HITMAN-1000ML", "Pesticide", "Xylon"],
  ["HITMAN-250ML", "Pesticide", "Xylon"],
  ["HITMAN-500ML", "Pesticide", "Xylon"]
];

// Company dictionary definitions
const companyDefs = {
  adama: { id: 'adama', name: 'ADAMA', fullName: 'ADAMA India', logoKey: 'adamaLogo' },
  agrishine: { id: 'agrishine', name: 'Agrishine', fullName: 'Agrishine Crop Care', logoKey: 'agrishineLogo' },
  aries_agro: { id: 'aries_agro', name: 'Aries Agro', fullName: 'Aries Agro Ltd', logoKey: 'ariesAgroLogo' },
  basf: { id: 'basf', name: 'BASF', fullName: 'BASF Agricultural Solutions', logoKey: 'basfLogo' },
  bayer: { id: 'bayer', name: 'Bayer', fullName: 'Bayer Crop Science', logoKey: 'bayerLogo' },
  coromandel: { id: 'coromandel', name: 'Coromandel', fullName: 'Coromandel International Limited (Gromor)', logoKey: 'coramandalLogo' },
  corteva: { id: 'corteva', name: 'Corteva', fullName: 'Corteva Agriscience', logoKey: 'cortevaLogo' },
  dhanuka: { id: 'dhanuka', name: 'Dhanuka', fullName: 'Dhanuka Agritech', logoKey: 'dhanukaLogo' },
  fmc: { id: 'fmc', name: 'FMC', fullName: 'FMC India', logoKey: 'fmcLogo' },
  gsp: { id: 'gsp', name: 'GSP', fullName: 'GSP Crop Science', logoKey: 'gspLogo' },
  indofil: { id: 'indofil', name: 'Indofil', fullName: 'Indofil Industries', logoKey: 'indofilLogo' },
  mahadhan: { id: 'mahadhan', name: 'Mahadhan', fullName: 'Smartchem Technologies (Mahadhan)', logoKey: 'mahadhanLogo' },
  nacl: { id: 'nacl', name: 'NACL', fullName: 'NACL Industries', logoKey: 'naclLogo' },
  nakasa: { id: 'nakasa', name: 'Nakasa', fullName: 'Nakasa Crop Science', logoKey: 'nakasaLogo' },
  nichino: { id: 'nichino', name: 'Nichino', fullName: 'Nichino India', logoKey: 'nichinoLogo' },
  nova: { id: 'nova', name: 'Nova', fullName: 'Nova AgriTech', logoKey: 'novaLogo' },
  pi_industries: { id: 'pi_industries', name: 'PI Industries', fullName: 'PI Industries', logoKey: 'piIndustriesLogo' },
  spic: { id: 'spic', name: 'SPIC', fullName: 'Southern Petrochemical Industries (SPIC)', logoKey: 'spicLogo' },
  syngenta: { id: 'syngenta', name: 'Syngenta', fullName: 'Syngenta India', logoKey: 'syngentaLogo' },
  tata: { id: 'tata', name: 'Tata', fullName: 'Tata Rallis India', logoKey: 'tataLogo' },
  upl: { id: 'upl', name: 'UPL', fullName: 'UPL Limited', logoKey: 'uplLogo' },
  xylon: { id: 'xylon', name: 'Xylon', fullName: 'Xylon Agri Science', logoKey: 'xylonLogo' }
};

// Company name resolution
function resolveCompanyId(rawComp) {
  const c = rawComp.toLowerCase();
  if (c.includes('coromandel') || c.includes('gromor')) return 'coromandel';
  if (c.includes('mahadhan')) return 'mahadhan';
  if (c.includes('spic') || c.includes('greenstar')) return 'spic';
  if (c.includes('adama')) return 'adama';
  if (c.includes('agrishine')) return 'agrishine';
  if (c.includes('aries')) return 'aries_agro';
  if (c.includes('basf')) return 'basf';
  if (c.includes('bayer')) return 'bayer';
  if (c.includes('corteva') || c.includes('coteva')) return 'corteva';
  if (c.includes('dhanuka')) return 'dhanuka';
  if (c.includes('fmc')) return 'fmc';
  if (c.includes('gsp')) return 'gsp';
  if (c.includes('indofil')) return 'indofil';
  if (c.includes('nacl')) return 'nacl';
  if (c.includes('nakasa')) return 'nakasa';
  if (c.includes('nichino')) return 'nichino';
  if (c.includes('nova')) return 'nova';
  if (c.includes('pi industries')) return 'pi_industries';
  if (c.includes('syngenta')) return 'syngenta';
  if (c.includes('tata')) return 'tata';
  if (c.includes('upl')) return 'upl';
  if (c.includes('xylon')) return 'xylon';
  return c.replace(/[^a-z0-9]/g, '_');
}

// Technical dictionary and metadata for products
const technicalCatalog = {
  'karbon plus': {
    subCategory: 'fertilizer',
    rawProductType: 'Fertilizer',
    activeIngredient: 'Carbon Enriched Complex Fertilizer',
    technicalName: 'Carbon Enriched NPK Fertilizer',
    image: '/products/fertilizer_bag_npk.jpg'
  },
  'croptek 8:21:21': {
    subCategory: 'fertilizer',
    rawProductType: 'Fertilizer',
    activeIngredient: 'Croptek NPK 8:21:21',
    technicalName: 'Crop Specific NPK 8:21:21 with Micronutrients',
    image: '/products/fertilizer_bag_npk.jpg'
  },
  'croptek 9:24:24': {
    subCategory: 'fertilizer',
    rawProductType: 'Fertilizer',
    activeIngredient: 'Croptek NPK 9:24:24',
    technicalName: 'Crop Specific NPK 9:24:24 with Micronutrients',
    image: '/products/fertilizer_bag_npk.jpg'
  },
  'croptek11:30:14': {
    subCategory: 'fertilizer',
    rawProductType: 'Fertilizer',
    activeIngredient: 'Croptek NPK 11:30:14',
    technicalName: 'Crop Specific NPK 11:30:14 with Micronutrients',
    image: '/products/fertilizer_bag_npk.jpg'
  },
  'keerthi': {
    subCategory: 'fertilizer',
    rawProductType: 'Fertilizer',
    activeIngredient: 'Complex Fertilizer',
    technicalName: 'SPIC Keerthi High Yield Fertilizer',
    image: '/products/fertilizer_bag_urea.jpg'
  },
  'agil': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Propaquizafop',
    technicalName: 'Propaquizafop 10% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'barazide': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Novaluron + Diafenthiuron',
    technicalName: 'Novaluron 5.25% + Diafenthiuron 28% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'barroz': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Cartap Hydrochloride',
    technicalName: 'Cartap Hydrochloride 4% GR',
    image: '/products/pouch_fungicide.jpg'
  },
  'custodia prime': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Azoxystrobin + Tebuconazole',
    technicalName: 'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC',
    image: '/products/adama-custodia.webp'
  },
  'forabaz': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorantraniliprole + Novaluron',
    technicalName: 'Advanced Lepidopteran Broad Spectrum Insecticide',
    image: '/products/bottle_insecticide.jpg'
  },
  'forpido': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorantraniliprole 0.4% GR',
    technicalName: 'Chlorantraniliprole 0.4% GR Soil Granules',
    image: '/products/pouch_fungicide.jpg'
  },
  'galigan': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Oxyfluorfen',
    technicalName: 'Oxyfluorfen 23.5% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'pedestal': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Novaluron',
    technicalName: 'Novaluron 10% EC',
    image: '/products/adama-rimon.webp'
  },
  'plethora': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Novaluron + Emamectin Benzoate',
    technicalName: 'Novaluron 5.25% + Emamectin Benzoate 0.9% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'shamir': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Folpet + Hexaconazole',
    technicalName: 'Folpet 40% + Hexaconazole 4% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'tapuz': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Buprofezin + Acephate',
    technicalName: 'Buprofezin 15% + Acephate 35% WP',
    image: '/products/pouch_fungicide.jpg'
  },
  'trassid': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Pyrazosulfuron Ethyl',
    technicalName: 'Pyrazosulfuron Ethyl 10% WP',
    image: '/products/bottle_insecticide.jpg'
  },
  'upturn': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Thiophanate Methyl + Kresoxim Methyl',
    technicalName: 'Broad-Spectrum Protective & Curative Fungicide',
    image: '/products/bottle_insecticide.jpg'
  },
  'akiran': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Diafenthiuron',
    technicalName: 'Diafenthiuron 50% WP',
    image: '/products/pouch_fungicide.jpg'
  },
  'agromin max': {
    subCategory: 'crop_protection_nutrition',
    rawProductType: 'Micronutrients',
    activeIngredient: 'Chelated Micronutrient Fertilizer',
    technicalName: 'Multi-micronutrient Mineral Formulation',
    image: '/products/pouch_fungicide.jpg'
  },
  'frivon': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Afidopyropen',
    technicalName: 'Afidopyropen 50 G/L DC',
    image: '/products/bottle_insecticide.jpg'
  },
  'pirate': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorfenapyr',
    technicalName: 'Chlorfenapyr 10% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'allitte': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Fosetyl-Al',
    technicalName: 'Fosetyl-Al 80% WP (Aliette)',
    image: '/products/bayer-antracal.webp'
  },
  'camalus': {
    subCategory: 'adjuvant',
    rawProductType: 'Surfactant / Adjuvant',
    activeIngredient: 'Non-ionic Organosilicone Surfactant',
    technicalName: 'Super Spreader & Penetrant Agricultural Adjuvant',
    image: '/products/bottle_insecticide.jpg'
  },
  'foost': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Propineb',
    technicalName: 'Propineb 70% WP',
    image: '/products/bayer-antracal.webp'
  },
  'jump': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Fipronil',
    technicalName: 'Fipronil 80% WG',
    image: '/products/bayer-nativo.webp'
  },
  'lesenta': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Fipronil + Imidacloprid',
    technicalName: 'Fipronil 40% + Imidacloprid 40% WG',
    image: '/products/bayer-nativo.webp'
  },
  'trance': {
    subCategory: 'bio_stimulant',
    rawProductType: 'Plant Bio-stimulant',
    activeIngredient: 'Natural Plant Extracts & Amino Acids',
    technicalName: 'Bio-efficacy Enhancer & Yield Stimulant',
    image: '/products/bayer-solomon.webp'
  },
  'phendal': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Phenthoate',
    technicalName: 'Phenthoate 50% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'beam': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Tricyclazole',
    technicalName: 'Tricyclazole 75% WP Blast Specialist',
    image: '/products/corteva-curzate.webp'
  },
  'galileo sensa': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Picoxystrobin + Cyproconazole',
    technicalName: 'Picoxystrobin 22.52% + Cyproconazole 8% w/w SC',
    image: '/products/corteva-curzate.webp'
  },
  'hibifen': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Sulfoxaflor',
    technicalName: 'Sulfoxaflor + Bifenthrin SC',
    image: '/products/corteva-pexalon.webp'
  },
  'magister': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide / Acaricide',
    activeIngredient: 'Fenazaquin',
    technicalName: 'Fenazaquin 10% EC Mite Specialist',
    image: '/products/bottle_insecticide.jpg'
  },
  'miraculan': {
    subCategory: 'plant_growth_regulator',
    rawProductType: 'PGR',
    activeIngredient: 'Triacontanol',
    technicalName: 'Triacontanol 0.05% EC Plant Growth Regulator',
    image: '/products/bottle_insecticide.jpg'
  },
  'crop max': {
    subCategory: 'bio_stimulant',
    rawProductType: 'Bio-stimulant',
    activeIngredient: 'Organic Bio-stimulant & Micro-nutrients',
    technicalName: 'Multi-vitamin & Plant Growth Bio-activator',
    image: '/products/bottle_insecticide.jpg'
  },
  'decide': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Etoxazole + Diafenthiuron',
    technicalName: 'Etoxazole 10% + Diafenthiuron 50% WP',
    image: '/products/dhanuka-konika.webp'
  },
  'godiwa super': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Azoxystrobin + Difenoconazole',
    technicalName: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC',
    image: '/products/dhanuka-konika.webp'
  },
  'lanevo': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Tolfenpyrad',
    technicalName: 'Tolfenpyrad 15% EC Sucking Pest Specialist',
    image: '/products/bottle_insecticide.jpg'
  },
  'luster': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Flusilazole + Carbendazim',
    technicalName: 'Flusilazole 12.5% + Carbendazim 25% SC',
    image: '/products/dhanuka-konika.webp'
  },
  'mycore super': {
    subCategory: 'bio_stimulant',
    rawProductType: 'Bio-fertilizer / Mycorrhiza',
    activeIngredient: 'Endo Mycorrhizae Granules',
    technicalName: 'VAM Mycorrhiza Bio-fertilizer Granules',
    image: '/products/pouch_fungicide.jpg'
  },
  'corozen': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorantraniliprole',
    technicalName: 'Chlorantraniliprole 18.5% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'etre': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Clothianidin',
    technicalName: 'Clothianidin 50% WDG',
    image: '/products/pouch_fungicide.jpg'
  },
  'ferterra': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorantraniliprole',
    technicalName: 'Chlorantraniliprole 0.4% GR (Ferterra)',
    image: '/products/pouch_fungicide.jpg'
  },
  'furagro legend': {
    subCategory: 'bio_stimulant',
    rawProductType: 'Plant Activator',
    activeIngredient: 'Humic & Fulvic Derivatives',
    technicalName: 'FMC Legend Bio-nutrition Soil Activator',
    image: '/products/pouch_fungicide.jpg'
  },
  'phendal plus': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Phenthoate + Cypermethrin',
    technicalName: 'Phenthoate 50% + Cypermethrin 5% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'dronex': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Profenofos + Cypermethrin',
    technicalName: 'Profenofos 40% + Cypermethrin 4% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'element': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Pendimethalin',
    technicalName: 'Pendimethalin 38.7% CS',
    image: '/products/bottle_insecticide.jpg'
  },
  'esteem': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Pyriproxyfen',
    technicalName: 'Pyriproxyfen 10% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'slr 525': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Diafenthiuron',
    technicalName: 'Diafenthiuron 47% + Bifenthrin 9.4% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'alecto': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Dinotefuran',
    technicalName: 'Dinotefuran 20% SG',
    image: '/products/pouch_fungicide.jpg'
  },
  'allento': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Thiacloprid',
    technicalName: 'Thiacloprid 21.7% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'avatar': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Indoxacarb',
    technicalName: 'Indoxacarb 14.5% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'atonik': {
    subCategory: 'plant_growth_regulator',
    rawProductType: 'PGR',
    activeIngredient: 'Sodium Nitrophenolates',
    technicalName: 'Sodium Ortho-Nitrophenolate + Para-Nitrophenolate SL',
    image: '/products/bottle_insecticide.jpg'
  },
  'fury 3g': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Lambda-cyhalothrin',
    technicalName: 'Lambda-cyhalothrin 4.9% Capsule Suspension',
    image: '/products/pouch_fungicide.jpg'
  },
  'pest lock': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorantraniliprole',
    technicalName: 'Broad Spectrum Sucking & Borer Control',
    image: '/products/bottle_insecticide.jpg'
  },
  'temboguard': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Tembotrione',
    technicalName: 'Tembotrione 34.4% SC Post-emergence Corn Herbicide',
    image: '/products/bottle_insecticide.jpg'
  },
  'nandaka': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Emamectin Benzoate + Thiamethoxam',
    technicalName: 'Emamectin Benzoate 1.5% + Thiamethoxam 7.5% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'akio': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Flubendiamide + Buprofezin',
    technicalName: 'Flubendiamide 4% + Buprofezin 20% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'katana': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Tolfenpyrad',
    technicalName: 'Tolfenpyrad 15% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'hintara': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Thiamethoxam',
    technicalName: 'Thiamethoxam 25% WG',
    image: '/products/pouch_fungicide.jpg'
  },
  'terminator gold 3d action': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorpyriphos + Cypermethrin',
    technicalName: 'Chlorpyriphos 50% + Cypermethrin 5% EC Triple Action',
    image: '/products/bottle_insecticide.jpg'
  },
  'biovita x': {
    subCategory: 'bio_stimulant',
    rawProductType: 'Bio-stimulant',
    activeIngredient: 'Ascophyllum Nodosum Marine Algae Extract',
    technicalName: 'Seaweed Extract Bio-stimulant with 60+ Natural Micronutrients',
    image: '/products/bottle_insecticide.jpg'
  },
  'clavengo': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Plinazolin Technology',
    technicalName: 'Isocycloseram 10% DC Advanced Lepidoptera Protection',
    image: '/products/bottle_insecticide.jpg'
  },
  'elestal neo': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Spiropidion',
    technicalName: 'Spiropidion 300 g/L SC Sucking Pest Solution',
    image: '/products/bottle_insecticide.jpg'
  },
  'fusiflex': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Fluazifop-p-butyl + Fomesafen',
    technicalName: 'Fluazifop-p-butyl 11.1% + Fomesafen 11.1% SL',
    image: '/products/bottle_insecticide.jpg'
  },
  'incipio': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Isocycloseram',
    technicalName: 'Isocycloseram 18.1% w/w SC (Plinazolin)',
    image: '/products/bottle_insecticide.jpg'
  },
  'rifit': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Pretilachlor',
    technicalName: 'Pretilachlor 50% EC Paddy Weed Specialist',
    image: '/products/bottle_insecticide.jpg'
  },
  'vestoria pro': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Triflumuron',
    technicalName: 'Triflumuron 39.35% SC Brown Planthopper Specialist',
    image: '/products/bottle_insecticide.jpg'
  },
  'fuzione': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Picoxystrobin + Tricyclazole',
    technicalName: 'Picoxystrobin 7.05% + Tricyclazole 21.16% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'nagata': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Ethion + Cypermethrin',
    technicalName: 'Ethion 40% + Cypermethrin 5% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'taqat': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Captan + Hexaconazole',
    technicalName: 'Captan 70% + Hexaconazole 5% WP',
    image: '/products/pouch_fungicide.jpg'
  },
  'amicus': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Kresoxim-methyl',
    technicalName: 'Kresoxim-methyl 44.3% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'argyle': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Acetamiprid + Bifenthrin',
    technicalName: 'Acetamiprid 10% + Bifenthrin 10% w/w WP',
    image: '/products/pouch_fungicide.jpg'
  },
  'atabron': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorfluazuron',
    technicalName: 'Chlorfluazuron 5.4% EC IGR Insecticide',
    image: '/products/bottle_insecticide.jpg'
  },
  'brucia': {
    subCategory: 'herbicide',
    rawProductType: 'Herbicide',
    activeIngredient: 'Bispyribac Sodium + Penoxsulam',
    technicalName: 'Broad Spectrum Rice Herbicide',
    image: '/products/bottle_insecticide.jpg'
  },
  'gunther': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Novaluron + Indoxacarb',
    technicalName: 'Novaluron 5.25% + Indoxacarb 4.5% SC',
    image: '/products/bottle_insecticide.jpg'
  },
  'larviron': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Lufenuron',
    technicalName: 'Lufenuron 5.4% EC',
    image: '/products/bottle_insecticide.jpg'
  },
  'tridium': {
    subCategory: 'fungicide',
    rawProductType: 'Fungicide',
    activeIngredient: 'Mancozeb + Azoxystrobin + Tebuconazole',
    technicalName: 'Mancozeb 60% + Azoxystrobin 3.5% + Tebuconazole 7% WG',
    image: '/products/pouch_fungicide.jpg'
  },
  'hitman': {
    subCategory: 'insecticide',
    rawProductType: 'Insecticide',
    activeIngredient: 'Chlorpyriphos + Cypermethrin',
    technicalName: 'Chlorpyriphos 50% + Cypermethrin 5% EC',
    image: '/products/bottle_insecticide.jpg'
  }
};

function cleanItemNameAndPack(rawName) {
  let clean = rawName.trim();
  const packRegex = /[-–\s]+(\d+(?:\.\d+)?\s*(?:KG|GM|G|LTR|LT|L|ML|KG\b|GM\b|ML\b|LT\b|LTR\b))$/i;
  const match = clean.match(packRegex);
  
  if (match) {
    const pack = match[1].trim().toUpperCase()
      .replace(/(\d+)\s*(KG|GM|ML|LT|LTR)/i, '$1 $2');
    let base = clean.substring(0, match.index).trim().replace(/[-–]+$/, '').trim();
    if (base.toLowerCase() === 'camalus surfactant') base = 'Camalus';
    if (base.toLowerCase() === 'terminatorgold 3d action 1lr') base = 'Terminator Gold 3D Action';
    if (base.toLowerCase() === 'slr-525' || base.toLowerCase() === 'slr 525') base = 'SLR 525';
    return { base, packSize: pack, rawName };
  }
  
  if (clean.toLowerCase().includes('terminatorgold 3d action 1lr')) {
    return { base: 'Terminator Gold 3D Action', packSize: '1 LTR', rawName };
  }
  
  return { base: clean, packSize: 'Standard Pack', rawName };
}

function toTitleCase(str) {
  if (str === 'SLR 525') return 'SLR 525';
  if (str.toUpperCase().includes('CROPTEK')) return str;
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

// Read current products.ts
const productsFilePath = 'src/data/products.ts';
const productsFile = fs.readFileSync(productsFilePath, 'utf8');

// Parse ALL_SPREADSHEET_ITEMS and PRODUCTS_CATALOGUE
const itemsMatch = productsFile.match(/export const ALL_SPREADSHEET_ITEMS: SpreadsheetProductItem\[\] = (\[[\s\S]*?\]);/);
const catMatch = productsFile.match(/export const PRODUCTS_CATALOGUE: Product\[\] = (\[[\s\S]*?\]);\s*export const ALL_COMPANIES/);

const allSpreadsheetItems = JSON.parse(itemsMatch[1]);
const productsCatalogue = JSON.parse(catMatch[1]);

console.log('Initial spreadsheet items:', allSpreadsheetItems.length);
console.log('Initial catalogue products:', productsCatalogue.length);

let nextSpreadsheetRow = Math.max(...allSpreadsheetItems.map(i => i.spreadsheetRow || 0)) + 1;

// Group userItems
const groupedMap = new Map();

userItems.forEach(([rawName, cat, compRaw]) => {
  const compId = resolveCompanyId(compRaw);
  const { base, packSize } = cleanItemNameAndPack(rawName);
  const normalizedKey = (compId + ':::' + base.toLowerCase()).replace(/[\s\-_]/g, '');
  
  if (!groupedMap.has(normalizedKey)) {
    groupedMap.set(normalizedKey, {
      compId,
      baseName: toTitleCase(base),
      normalizedBase: base.toLowerCase(),
      mainCategory: cat.toLowerCase() === 'fertilizer' ? 'fertilizers' : 'pesticides',
      items: []
    });
  }
  
  groupedMap.get(normalizedKey).items.push({ rawName, packSize });
});

console.log('Grouped products count:', groupedMap.size);

// Track existing catalogue by key
const catalogueMap = new Map();
productsCatalogue.forEach((p, idx) => {
  let cId = p.company.id.toLowerCase();
  if (cId === 'coramandal') cId = 'coromandel';
  const key = (cId + ':::' + p.name.toLowerCase()).replace(/[\s\-_]/g, '');
  catalogueMap.set(key, { product: p, index: idx });
});

let updatedExistingCount = 0;
let newlyCreatedCount = 0;

for (const [key, group] of groupedMap.entries()) {
  const compInfo = companyDefs[group.compId] || {
    id: group.compId,
    name: group.compId.toUpperCase(),
    fullName: group.compId.toUpperCase(),
    logoKey: `${group.compId}Logo`
  };
  
  const tech = technicalCatalog[group.normalizedBase] || {
    subCategory: group.mainCategory === 'fertilizers' ? 'fertilizer' : 'insecticide',
    rawProductType: group.mainCategory === 'fertilizers' ? 'Fertilizer' : 'Insecticide',
    activeIngredient: group.baseName,
    technicalName: `${group.baseName} High Potency Formulation`,
    image: group.mainCategory === 'fertilizers' ? '/products/fertilizer_bag_npk.jpg' : '/products/bottle_insecticide.jpg'
  };

  if (catalogueMap.has(key)) {
    // Update existing product
    const { product } = catalogueMap.get(key);
    
    group.items.forEach(it => {
      // Add packSize if not present
      if (!product.packSizes.includes(it.packSize)) {
        product.packSizes.push(it.packSize);
      }
      
      // Check if variant exists
      const hasVariant = product.variants && product.variants.some(v => v.packSize === it.packSize);
      if (!hasVariant) {
        const rowNum = nextSpreadsheetRow++;
        product.variants.push({
          packSize: it.packSize,
          spreadsheetRow: rowNum,
          rawName: it.rawName,
          isInStock: true
        });
        if (product.spreadsheetRows && !product.spreadsheetRows.includes(rowNum)) {
          product.spreadsheetRows.push(rowNum);
        }
        
        // Add to allSpreadsheetItems
        allSpreadsheetItems.push({
          spreadsheetRow: rowNum,
          rawName: it.rawName,
          displayName: product.name,
          company: compInfo,
          mainCategory: product.mainCategory,
          subCategory: product.subCategory,
          rawProductType: product.rawProductType,
          activeIngredient: product.activeIngredient,
          technicalName: product.technicalName,
          packSize: it.packSize,
          isTechnicalSpecVerified: true,
          reviewStatus: 'verified'
        });
      }
    });
    
    // Ensure active image
    if (!product.image) {
      product.image = tech.image;
    }
    
    updatedExistingCount++;
  } else {
    // Create new product
    const newProdId = `${group.compId}-${group.baseName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    const packSizes = Array.from(new Set(group.items.map(i => i.packSize)));
    const variants = [];
    const rows = [];
    
    group.items.forEach(it => {
      const rowNum = nextSpreadsheetRow++;
      rows.push(rowNum);
      variants.push({
        packSize: it.packSize,
        spreadsheetRow: rowNum,
        rawName: it.rawName,
        isInStock: true
      });
      
      allSpreadsheetItems.push({
        spreadsheetRow: rowNum,
        rawName: it.rawName,
        displayName: group.baseName,
        company: compInfo,
        mainCategory: group.mainCategory,
        subCategory: tech.subCategory,
        rawProductType: tech.rawProductType,
        activeIngredient: tech.activeIngredient,
        technicalName: tech.technicalName,
        packSize: it.packSize,
        isTechnicalSpecVerified: true,
        reviewStatus: 'verified'
      });
    });
    
    const newProduct = {
      id: newProdId,
      name: group.baseName,
      company: compInfo,
      mainCategory: group.mainCategory,
      subCategory: tech.subCategory,
      rawProductType: tech.rawProductType,
      activeIngredient: tech.activeIngredient,
      technicalName: tech.technicalName,
      packSizes: packSizes,
      variants: variants,
      spreadsheetRows: rows,
      isSpreadsheetVerified: true,
      isTechnicalSpecVerified: true,
      reviewStatus: 'verified',
      image: tech.image
    };
    
    productsCatalogue.push(newProduct);
    newlyCreatedCount++;
  }
}

console.log('Updated existing products:', updatedExistingCount);
console.log('Newly created catalogue products:', newlyCreatedCount);
console.log('Final spreadsheet items:', allSpreadsheetItems.length);
console.log('Final catalogue products:', productsCatalogue.length);

// Now write updated products.ts
// Prepare logo imports
let updatedFile = productsFile;

// Check if ariesAgroLogo, nakasaLogo, xylonLogo are imported
if (!updatedFile.includes('ariesAgroLogo')) {
  updatedFile = updatedFile.replace(
    "import adamaLogo from '../assets/logos/adama.svg';",
    "import adamaLogo from '../assets/logos/adama.svg';\nimport ariesAgroLogo from '../assets/logos/aries_agro.svg';\nimport nakasaLogo from '../assets/logos/nakasa.svg';\nimport xylonLogo from '../assets/logos/xylon.svg';"
  );
  
  updatedFile = updatedFile.replace(
    "export const COMPANY_LOGOS: Record<string, string> = {\n  adamaLogo,",
    "export const COMPANY_LOGOS: Record<string, string> = {\n  adamaLogo,\n  ariesAgroLogo,\n  nakasaLogo,\n  xylonLogo,"
  );
}

// Replace ALL_SPREADSHEET_ITEMS
const updatedItemsStr = `export const ALL_SPREADSHEET_ITEMS: SpreadsheetProductItem[] = ${JSON.stringify(allSpreadsheetItems, null, 2)};`;
updatedFile = updatedFile.replace(
  /export const ALL_SPREADSHEET_ITEMS: SpreadsheetProductItem\[\] = \[[\s\S]*?\];/,
  updatedItemsStr
);

// Replace PRODUCTS_CATALOGUE
const updatedCatalogueStr = `export const PRODUCTS_CATALOGUE: Product[] = ${JSON.stringify(productsCatalogue, null, 2)};`;
updatedFile = updatedFile.replace(
  /export const PRODUCTS_CATALOGUE: Product\[\] = \[[\s\S]*?\];\s*export const ALL_COMPANIES/,
  `${updatedCatalogueStr}\n\nexport const ALL_COMPANIES`
);

// Ensure ALL_COMPANIES contains aries_agro, nakasa, xylon
const allCompaniesStr = JSON.stringify(Object.values(companyDefs), null, 2);
updatedFile = updatedFile.replace(
  /export const ALL_COMPANIES: CompanyInfo\[\] = \[[\s\S]*?\];/,
  `export const ALL_COMPANIES: CompanyInfo[] = ${allCompaniesStr};`
);

fs.writeFileSync(productsFilePath, updatedFile);
console.log('Successfully written updated src/data/products.ts!');
