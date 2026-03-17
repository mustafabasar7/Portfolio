import './style.css'
import { projects, principles } from './data/projects'

// ─── THEME ────────────────────────────────────────────────────────────────────
const html = document.documentElement
const STORAGE_KEY = 'portfolio-theme'

function applyTheme(theme: 'dark' | 'light') {
  if (theme === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

function getInitialTheme(): 'dark' | 'light' {
  const saved = localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

applyTheme(getInitialTheme())

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const isDark = html.classList.contains('dark')
  const next: 'dark' | 'light' = isDark ? 'light' : 'dark'
  applyTheme(next)
  localStorage.setItem(STORAGE_KEY, next)
})

// Sync with OS changes (only if no saved pref)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    applyTheme(e.matches ? 'dark' : 'light')
  }
})

// ─── RENDER PROJECTS ─────────────────────────────────────────────────────────
const grid = document.getElementById('projects-grid')!
grid.innerHTML = projects
  .map(
    (p) => `
  <article class="project-card">
    <div class="flex items-center justify-center w-11 h-11 rounded-xl mb-4
                bg-accent-blue/10 border border-light-border dark:border-dark-border
                text-xl select-none" aria-hidden="true">${p.icon}</div>
    <h3 class="text-base font-semibold mb-2 leading-snug text-gray-900 dark:text-gray-100">${p.title}</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">${p.description}</p>
    <div class="flex flex-wrap gap-1.5 mb-5">
      ${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
    </div>
    <a href="${p.url}" target="_blank" rel="noopener"
       class="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue
              hover:gap-2.5 transition-all duration-200">
      View Blueprint <span aria-hidden="true">→</span>
    </a>
  </article>`,
  )
  .join('')

// ─── RENDER PRINCIPLES ────────────────────────────────────────────────────────
const principlesGrid = document.getElementById('principles-grid')!
principlesGrid.innerHTML = principles
  .map(
    (p) => `
  <div class="principle-card">
    <p class="font-mono text-xs text-accent-blue font-medium mb-3 tracking-widest">
      ${p.num} / ${p.label}
    </p>
    <h3 class="text-base font-semibold mb-2 text-gray-900 dark:text-gray-100">${p.title}</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${p.description}</p>
  </div>`,
  )
  .join('')

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        observer.unobserve(e.target)
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
)

document.querySelectorAll('.reveal, .stagger').forEach((el) => observer.observe(el))

// ─── SMOOTH SCROLL (offset for fixed navbar) ──────────────────────────────────
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href')!)
    if (!target) return
    e.preventDefault()
    const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  })
})
