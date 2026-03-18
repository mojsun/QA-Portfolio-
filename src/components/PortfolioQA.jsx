import { Link } from 'react-router-dom'
import styles from './PortfolioQA.module.css'
import { QA_PROJECTS } from '../data/qaProjects'
import ProjectCard from './ProjectCard'

export default function PortfolioQA() {
  const featuredProjects = QA_PROJECTS.slice(0, 4)

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.intro}>
        <div>
          <div className={styles.label}>— QA Projects</div>
          <h2 className={styles.heading}>Featured QA automation projects</h2>
          <p className={styles.desc}>
            End‑to‑end and API automation work that reflects how I test real products: clear scope,
            maintainable frameworks, and CI‑friendly reporting.
          </p>
          <div className={styles.ctas}>
            <Link to="/qa-projects" className={styles.primaryCta}>
              View all QA projects
            </Link>
            <Link to="/software-projects" className={styles.secondaryCta}>
              View software projects
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.grid} id="project-grid-qa">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} variant="featured" />
        ))}
      </div>
    </section>
  )
}
