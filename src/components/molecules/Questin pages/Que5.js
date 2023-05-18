import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que5() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.5</h3>
      <p className='opt'>
      5.How may days in 1 leap year?
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          364
        </p>

        <p>
          <input type="radio" />
          366
        </p>

        <p>
          <input type="radio" />
          365
        </p>

        <p>
          <input type="radio" />
          363
        </p>
      </div>
      <button> <Link to={'/que6'}> Next </Link> </button>
    </div>
  )
}

export default Que5
