import React from "react";

import deleteIcon from '../../assets/delete-icon.png';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {

    const deleteHandler = () => {
        props.deleteTodo(props.id);
    }

    return (
        <li className={`${styles['todo-item']}`}>
            {props.text}
            <button onClick={deleteHandler}><img src={deleteIcon} alt="delete-icon" /></button>
        </li>
    );
};

export default TodoItem;