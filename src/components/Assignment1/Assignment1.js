import React from 'react'
import styles from './assignment1.module.css'
import ReactLogo from './ReactLogo'
import ReactBenifits from './ReactBenifits'
import Button from './Button'

function Assignment1() {
  return (
    <div className={styles.main} >
      <ReactLogo/>
      <ReactBenifits/>
      <Button/>
    </div>
  )
}

export default Assignment1
