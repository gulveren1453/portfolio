import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Certificates() {
  const { t } = useLanguage()
  const ce = t.certificates

  return (
    <section id="certificates" className="section" style={{ background: 'var(--bento-bg-alt)' }}>
      <div className="sec-inner">
        <div className="sec-label-col">
          <span>{ce.label}</span>
          <div className="sec-line" />
          <span className="sec-num">06</span>
        </div>

        <div>
          <h2 className="section-h">{ce.title}</h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {ce.items.map((cert, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: '1.25rem', alignItems: 'start', padding: '1.4rem 0', borderBottom: i < ce.items.length - 1 ? '1px solid var(--bento-border)' : 'none' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-pale)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                  <FiAward size={17} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.93rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '0.2rem', lineHeight: 1.35 }}>{cert.name}</h3>
                  <p style={{ fontSize: '0.77rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.35rem' }}>{cert.org}</p>
                  <p style={{ fontSize: '0.79rem', color: 'var(--text-4)', lineHeight: 1.6 }}>{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
