import React, { useState } from 'react'
import styles from './names.module.css'

function Names() {

    let names=[
        {name:'Ranjan'},
        {name:'Ankit'},
        {name:'Rahul'},
        {name:'Deva'},
        {name:'Prathamesh'},
        {name:'Bhushan'},
        {name:'Shreyas'},
        {name:'Atharva'},
        {name:'Aniket'},
    ]

    let [list, setList]=useState(names);

    let removeHandler=(e) => {
        let x=e.target.getAttribute('removeNames')
        setList(list.filter(items=>items.name!==x))
    }
    // function add(){
    //   setList(list+1)
    // }
  return (
    <div className={styles.main}>
    <div className={styles.sub_main}>
    <input type='text' placeholder='add new user'/>
    <button>Add</button>
    </div>
      {
        list.map(x =>{
            return(
                <div>
                    {x.name}
                    <button removeNames={x.name} onClick={removeHandler}>delete</button>
                </div>
            )
        }
        ) 
      }
    </div>
  )
}

export default Names
