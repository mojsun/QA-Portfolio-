import styles from './CornerFrame.module.css'

/**
 * Reusable overlay that draws only two L-shaped corner lines
 * (top-left and bottom-right). No background; transparent over page content.
 * pointer-events: none so it never blocks clicks.
 */
export default function CornerFrame() {
  return (
    <div className={styles.overlay} aria-hidden>
      <div className={styles.cornerTopLeft} />
      <div className={styles.cornerBottomRight} />
    </div>
  )
}
