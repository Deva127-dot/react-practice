import React from 'react'
import styles from './header.module.css'
import img1 from './images/img1.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.sub_main}>
        <img src={img1} className={styles.img}/>
        <Link to='/login'  className={styles.text} >Login</Link>
        <Link to='/registration'  className={styles.text}>Registration</Link>
        <Link to='/services'  className={styles.text}>Services</Link>
        <Link to='/about us'  className={styles.text}>About us</Link>
      </div>
      <div className={styles.content}>
        <img src='https://www.xrtoday.com/wp-content/uploads/2023/02/How-is-the-Automotive-Industry-Leveraging-XR.jpeg' className={styles.img2}/>
        <div className={styles.paragraph1}>
        <h1>Be there</h1>
        <p className={styles.paragraph2}>deliver brilliant messages in the moments that truly define your brand</p>
        <Link to='/know more'><button className={styles.btn1}>Know More</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Header
