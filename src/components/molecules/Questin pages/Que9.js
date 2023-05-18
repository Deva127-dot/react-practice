import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que9() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.9</h3>
      <p className='opt'>
      9.Natural Numbers starts from...?
      </p>
      <div className='abc'>
        <p>
          <input type="radio" />
          0
        </p>

        <p>
          <input type="radio" />
          1
        </p>

        <p>
          <input type="radio" />
          2
        </p>

        <p>
          <input type="radio" />
          -1
        </p>
      </div>
      <button> <Link to={'/que10'}> Next </Link> </button>
    </div>
  )
}

export default Que9
