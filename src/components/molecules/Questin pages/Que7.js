import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que7() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.7</h3>
      <p className='opt'>
      7.How may days in 1 week?
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          7
        </p>

        <p>
          <input type="radio" />
          8
        </p>

        <p>
          <input type="radio" />
          6
        </p>

        <p>
          <input type="radio" />
          9
        </p>
      </div>
      <button> <Link to={'/que8'}> Next </Link> </button>
    </div>
  )
}

export default Que7
