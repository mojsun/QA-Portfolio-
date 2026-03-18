import { Link } from 'react-router-dom'
import styles from './PortfolioSoftware.module.css'
import { SOFTWARE_PROJECTS } from '../data/softwareProjects'
import ProjectCard from './ProjectCard'

export default function PortfolioSoftware() {
  const previewProjects = SOFTWARE_PROJECTS.slice(0, 2)

  return (
    <section className={styles.section} id="software">
      <div className={styles.intro}>
        <div>
          <div className={styles.label}>— Software Projects</div>
          <h2 className={styles.heading}>Software development projects</h2>
          <p className={styles.desc}>
            A small preview of my web and full‑stack work. These projects help me understand how
            applications are built so I can test them more effectively.
          </p>
          <div className={styles.ctas}>
            <Link to="/software-projects" className={styles.primaryCta}>
              View all software projects
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.grid} id="project-grid-software">
        {previewProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
