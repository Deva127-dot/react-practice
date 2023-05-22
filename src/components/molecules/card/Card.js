import React, { useState } from "react";
import styles from "./card.module.css";
import ToDoList from "../../atoms/todo list/ToDoList";

function Card() {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);

  function addValue(e) {
    setData(e.target.value);
  }
  function setValue() {
    setItem((oldVal) => {
      return [...oldVal, data];
    });
    setData(" ");
  }
  const dleteItems=(id) =>{
    setItem((oldVal) => {
        return oldVal.filter((arrElem, index)=> {
            return index !== id;
        })
    })
  }

  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.heading}>ToDo List</h1>
        <input
          type="text"
          onChange={addValue}
          value={data}
        />
        <button onClick={setValue} className={styles.btn1} >Add</button>
        <ol>
          {item.map((val, index) => {
            return <ToDoList key={index} id={index} name={val} onSelect={dleteItems}/>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default Card;
