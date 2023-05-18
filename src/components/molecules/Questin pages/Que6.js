import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que6() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.6</h3>
      <p className='opt'>
      6.How may english letters?
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          25
        </p>

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
      </div>
      <button> <Link to={'/que7'}> Next </Link> </button>
    </div>
  )
}

export default Que6
