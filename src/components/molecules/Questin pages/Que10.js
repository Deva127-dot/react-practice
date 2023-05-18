import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que10() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.10</h3>
      <p className='opt'>
      10.How many states in India?
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          26
        </p>

        <p>
          <input type="radio" />
          27
        </p>

        <p>
          <input type="radio" />
          28
        </p>

        <p>
          <input type="radio" />
          29
        </p>
      </div>
      <button> <Link to={'/submit'}> Next </Link> </button>
    </div>
  )
}

export default Que10