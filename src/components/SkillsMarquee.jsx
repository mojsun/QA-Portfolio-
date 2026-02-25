import styles from './SkillsMarquee.module.css'

const qaSkills = [
  { label: 'Python', big: true },
  { label: 'SQL', big: false },
  { label: 'Selenium', big: true },
  { label: 'API testing', big: false },
  { label: 'JavaScript', big: true },
  { label: 'CI/CD', big: false },
  { label: 'Pytest', big: true },
  { label: 'Node.js', big: false },
  { label: 'Cypress', big: true },
  { label: 'UI testing', big: false },
  { label: 'Locust', big: false },
]

const softwareSkills = [
  { label: 'React', big: true },
  { label: 'TypeScript', big: false },
  { label: 'Node.js', big: true },
  { label: 'Tailwind CSS', big: false },
  { label: 'Express', big: true },
  { label: 'Bootstrap', big: false },
  { label: 'MongoDB', big: true },
  { label: 'Next.js', big: false },
  { label: 'jQuery', big: false },
  { label: 'GraphQL', big: false },
]

function Line({ items, label, direction }) {
  const dirClass = direction === 'rtl' ? styles.rightToLeft : styles.leftToRight

  return (
    <div className={`${styles.line} ${dirClass}`}>
      <div className={styles.track}>
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className={`${styles.item} ${item.big ? styles.itemBig : ''}`}
          >
            {index % items.length === 0 && (
              <span className={styles.groupLabel}>{label}</span>
            )}
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkillsMarquee() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.lines}>
          <Line items={qaSkills} label="QA SKILLS" direction="ltr" />
          <Line items={softwareSkills} label="SOFTWARE SKILLS" direction="rtl" />
        </div>
      </div>
    </section>
  )
}

