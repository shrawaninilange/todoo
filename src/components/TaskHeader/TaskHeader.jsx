import React, { useState } from "react";
import styles from "./taskHeader.module.css";
 import AddTask from "../AddTask/AddTask";
const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;
  const [count,setcount] =useState(0)
  const hand =(value)=>{
    setcount (value+count)
  }

   
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task" onClick={()=>hand(+1)}>{unCompletedTask}/</b>
      <b data-cy="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
