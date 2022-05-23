import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ id, title, delHandler, doneHandler, done }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    // <li data-cy="task" className={styles.task}>
    //   <input type="checkbox" data-cy="task-checkbox" />
    //   <div data-cy="task-text"></div>
    //   {/* Counter here */}
    //   <button data-cy="task-remove-button"></button>
    // </li>
    
    <li data-cy="task" 
      className={` ${styles.task} list-group-item d-flex justify-content-between align-items-center ${
        done ? 'bg-success' : ''
      }`}
    >
     
      <button
          className={`btn btn-sm ${done ? 'btn-warning' : 'btn-success'}`}
          onClick={() => doneHandler(id)}
        >
          {done ? (
            <i className='fas fa-undo-alt'></i>
          ) : (
            <i className='fas fa-check' data-cy="task-checkbox"></i>
            // <input type="checkbox" data-cy="task-checkbox" />
          )}
        </button>
        {done && <del>{title}</del>}
      {!done && <>{title}</>}
      <div data-cy="task-text" className="d-flex">
      <Counter />
        <button  style={{marginLeft:"10px"}} data-cy="task-remove-button"
          className='btn btn-sm btn-danger mr-2'
          onClick={() => delHandler(id)}
        >
          <i className='far fa-trash-alt'></i>
        </button>
        
        
      </div>
    </li>

    
  );
};

export default Task;
