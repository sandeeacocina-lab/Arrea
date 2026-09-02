import { access, copyFile, cp, mkdir, readdir, readFile } from 'node:fs/promises';
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
    await access(target);
    checkedPaths.add(target);
  }
}

console.log(`GitHub Pages ready: ${checkedPaths.size} local URLs checked.`);
