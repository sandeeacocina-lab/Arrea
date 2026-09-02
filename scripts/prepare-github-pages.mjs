import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');

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
  if (sourceRelative === 'index.html' || sourceRelative === '404.html') continue;

  const destination = join(outputDirectory, sourceRelative.replace(/\.html$/, ''), 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

