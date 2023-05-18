import React from 'react'
import './question.css'
import { Link } from 'react-router-dom'

function Que8() {
  return (
    <div className='que'>
      <h3 className='question'>Question No.8</h3>
      <p className='opt'>
      8.How may letters in the word of "Peacock"?
      </p>
      <div className='abc'>
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

        <p>
          <input type="radio" />
          7
        </p>
      </div>
      <button> <Link to={'/que9'}> Next </Link> </button>
    </div>
  )
}

export default Que8
