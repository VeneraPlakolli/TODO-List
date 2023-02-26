import React from "react";

import styles from './TodoItem.module.css';

const TodoItem = (props) => {

    return (
        <li className={`${styles['todo-item']}`}>
            {props.text}
        </li>
    );
};

export default TodoItem;