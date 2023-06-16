import React from 'react'
import styles from './productDetails.module.css'
import Details from './Details'

function ProductDetails() {
  return (
    <div className={styles.heading} >
    <h1 className={styles.h1}>Product Cards</h1>
    <div className={styles.productDetailMain} >
      <Details
        productId='1'
        productPic='https://5.imimg.com/data5/SELLER/Default/2021/8/TR/LK/BG/136258631/mens-black-casual-shoes-500x500.jpg'
        productName='Sparx Men Canvas Black Shoes'
        Brand='Sparx'
        productDescription ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic.'
        Price ='1,879Rs'
      />
      <Details
        productId='2'
        productPic='https://staticimg.titan.co.in/Fastrack/Catalog/3227SL01_1.jpg?impolicy=pqlow&imwidth=640'
        productName='Fastrack fastfit black Hand-watch'
        Brand='Fastrack'
        productDescription ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic.'
        Price ='2,425Rs'
      />
      <Details
        productId='3'
        productPic='https://d328c8xxrtt5uf.cloudfront.net/wp-content/uploads/2019/11/27232936/5ddf06d7628cf.jpg'
        productName='Ray-Ban sunglasses'
        Brand='Ray-Ban'
        productDescription ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic.'
        Price ='1,875Rs'
      />
      <Details
        productId='4'
        productPic='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?w=480&dpr=1.3'
        productName='T-Shirt for boy'
        Brand='Souled Store'
        productDescription ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic.'
        Price ='499Rs'
      />
      <Details
        productId='5'
        productPic='https://cdn.shopify.com/s/files/1/0622/6709/7324/products/gz8965-21084_A_2048x2048.jpg?v=1646490230'
        productName='i-Phone 13 back-cover'
        Brand='i-phone accessories'
        productDescription ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic.'
        Price ='1,025Rs'
      />
      <Details
        productId='6'
        productPic='https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103'
        productName='boat Airpodes'
        Brand='boAt'
        productDescription ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic.'
        Price ='1,099Rs'
      />
    </div>
    </div>
  )
}

export default ProductDetails
