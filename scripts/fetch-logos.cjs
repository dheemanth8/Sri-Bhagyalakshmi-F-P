const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) {
          const u = new URL(url);
          loc = u.origin + loc;
        }
        return fetchUrl(loc).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ buffer: Buffer.concat(chunks), headers: res.headers, status: res.statusCode }));
    }).on('error', reject);
  });
}

async function run() {
  // 1. UPL
  try {
    const uplRes = await fetchUrl('https://companieslogo.com/img/orig/UPL.NS_BIG-189abe6c.png?t=1721208939');
    if (uplRes.status === 200 && uplRes.buffer.length > 500) {
      fs.writeFileSync('src/assets/logos/upl.png', uplRes.buffer);
      console.log('Saved src/assets/logos/upl.png, length:', uplRes.buffer.length);
    }
  } catch (e) {
    console.error('UPL error:', e.message);
  }

  // 2. Dhanuka
  try {
    const dhHtml = (await fetchUrl('https://www.dhanuka.com/')).buffer.toString();
    const m = dhHtml.match(/src=["']([^"']*(?:logo|Logo)[^"']*\.(?:png|svg|jpg|webp))["']/i);
    if (m) {
      let logoUrl = m[1];
      if (!logoUrl.startsWith('http')) {
        logoUrl = 'https://www.dhanuka.com' + (logoUrl.startsWith('/') ? '' : '/') + logoUrl;
      }
      console.log('Dhanuka logo url:', logoUrl);
      const dhLogoRes = await fetchUrl(logoUrl);
      const ext = logoUrl.split('.').pop().split('?')[0];
      fs.writeFileSync(`src/assets/logos/dhanuka.${ext}`, dhLogoRes.buffer);
      console.log(`Saved src/assets/logos/dhanuka.${ext}, length:`, dhLogoRes.buffer.length);
    } else {
      console.log('No logo match on dhanuka.com, looking for all images:');
      const allImgs = dhHtml.match(/src=["']([^"']*\.(?:png|svg|jpg|webp))["']/gi) || [];
      console.log(allImgs.slice(0, 10));
    }
  } catch (e) {
    console.error('Dhanuka error:', e.message);
  }
}

run();
