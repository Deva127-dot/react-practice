import React from "react";
import styles from './ToDoList.module.css'

function ToDoList(props) {
  return (
    <div>
      <li className={styles.list}>
        {" "}
        {props.name}{" "}
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        className={styles.btn}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default ToDoList;
