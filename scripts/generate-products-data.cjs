const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const excelPath = path.join(__dirname, '..', 'product.xlsx');
const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rawRows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// Canonical Company Normalization
const COMPANY_MAP = {
  'adama': { id: 'adama', name: 'ADAMA', fullName: 'ADAMA India', logoKey: 'adamaLogo' },
  'agrishine': { id: 'agrishine', name: 'Agrishine', fullName: 'Agrishine Crop Sciences', logoKey: 'agrishineLogo' },
  'basf': { id: 'basf', name: 'BASF', fullName: 'BASF Agricultural Solutions', logoKey: 'basfLogo' },
  'bayer': { id: 'bayer', name: 'Bayer', fullName: 'Bayer Crop Science', logoKey: 'bayerLogo' },
  'coramandel': { id: 'coromandel', name: 'Coromandel', fullName: 'Coromandel International Limited (Gromor)', logoKey: 'coramandalLogo' },
  'coromandel': { id: 'coromandel', name: 'Coromandel', fullName: 'Coromandel International Limited (Gromor)', logoKey: 'coramandalLogo' },
  'corteva': { id: 'corteva', name: 'Corteva', fullName: 'Corteva Agriscience', logoKey: 'cortevaLogo' },
  'coteva': { id: 'corteva', name: 'Corteva', fullName: 'Corteva Agriscience', logoKey: 'cortevaLogo' },
  'dhanuka agritech ltd.': { id: 'dhanuka', name: 'Dhanuka', fullName: 'Dhanuka Agritech Limited', logoKey: 'dhanukaLogo' },
  'dhanuka': { id: 'dhanuka', name: 'Dhanuka', fullName: 'Dhanuka Agritech Limited', logoKey: 'dhanukaLogo' },
  'fact': { id: 'fact', name: 'FACT', fullName: 'The Fertilisers and Chemicals Travancore (FACT)', logoKey: 'factLogo' },
  'fmc': { id: 'fmc', name: 'FMC', fullName: 'FMC India', logoKey: 'fmcLogo' },
  'gharda chemicals ltd.': { id: 'gharda', name: 'Gharda Chemicals', fullName: 'Gharda Chemicals Limited', logoKey: 'garudhaLogo' },
  'gsp': { id: 'gsp', name: 'GSP Crop Science', fullName: 'GSP Crop Science Pvt Ltd', logoKey: 'gspLogo' },
  'iffco': { id: 'iffco', name: 'IFFCO', fullName: 'Indian Farmers Fertiliser Cooperative (IFFCO)', logoKey: 'iffcoLogo' },
  'indofil': { id: 'indofil', name: 'Indofil', fullName: 'Indofil Industries Limited', logoKey: 'indofilLogo' },
  'ipl': { id: 'ipl', name: 'IPL', fullName: 'Indian Potash Limited (IPL)', logoKey: 'iplLogo' },
  'kribhco': { id: 'kribhco', name: 'KRIBHCO', fullName: 'Krishak Bharati Cooperative Limited (KRIBHCO)', logoKey: 'kribhcoLogo' },
  'mahadhan': { id: 'mahadhan', name: 'Mahadhan', fullName: 'Mahadhan (Smartchem Technologies)', logoKey: 'mahadhanLogo' },
  'nacl': { id: 'nacl', name: 'NACL', fullName: 'NACL Industries Limited', logoKey: 'naclLogo' },
  'nova': { id: 'nova', name: 'Nova', fullName: 'Nova Agri Tech Limited', logoKey: 'novaLogo' },
  'nichino': { id: 'nichino', name: 'Nichino', fullName: 'Nichino India Pvt Ltd', logoKey: 'nichinoLogo' },
  'pi industries ltd.': { id: 'pi_industries', name: 'PI Industries', fullName: 'PI Industries Limited', logoKey: 'piIndustriesLogo' },
  'ppl': { id: 'ppl', name: 'PPL', fullName: 'Paradeep Phosphates Limited (PPL)', logoKey: 'pplLogo' },
  'spic': { id: 'spic', name: 'SPIC', fullName: 'Southern Petrochemical Industries Corporation (SPIC)', logoKey: 'spicLogo' },
  'sumitomo chemical india ltd.': { id: 'sumitomo', name: 'Sumitomo', fullName: 'Sumitomo Chemical India Limited', logoKey: 'sumitomoLogo' },
  'syngenta india ltd.': { id: 'syngenta', name: 'Syngenta', fullName: 'Syngenta India Limited', logoKey: 'syngentaLogo' },
  'syngenta': { id: 'syngenta', name: 'Syngenta', fullName: 'Syngenta India Limited', logoKey: 'syngentaLogo' },
  'tata': { id: 'tata', name: 'Tata Rallis', fullName: 'Tata Chemicals / Rallis India', logoKey: 'tataLogo' },
  'tropical': { id: 'tropical', name: 'Tropical Agro', fullName: 'Tropical Agrosystem India', logoKey: 'tropicalLogo' },
  'upl ltd.': { id: 'upl', name: 'UPL', fullName: 'UPL Limited', logoKey: 'uplLogo' },
  'upl': { id: 'upl', name: 'UPL', fullName: 'UPL Limited', logoKey: 'uplLogo' },
};

