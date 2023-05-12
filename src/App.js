import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";
import { useState } from 'react'

function App() {
  // let arr=[0,1,2,3,4,5,6,7,8]
  const [data, setData] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const handleClick= index => { 
    const copyData = [...data]
    copyData[index]= isXTurn ? "X" : "O";
    setData(setData);
    setIsXTurn(!isXTurn);
  };
 
  return (
    <div className="main">
    <div>
      <Board onClick={() => handleClick[0]} value={data[0]}/>
      <Board onClick={() => handleClick[1]} value={data[1]}/>
      <Board onClick={() => handleClick[2]} value={data[2]}/>
    </div>
    <div>
      <Board onClick={() => handleClick[3]} value={data[3]}/>
      <Board onClick={() => handleClick[4]} value={data[4]}/>
      <Board onClick={() => handleClick[5]} value={data[5]}/>
    </div>
    <div>
      <Board onClick={() => handleClick[6]} value={data[6]}/>
      <Board onClick={() => handleClick[7]} value={data[7]}/>
      <Board onClick={() => handleClick[8]} value={data[8]}/>
    </div>
    </div>
  );
}

export default App;
