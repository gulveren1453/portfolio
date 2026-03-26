import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  const sk = t.skills

  return (
    <section id="skills" className="section" style={{ background: 'var(--bento-bg-alt)' }}>
      <div className="sec-inner">
        <div className="sec-label-col">
          <span>{sk.label}</span>
          <div className="sec-line" />
          <span className="sec-num">04</span>
        </div>

        <div>
          <h2 className="section-h">{sk.title}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {sk.categories.map((cat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ padding: '1.5rem', borderRadius: 18, background: 'var(--bento-bg)', border: '1px solid var(--bento-border)', borderTop: '3px solid var(--accent)', boxShadow: 'var(--card-shadow)' }}
              >
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem' }}>
                  {cat.name}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {cat.items.map((item, j) => (
                    <motion.div key={j}
                      initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + j * 0.04 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.45rem 0', borderBottom: j < cat.items.length - 1 ? '1px solid var(--bento-border)' : 'none' }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.86rem', color: 'var(--text-2)', fontWeight: 500 }}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
