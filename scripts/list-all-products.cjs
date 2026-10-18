const fs = require('fs');

const content = fs.readFileSync('src/data/products.ts', 'utf8');
const match = content.match(/export const PRODUCTS_CATALOGUE: Product\[\] = (\[[\s\S]*?\]);\s*export const ALL_COMPANIES/);
const products = JSON.parse(match[1]);

const byCompany = {};
products.forEach(p => {
  if (!byCompany[p.company.name]) byCompany[p.company.name] = [];
  byCompany[p.company.name].push({ id: p.id, name: p.name, tech: p.technicalName, cat: p.subCategory });
});

for (const [comp, list] of Object.entries(byCompany).sort()) {
  console.log(`\n=== ${comp} (${list.length}) ===`);
  list.forEach(p => console.log(`  - ${p.name} [${p.cat}] (${p.tech || 'N/A'})`));
}
