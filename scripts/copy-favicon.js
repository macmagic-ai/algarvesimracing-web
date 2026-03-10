const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'public', 'favicon.ico');
const dest = path.join(__dirname, '..', 'src', 'app', 'favicon.ico');

fs.copyFileSync(src, dest);
console.log('Copied favicon.ico to src/app/');
console.log('Source size:', fs.statSync(src).size, 'bytes');
console.log('Dest size:', fs.statSync(dest).size, 'bytes');
