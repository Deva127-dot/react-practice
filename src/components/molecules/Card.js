import React from "react";
import styles from "./card.module.css";
import profiles1 from "./profiles1";
// import './text.css'

export default function Card(props) {
  return (
    <>
    <p className={styles.stl}>Know your mentors</p>
      <p className={styles.dsn}>Work with a mentor (senior data scientists from top companies) who closely looks at your progress, gives you personalized feedback and helps you fill gaps in your knowledge.</p>
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.card1}>
        <img src={profiles1[0].imgURL} />
        <h4> {profiles1[0].name} </h4>
        <p> {profiles1[0].position} </p>
        <a> {profiles1[0].experience} </a>
        </div>
        <div className={styles.card1}>
        <img src={profiles1[1].imgURL} />
        <h4> {profiles1[1].name} </h4>
        <p> {profiles1[1].position} </p>
        <a> {profiles1[1].experience} </a>
        </div>
        <div className={styles.card1}>
        <img src={profiles1[2].imgURL} />
        <h4> {profiles1[2].name} </h4>
        <p> {profiles1[2].position} </p>
        <a> {profiles1[2].experience} </a>
        </div>
        <div className={styles.card1}>
        <img src={profiles1[3].imgURL} />
        <h4> {profiles1[3].name} </h4>
        <p> {profiles1[3].position} </p>
        <a> {profiles1[3].experience} </a>
        </div>
        <div className={styles.card1}>
        <img src={profiles1[4].imgURL} />
        <h4> {profiles1[4].name} </h4>
        <p> {profiles1[4].position} </p>
        <a> {profiles1[4].experience} </a>
        </div>
        <div className={styles.card1}>
        <img src={profiles1[5].imgURL} />
        <h4> {profiles1[5].name} </h4>
        <p> {profiles1[5].position} </p>
        <a> {profiles1[5].experience} </a>
        </div>
        <div className={styles.card1}>
        <img src={profiles1[6].imgURL} />
        <h4> {profiles1[6].name} </h4>
        <p> {profiles1[6].position} </p>
        <a> {profiles1[6].experience} </a>
        </div>
        <div className={styles.card1}>
          <img src={profiles1[7].imgURL} />
        <h4> {profiles1[7].name} </h4>
        <p> {profiles1[7].position} </p>
        <a> {profiles1[7].experience} </a>
        </div>
        <div className={styles.card1}>
          <img src={profiles1[8].imgURL} />
        <h4> {profiles1[8].name} </h4>
        <p> {profiles1[8].position} </p>
        <a> {profiles1[8].experience} </a>
        </div>
        <div className={styles.card1}>
          <img src={profiles1[9].imgURL} />
        <h4> {profiles1[9].name} </h4>
        <p> {profiles1[9].position} </p>
        <a> {profiles1[9].experience} </a>
        </div>
        <div className={styles.card1}>
          <img src={profiles1[10].imgURL} />
        <h4> {profiles1[10].name} </h4>
        <p> {profiles1[10].position} </p>
        <a> {profiles1[10].experience} </a>
        </div>
        <div className={styles.card1}>
          <img src={profiles1[11].imgURL} />
        <h4> {profiles1[11].name} </h4>
        <p> {profiles1[11].position} </p>
        <a> {profiles1[11].experience} </a>
        </div>
        <div className={styles.card1}>
          <img src={profiles1[12].imgURL} />
        <h4> {profiles1[12].name} </h4>
        <p> {profiles1[12].position} </p>
        <a> {profiles1[12].experience} </a>
        </div>
        <div className={styles.card1}>
          <img src={profiles1[13].imgURL} />
        <h4> {profiles1[13].name} </h4>
        <p> {profiles1[13].position} </p>
        <a> {profiles1[13].experience} </a>
        </div>
        {/* <div className={styles.card1}>
          <img src={profiles1[3].imgURL} />
        <h4> {profiles1[3].name} </h4>
        <p> {profiles1[3].position} </p>
        <a> {profiles1[3].experience} </a>4
        </div> */}
      </div>
    </div>
    </>
  );
}
