import { useState, useEffect } from 'react'
import styles from './GetInTouch.module.css'

const EMAIL = 'm.khoradhahi7@gmail.com'

export default function GetInTouch() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!submitted) return

    const timer = setTimeout(() => {
      setSubmitted(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [submitted])

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill the form.')
      setSubmitted(false)
      return
    }

    setError('')
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="get-in-touch">
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Got a project? Let's talk.</h2>
          <p className={styles.text}>
            Feel free to reach out. Whether you have a question or want to discuss a project, I'll
            try my best to get back to you.
          </p>
          <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
            {EMAIL}
            <span className={styles.arrow} aria-hidden>
              →
            </span>
          </a>
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading}>Estimate your project? Let me know here.</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              <span className={styles.labelText}>What's your name?</span>
              <input
                type="text"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.labelText}>Your email</span>
              <input
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.labelText}>Tell me about your project</span>
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project..."
                rows={4}
              />
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitText}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {submitted && (
        <div className={styles.thankYouOverlay}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSubmitted(false)}
            aria-label="Close"
          >
            ×
          </button>
          <div className={styles.thankYouBox}>
            <p>Thank you for your message.</p>
          </div>
        </div>
      )}
    </section>
  )
}
