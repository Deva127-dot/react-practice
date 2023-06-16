import React from "react";
import styles from "./profile.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

function ProfileCard() {

    const handleChange=()=>{
      alert('Aryan')
    }
    const handleChange2=()=>{
      alert('Ram Pratap')
    }
    const handleChange3=()=>{
      alert('Paras Dighe')
    }

  return (
    <div className={styles.main}>
      <div className={styles.sub_main}>
        <div className={styles.sub_main2}>
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
            alt="Designer"
            className={styles.img}
          />
          <p>UX/ UI DESIGNER</p>
          <h1 className={styles.name}>Aryan Shirani</h1>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ut dignissimos rerum tenetur dicta necessitatibus eveniet quaerat.
          </p>
          <div className={styles.icons}>
            <LinkedInIcon className={styles.icon1} />
            <TelegramIcon className={styles.icon2} />
            <InstagramIcon className={styles.icon3} />
          </div>
          <button onClick={handleChange}>See more</button>
        </div>
      </div>

      <div className={styles.sub_main}>
        <div className={styles.sub_main2}>
          <img
            src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
            alt="Designer"
            className={styles.img}
          />
          <p>UX/ UI DESIGNER</p>
          <h1 className={styles.name}> Ram Pratap </h1>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla quas veniam ipsum at quaerat harum eius.
          </p>
          <div className={styles.icons}>
            <LinkedInIcon className={styles.icon1} />
            <TelegramIcon className={styles.icon2} />
            <InstagramIcon className={styles.icon3} />
          </div>
          <button onClick={handleChange2}>See more</button>
        </div>
      </div>

      <div className={styles.sub_main}>
        <div className={styles.sub_main2}>
          <img
            src="https://www.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg"
            alt="Designer"
            className={styles.img}
          />
          <p>UX/ UI DESIGNER</p>
          <h1 className={styles.name}> Paras Dighe </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum alias aliquid aut quis, vitae maxime?
          </p>
          <div className={styles.icons}>
            <LinkedInIcon className={styles.icon1} />
            <TelegramIcon className={styles.icon2} />
            <InstagramIcon className={styles.icon3} />
          </div>
          <button onClick={handleChange3}>See more</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
