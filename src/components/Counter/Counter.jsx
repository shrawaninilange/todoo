import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count ,setcount] =useState(0)
  // sample value to be replaced
  const hand =(value)=>{
    setcount (value+count)
  }

  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>hand(+1)}>add</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>hand(-1)}>remove</button>
    </div>
  );
};

export default Counter;
