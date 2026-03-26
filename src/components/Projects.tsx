import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  const pr = t.projects

  return (
    <section id="projects" className="section" style={{ background: 'var(--bento-bg)' }}>
      <div className="sec-inner">
        <div className="sec-label-col">
          <span>{pr.label}</span>
          <div className="sec-line" />
          <span className="sec-num">05</span>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <h2 className="section-h" style={{ marginBottom: 0 }}>{pr.title}</h2>
            <a href="https://github.com/gulveren1453" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-4)', border: '1px solid var(--bento-border)', borderRadius: 100, padding: '0.38rem 0.85rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-4)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--bento-border)' }}
            >
              <FiGithub size={12} /> {pr.github}
            </a>
          </div>

          {/* Featured — dark card */}
          {pr.items[0] && (
            <motion.a href={pr.items[0].url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{ display: 'block', padding: '2rem', borderRadius: 20, background: 'var(--sidebar-bg)', border: '1px solid var(--sidebar-border)', marginBottom: '1rem', textDecoration: 'none', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px var(--glow)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(to bottom, var(--accent), var(--accent-2))' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', paddingLeft: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: 'var(--accent-border)', fontWeight: 700 }}>01</span>
                    <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, color: 'var(--sidebar-text)' }}>{pr.items[0].name}</h3>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: 'var(--sidebar-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{pr.items[0].desc}</p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {pr.items[0].tags.map((tag, j) => (
                      <span key={j} style={{ padding: '0.2rem 0.6rem', borderRadius: 100, fontSize: '0.68rem', background: 'var(--accent-pale)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--accent-pale)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                  <FiArrowUpRight size={16} />
                </div>
              </div>
            </motion.a>
          )}

          {/* Rest */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {pr.items.slice(1).map((project, i) => (
              <motion.a key={i} href={project.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', padding: '1.4rem', borderRadius: 16, background: 'var(--bento-bg-alt)', border: '1px solid var(--bento-border)', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px var(--glow)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--bento-border)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.82rem', color: 'var(--accent-border)', fontWeight: 700 }}>{String(i + 2).padStart(2, '0')}</span>
                  <FiArrowUpRight size={14} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.3 }}>{project.name}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-4)', lineHeight: 1.65, flex: 1 }}>{project.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.tags.map((tag, j) => <span key={j} className="pill" style={{ fontSize: '0.67rem' }}>{tag}</span>)}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
