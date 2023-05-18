import React from 'react'
import { Link } from 'react-router-dom'
import styles from './submit.module.css'

function Submit() {
  return (
    <div>
      <button className={styles.btn} ><Link to={'/'}>Submit</Link></button>
    </div>
  )
}

export default Submit
