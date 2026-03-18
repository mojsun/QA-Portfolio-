import { useEffect } from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import SkillsMarquee from '../components/SkillsMarquee'
import QAWorkflow from '../components/QAWorkflow'
import ImpactStats from '../components/ImpactStats'
import PortfolioQA from '../components/PortfolioQA'
import SectionDivider from '../components/SectionDivider'
import PortfolioSoftware from '../components/PortfolioSoftware'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import styles from './HomePage.module.css'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Moji Shahi | QA Automation Engineer'

    const nodes = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.animated)
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.08 }
    )
    nodes.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.rightLine} aria-hidden />
      <Hero />
      <div className={styles.sectionAnimate} data-animate>
        <Experience />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        <SkillsMarquee />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        {/* QA mindset and impact, to quickly build recruiter trust */}
        <QAWorkflow />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        <ImpactStats />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        <PortfolioQA />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        <SectionDivider />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        <PortfolioSoftware />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        <GetInTouch />
      </div>
      <div className={styles.sectionAnimate} data-animate>
        <Footer />
      </div>
    </div>
  )
}
