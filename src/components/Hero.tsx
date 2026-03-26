import { motion } from 'framer-motion'
import { FiArrowDownRight } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>
      {/* Left — dark/accent panel */}
      <div style={{
        background: 'var(--sidebar-bg)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(2rem, 5vw, 3.5rem)',
        position: 'relative', overflow: 'hidden',
        borderRight: '1px solid var(--sidebar-border)',
      }}>
        {/* Big outline name */}
        <div aria-hidden style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-8deg)',
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 700, lineHeight: 0.9,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(216,96,168,0.18)',
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>
          Gülveren<br />Canpolat
        </div>

        {/* Glow blob */}
        <div style={{
          position: 'absolute', bottom: '25%', left: '10%',
          width: 180, height: 180,
          background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(36px)', pointerEvents: 'none',
        }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.3rem 0.8rem', borderRadius: 100,
            border: '1px solid var(--accent-border)',
            background: 'var(--accent-pale)', marginBottom: '1.25rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 7px var(--accent)' }} />
            <span style={{ fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {t.hero.title}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700, color: 'var(--sidebar-text)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
          }}>
            Gülveren<br />
            <span style={{ color: 'var(--accent)' }}>Canpolat</span>
          </h1>
        </motion.div>
      </div>

      {/* Right — light panel */}
      <div style={{
        background: 'var(--bento-bg)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.75rem',
        padding: 'clamp(1.75rem, 5vw, 3.5rem)',
        borderLeft: '1px solid var(--bento-border)',
      }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ fontSize: '0.8rem', color: 'var(--text-4)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
          {t.hero.greeting}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'var(--text-2)', lineHeight: 1.85 }}>
          {t.hero.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.65rem 1.4rem', borderRadius: 100, background: 'var(--accent)', color: '#fff', fontSize: '0.84rem', fontWeight: 600, boxShadow: '0 4px 18px var(--glow)', transition: 'transform 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}
          >{t.hero.cta}</a>
          <a href="#projects" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.65rem 1.3rem', borderRadius: 100, border: '1px solid var(--bento-border)', background: 'var(--bento-bg-alt)', color: 'var(--text-2)', fontSize: '0.84rem', fontWeight: 500, transition: 'all 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--bento-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-2)' }}
          >{t.hero.projects}</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: '1px solid var(--bento-border)', borderRadius: 100, padding: '0.42rem 0.85rem', fontSize: '0.72rem', color: 'var(--text-4)', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--bento-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-4)' }}
          >scroll <FiArrowDownRight size={12} /></button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #hero { grid-template-columns: 1fr !important; min-height: auto !important; }
          #hero > div:first-child { min-height: 260px; }
          #hero > div:last-child { min-height: auto; }
        }
      `}</style>
    </section>
  )
}
