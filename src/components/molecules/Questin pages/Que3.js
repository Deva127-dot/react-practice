import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que3() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.3</h3>
      <p className='opt'>
      3.How may seconds in 1 hour?
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          3400
        </p>

        <p>
          <input type="radio" />
          3500
        </p>

        <p>
          <input type="radio" />
          3600
        </p>

        <p>
          <input type="radio" />
          3700
        </p>
      </div>
      <button> <Link to={'/que4'}> Next </Link> </button>
    </div>
  )
}

export default Que3
