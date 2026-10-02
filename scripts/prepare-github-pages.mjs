import { copyFile, cp, mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative, resolve } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

if (basePath && (!basePath.startsWith('/') || basePath.includes('\\') || basePath.split('/').some((part) => part === '..' || part === '.'))) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be a safe absolute URL path.');
}

// Vinext places prefixed bundles inside the repository-name directory. Pages
// already mounts the uploaded artifact at that path, so assets must sit at root.
if (basePath) {
  const prefixedAssets = join(outputDirectory, basePath.slice(1), '_next');
  await cp(prefixedAssets, join(outputDirectory, '_next'), { recursive: true });
}

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtmlFiles(path));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(path);
  }

  return files;
}

// Localise the exported document language and provide complete ES/EN links
// before hydration, including on direct visits and with JavaScript disabled.
const publicOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://sandeeacocina-lab.github.io';
for (const source of await collectHtmlFiles(outputDirectory)) {
  const relativePage = relative(outputDirectory, source).replaceAll('\\', '/');
  if (relativePage === '404.html') continue;
  const route = '/' + relativePage.replace(/(?:^|\/)index\.html$/, '/').replace(/\.html$/, '/').replace(/^\//, '');
  const english = /^\/en(?:\/|$)/.test(route);
  const spanishRoute = route.replace(/^\/en(?=\/|$)/, '') || '/';
  const spanishUrl = `${basePath}${spanishRoute}`;
  const englishUrl = `${basePath}/en${spanishRoute}`;
  let html = await readFile(source, 'utf8');
  html = html.replace(/<html([^>]*?)lang="[^"]*"/, `<html$1lang="${english ? 'en' : 'es'}"`);
  html = html.replace(/(<nav[^>]*class="language-switcher"[^>]*>)([\s\S]*?)(<\/nav>)/g, (_, start, content, end) => {
    return start + content.replace(/<a\b[^>]*>/g, (tag) => tag.replace(/href="[^"]*"/, `href="${tag.includes('hreflang="en"') || tag.includes('hrefLang="en"') ? englishUrl : spanishUrl}"`)) + end;
  });
  html = html.replace('</head>', `<link rel="alternate" hreflang="es" href="${publicOrigin}${spanishUrl}"/><link rel="alternate" hreflang="en" href="${publicOrigin}${englishUrl}"/></head>`);
  await writeFile(source, html);
}

for (const source of await collectHtmlFiles(outputDirectory)) {
  const sourceRelative = relative(outputDirectory, source);
  if (basename(source) === 'index.html' || basename(source) === '404.html') continue;

  const destination = join(outputDirectory, sourceRelative.replace(/\.html$/, ''), 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

// Fail publication if any rendered page points to a missing local page or asset.
const checkedPaths = new Set();
for (const page of await collectHtmlFiles(outputDirectory)) {
  const html = await readFile(page, 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const reference = match[1];
    if (!reference.startsWith('/') || reference.startsWith('//')) continue;

    const { pathname } = new URL(reference, 'https://pages.invalid');
    if (basePath && pathname !== basePath && !pathname.startsWith(`${basePath}/`)) {
      throw new Error(`Unprefixed local URL: ${pathname}`);
    }

    const localPath = decodeURIComponent(pathname.slice(basePath.length)).replace(/^\//, '');
    const target = resolve(outputDirectory, localPath, pathname.endsWith('/') ? 'index.html' : '');
    if (relative(outputDirectory, target).startsWith('..')) {
      throw new Error(`Local URL escapes the public output: ${pathname}`);
    }
    if (checkedPaths.has(target)) continue;
    const file = await stat(target);
    if (!file.isFile() || file.size === 0) {
      throw new Error(`Missing or empty public file: ${pathname}`);
    }
    checkedPaths.add(target);
  }
}

console.log(`GitHub Pages ready: ${checkedPaths.size} local URLs checked.`);

