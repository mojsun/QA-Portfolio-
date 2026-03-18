import styles from './ImpactStats.module.css'

export default function ImpactStats() {
  return (
    <section className={styles.section} aria-labelledby="qa-impact-heading">
      <div className={styles.headerRow}>
        <div>
          <div className={styles.label}>— Impact</div>
          <h2 id="qa-impact-heading" className={styles.heading}>
            Outcomes from my QA work
          </h2>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.value}>25%</p>
          <p className={styles.caption}>reduction in manual regression effort by moving stable flows to automation.</p>
        </div>
        <div className={styles.card}>
          <p className={styles.value}>↑ coverage</p>
          <p className={styles.caption}>improved coverage of core login, checkout, and API workflows across projects.</p>
        </div>
        <div className={styles.card}>
          <p className={styles.value}>CI‑ready</p>
          <p className={styles.caption}>built automation suites that run in CI/CD to catch regressions before release.</p>
        </div>
      </div>
    </section>
  )
}

