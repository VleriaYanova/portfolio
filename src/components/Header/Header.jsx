import React from 'react'
import styles from './styles.module.scss'
import { useRef } from "react";

export default function Header() {
    let pupil = useRef(HTMLDivElement);

  return (
    <div className={styles.header}>
      <div className={styles.eye}>
        <div ref={pupil} className={styles.pupil}></div>
      </div>
      <div className={styles.eye}>
        <div className={styles.pupil}></div>
      </div>
    </div>
  )
}
