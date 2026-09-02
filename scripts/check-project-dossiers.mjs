import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { projectDossiers } from '../lib/project-dossiers.ts';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const origin = 'https://sandeeacocina-lab.github.io';
const output = join(process.cwd(), 'dist/client');
const expected = {
  expods: { media: 8, photos: 4, social: '/images/projects/expods/exposicion.jpeg' },
  'feria-arcadeca-2022': { media: 2, photos: 5, social: '/images/projects/arcadeca/plano-genially.jpg' },
};
let assets = 0;

for (const [slug, dossier] of Object.entries(projectDossiers)) {
  const record = expected[slug];
  const html = await readFile(join(output, 'proyectos', slug, 'index.html'), 'utf8');
  assert.equal(dossier.media.length, record.media);
  assert.equal(dossier.photos.length, record.photos);
  assert.equal(new Set(dossier.media.map((item) => item.url)).size, record.media);
  assert.ok(!/<iframe\b/i.test(html), `${slug}: an external iframe loads before consent`);
  assert.ok(!/(?:src|href)="https?:\/\/(?:www\.)?(?:expods\.es|feriaarcadeca\.es)(?:\/|")/i.test(html), `${slug}: parked domain linked`);
  assert.ok(html.includes(`${origin}${basePath}${record.social}`), `${slug}: missing absolute social image`);
  assert.ok(html.includes('summary_large_image'), `${slug}: incorrect social card`);
  assert.ok(html.includes(`Cargar ${dossier.media[0].provider}`), `${slug}: missing activation control`);
  assert.ok(html.includes('aria-pressed="true"'), `${slug}: missing initial resource selection`);
  for (const anchor of ['experiencia', 'historia', 'galeria', 'fuentes']) {
    assert.ok(html.includes(`id="${anchor}"`), `${slug}: missing section ${anchor}`);
  }
  for (const resource of dossier.media) {
    const url = new URL(resource.url);
    assert.equal(url.protocol, 'https:');
    assert.ok(resource.title && resource.description);
    await access(join(output, resource.preview));
    assets += 1;
  }
  for (const photo of dossier.photos) {
    assert.ok(photo.alt && photo.caption && photo.width > 0 && photo.height > 0);
    await access(join(output, photo.src));
    assert.ok(html.includes(`${basePath}${photo.src}`), `${slug}: unpublished photograph`);
    assets += 1;
  }
}

console.log(`Project dossiers verified: 2 pages, 10 interactive resources, 9 photographs, ${assets} asset references. No embedded third-party content before activation.`);
