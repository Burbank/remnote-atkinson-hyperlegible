#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Read the template
const templatePath = path.join(__dirname, '../src/snippet.css.template');
let cssContent = fs.readFileSync(templatePath, 'utf8');

// Font files to encode
const fonts = {
  'REGULAR_BASE64': 'fonts/AtkinsonHyperlegibleNext-Regular.woff2',
  'ITALIC_BASE64': 'fonts/AtkinsonHyperlegibleNext-Italic.woff2',
  'BOLD_BASE64': 'fonts/AtkinsonHyperlegibleNext-Bold.woff2',
  'BOLD_ITALIC_BASE64': 'fonts/AtkinsonHyperlegibleNext-BoldItalic.woff2'
};

// Encode each font and replace placeholders
for (const [placeholder, fontPath] of Object.entries(fonts)) {
  const fullPath = path.join(__dirname, '..', fontPath);
  const fontBuffer = fs.readFileSync(fullPath);
  const base64 = fontBuffer.toString('base64');
  cssContent = cssContent.replace(`{{${placeholder}}}`, base64);
}

// Write the final CSS to src/snippet.css
const outputPath = path.join(__dirname, '../src/snippet.css');
fs.writeFileSync(outputPath, cssContent);

console.log('Generated snippet.css with embedded fonts');
console.log(`Output: ${outputPath}`);
console.log(`Size: ${(cssContent.length / 1024).toFixed(2)} KB`);
