import styles from './PortfolioQA.module.css'
import { QA_PROJECTS } from '../data/qaProjects'
import ProjectCard from './ProjectCard'

export default function PortfolioQA() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.intro}>
        <div>
          <div className={styles.label}>— QA Projects</div>
          <h2 className={styles.heading}>Selected QA & automation projects</h2>
          <p className={styles.desc}>
            End-to-end and API test automation, CI integration, and clear reporting. Each project
            links to the GitHub repository and includes a short overview of scope and stack.
          </p>
          <a href="#project-grid-qa" className={styles.exploreMore}>
            Explore more →
          </a>
        </div>
      </div>
      <div className={styles.grid} id="project-grid-qa">
        {QA_PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
