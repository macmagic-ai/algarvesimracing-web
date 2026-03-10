const fs = require('fs');
const path = require('path');

// Read the ICO file
const icoPath = process.argv[2] || path.join(__dirname, '..', 'public', 'favicon.ico');
const icoBuffer = fs.readFileSync(icoPath);

console.log('File:', icoPath);
console.log('Size:', icoBuffer.length, 'bytes');

// ICO header
const reserved = icoBuffer.readUInt16LE(0);
const type = icoBuffer.readUInt16LE(2);
const count = icoBuffer.readUInt16LE(4);

console.log('\nICO Header:');
console.log('  Reserved:', reserved, '(should be 0)');
console.log('  Type:', type, '(1 = icon)');
console.log('  Number of icons:', count);

// Check if this looks like a valid ICO
if (reserved !== 0 || type !== 1 || count === 0 || count > 20) {
  console.log('\n⚠️ WARNING: This may not be a valid ICO file or could be the Vercel icon!');
  console.log('  First 20 bytes:', icoBuffer.slice(0, 20).toString('hex'));
} else {
  console.log('\n✅ Valid ICO structure');
  
  // List all icons
  console.log('\nIcon entries:');
  for (let i = 0; i < count; i++) {
    const offset = 6 + (i * 16);
    const width = icoBuffer.readUInt8(offset);
    const height = icoBuffer.readUInt8(offset + 1);
    const bpp = icoBuffer.readUInt16LE(offset + 6);
    const size = icoBuffer.readUInt32LE(offset + 8);
    const dataOffset = icoBuffer.readUInt32LE(offset + 12);
    
    console.log(`  Icon ${i + 1}: ${width}x${height}, ${bpp}bpp, ${size} bytes at offset ${dataOffset}`);
  }
  
  // Check first icon data signature
  const firstIconOffset = icoBuffer.readUInt32LE(6 + 12);
  const firstIconSize = icoBuffer.readUInt32LE(6 + 8);
  const firstIconData = icoBuffer.slice(firstIconOffset, firstIconOffset + Math.min(20, firstIconSize));
  
  console.log('\nFirst icon data (first 20 bytes hex):');
  console.log(' ', firstIconData.toString('hex').match(/.{1,2}/g).join(' '));
  
  // BMP header starts with 'BM' or PNG with 0x89 0x50 0x4E 0x47
  const isPng = firstIconData[0] === 0x89 && firstIconData[1] === 0x50;
  const isBmp = firstIconData[0] === 0x42 && firstIconData[1] === 0x4D;
  
  if (isPng) {
    console.log('  Format: PNG');
  } else if (isBmp) {
    console.log('  Format: BMP');
  } else {
    console.log('  Format: Unknown');
  }
}
