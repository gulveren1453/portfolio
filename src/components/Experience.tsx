import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const ex = t.experience

  return (
    <section id="experience" className="section" style={{ background: 'var(--bento-bg-alt)' }}>
      <div className="sec-inner">
        <div className="sec-label-col">
          <span>{ex.label}</span>
          <div className="sec-line" />
          <span className="sec-num">02</span>
        </div>

        <div>
          <h2 className="section-h">{ex.title}</h2>

          <div className="exp-cards" style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {ex.items.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.12 }}
                className="exp-card"
                style={{ flex: '0 0 320px', padding: '1.75rem', borderRadius: 18, background: 'var(--bento-bg)', border: '1px solid var(--bento-border)', position: 'relative', overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: i === 0 ? 'linear-gradient(90deg, var(--accent), var(--accent-2))' : 'var(--bento-border)' }} />
                <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem', marginTop: '0.2rem' }}>{item.period}</p>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '0.2rem' }}>{item.role}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.85rem' }}>{item.company}</p>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-3)', lineHeight: 1.75 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .exp-cards { flex-direction: column !important; overflow-x: visible !important; }
          .exp-card { flex: 1 1 auto !important; width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
