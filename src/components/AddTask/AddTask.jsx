import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({ error, value, submit, onChange }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      {/* <input data-cy="add-task-input" type="text" />
      <button data-cy="add-task-button"></button> */}
      <form onSubmit={submit}>
      <div className='form-group row align-items-center'>
        <div className='col-9 pr-0 ml-2'>
          <input
            style={{padding:"15px 30px"}}
           data-cy="add-task-input"
            type='text'
            className='form-control-plaintext'
            placeholder='Add Task...'
            required
            value={value}
            onChange={onChange}
          />
          {error && <small className='form-text text-danger'>{error}</small>}
        </div>
        <div className='col-2 text-right'>
          <button style={{fontSize:"25px"}} data-cy="add-task-button" type='submit' className='btn btn-primary'>
            +
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default AddTask;
