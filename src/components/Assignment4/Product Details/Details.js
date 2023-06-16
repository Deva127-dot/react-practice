import React from 'react'
import styles from './productDetails.module.css';
import StarIcon from '@mui/icons-material/Star';

function Details(prpos) {

    const handleClick=()=>{
        alert ('Your Product is added in the cart , please proceed to pay !!!')
    }
    // ‘Product of is  1 , which is Shoes of brand Adidas has of rupees 4000 is added in the cart , please proceed to pay !!! ’

  return (
    <div>
     <div className={styles.main} >
      <p className={styles.id}> {prpos.productId} </p>
      <img src={prpos.productPic} className={styles.img} />
      <p className={styles.para1}> {prpos.productName} </p>
      <h3 className={styles.bramd}>{prpos.Brand}</h3>
      <p className={styles.para2}>{prpos.productDescription}</p>
      <p className={styles.price}>{prpos.Price}</p>
      <StarIcon className={styles.icon} />
      <StarIcon className={styles.icon}/>
      <StarIcon className={styles.icon}/>
      <StarIcon className={styles.icon}/>
      <StarIcon className={styles.icon2}/>
      <div className={styles.para3} >
        <p onClick={handleClick}>Add to Cart</p>
      </div>
       </div> 
    </div>
        )
}

export default Details
