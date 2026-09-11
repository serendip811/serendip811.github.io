import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve('../index.html');
const target = resolve('./index.html');

copyFileSync(source, target);
let html = readFileSync(target, 'utf8');
const tag = '<script type="module" src="/src/main.js"></script>';
if (!html.includes(tag)) {
  html = html.replace('</body>', tag + '\n</body>');
}
writeFileSync(target, html);
console.log('Prepared production index.html from ../index.html');
