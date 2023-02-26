import React from "react";

import image from '../../assets/add-icon.png';
import styles from './TodoForm.module.css';

const TodoForm = () => {



    return (
        <React.Fragment>
            <form>
                <div className={`${styles['form-content']}`}>
                    <input type='text' placeholder="Add your new todo"></input>
                    <div className={`${styles.icon}`}><img src={image} /></div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default TodoForm;