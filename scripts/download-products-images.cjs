const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const imagesToDownload = [
  // Bayer
  { id: 'bayer-confidor', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/1452329361743738624.webp' },
  { id: 'bayer-confidor-super', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/15600294821715854397.webp' },
  { id: 'bayer-nativo', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/12047663961743594602.webp' },
  { id: 'bayer-solomon', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/3422193721743598269.webp' },
  { id: 'bayer-decis', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/16671513531742647961.webp' },
  { id: 'bayer-laudis', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/2043d570dc4907e5dda71a79d78aaa41-07-23-26-09-33-44.webp' },
  { id: 'bayer-luna-experience', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/13201504021752752693.webp' },
  { id: 'bayer-oberon', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/16973308061743596901.webp' },
  { id: 'bayer-oberan', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/16973308061743596901.webp' },
  { id: 'bayer-antracal', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/19848401701742649226.webp' },
  { id: 'bayer-vayego', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/9350630971755254952.webp' },

  // Syngenta
  { id: 'syngenta-amistar-top', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/324348371761539571.webp' },
  { id: 'syngenta-amister-top', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/324348371761539571.webp' },
  { id: 'syngenta-ampligo', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/17617182131761370166.webp' },
  { id: 'syngenta-allika', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/19786583521762170700.webp' },
  { id: 'syngenta-chess', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/2898250911761397604.webp' },
  { id: 'syngenta-cultar', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/14824196201761382819.webp' },
  { id: 'syngenta-curacron', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/9695064021762245906.webp' },
  { id: 'syngenta-redomil-gold', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/7604846731761391208.webp' },
  { id: 'syngenta-isabion', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/6189273471761388825.webp' },

  // FMC
  { id: 'fmc-corozen', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/531404281743757472.webp' },
  { id: 'fmc-benevia', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/2046342281746269399.webp' },
  { id: 'fmc-tal-star', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/5427861551756286320.webp' },
  { id: 'fmc-talstar-plus', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/5427861551756286320.webp' },
  { id: 'fmc-marshal', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/511176941755668124.webp' },

  // Corteva
  { id: 'corteva-delegate', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/85f757d2c2867ecb54293214b913a3e2-01-29-24-09-59-11.webp' },
  { id: 'corteva-curzate', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/17408506691791010010.webp' },
  { id: 'corteva-pexalon', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/85f757d2c2867ecb54293214b913a3e2-01-29-24-09-59-11.webp' },

  // Indofil
  { id: 'indofil-m-45', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/227671641746274737.webp' },
  { id: 'indofil-z-78', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/8538120051746274913.webp' },
  { id: 'indofil-baan', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/19833535791727759362.webp' },

  // Dhanuka
  { id: 'dhanuka-konika', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/16061044081762166595.webp' },
  { id: 'dhanuka-targa-super', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/14163691821763553724.webp' },
  { id: 'dhanuka-omite', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/14405997461763610546.webp' },

  // ADAMA
  { id: 'adama-rimon', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/19447641321741006427.webp' },
  { id: 'adama-custodia', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/4327663071756441373.webp' },

  // Tata Rallis
  { id: 'tata-contaf-plus', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/20762923881747918157.webp' },
  { id: 'tata-contaf', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/20762923881747918157.webp' },

  // UPL
  { id: 'upl-saff', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/6059457301749465136.webp' },
  { id: 'upl-ulala', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/8817294011747976394.webp' },
  { id: 'upl-ulalla', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/8817294011747976394.webp' },

  // Coromandel / Gromor
  { id: 'coromandel-gromor-nano-dap', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/21334209481753680150.webp' },
  { id: 'coromandel-ci-l-15-15-15-09', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/316483361760424236.webp' },

  // IFFCO
  { id: 'iffco-nano-dap', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/fde8ffa598d8518947e42adf18556e22-11-27-25-11-23-05.webp' },

  // Mahadhan
  { id: 'mahadhan-24-24-0', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/13374132481753679672.webp' },
  { id: 'mahadhan-total-fg', url: 'https://dujjhct8zer0r.cloudfront.net/media/prod_image/fef370ea543a360a4e6b3dcc393e277a-08-09-23-15-58-12.webp' },
];

function downloadFile(item) {
  return new Promise((resolve) => {
    const filename = `${item.id}.webp`;
    const dest = path.join(outDir, filename);

    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${item.id}: status ${res.statusCode}`);
        return resolve({ id: item.id, success: false });
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        fs.writeFileSync(dest, Buffer.concat(chunks));
        console.log(`Downloaded ${filename} (${Buffer.concat(chunks).length} bytes)`);
        resolve({ id: item.id, filename, success: true });
      });
    }).on('error', (e) => {
      console.error(`Error ${item.id}:`, e.message);
      resolve({ id: item.id, success: false });
    });
  });
}

async function run() {
  console.log(`Starting download of ${imagesToDownload.length} authentic images...`);
  for (const item of imagesToDownload) {
    await downloadFile(item);
  }
  console.log('Done downloading batch!');
}

run();
