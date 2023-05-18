import React from 'react'
import { Link } from 'react-router-dom'
import './question.css'

function Que1() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.1</h3>
      <p className='opt'>
      1. Today is monday. after 53 days, it will be...
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          Monday
        </p>

        <p>
          <input type="radio" />
          Tuesday
        </p>

        <p>
          <input type="radio" />
          Wednesday
        </p>

        <p>
          <input type="radio" />
          Thursday
        </p>
      </div>
      <button> <Link to={'/que2'}> Next </Link> </button>
    </div>
  )
}

export default Que1
