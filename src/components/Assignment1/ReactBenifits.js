import React from 'react'
import styles from './assignment1.module.css'

function ReactBenifits() {
  return (
    <div>
      <h1>Benifits of using react...</h1>
      <div className={styles.sub_main} >
      <p className={styles.paragraph}>1. Component-based architecture</p>
      <p className={styles.paragraph}>2. Virtual DOM for efficient update</p>
      <p className={styles.paragraph}>3. Rich ecosystem and community</p>
      <p className={styles.paragraph}>4. Cross platform development</p>
      <p className={styles.paragraph}>5. Strong community support</p>
      </div>
    </div>
  )
}

export default ReactBenifits
