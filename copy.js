const fs = require('fs');
const path = require('path');

const src1 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\wellness_hero_1779080224161.png";
const src2 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\physical_wellness_1779080239718.png";
const src3 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\mental_wellness_1779080259666.png";
const src4 = "C:\\Users\\AIBEL ANTON BIJU\\.gemini\\antigravity\\brain\\07b3cf80-9459-45ea-8ef8-34cb56810c02\\emotional_wellness_1779080275749.png";

const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.copyFileSync(src1, path.join(publicDir, 'hero.png'));
fs.copyFileSync(src2, path.join(publicDir, 'physical.png'));
fs.copyFileSync(src3, path.join(publicDir, 'mental.png'));
fs.copyFileSync(src4, path.join(publicDir, 'emotional.png'));
