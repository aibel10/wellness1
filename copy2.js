const fs = require('fs');
const path = require('path');

const src1 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\gallery_yoga_1779081040669.png";
const src2 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\gallery_nature_1779081056510.png";
const src3 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\avatar_1_1779081071692.png";
const src4 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\avatar_2_1779081097196.png";

const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.copyFileSync(src1, path.join(publicDir, 'gallery_yoga.png'));
fs.copyFileSync(src2, path.join(publicDir, 'gallery_nature.png'));
fs.copyFileSync(src3, path.join(publicDir, 'avatar_1.png'));
fs.copyFileSync(src4, path.join(publicDir, 'avatar_2.png'));
