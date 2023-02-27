import React, { useState } from "react";

import image from '../../assets/add-icon.png';
import image2 from '../../assets/todo-icon.png';
import WarningModal from './WarningModal';
import styles from './TodoForm.module.css';

const TodoForm = (props) => {

    const [enteredText, setEnteredText] = useState('');
    const [isOpenedModal, setOpenedModal] = useState(true);

    const inputTodoHandler = event => {
        // console.log(event.target.value);
        if(event.target.value.length > 0) {
            setOpenedModal(true);
        }
        setEnteredText(event.target.value);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();

        if(enteredText.trim().length === 0) {
            setOpenedModal(false);
            return;
        }

        props.onAddTodo(enteredText);

        setEnteredText('');
    };

    const closeModalHandler = () => {
        setOpenedModal(true);
    };

    return (
        <React.Fragment>
            { !isOpenedModal && (
                <WarningModal onClose={closeModalHandler} />
            )   
            }

            <form onSubmit={submitFormHandler}>
                <div className={`${styles['form-title']}`}>
                    <img src={image2} alt="todo-icon" />
                    <label>Todo App</label>
                </div>
                <div className={`${styles['form-content']}`}>
                    <input type='text' onChange={inputTodoHandler} value={enteredText} placeholder="Add your new todo"></input>
                    <button className={`${styles.icon}`}><img src={image} alt="add-icon" /></button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default TodoForm;