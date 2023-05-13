import React, { useState } from 'react'
import styles from './CardLogic.module.css'
import Card from '../atoms/card/Card'

function CardLogic() {

    const [value, setValue] = useState("")
    const [items, setItems] = useState([])

    const itoms = (event) =>{
        setValue(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, value];
        })
        setValue("");
    };

  return (
    <div className={styles.main}>
      <div className={styles.sub_main}>
      <br/>
        <h1 className={styles.txt}>ToDo List</h1>
        <br />
        <input type='text' placeholder='Add Your Items' className={styles.input} onChange={itoms}
          value={value}
        />
        <button onClick={listOfItems}> + </button>
        <ol>
            {/* <li> {value} </li> */}
            {items.map((itemsVal) => {
               return <Card text = {itemsVal} />
            })}
        </ol>
      </div>
    </div>
  )
}

export default CardLogic;