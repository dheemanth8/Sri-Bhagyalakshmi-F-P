const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const excelPath = path.join(__dirname, '..', 'product.xlsx');
const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { raw: false, defval: '' });

console.log('Total data objects:', rows.length);

const companies = new Map();
const categories = new Set();
const productTypes = new Set();
const incompleteRows = [];
const duplicates = [];

const seenKeys = new Map();

rows.forEach((r, idx) => {
  const pName = (r['Product Name'] || '').trim();
  const cat = (r['Category'] || '').trim();
  const comp = ((r['Company '] || r['Company'] || '')).trim();
  const pType = (r['Product Type'] || '').trim();
  const activeIng = (r['Active Ingredient(s)'] || '').trim();
  const techName = (r['Technical Name'] || '').trim();

  if (comp) {
    companies.set(comp, (companies.get(comp) || 0) + 1);
  } else {
    incompleteRows.push({ row: idx + 2, reason: 'Missing Company', data: r });
  }

  if (cat) categories.add(cat);
  if (pType) productTypes.add(pType);

  if (!pName) {
    incompleteRows.push({ row: idx + 2, reason: 'Missing Product Name', data: r });
  }

  const isMissingActive = !activeIng;
  const isMissingTech = !techName;
  if (isMissingActive || isMissingTech) {
    incompleteRows.push({
      row: idx + 2,
      reason: `Missing ${!activeIng ? 'Active Ingredient' : ''} ${!techName ? 'Technical Name' : ''}`.trim(),
      pName,
      comp
    });
  }

  // Duplicate detection key (same product name + company)
  const normKey = `${comp.toUpperCase()}___${pName.toUpperCase()}`;
  if (seenKeys.has(normKey)) {
    duplicates.push({
      firstRow: seenKeys.get(normKey),
      duplicateRow: idx + 2,
      key: normKey,
      data: r
    });
  } else {
    seenKeys.set(normKey, idx + 2);
  }
});

console.log('=== UNIQUE COMPANIES (raw counts) ===');
for (const [c, cnt] of Array.from(companies.entries()).sort()) {
  console.log(`  "${c}": ${cnt}`);
}

console.log('\n=== CATEGORIES ===');
console.log(Array.from(categories));

console.log('\n=== PRODUCT TYPES ===');
console.log(Array.from(productTypes));

console.log('\n=== DUPLICATE ROWS (' + duplicates.length + ') ===');
console.log(JSON.stringify(duplicates, null, 2));

console.log('\n=== INCOMPLETE ROWS (' + incompleteRows.length + ') ===');
console.log(JSON.stringify(incompleteRows, null, 2));