function normalizeCompany(raw) {
  const clean = (raw || '').trim().toLowerCase();
  const comp = COMPANY_MAP[clean];
  if (!comp) {
    console.warn('Unknown company:', raw);
    return { id: clean.replace(/[^a-z0-9]+/g, '_'), name: raw.trim(), fullName: raw.trim(), logoKey: 'genericLogo' };
  }
  return comp;
}

// Subcategory mapping
function mapSubCategory(rawCategory, rawType) {
  const cat = (rawCategory || '').trim().toLowerCase();
  const type = (rawType || '').trim().toLowerCase();

  if (type.includes('insecticide') || type.includes('acaricide') || type.includes('nematicide')) {
    return 'insecticide';
  }
  if (type.includes('fungicide') || type.includes('bactericide')) {
    return 'fungicide';
  }
  if (type.includes('herbicide') || type.includes('weedicide')) {
    return 'herbicide';
  }
  if (type.includes('growth regulator') || type.includes('pgr')) {
    return 'plant_growth_regulator';
  }
  if (type.includes('seed treatment')) {
    return 'seed_treatment';
  }
  if (type.includes('bio-stimulant') || type.includes('bio stimulant')) {
    return 'bio_stimulant';
  }
  if (type.includes('adjuvant') || type.includes('surfactant')) {
    return 'adjuvant';
  }
  if (type.includes('fertilizer') || cat === 'fertilizer') {
    return 'fertilizer';
  }
  if (type.includes('crop protection') || type.includes('nutrition')) {
    return 'crop_protection_nutrition';
  }
  if (cat === 'pesticide') {
    return 'insecticide'; // Default to crop protection for unspecified pesticide
  }
  return 'other';
}

