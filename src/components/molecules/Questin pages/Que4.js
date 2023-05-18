import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que4() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.4</h3>
      <p className='opt'>
      3.How may months in 1 year?
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          10
        </p>

        <p>
          <input type="radio" />
          12
        </p>

        <p>
          <input type="radio" />
          13
        </p>

        <p>
          <input type="radio" />
          9
        </p>
      </div>
      <button> <Link to={'/que5'}> Next </Link> </button>
    </div>
  )
}

export default Que4
