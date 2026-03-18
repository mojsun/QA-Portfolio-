import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { QA_PROJECTS } from '../data/qaProjects'
import styles from './GridPage.module.css'

export default function QAPage() {
  useEffect(() => {
    document.title = 'QA Automation Projects | Moji Shahi'
  }, [])

  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <div className={styles.top}>
          <Link to="/" className={styles.back}>
            ← Home
          </Link>
          <h1 className={styles.title}>QA & automation projects</h1>
          <p className={styles.sub}>
            End-to-end and API test automation, CI integration, and clear reporting.
          </p>
        </div>
        <div className={styles.grid}>
          {QA_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </>
  )
}
