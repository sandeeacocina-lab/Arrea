'use client';

import { useEffect, useState } from 'react';
import { basePath } from '@/lib/site';

type Locale = 'es' | 'en';

export function LanguageSwitcher({ locale = 'es', path = '/' }: { locale?: Locale; path?: string }) {
  const [suffix, setSuffix] = useState(path);

  useEffect(() => {
    const path = window.location.pathname.slice(basePath.length).replace(/^\/en(?=\/|$)/, '') || '/';
    setSuffix(path + window.location.search + window.location.hash);
    document.documentElement.lang = locale;
  }, [locale]);

  function remember(language: Locale) {
    try { localStorage.setItem('arrea-language', language); } catch { /* Navigation also works without storage. */ }
  }

  return (
    <nav className="language-switcher" aria-label={locale === 'en' ? 'Language' : 'Idioma'}>
      {(['es', 'en'] as const).map((language) => (
        <a
          key={language}
          href={`${basePath}${language === 'en' ? '/en' : ''}${suffix}`}
          lang={language}
          hrefLang={language}
          aria-label={language === 'en' ? 'View this page in English' : 'Ver esta página en español'}
          aria-current={locale === language ? 'true' : undefined}
          onClick={(event) => {
            remember(language);
            const path = window.location.pathname.slice(basePath.length).replace(/^\/en(?=\/|$)/, '') || '/';
            event.currentTarget.href = `${basePath}${language === 'en' ? '/en' : ''}${path}${window.location.search}${window.location.hash}`;
          }}
        >{language.toUpperCase()}</a>
      ))}
    </nav>
  );
}

export function LanguagePreference() {
  useEffect(() => {
    // Explicit deep links determine their own language. Only the home entry
    // restores a visitor's previous choice, and ES can always be selected.
    const path = window.location.pathname.slice(basePath.length);
    document.documentElement.lang = /^\/en(?:\/|$)/.test(path) ? 'en' : 'es';
    try {
      if ((path === '/' || path === '') && localStorage.getItem('arrea-language') === 'en') {
        window.location.replace(`${basePath}/en/${window.location.search}${window.location.hash}`);
      }
    } catch { /* Storage is optional. */ }
  }, []);
  return null;
}
