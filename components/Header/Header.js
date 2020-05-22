import React from 'react'
import styles from './Header.module.css'

export default function Header({ children }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{children}</h1>
    </header>
  )
}
