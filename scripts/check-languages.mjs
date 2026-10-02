import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { briefingSections as esSections, exampleBriefing as esExample, validateBriefing as validateEs } from '../lib/briefing.ts';
import { briefingSections as enSections, exampleBriefing as enExample, validateBriefing as validateEn, briefingText } from '../lib/en/briefing.ts';

// Catch translated option/validation mismatches without sending a message.
for (const [sections, example, validate] of [[esSections, esExample, validateEs], [enSections, enExample, validateEn]]) {
  assert.equal(validate(example), '');
  for (const section of sections) for (const field of section.fields) {
    if (!field.options.length) continue;
    const values = Array.isArray(example[field.id]) ? example[field.id] : [example[field.id]];
    for (const value of values) assert.ok(field.options.includes(value), `Invalid example option for ${field.id}: ${value}`);
  }
}
assert.ok(validateEn({ ...enExample, canal: 'Phone', telefono: '' }).includes('phone'));
assert.ok(validateEn({ ...enExample, servicios: ['Other'], otros: '' }).includes('other'));
assert.ok(validateEn({ ...enExample, personas: '0' }).includes('attendee'));
assert.ok(validateEn({ ...enExample, presupuesto: '0' }).includes('budget'));
assert.match(briefingText(enExample, 'translation-check'), /NEW EVENT BRIEF/);

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const routes = ['', 'paquetes/', 'quienes-somos/', 'briefing/', 'proyectos/', 'proyectos/expods/', 'proyectos/feria-arcadeca-2022/', 'proyectos/arca-impulsa-fp/', 'proyectos/voces-que-inspiran/'];
for (const route of routes) for (const locale of ['es', 'en']) {
  const prefix = locale === 'en' ? 'en/' : '';
  const html = await readFile(join('dist/client', prefix, route, 'index.html'), 'utf8');
  assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
  const navigation = html.match(/<nav[^>]*class="language-switcher"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(navigation, `Missing language switcher: ${prefix}${route}`);
  assert.ok(navigation.includes(`href="${base}/${route}"`), `Missing Spanish equivalent: ${route}`);
  assert.ok(navigation.includes(`href="${base}/en/${route}"`), `Missing English equivalent: ${route}`);
  assert.ok(html.includes('deployment-id="5080195d-53a4-4a30-918b-144970a31227"'), 'Tavus widget must remain present');
}
console.log('ES/EN: 18 pages, equivalent links, language attributes and briefing options checked.');
