import React from 'react';

import classes from './WarningModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Warning</h2>
        </header>
        <div className={classes.content}>
          <p>You must write a todo in the corresponding field!</p>
        </div>
        <footer className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;