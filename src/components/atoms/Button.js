import React,{useRef} from 'react'
import './Button.css'

export default function Button() {

let inputRef=useRef()

function handleEvent(){
    inputRef.current.click()

}

  return (
    <div className='body'>
      <input type="file" ref={inputRef} hidden/>
      <button onClick={handleEvent} className='btn'>picks the file</button>
    </div>
  )
}
