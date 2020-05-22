import React from 'react'
import styles from './Content.module.css'

export default function Content({ children }) {
  return <div className={styles.content}>{children}</div>
}
