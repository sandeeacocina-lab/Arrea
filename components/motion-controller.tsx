'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    let observer: IntersectionObserver | undefined;

    // Content stays visible in the HTML, even without JavaScript or animation support.
    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };

    const observe = () => {
      stop();
      if (preference.matches || !('IntersectionObserver' in window)) return;

      observer = new IntersectionObserver((entries) => {
        let stagger = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          seen.add(entry.target);
          observer?.unobserve(entry.target);
          const element = entry.target as HTMLElement;
          if (typeof element.animate !== 'function') return;

          const animation = element.animate(
            [{ opacity: 0, translate: '0 14px' }, { opacity: 1, translate: '0 0' }],
            { duration: 560, delay: Math.min(stagger++, 3) * 65, easing: 'cubic-bezier(.22, .61, .36, 1)', fill: 'backwards' },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0, rootMargin: '0px 0px 24px 0px' });

      items.forEach((item) => {
        if (!seen.has(item)) observer?.observe(item);
      });
    };

    observe();
    preference.addEventListener('change', observe);

    return () => {
      stop();
      preference.removeEventListener('change', observe);
    };
  }, [pathname]);

  return null;
}
