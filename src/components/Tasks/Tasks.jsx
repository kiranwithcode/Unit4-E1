import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({ todos, delHandler, doneHandler }) => {
  // NOTE: do not delete `data-cy` key value pair
  if (todos.length <= 0) {
    return (
      <div className='jumbotron text-center'>
        <h1 className='text-danger'>No Todo Found!</h1>
        <h4>Add your own!</h4>
      </div>
    )
  }
  return (
    <>
   
      <div className={`${styles.empty} listWrap`}>
      <ul data-cy="tasks" className={`${styles.tasks} list-group`}>
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <Task
              key={todo.id}
              id={todo.id}
              title={todo.title}
              done={todo.done}
              delHandler={delHandler}
              doneHandler={doneHandler}
            />
          ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </div>
    </>
  );
};

export default Tasks;
