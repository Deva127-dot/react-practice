import React, { useState } from 'react'
import axios from 'axios'
import './RandomDogs.css'

export default function RandomDogs(){

    const [img, setImg]=useState()

      async function dog(){
        // const data={img}
        try{
        const response= await axios.get('https://dog.ceo/api/breeds/image/random');
        setImg(response.img.message);
    } catch (error) {
        console.log(error.error)
    }
    //   setImg(" ")
}
        

    
    return(
        <div  className='random'>
        <button onClick={dog}>Click me</button>
            <h1 className='txt'>Hello, I'm random dog from API</h1>
            <img 
            src={img}
            alt='Dog'
            className='img'
            />
        </div>
    )
}