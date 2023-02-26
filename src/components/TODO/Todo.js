import React from "react";

import TodoItem from './TodoItem';
import styles from './Todo.module.css';

const Todo = (props) => {

    return (
        <ul className={`${styles.todo}`}>
            { props.todo.map((todo) => (
                <TodoItem 
                    key={Math.random()}
                    id={todo.id}
                    text={todo.text}
                    deleteTodo={props.onDeleteTodo}
                />
            ))
            }
        </ul>
    );
};

export default Todo;