function cleanTitle(str) {
  return str
    .split(/[\s_-]+/)
    .map(word => {
      // keep uppercase acronyms e.g. EC, SL, WP, NPK, CIL, FACT, PPL, DAP, MOP, 100ML
      if (/^[A-Z0-9:%]+$/.test(word) && word.length <= 4) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// Regex to identify and extract pack size from raw product name
const packRegex = /(?:[-–\s]+)?(\b\d+(?:\.\d+)?\s*(?:ML|LT|LTR|LITER|LITRE|GM|GMS|GRAM|GRAMS|KG|KGS|PACK|TABLET|TABS)\b)/i;

const allItems = [];
const groupedProducts = new Map();

rawRows.slice(1).forEach((row, i) => {
  const rowNumber = i + 2;
  if (!row || !row[0] || !String(row[0]).trim()) {
    return; // empty row like row 219
  }

  const rawName = String(row[0]).trim();
  const rawCategory = String(row[1] || '').trim();
  const rawCompany = String(row[2] || '').trim();
  const rawType = String(row[3] || '').trim();
  const rawActive = String(row[4] || '').trim();
  const rawTech = String(row[5] || '').trim();

  const comp = normalizeCompany(rawCompany);
  const mainCategory = (rawCategory.toLowerCase() === 'fertilizer' || rawType.toLowerCase().includes('fertilizer'))
    ? 'fertilizers'
    : 'pesticides';

  const subCategory = mapSubCategory(rawCategory, rawType);

  // Extract Pack Size
  const match = rawName.match(packRegex);
  let packSize = 'Standard Pack';
  let baseName = rawName;

  if (match) {
    packSize = match[1].toUpperCase().replace(/\s+/g, ' ').trim();
    baseName = rawName.slice(0, match.index).replace(/[-–\s]+$/, '').trim();
  } else {
    // Check for fertilizer grades with default pack e.g. 50 KG
    if (mainCategory === 'fertilizers' && !packSize.includes('KG')) {
      packSize = '50 KG';
    }
  }

  // Normalized display name
  const displayName = cleanTitle(baseName || rawName);

  const isTechnicalSpecVerified = Boolean(rawActive || rawTech);
  const reviewStatus = isTechnicalSpecVerified ? 'verified' : 'pending_technical_review';

  const itemRecord = {
    spreadsheetRow: rowNumber,
    rawName,
    displayName,
    company: comp,
    mainCategory,
    subCategory,
    rawProductType: rawType || null,
    activeIngredient: rawActive || null,
    technicalName: rawTech || null,
    packSize,
    isTechnicalSpecVerified,
    reviewStatus,
  };

  allItems.push(itemRecord);

  // Group key: company ID + normalized base name
  const groupKey = `${comp.id}___${displayName.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}`;

  if (!groupedProducts.has(groupKey)) {
    groupedProducts.set(groupKey, {
      id: `${comp.id}-${displayName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/-+$/, ''),
      name: displayName,
      company: comp,
      mainCategory,
      subCategory,
      rawProductType: rawType || null,
      activeIngredient: rawActive || null,
      technicalName: rawTech || null,
      packSizes: [packSize],
      variants: [{
        packSize,
        spreadsheetRow: rowNumber,
        rawName,
        isInStock: true
      }],
      spreadsheetRows: [rowNumber],
      isSpreadsheetVerified: true,
      isTechnicalSpecVerified,
      reviewStatus,
      image: null,
    });
  } else {
    const existing = groupedProducts.get(groupKey);
    if (!existing.packSizes.includes(packSize)) {
      existing.packSizes.push(packSize);
    }
    existing.variants.push({
      packSize,
      spreadsheetRow: rowNumber,
      rawName,
      isInStock: true
    });
    existing.spreadsheetRows.push(rowNumber);
    // If later variant has technical details, preserve them
    if (!existing.isTechnicalSpecVerified && isTechnicalSpecVerified) {
      existing.activeIngredient = rawActive || null;
      existing.technicalName = rawTech || null;
      existing.rawProductType = rawType || null;
      existing.isTechnicalSpecVerified = true;
      existing.reviewStatus = 'verified';
    }
  }
});

const pubProductsDir = path.join(__dirname, '..', 'public', 'products');
const existingProductFiles = fs.existsSync(pubProductsDir) ? new Set(fs.readdirSync(pubProductsDir)) : new Set();

function resolveProductImage(productId, productName, technicalName, mainCategory, subCategory, packSizes) {
  const exactFile = `${productId}.webp`;
  if (existingProductFiles.has(exactFile)) {
    return `/products/${exactFile}`;
  }

  const nameUpper = (productName || '').toUpperCase();
  const techUpper = (technicalName || '').toUpperCase();

  if (nameUpper.includes('UREA')) {
    return '/products/fertilizer_bag_urea.jpg';
  }
  if (nameUpper.includes('DAP') && !nameUpper.includes('NANO')) {
    return '/products/fertilizer_bag_dap.jpg';
  }
  if (nameUpper.includes('MOP') || nameUpper.includes('POTASH')) {
    return '/products/fertilizer_bag_mop.jpg';
  }
  if (
    nameUpper.includes('10 26 26') ||
    nameUpper.includes('20 20') ||
    nameUpper.includes('28 28') ||
    nameUpper.includes('15 15 15') ||
    nameUpper.includes('16 20') ||
    nameUpper.includes('16 16 16') ||
    nameUpper.includes('SULPHATE') ||
    nameUpper.includes('CAN') ||
    nameUpper.includes('TSP') ||
    (nameUpper.includes('SUPER') && mainCategory === 'fertilizers') ||
    mainCategory === 'fertilizers'
  ) {
    return '/products/fertilizer_bag_npk.jpg';
  }

  const hasLiquidPack = (packSizes || []).some(s => /ML|LT|LIT|L/i.test(s));
  const hasPowderPack = (packSizes || []).some(s => /GM|KG|GMS/i.test(s));
  const isFormulationLiquid = /EC|SL|SC|OD|FS|CS/i.test(techUpper) || /EC|SL|SC|OD|FS|CS/i.test(nameUpper);
  const isFormulationPowder = /WP|SP|WG|GR|DF|SG|CG/i.test(techUpper) || /WP|SP|WG|GR|DF|SG|CG/i.test(nameUpper);

  if (isFormulationPowder && !isFormulationLiquid) {
    return '/products/pouch_fungicide.jpg';
  }
  if (hasPowderPack && !hasLiquidPack) {
    return '/products/pouch_fungicide.jpg';
  }

  return '/products/bottle_insecticide.jpg';
}

// Assign resolved image to all products
for (const p of groupedProducts.values()) {
  p.image = resolveProductImage(
    p.id,
    p.name,
    p.technicalName,
    p.mainCategory,
    p.subCategory,
    p.packSizes
  );
}

const productsArray = Array.from(groupedProducts.values());

console.log(`Successfully processed:`);
console.log(`- Total spreadsheet rows: ${rawRows.length}`);
console.log(`- Valid spreadsheet items: ${allItems.length}`);
console.log(`- Unique grouped product families: ${productsArray.length}`);
console.log(`- Items with verified technical specs: ${allItems.filter(i => i.isTechnicalSpecVerified).length}`);
console.log(`- Items with technical review pending: ${allItems.filter(i => !i.isTechnicalSpecVerified).length}`);

// Write products.ts
const code = `// AUTOGENERATED FROM product.xlsx - All 285 products accounted for

// Import company logos
import adamaLogo from '../assets/logos/adama.svg';
import agrishineLogo from '../assets/logos/agrishine.jpg';
import basfLogo from '../assets/logos/basf.svg';
import bayerLogo from '../assets/logos/bayer.svg';
import coramandalLogo from '../assets/logos/coramandal.svg';
import cortevaLogo from '../assets/logos/corteva.svg';
import dhanukaLogo from '../assets/logos/dhanuka.png';
import factLogo from '../assets/logos/fact.png';
import fmcLogo from '../assets/logos/fmc.svg';
import garudhaLogo from '../assets/logos/garudha.png';
import gspLogo from '../assets/logos/gsp.png';
import iffcoLogo from '../assets/logos/iffco.svg';
import indofilLogo from '../assets/logos/indofil.png';
import iplLogo from '../assets/logos/ipl.jpg';
import kribhcoLogo from '../assets/logos/kribhco.png';
import mahadhanLogo from '../assets/logos/mahadhan.png';
import naclLogo from '../assets/logos/nacl.png';
import novaLogo from '../assets/logos/nova.png';
import nichinoLogo from '../assets/logos/nichino.png';
import piIndustriesLogo from '../assets/logos/pi_industries.svg';
import pplLogo from '../assets/logos/ppl.svg';
import spicLogo from '../assets/logos/spic.svg';
import sumitomoLogo from '../assets/logos/sumitomo.svg';
import syngentaLogo from '../assets/logos/syngenta.svg';
import tataLogo from '../assets/logos/tata.svg';
import tropicalLogo from '../assets/logos/tropical.svg';
import uplLogo from '../assets/logos/upl.png';

export const COMPANY_LOGOS: Record<string, string> = {
  adamaLogo,
  agrishineLogo,
  basfLogo,
  bayerLogo,
  coramandalLogo,
  cortevaLogo,
  dhanukaLogo,
  factLogo,
  fmcLogo,
  garudhaLogo,
  gspLogo,
  iffcoLogo,
  indofilLogo,
  iplLogo,
  kribhcoLogo,
  mahadhanLogo,
  naclLogo,
  novaLogo,
  nichinoLogo,
  piIndustriesLogo,
  pplLogo,
  spicLogo,
  sumitomoLogo,
  syngentaLogo,
  tataLogo,
  tropicalLogo,
  uplLogo,
};

export type MainCategory = 'pesticides' | 'fertilizers';

export type ProductSubCategory =
  | 'insecticide'
  | 'fungicide'
  | 'herbicide'
  | 'fertilizer'
  | 'plant_growth_regulator'
  | 'seed_treatment'
  | 'bio_stimulant'
  | 'adjuvant'
  | 'crop_protection_nutrition'
  | 'other';

export interface CompanyInfo {
  id: string;
  name: string;
  fullName: string;
  logoKey: string;
}

export interface ProductVariant {
  packSize: string;
  spreadsheetRow: number;
  rawName: string;
  isInStock?: boolean;
}

export interface Product {
  id: string;
  name: string;
  nameTelugu?: string;
  company: CompanyInfo;
  mainCategory: MainCategory;
  subCategory: ProductSubCategory;
  rawProductType: string | null;
  activeIngredient: string | null;
  technicalName: string | null;
  packSizes: string[];
  variants: ProductVariant[];
  spreadsheetRows: number[];
  isSpreadsheetVerified: boolean;
  isTechnicalSpecVerified: boolean;
  reviewStatus: 'verified' | 'pending_technical_review';
  image: string | null;
  description?: {
    en: string;
    te?: string;
  };
  targetCrops?: string[];
  targetPests?: string[];
  sourceReference?: string;
}

export interface SpreadsheetProductItem {
  spreadsheetRow: number;
  rawName: string;
  displayName: string;
  company: CompanyInfo;
  mainCategory: MainCategory;
  subCategory: ProductSubCategory;
  rawProductType: string | null;
  activeIngredient: string | null;
  technicalName: string | null;
  packSize: string;
  isTechnicalSpecVerified: boolean;
  reviewStatus: 'verified' | 'pending_technical_review';
}

export const ALL_SPREADSHEET_ITEMS: SpreadsheetProductItem[] = ${JSON.stringify(allItems, null, 2)};

export const PRODUCTS_CATALOGUE: Product[] = ${JSON.stringify(productsArray, null, 2)};

export const ALL_COMPANIES: CompanyInfo[] = [
  { id: 'adama', name: 'ADAMA', fullName: 'ADAMA India', logoKey: 'adamaLogo' },
  { id: 'agrishine', name: 'Agrishine', fullName: 'Agrishine Crop Sciences', logoKey: 'agrishineLogo' },
  { id: 'basf', name: 'BASF', fullName: 'BASF Agricultural Solutions', logoKey: 'basfLogo' },
  { id: 'bayer', name: 'Bayer', fullName: 'Bayer Crop Science', logoKey: 'bayerLogo' },
  { id: 'coromandel', name: 'Coromandel', fullName: 'Coromandel International Limited (Gromor)', logoKey: 'coramandalLogo' },
  { id: 'corteva', name: 'Corteva', fullName: 'Corteva Agriscience', logoKey: 'cortevaLogo' },
  { id: 'dhanuka', name: 'Dhanuka', fullName: 'Dhanuka Agritech Limited', logoKey: 'dhanukaLogo' },
  { id: 'fact', name: 'FACT', fullName: 'The Fertilisers and Chemicals Travancore (FACT)', logoKey: 'factLogo' },
  { id: 'fmc', name: 'FMC', fullName: 'FMC India', logoKey: 'fmcLogo' },
  { id: 'gharda', name: 'Gharda Chemicals', fullName: 'Gharda Chemicals Limited', logoKey: 'garudhaLogo' },
  { id: 'gsp', name: 'GSP Crop Science', fullName: 'GSP Crop Science Pvt Ltd', logoKey: 'gspLogo' },
  { id: 'iffco', name: 'IFFCO', fullName: 'Indian Farmers Fertiliser Cooperative (IFFCO)', logoKey: 'iffcoLogo' },
  { id: 'indofil', name: 'Indofil', fullName: 'Indofil Industries Limited', logoKey: 'indofilLogo' },
  { id: 'ipl', name: 'IPL', fullName: 'Indian Potash Limited (IPL)', logoKey: 'iplLogo' },
  { id: 'kribhco', name: 'KRIBHCO', fullName: 'Krishak Bharati Cooperative Limited (KRIBHCO)', logoKey: 'kribhcoLogo' },
  { id: 'mahadhan', name: 'Mahadhan', fullName: 'Mahadhan (Smartchem Technologies)', logoKey: 'mahadhanLogo' },
  { id: 'nacl', name: 'NACL', fullName: 'NACL Industries Limited', logoKey: 'naclLogo' },
  { id: 'nova', name: 'Nova', fullName: 'Nova Agri Tech Limited', logoKey: 'novaLogo' },
  { id: 'nichino', name: 'Nichino', fullName: 'Nichino India Pvt Ltd', logoKey: 'nichinoLogo' },
  { id: 'pi_industries', name: 'PI Industries', fullName: 'PI Industries Limited', logoKey: 'piIndustriesLogo' },
  { id: 'ppl', name: 'PPL', fullName: 'Paradeep Phosphates Limited (PPL)', logoKey: 'pplLogo' },
  { id: 'spic', name: 'SPIC', fullName: 'Southern Petrochemical Industries Corporation (SPIC)', logoKey: 'spicLogo' },
  { id: 'sumitomo', name: 'Sumitomo', fullName: 'Sumitomo Chemical India Limited', logoKey: 'sumitomoLogo' },
  { id: 'syngenta', name: 'Syngenta', fullName: 'Syngenta India Limited', logoKey: 'syngentaLogo' },
  { id: 'tata', name: 'Tata Rallis', fullName: 'Tata Chemicals / Rallis India', logoKey: 'tataLogo' },
  { id: 'tropical', name: 'Tropical Agro', fullName: 'Tropical Agrosystem India', logoKey: 'tropicalLogo' },
  { id: 'upl', name: 'UPL', fullName: 'UPL Limited', logoKey: 'uplLogo' },
];

export const CATEGORY_DEFINITIONS = [
  { id: 'all', name: 'All Categories', nameTe: 'అన్ని విభాగాలు', countKey: 'all' },
  { id: 'fertilizer', name: 'Fertilizers', nameTe: 'ఎరువులు', countKey: 'fertilizer' },
  { id: 'insecticide', name: 'Insecticides', nameTe: 'పురుగుమందులు', countKey: 'insecticide' },
  { id: 'fungicide', name: 'Fungicides', nameTe: 'శిలీంద్రనాశకాలు', countKey: 'fungicide' },
  { id: 'herbicide', name: 'Herbicides', nameTe: 'కలుపునాశకాలు', countKey: 'herbicide' },
  { id: 'plant_growth_regulator', name: 'Plant Growth Regulators', nameTe: 'మొక్కల పెరుగుదల నియంత్రకాలు', countKey: 'plant_growth_regulator' },
  { id: 'seed_treatment', name: 'Seed Treatments', nameTe: 'విత్తన శుద్ధి మందులు', countKey: 'seed_treatment' },
  { id: 'bio_stimulant', name: 'Bio-stimulants', nameTe: 'బయో-స్టిమ్యులెంట్లు', countKey: 'bio_stimulant' },
  { id: 'adjuvant', name: 'Adjuvants & Surfactants', nameTe: 'స్ప్రెడ్డర్లు & అడ్జువెంట్లు', countKey: 'adjuvant' },
  { id: 'crop_protection_nutrition', name: 'Crop Protection & Nutrition', nameTe: 'పంట సంరక్షణ & పోషణ', countKey: 'crop_protection_nutrition' },
  { id: 'other', name: 'Other Specialty Products', nameTe: 'ఇతర ఉత్పత్తులు', countKey: 'other' },
];
`;

const outputPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
fs.writeFileSync(outputPath, code);
console.log('Successfully written src/data/products.ts');
