const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');
  const logosDir = path.join(__dirname, '..', 'src', 'assets', 'logos');
  const publicDir = path.join(__dirname, '..', 'public');

  console.log('--- 1. OPTIMIZING HERO IMAGE ---');
  const heroPath = path.join(imagesDir, 'agricultural_hero.jpg');
  if (fs.existsSync(heroPath)) {
    const heroBuf = fs.readFileSync(heroPath);
    // Keep a backup of original if needed
    fs.writeFileSync(path.join(imagesDir, 'agricultural_hero_original.jpg.bak'), heroBuf);

    // Responsive WebP variants
    await sharp(heroBuf)
      .resize(1600, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(imagesDir, 'agricultural_hero-1600.webp'));

    await sharp(heroBuf)
      .resize(1024, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(imagesDir, 'agricultural_hero-1024.webp'));

    await sharp(heroBuf)
      .resize(640, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(imagesDir, 'agricultural_hero-640.webp'));

    await sharp(heroBuf)
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(imagesDir, 'agricultural_hero.webp'));

    // Optimized fallback JPEG
    await sharp(heroBuf)
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(path.join(imagesDir, 'agricultural_hero_opt.jpg'));
    
    // Replace original with optimized JPEG fallback
    fs.copyFileSync(path.join(imagesDir, 'agricultural_hero_opt.jpg'), heroPath);
    fs.unlinkSync(path.join(imagesDir, 'agricultural_hero_opt.jpg'));
    console.log('Hero image successfully optimized & responsive WebPs generated.');
  }

  console.log('--- 2. OPTIMIZING SRI BHAGYALAKSHMI LOGO ---');
  const logoPath = path.join(imagesDir, 'sri_bhagyalakshmi_logo.png');
  if (fs.existsSync(logoPath)) {
    const logoBuf = fs.readFileSync(logoPath);
    fs.writeFileSync(path.join(imagesDir, 'sri_bhagyalakshmi_logo_original.png.bak'), logoBuf);

    // High quality WebP
    await sharp(logoBuf)
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(imagesDir, 'sri_bhagyalakshmi_logo.webp'));

    // Also small 160px and 64px WebPs for logo usages
    await sharp(logoBuf)
      .resize(320, 320)
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(imagesDir, 'sri_bhagyalakshmi_logo-320.webp'));

    await sharp(logoBuf)
      .resize(128, 128)
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(imagesDir, 'sri_bhagyalakshmi_logo-128.webp'));

    // Optimized PNG
    await sharp(logoBuf)
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(path.join(imagesDir, 'sri_bhagyalakshmi_logo_opt.png'));

    fs.copyFileSync(path.join(imagesDir, 'sri_bhagyalakshmi_logo_opt.png'), logoPath);
    fs.copyFileSync(path.join(imagesDir, 'sri_bhagyalakshmi_logo_opt.png'), path.join(publicDir, 'logo.png'));
    fs.unlinkSync(path.join(imagesDir, 'sri_bhagyalakshmi_logo_opt.png'));
    console.log('Logo successfully optimized & WebP variants generated.');
  }

  console.log('--- 3. OPTIMIZING CATEGORY IMAGES ---');
  const catImages = [
    'cat_fertilizers.jpg',
    'cat_crop_protection.jpg',
    'cat_fungicides.jpg',
    'cat_insecticides.jpg',
    'cat_herbicides.jpg',
  ];

  for (const catName of catImages) {
    const cPath = path.join(imagesDir, catName);
    if (fs.existsSync(cPath)) {
      const cBuf = fs.readFileSync(cPath);
      const baseName = catName.replace('.jpg', '');
      
      // WebP variant resized to 800px max width (plenty for 2x retina in 400px card)
      await sharp(cBuf)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(path.join(imagesDir, `${baseName}.webp`));

      // Optimized JPG fallback
      await sharp(cBuf)
        .resize(800, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(path.join(imagesDir, `${baseName}_opt.jpg`));

      fs.copyFileSync(path.join(imagesDir, `${baseName}_opt.jpg`), cPath);
      fs.unlinkSync(path.join(imagesDir, `${baseName}_opt.jpg`));
      console.log(`Optimized ${catName} and generated ${baseName}.webp`);
    }
  }

  console.log('--- 4. OPTIMIZING OVERSIZED BRAND LOGOS ---');
  // Process oversized brand logos: resize to 2x display (max 480px width, 180px height) and optimize compression
  const oversizedLogos = [
    { file: 'ial.png', maxW: 480, maxH: 180 },
    { file: 'garudha.png', maxW: 450, maxH: 180 },
    { file: 'nacl.png', maxW: 400, maxH: 180 },
    { file: 'prism.png', maxW: 300, maxH: 180 },
    { file: 'gsp.png', maxW: 350, maxH: 180 },
    { file: 'kribhco.png', maxW: 400, maxH: 120 },
    { file: 'nova.png', maxW: 350, maxH: 160 },
  ];

  for (const item of oversizedLogos) {
    const lPath = path.join(logosDir, item.file);
    if (fs.existsSync(lPath)) {
      const lBuf = fs.readFileSync(lPath);
      const tempPath = path.join(logosDir, `opt_${item.file}`);
      await sharp(lBuf)
        .resize(item.maxW, item.maxH, { fit: 'inside', withoutEnlargement: true })
        .png({ compressionLevel: 9, effort: 8 })
        .toFile(tempPath);

      fs.copyFileSync(tempPath, lPath);
      fs.unlinkSync(tempPath);
      console.log(`Optimized logo ${item.file}`);
    }
  }

  // Also optimize tropical.svg if it contains an oversized base64 PNG
  const tropicalPath = path.join(logosDir, 'tropical.svg');
  if (fs.existsSync(tropicalPath)) {
    const svgContent = fs.readFileSync(tropicalPath, 'utf8');
    const match = svgContent.match(/href="data:image\/png;base64,([^"]+)"/);
    if (match && match[1]) {
      const imgBuffer = Buffer.from(match[1], 'base64');
      const resizedImgBuf = await sharp(imgBuffer)
        .resize(480, null, { withoutEnlargement: true })
        .png({ compressionLevel: 9, effort: 9 })
        .toBuffer();
      const newBase64 = resizedImgBuf.toString('base64');
      const newSvgContent = svgContent.replace(match[1], newBase64);
      fs.writeFileSync(tropicalPath, newSvgContent, 'utf8');
      console.log('Optimized tropical.svg embedded bitmap.');
    }
  }

  console.log('All image optimizations completed!');
}

optimizeImages().catch(err => {
  console.error('Error during image optimization:', err);
  process.exit(1);
});
