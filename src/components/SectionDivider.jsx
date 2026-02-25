import styles from './SectionDivider.module.css'

export default function SectionDivider() {
  return (
    <div className={styles.wrapper} aria-hidden>
      <div className={styles.base}>
        <div className={`${styles.bar} ${styles.barBottom}`} />
        <div className={`${styles.bar} ${styles.barMiddle}`} />
        <div className={`${styles.bar} ${styles.barTop}`} />
        <div className={styles.line} />
      </div>
    </div>
  )
}
