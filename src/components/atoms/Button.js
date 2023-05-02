import React,{useRef, useState} from 'react'
import './Button.css'

export default function Button() {

  const img1=['https://img.freepik.com/premium-vector/motorcycle-piston-vector-logo_77313-37.jpg']
  const img2=['https://cdn4.vectorstock.com/i/1000x1000/35/83/engineering-automotive-logo-icon-design-vector-22533583.jpg']

  const [data, setData]=useState({img2})

    // let inputRef =useRef()
    // const [img, setImg]=useState(1)

    function eventChange(){
      setData(data)
        
    }

  return (
    <div className='btn'>
      <img src={img1} height='400px' width='500px'
      className='img'
      />
      <br></br>
      <button  className='button' onClick={eventChange}>click here</button>
    </div>
  )
}
