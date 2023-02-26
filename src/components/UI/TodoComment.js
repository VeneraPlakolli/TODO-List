import React from "react";

import styles from './TodoComment.module.css';

const TodoComment = (props) => {
    return (
        <div className={`${styles['todo-comment']}`}>
            <h3>Try to do your todos!</h3>
            <button onClick={props.onDeleteAll}>Clear all</button>
        </div>
    );
};

export default TodoComment;