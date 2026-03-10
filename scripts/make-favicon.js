const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 256];
const inputDir = path.join(__dirname, '..', 'public', 'assets');
const outputDir = path.join(__dirname, '..', 'public');

async function createFavicon() {
  const buffers = [];
  
  for (const size of sizes) {
    const pngPath = path.join(inputDir, `favicon-${size}x${size}.png`);
    if (fs.existsSync(pngPath)) {
      console.log(`Adding ${size}x${size}`);
      buffers.push(fs.readFileSync(pngPath));
    } else {
      console.log(`Missing ${size}x${size}, skipping`);
    }
  }
  
  if (buffers.length === 0) {
    console.error('No PNG files found!');
    process.exit(1);
  }
  
  const icoBuffer = await toIco(buffers);
  
  // Write to both locations
  fs.writeFileSync(path.join(outputDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(inputDir, 'favicon.ico'), icoBuffer);
  
  console.log('favicon.ico created successfully!');
  console.log(`Sizes included: ${buffers.length}`);
}

createFavicon().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
