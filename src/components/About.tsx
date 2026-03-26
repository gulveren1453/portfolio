import { motion } from 'framer-motion'
import { FiMapPin, FiBook, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="section" style={{ background: 'var(--bento-bg)' }}>
      <div className="sec-inner">
        <div className="sec-label-col">
          <span>{a.label}</span>
          <div className="sec-line" />
          <span className="sec-num">01</span>
        </div>

        <div>
          <motion.h2 className="section-h" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {a.title}
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            style={{ color: 'var(--text-3)', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '2rem', maxWidth: 600 }}>
            {a.text}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {[
              { icon: <FiMapPin size={13} />, text: a.location },
              { icon: <FiBook size={13} />, text: a.university },
              { icon: <FiGlobe size={13} />, text: a.language },
            ].map((item, i) => (
              <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.42rem 0.9rem', borderRadius: 100, border: '1px solid var(--bento-border)', background: 'var(--bento-bg-alt)', fontSize: '0.8rem', color: 'var(--text-3)' }}>
                <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
