/**
 * Inline SVG icon helper — Lucide icon paths embedded directly.
 * No runtime DOM manipulation, no createIcons() needed.
 * Returns a full <svg> string ready for innerHTML.
 */

const BASE = `width="20" height="20" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5"
  stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true"`

const paths: Record<string, string> = {
  bot: `
    <rect width="18" height="10" x="3" y="11" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/>
    <path d="M8 16h0M16 16h0" stroke-width="3"/>`,

  compass: `
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      fill="currentColor" stroke="none" opacity="0.6"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>`,

  brain: `
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44
      2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58
      2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44
      2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58
      2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>`,

  globe: `
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
      15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <path d="M2 12h20"/>`,

  'shield-check': `
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>`,

  'arrow-right': `
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>`,

  mail: `
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,

  github: `
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5
      .08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5
      0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2
      c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9
      c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65
      S8.93 17.38 9 18v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>`,

  linkedin: `
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>`,
}

/** Returns a sized, colored inline SVG string for use in innerHTML */
export function icon(name: string, cls = 'w-5 h-5'): string {
  const body = paths[name] ?? paths['globe']
  return `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" ${BASE}>${body}</svg>`
}
