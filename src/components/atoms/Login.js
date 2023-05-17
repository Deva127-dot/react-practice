import React from 'react'
import styles from './header.module.css'
import img1 from './images/img1.png'

function Login() {
  return (
    <>
    <img src={img1} className={styles.img3} />
    <h1 className={styles.txt} >Login Here</h1>
    <div className={styles.login} >
      Username
      <input type='text' placeholder='enter your username' className={styles.input}/>
      Password
      <input type='text' placeholder='enter your password' className={styles.input}/>
      <br />
      <button>Log in</button>
    </div>
    </>
  )
}

export default Login
