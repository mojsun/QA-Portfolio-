import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { SOFTWARE_PROJECTS } from '../data/softwareProjects'
import styles from './GridPage.module.css'

export default function SoftwarePage() {
  useEffect(() => {
    document.title = 'Software Projects | Moji Shahi'
  }, [])

  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <div className={styles.top}>
          <Link to="/" className={styles.back}>
            ← Home
          </Link>
          <h1 className={styles.title}>Software developer projects</h1>
          <p className={styles.sub}>
            Websites and apps I’ve built. Live links and tech stack on each card.
          </p>
        </div>
        <div className={styles.grid}>
          {SOFTWARE_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </>
  )
}
