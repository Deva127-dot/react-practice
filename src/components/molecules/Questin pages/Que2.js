import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que2() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.2</h3>
      <p className='opt'>
      2. Third day of the week is...
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
      <button> <Link to={'/que3'}> Next </Link> </button>
    </div>
  )
}

export default Que2
