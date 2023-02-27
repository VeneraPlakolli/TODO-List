import React from 'react';

import classes from './EditModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Edit Window</h2>
        </header>
        <form className={classes.form} onSubmit={props.onCloseEdit}>
            <label>Edit the todo: </label>
            <input type="text" value={props.editValue} onChange={props.onEditingTodo} placeholder='Write your edited todo' />
            <button className={classes.edit}>Edit</button>
        </form>
      </div>
    </div>
  );
};

export default ErrorModal;