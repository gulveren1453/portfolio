import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const co = t.contact

  return (
    <section id="contact" className="section" style={{ background: 'var(--bento-bg)' }}>
      <div className="sec-inner">
        <div className="sec-label-col">
          <span>{co.label}</span>
          <div className="sec-line" />
          <span className="sec-num">07</span>
        </div>

        <div>
          <h2 className="section-h">{co.title}</h2>
          <p style={{ color: 'var(--text-3)', lineHeight: 1.8, fontSize: '0.97rem', maxWidth: 500, marginBottom: '2.5rem' }}>{co.subtitle}</p>

          {/* Big email button */}
          <motion.a href="mailto:gulveren211504041@gmail.com"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ x: 5 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.4rem 1.75rem', borderRadius: 18, background: 'var(--accent)', color: '#fff', textDecoration: 'none', marginBottom: '1.25rem', boxShadow: '0 6px 28px var(--glow)', maxWidth: 500, transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 44px var(--glow)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px var(--glow)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <FiMail size={20} />
              <div>
                <p style={{ fontSize: '0.65rem', opacity: 0.75, marginBottom: '0.1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{co.email}</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>gulveren211504041@gmail.com</p>
              </div>
            </div>
            <FiArrowRight size={18} />
          </motion.a>

          {/* Other links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', maxWidth: 500 }}>
            {[
              { icon: <FiGithub size={14} />, label: 'GitHub', href: 'https://github.com/gulveren1453' },
              { icon: <FiLinkedin size={14} />, label: 'LinkedIn', href: 'https://linkedin.com/in/gulveren1453' },
              { icon: <FiPhone size={14} />, label: '+90 553 165 96 35', href: 'tel:+905531659635' },
            ].map((l, i) => (
              <motion.a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.55rem 1rem', borderRadius: 100, border: '1px solid var(--bento-border)', background: 'var(--bento-bg-alt)', color: 'var(--text-3)', fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--bento-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-3)' }}
              >
                <span style={{ color: 'var(--accent)' }}>{l.icon}</span>
                {l.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
