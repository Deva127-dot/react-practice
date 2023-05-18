import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'

function Home() {
  return (
    <div >
      <h1 className={styles.heading} >Best of Luck...</h1>
      <button className={styles.btn} > <Link to={'/que1'}> Start Test </Link>  </button>
    </div>
  )
}

export default Home
