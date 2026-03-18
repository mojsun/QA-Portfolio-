import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TypingHeading from './TypingHeading'
import styles from './Hero.module.css'

const PHOTO_SRC = '/photo.jpeg'

const SECTION_IDS = ['home', 'experience', 'skills', 'portfolio', 'software', 'get-in-touch']

export default function Hero() {
  const [showVersions, setShowVersions] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting && SECTION_IDS.includes(e.target.id))
        if (visible.length === 0) return
        const byTop = [...visible].sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )
        setActiveSection(byTop[0].target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  function handleGoToPrevious() {
    window.open('https://mozhdeh-khorashahi.vercel.app/', '_blank', 'noopener,noreferrer')
  }

  function handleGoToCurrent() {
    setShowVersions(false)
    const el = document.getElementById('home')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={styles.main}>
      <section className={styles.about} id="home">
        <div className={styles.label}>QA Automation Engineer / QA Analyst</div>
        <TypingHeading />
        <p className={styles.text}>
          I build reliable UI and API automation frameworks using Selenium, Cypress, and Python to
          improve software quality and support faster, safer releases.
        </p>
        <div className={styles.highlightsRow}>
          <span className={styles.badge}>Open to QA Automation / QA Analyst roles in Toronto</span>
          <ul className={styles.highlights}>
            <li>UI &amp; API automation</li>
            <li>CI/CD testing</li>
            <li>Manual + automation QA</li>
          </ul>
        </div>
        <div className={styles.ctas}>
          <Link to="/qa-projects" className={styles.primaryCta}>
            View QA projects
          </Link>
          <Link to="/software-projects" className={styles.secondaryCta}>
            View software projects
          </Link>
        </div>
      </section>

      <section className={styles.photoColumn}>
        <div className={styles.photoFrame}>
          <span className={styles.ring} style={{ '--offset': 6 }} aria-hidden />
          <span className={styles.ring} style={{ '--offset': 14 }} aria-hidden />
          <span className={styles.ring} style={{ '--offset': 24 }} aria-hidden />
          <span className={styles.ring} style={{ '--offset': 36 }} aria-hidden />
          <img src={PHOTO_SRC} alt="Moji Shahi" />
        </div>
      </section>

      {/* Spacer for grid; actual nav is fixed on the right */}
      <div className={styles.navSpacer} aria-hidden />

      <nav className={styles.nav} id="contact" aria-label="Main navigation">
        <ul className={styles.navList}>
          <li data-section="home" className={activeSection === 'home' ? styles.navItemActive : ''}>
            <a href="/#home">Home</a>
          </li>
          <li data-section="experience" className={activeSection === 'experience' ? styles.navItemActive : ''}>
            <a href="/#experience">Experience</a>
          </li>
          <li data-section="skills" className={activeSection === 'skills' ? styles.navItemActive : ''}>
            <a href="/#skills">Skills</a>
          </li>
          <li data-section="portfolio" className={activeSection === 'portfolio' ? styles.navItemActive : ''}>
            <Link to="/qa-projects">QA Projects</Link>
          </li>
          <li data-section="software" className={activeSection === 'software' ? styles.navItemActive : ''}>
            <Link to="/software-projects">Software Projects</Link>
          </li>
          <li data-section="get-in-touch" className={activeSection === 'get-in-touch' ? styles.navItemActive : ''}>
            <a href="/#get-in-touch">Contact</a>
          </li>
          <li>
            <a
              href="/assets/Moji-Shahi-CV.pdf"
              className={styles.cvLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.leftDivider} aria-hidden>
        <div className={styles.leftDividerLine} />
        <div className={`${styles.leftDividerBar} ${styles.leftDividerBarBottom}`} />
        <div className={`${styles.leftDividerBar} ${styles.leftDividerBarMiddle}`} />
        <div className={`${styles.leftDividerBar} ${styles.leftDividerBarTop}`} />
      </div>

      <div className={styles.questionMarkWrap}>
        <svg className={styles.questionMarkTrails} viewBox="0 0 200 120" aria-hidden>
          <defs>
            <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(232, 93, 4, 0)" />
              <stop offset="40%" stopColor="rgba(232, 93, 4, 0.9)" />
              <stop offset="100%" stopColor="rgba(255, 107, 26, 0.4)" />
            </linearGradient>
            <filter id="trailGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path className={styles.trailPath} filter="url(#trailGlow)" fill="none" stroke="url(#trailGrad)" strokeWidth="2" strokeLinecap="round" d="M 80 60 Q 20 30 30 70 T 75 65" />
          <path className={styles.trailPath} filter="url(#trailGlow)" fill="none" stroke="url(#trailGrad)" strokeWidth="1.5" strokeLinecap="round" d="M 120 60 Q 180 40 170 75 T 125 62" />
          <path className={styles.trailPath} filter="url(#trailGlow)" fill="none" stroke="rgba(232, 93, 4, 0.6)" strokeWidth="1" strokeLinecap="round" d="M 70 70 Q 5 50 25 80" />
          <path className={styles.trailPath} filter="url(#trailGlow)" fill="none" stroke="rgba(255, 107, 26, 0.5)" strokeWidth="1" strokeLinecap="round" d="M 130 55 Q 195 35 175 72" />
        </svg>
        <button
          type="button"
          className={`${styles.questionMark} ${showVersions ? styles.questionMarkActive : ''}`}
          onClick={() => setShowVersions((prev) => !prev)}
          aria-label="Show previous versions"
        >
          <span className={styles.questionMarkGlyph}>?</span>
        </button>
      </div>

      <div
        className={`${styles.versionsOverlay} ${
          showVersions ? styles.versionsOverlayVisible : ''
        }`}
      >
        <button
          type="button"
          className={styles.versionsClose}
          onClick={() => setShowVersions(false)}
          aria-label="Close"
        >
          ×
        </button>
        <div className={styles.versionsInner}>
          <h2 className={styles.versionsHeading}>Previous portfolio website versions</h2>
          <div className={styles.versionsCircles}>
            <div className={styles.versionItem}>
              <div className={styles.versionFramePlaceholder} />
              <p className={styles.versionCaption}>v1 – Older version</p>
            </div>
            <div className={styles.versionItem}>
              <button
                type="button"
                className={styles.versionClickTarget}
                onClick={handleGoToPrevious}
              >
                <div className={styles.versionFrame}>
                  <img src="/v2.png" alt="Portfolio version 2" />
                </div>
              </button>
              <p className={`${styles.versionCaption} ${styles.versionCaptionStrong}`}>
                v2 – Previous portfolio
              </p>
            </div>
            <div className={styles.versionItem}>
              <button
                type="button"
                className={styles.versionClickTarget}
                onClick={handleGoToCurrent}
              >
                <div className={styles.versionFrame}>
                  <img src="/v3-2.png" alt="Portfolio version 3" />
                </div>
              </button>
              <p className={styles.versionCaption}>v3 – This portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
