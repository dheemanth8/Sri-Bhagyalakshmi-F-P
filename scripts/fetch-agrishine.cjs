const https = require('https');
const fs = require('fs');

function fetch(url, dest) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return fetch(res.headers.location, dest);
    }
    const chunks = [];
    res.on('data', c => chunks.push(c));
    res.on('end', () => {
      fs.writeFileSync(dest, Buffer.concat(chunks));
      console.log('Saved', dest, 'bytes:', Buffer.concat(chunks).length);
    });
  });
}

fetch('https://agrishine.in/wp-content/uploads/2024/09/1-1.jpg', 'src/assets/logos/agrishine.jpg');
