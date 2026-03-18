import styles from './GetInTouch.module.css'

const EMAIL = 'm.khoradhahi7@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/mojsun'
const GITHUB = 'https://github.com/mojsun'
const RESUME = '/assets/Moji-Shahi-CV.pdf'

export default function GetInTouch() {
  return (
    <section className={styles.section} id="get-in-touch">
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Let&apos;s connect</h2>
          <p className={styles.text}>
            I&apos;m currently open to QA Automation Engineer / QA Analyst opportunities. If
            you&apos;re hiring or would like to talk about how I can help your team ship with more
            confidence, feel free to reach out.
          </p>
          <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
            {EMAIL}
            <span className={styles.arrow} aria-hidden>
              →
            </span>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>LinkedIn</span>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                /in/mojsun
              </a>
            </div>
            <div className={styles.card}>
              <span className={styles.cardLabel}>GitHub</span>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                @mojsun
              </a>
            </div>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Resume</span>
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                View resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

