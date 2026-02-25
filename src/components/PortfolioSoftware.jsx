import styles from './PortfolioSoftware.module.css'
import { SOFTWARE_PROJECTS } from '../data/softwareProjects'
import ProjectCard from './ProjectCard'

export default function PortfolioSoftware() {
  return (
    <section className={styles.section} id="software">
      <div className={styles.intro}>
        <div>
          <div className={styles.label}>— Software Projects</div>
          <h2 className={styles.heading}>Software developer projects</h2>
          <p className={styles.desc}>
            Websites and apps I’ve built. Each card links to the live site and includes tech stack
            and a short description.
          </p>
          <a href="#project-grid-software" className={styles.exploreMore}>
            Explore more →
          </a>
        </div>
      </div>
      <div className={styles.grid} id="project-grid-software">
        {SOFTWARE_PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
