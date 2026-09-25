import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();
const indexPath = path.join(dist, 'index.html');
let html = await fs.readFile(indexPath, 'utf8');
html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
await fs.writeFile(indexPath, html, 'utf8');
await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('Static HTML prerender complete.');
