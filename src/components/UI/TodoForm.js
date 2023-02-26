import React, { useState } from "react";

import image from '../../assets/add-icon.png';
import styles from './TodoForm.module.css';

const TodoForm = (props) => {

    const [enteredText, setEnteredText] = useState('');

    const inputTodoHandler = event => {
        // console.log(event.target.value);
        setEnteredText(event.target.value);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();

        props.onAddTodo(enteredText);

        setEnteredText('');
    };

    return (
        <React.Fragment>
            <form onSubmit={submitFormHandler}>
                <div className={`${styles['form-content']}`}>
                    <input type='text' onChange={inputTodoHandler} value={enteredText} placeholder="Add your new todo"></input>
                    <button className={`${styles.icon}`}><img src={image} /></button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default TodoForm;