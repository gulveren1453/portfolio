import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { t } = useLanguage()
  const ed = t.education

  return (
    <section id="education" className="section" style={{ background: 'var(--bento-bg)' }}>
      <div className="sec-inner">
        <div className="sec-label-col">
          <span>{ed.label}</span>
          <div className="sec-line" />
          <span className="sec-num">03</span>
        </div>

        <div>
          <h2 className="section-h">{ed.title}</h2>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem', borderRadius: 18, background: 'var(--bento-bg-alt)', border: '1px solid var(--bento-border)', maxWidth: 520, flexWrap: 'wrap', boxShadow: 'var(--card-shadow)' }}>
            <div style={{ width: 90, height: 90, borderRadius: 16, background: 'var(--accent)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>4.</span>
              <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Year</span>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '0.3rem' }}>{ed.degree}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.2rem' }}>{ed.school}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-4)' }}>{ed.period} · Gaziantep</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
