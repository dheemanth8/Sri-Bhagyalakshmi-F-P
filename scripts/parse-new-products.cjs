const fs = require('fs');
const path = require('path');

const rawData = [
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

// Read products.ts
const productsFile = fs.readFileSync('src/data/products.ts', 'utf8');

// Parse existing items from ALL_SPREADSHEET_ITEMS
const itemsMatch = productsFile.match(/export const ALL_SPREADSHEET_ITEMS: SpreadsheetProductItem\[\] = (\[[\s\S]*?\]);/);
let existingSpreadsheetItems = [];
if (itemsMatch) {
  existingSpreadsheetItems = JSON.parse(itemsMatch[1]);
}
console.log('Existing ALL_SPREADSHEET_ITEMS length:', existingSpreadsheetItems.length);

// Parse existing products from PRODUCTS_CATALOGUE
const catMatch = productsFile.match(/export const PRODUCTS_CATALOGUE: Product\[\] = (\[[\s\S]*?\]);\s*export const ALL_COMPANIES/);
let existingProductsCatalogue = [];
if (catMatch) {
  existingProductsCatalogue = JSON.parse(catMatch[1]);
}
console.log('Existing PRODUCTS_CATALOGUE length:', existingProductsCatalogue.length);

// Group rawData items by base product name and pack size
function extractPackSizeAndBaseName(rawName) {
  // e.g. "Karbon Plus 50 Kg" -> base "Karbon Plus", pack "50 Kg"
  // "CROPTEK 8:21:21 -40KG" -> base "Croptek 8:21:21", pack "40 KG"
  // "AGIL 1LT" -> base "Agil", pack "1 LT"
  // "CUSTODIA PRIME-1LTR" -> base "Custodia Prime", pack "1 LTR"
  // "AKIRAN-1000ML" -> base "Akiran", pack "1000 ML"
  // "FURAGRO LEGEND -48 GM" -> base "Furagro Legend", pack "48 GM"
  // "TERMINATOR GOLD 3D ACTION 250 ML" -> base "Terminator Gold 3D Action", pack "250 ML"
  
  let clean = rawName.trim();
  // match trailing pack size: e.g. -40KG, 50 Kg, -1LTR, 1000 ML, 500 GM, 3KG, 1LT, etc.
  const packRegex = /[-–\s]+(\d+(?:\.\d+)?\s*(?:KG|GM|G|LTR|LT|L|ML|KG\b|GM\b|ML\b|LT\b|LTR\b))$/i;
  const match = clean.match(packRegex);
  
  if (match) {
    const pack = match[1].trim().toUpperCase();
    const base = clean.substring(0, match.index).trim().replace(/[-–]+$/, '').trim();
    return { baseName: formatDisplayName(base), packSize: standardizePackSize(pack), rawName };
  }
  
  return { baseName: formatDisplayName(clean), packSize: 'Standard Pack', rawName };
}

function formatDisplayName(name) {
  return name
    .toLowerCase()
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function standardizePackSize(pack) {
  return pack
    .replace(/\s+/g, ' ')
    .replace(/(\d+)\s*(KG|GM|ML|LT|LTR)/i, '$1 $2')
    .toUpperCase();
}

console.log('\n--- EXTRACTED NEW ITEMS ---');
const parsed = rawData.map(([rawName, cat, comp]) => {
  const extracted = extractPackSizeAndBaseName(rawName);
  return {
    ...extracted,
    mainCategory: cat.toLowerCase() === 'fertilizer' ? 'fertilizers' : 'pesticides',
    companyRaw: comp
  };
});

// Group by company and baseName
const groupedProducts = {};
parsed.forEach(item => {
  const key = `${item.companyRaw}:::${item.baseName.toLowerCase()}`;
  if (!groupedProducts[key]) {
    groupedProducts[key] = {
      baseName: item.baseName,
      companyRaw: item.companyRaw,
      mainCategory: item.mainCategory,
      variants: []
    };
  }
  groupedProducts[key].variants.push({
    rawName: item.rawName,
    packSize: item.packSize
  });
});

console.log('Distinct new products to add:', Object.keys(groupedProducts).length);
for (const [key, prod] of Object.entries(groupedProducts)) {
  const packs = prod.variants.map(v => v.packSize).join(', ');
  console.log(`[${prod.companyRaw}] ${prod.baseName} (${prod.mainCategory}) -> Packs: [${packs}]`);
}
