import { useState } from 'react'
import styles from './Experience.module.css'
import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const job = EXPERIENCE[activeIndex]
  const isEducation = job.tabLabel === 'Education'

  return (
    <section className={styles.section} id="experience">
      <div className={styles.intro}>
        <div>
          <div className={styles.label}>— Experience</div>
          <h2 className={styles.heading}>Where I've Worked</h2>
          <p className={styles.desc}>
            Professional experience and education.
          </p>
        </div>
      </div>
      <div className={styles.layout}>
        <nav className={styles.tabs} aria-label="Experience & Education">
          {EXPERIENCE.map((item, i) => (
            <button
              key={item.tabLabel}
              type="button"
              className={`${styles.tab} ${i === activeIndex ? styles.tabActive : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-selected={i === activeIndex}
            >
              {item.tabLabel}
            </button>
          ))}
        </nav>
        <div className={styles.detail}>
          {!isEducation ? (
            <>
              <h3 className={styles.role}>
                {job.role} <span className={styles.at}>@ {job.roleSub || job.company}</span>
              </h3>
              <p className={styles.duration}>{job.duration}</p>
              <ul className={styles.points}>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h3 className={styles.role}>Education</h3>
              <ul className={styles.points}>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
