import styles from './QAWorkflow.module.css'

export default function QAWorkflow() {
  return (
    <section className={styles.section} aria-labelledby="qa-workflow-heading">
      <div className={styles.headerRow}>
        <div>
          <div className={styles.label}>— How I Approach QA</div>
          <h2 id="qa-workflow-heading" className={styles.heading}>
            Practical QA workflow from requirements to release
          </h2>
          <p className={styles.lead}>
            A simple, repeatable process I use to design, execute, and automate tests that
            support faster, safer releases.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.step}>01</span>
          <h3 className={styles.cardTitle}>Analyze requirements</h3>
          <p className={styles.cardText}>
            Review user stories, acceptance criteria, and edge cases to define clear test
            scenarios for critical flows.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.step}>02</span>
          <h3 className={styles.cardTitle}>Manual validation first</h3>
          <p className={styles.cardText}>
            Run exploratory and regression passes to uncover usability issues and validate
            behaviour before automating.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.step}>03</span>
          <h3 className={styles.cardTitle}>Automate stable flows</h3>
          <p className={styles.cardText}>
            Build maintainable UI and API suites for stable, repeatable workflows using
            Selenium, Cypress, and Python.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.step}>04</span>
          <h3 className={styles.cardTitle}>Integrate into CI/CD</h3>
          <p className={styles.cardText}>
            Plug tests into CI pipelines to run on every change and catch regressions early
            in the lifecycle.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.step}>05</span>
          <h3 className={styles.cardTitle}>Track & verify fixes</h3>
          <p className={styles.cardText}>
            Log defects with clear repro steps, collaborate with developers, and re-run
            targeted suites to confirm fixes.
          </p>
        </div>
      </div>
    </section>
  )
}

