import React, {useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  let styles = {
    marginRight:"5px",marginLeft:"5px",fontSize:"20px", cursor:"pointer", backgroundColor:"blue", color:"#fff", border:"none", borderRadius:"5px", padding:"2px 10px"
}
  // sample value to be replaced
  const [count, setCount] = useState(0)
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" style={styles} onClick={()=> setCount(count+1)}>+</button>
      <span  data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" style={styles} onClick={()=> count>0 ? setCount(count-1) : 0 }>-</button>
    </div>
  );
};

export default Counter;
