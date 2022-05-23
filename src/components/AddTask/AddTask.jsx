import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./addTask.module.css";
 
const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [inputdata,setinput] = useState("")
  const [items,setitem] = useState([])
  const additem =()=>{
      // const all = {id :new Date().getTime().toString,name:inputdata}
      setitem([...items,inputdata])
      setinput("")
  }
  return (
    <div className={styles.todoForm}>
      <h2>Todo List</h2>

      
      <input data-cy="add-task-input" type="text"    value={inputdata} onChange={(e)=>  setinput(e.target.value)} />
      <button  onClick={additem} data-cy="add-task-button">add</button>
      <div>
        
      {
                        items.map((e) =>{
                           return( <div className="each" key ={e.id}> 
                        <h3>{e}  <Counter/> <button className="BTN"  >remove</button> </h3>  
                         
                    </div>
                           )
 
                        })
                    }
      </div>
    </div>
  );
};

export default AddTask;
