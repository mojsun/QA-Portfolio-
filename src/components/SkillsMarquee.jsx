import styles from './SkillsMarquee.module.css'

export default function SkillsMarquee() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div className={styles.label}>— Skills</div>
          <h2 className={styles.heading}>QA-focused technical stack</h2>
          <p className={styles.lead}>
            A focused skill set for UI, API, and end-to-end automation, plus the tools I use to
            integrate tests into real delivery pipelines.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Automation</h3>
            <ul className={styles.list}>
              <li>Selenium</li>
              <li>Cypress</li>
              <li>PyTest</li>
              <li>Cucumber / Behave</li>
              <li>Page Object Model (POM)</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Languages</h3>
            <ul className={styles.list}>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>API &amp; Data</h3>
            <ul className={styles.list}>
              <li>Postman</li>
              <li>REST APIs</li>
              <li>SQL</li>
              <li>Python Requests</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>CI/CD &amp; Tools</h3>
            <ul className={styles.list}>
              <li>GitHub Actions</li>
              <li>Jenkins</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Jira &amp; Zephyr</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Cloud &amp; Practices</h3>
            <ul className={styles.list}>
              <li>AWS</li>
              <li>Agile / Scrum</li>
              <li>Test planning &amp; reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


