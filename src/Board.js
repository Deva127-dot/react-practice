import React from 'react'

function Board(props) {
  return (
    <div onClick={props.onClick}
     className="board">
      <h1> {props.value} </h1>
    </div>
  )
}
export default Board
