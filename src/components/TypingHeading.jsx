import { useState, useEffect } from 'react'
import styles from './TypingHeading.module.css'

const TEXT = "Hi, I'm Moji Shahi — QA Automation Engineer"
const NAME = 'Moji Shahi'
const NAME_START = TEXT.indexOf(NAME)
const NAME_END = NAME_START + NAME.length
const DELAY_MS = 120

export default function TypingHeading() {
  const [visibleLength, setVisibleLength] = useState(0)

  useEffect(() => {
    if (visibleLength >= TEXT.length) return
    const t = setTimeout(() => setVisibleLength((n) => n + 1), DELAY_MS)
    return () => clearTimeout(t)
  }, [visibleLength])

  const visible = TEXT.slice(0, visibleLength)
  const beforeName = visible.slice(0, Math.max(0, Math.min(visibleLength, NAME_START)))
  const namePart =
    visibleLength > NAME_START ? visible.slice(NAME_START, Math.min(visibleLength, NAME_END)) : ''
  const afterName = visibleLength > NAME_END ? visible.slice(NAME_END, visibleLength) : ''

  return (
    <h2 className={styles.heading} aria-label={TEXT}>
      {beforeName}
      {namePart && <span className={styles.name}>{namePart}</span>}
      {afterName}
      <span className={styles.cursor} aria-hidden />
    </h2>
  )
}
