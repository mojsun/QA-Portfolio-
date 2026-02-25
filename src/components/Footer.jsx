import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo} aria-hidden>
        M
      </div>
      <p className={styles.thanks}>Made by Moji Shahi.</p>
      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/mojsun"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://github.com/mojsun"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.293 9.39 7.868 10.914.576.104.787-.25.787-.556 0-.274-.01-1.002-.015-1.967-3.2.695-3.878-1.543-3.878-1.543-.524-1.33-1.28-1.685-1.28-1.685-1.046-.715.08-.701.08-.701 1.157.082 1.766 1.188 1.766 1.188 1.028 1.762 2.697 1.253 3.354.958.104-.744.402-1.253.73-1.541-2.554-.29-5.238-1.277-5.238-5.683 0-1.256.45-2.283 1.187-3.087-.12-.29-.515-1.458.113-3.04 0 0 .966-.31 3.17 1.18.918-.255 1.9-.382 2.878-.387.977.005 1.96.132 2.88.387 2.2-1.49 3.165-1.18 3.165-1.18.63 1.582.236 2.75.116 3.04.74.804 1.184 1.831 1.184 3.087 0 4.417-2.69 5.39-5.255 5.675.413.356.78 1.057.78 2.133 0 1.54-.014 2.78-.014 3.158 0 .309.207.667.793.554C20.21 21.386 23.5 17.086 23.5 12 23.5 5.648 18.352.5 12 .5z" />
          </svg>
        </a>
        <a href="m.khorashahi7@gmail.com" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
