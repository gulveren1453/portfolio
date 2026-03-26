import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Sidebar, { MobileBar } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function AppInner() {
  const [showTop, setShowTop] = useState(false)
  const { t } = useLanguage()
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div data-theme={theme} style={{ background: 'var(--bg)', color: 'var(--text-1)', transition: 'background 0.3s, color 0.3s' }}>
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Mobile top bar */}
      <MobileBar />

      {/* Main */}
      <div className="main-content">
        {/* Mobile top padding */}
        <div className="mob-pt" />

        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />

        <footer style={{ padding: '1.5rem 3.5rem', borderTop: '1px solid var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', background: 'var(--bento-bg-alt)' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-4)' }}>{t.footer.text} · {new Date().getFullYear()}</p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-4)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>Gaziantep, Türkiye</p>
        </footer>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50, width: 44, height: 44, borderRadius: '50%', background: 'var(--accent)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px var(--glow)' }}
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 480px) {
          footer { padding: 1.25rem 1.1rem !important; }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeProvider>
  )
}
