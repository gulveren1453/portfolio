import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const NAV = [
  { href: '#hero',         tr: 'Ana Sayfa',    en: 'Home' },
  { href: '#about',        tr: 'Hakkımda',     en: 'About' },
  { href: '#experience',   tr: 'Deneyim',      en: 'Experience' },
  { href: '#education',    tr: 'Eğitim',       en: 'Education' },
  { href: '#skills',       tr: 'Yetenekler',   en: 'Skills' },
  { href: '#projects',     tr: 'Projeler',     en: 'Projects' },
  { href: '#certificates', tr: 'Sertifikalar', en: 'Certs' },
  { href: '#contact',      tr: 'İletişim',     en: 'Contact' },
]

function NavLinks({ onClose }: { onClose?: () => void }) {
  const { lang } = useLanguage()
  const [active, setActive] = useState('#hero')

  const go = (href: string) => {
    setActive(href)
    onClose?.()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {NAV.map(n => {
        const isActive = active === n.href
        return (
          <button key={n.href} onClick={() => go(n.href)} style={{
            background: isActive ? 'var(--sidebar-active)' : 'transparent',
            border: 'none',
            borderLeft: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
            padding: '0.5rem 0.85rem',
            borderRadius: '0 8px 8px 0',
            fontSize: '0.82rem',
            fontWeight: isActive ? 600 : 400,
            color: isActive ? 'var(--accent)' : 'var(--sidebar-muted)',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--sidebar-text)' }}
          onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--sidebar-muted)' }}
          >
            {lang === 'tr' ? n.tr : n.en}
          </button>
        )
      })}
    </nav>
  )
}

/* ── Desktop Sidebar ── */
export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang } = useLanguage()

  const ctrlBtn = {
    flex: 1,
    background: 'var(--accent-pale)',
    border: '1px solid var(--accent-border)',
    borderRadius: 8,
    padding: '0.45rem',
    color: 'var(--accent)',
    cursor: 'pointer',
    transition: 'opacity 0.15s',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    fontSize: '0.72rem',
    fontWeight: 700 as const,
    letterSpacing: '0.05em',
  }

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.35rem', fontWeight: 700,
          color: 'var(--sidebar-text)', lineHeight: 1.15,
        }}>
          Gülveren<br />
          <span style={{ color: 'var(--accent)' }}>Canpolat</span>
        </p>
        <p style={{ fontSize: '0.67rem', color: 'var(--sidebar-muted)', letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: '0.4rem' }}>
          Software Eng. & Data Analyst
        </p>
      </div>

      {/* Status */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.45rem 0.75rem', borderRadius: 8, marginBottom: '1.75rem',
        background: 'var(--accent-pale)', border: '1px solid var(--accent-border)',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e', flexShrink: 0 }} />
        <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 500 }}>Open to opportunities</span>
      </div>

      {/* Nav */}
      <NavLinks />

      <div style={{ flex: 1 }} />

      {/* Socials */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.75rem' }}>
        {[
          { icon: <FiGithub size={14} />, href: 'https://github.com/gulveren1453' },
          { icon: <FiLinkedin size={14} />, href: 'https://linkedin.com/in/gulveren1453' },
          { icon: <FiMail size={14} />, href: 'mailto:gulveren211504041@gmail.com' },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{
              width: 30, height: 30, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--accent-pale)', border: '1px solid var(--accent-border)',
              color: 'var(--accent)', transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.4rem' }}>
        <button onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} style={ctrlBtn}>
          {lang === 'tr' ? 'EN' : 'TR'}
        </button>
        <button onClick={toggleTheme} style={ctrlBtn}>
          {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
        </button>
      </div>
    </aside>
  )
}

/* ── Mobile Top Bar ── */
export function MobileBar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="mob-topbar">
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: 'var(--accent)' }}>GC</span>
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          <button onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} style={{
            background: 'var(--accent-pale)', border: '1px solid var(--accent-border)',
            borderRadius: 6, padding: '0.22rem 0.5rem',
            fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent)', cursor: 'pointer',
          }}>
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <button onClick={toggleTheme} style={{
            background: 'var(--accent-pale)', border: '1px solid var(--accent-border)',
            borderRadius: 6, padding: '0.28rem', color: 'var(--accent)',
            cursor: 'pointer', display: 'flex', alignItems: 'center',
          }}>
            {theme === 'dark' ? <FiSun size={13} /> : <FiMoon size={13} />}
          </button>
          <button onClick={() => setOpen(v => !v)} style={{
            background: 'var(--accent-pale)', border: '1px solid var(--accent-border)',
            borderRadius: 6, padding: '0.28rem', color: 'var(--accent)',
            cursor: 'pointer', display: 'flex', alignItems: 'center',
          }}>
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{
              position: 'fixed', top: 52, left: 0, right: 0, zIndex: 199,
              background: 'var(--sidebar-bg)',
              borderBottom: '1px solid var(--sidebar-border)',
              padding: '1rem 1.25rem 1.5rem',
            }}
          >
            <NavLinks onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
