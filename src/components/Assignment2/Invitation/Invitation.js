import React from 'react'
import styles from './invitation.module.css'

function Invitation(props) {
  return (
    <div className={styles.main} >
      <p>Subject : {props.subject} </p>
      <p>To : <a className={styles.anchor}>{props.mail}</a></p>
      <br />
      <p>Hii, <a className={styles.anchor}>{props.name}</a> </p>
      <br />
      <p> I am having a <a className={styles.anchor}>{props.program}</a> next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - <a className={styles.anchor}>{props.friends}</a>.</p>
      <br />
      <p> My house is behind our school , near <a className={styles.anchor}>{props.address}</a> </p>
      <br />
      <p>I hope you will come and see you soon .</p>
      <br />
      <p>from ,</p>
      <p> <a className={styles.anchor}>{props.name}</a> </p>
    </div>
  )
}

export default Invitation
