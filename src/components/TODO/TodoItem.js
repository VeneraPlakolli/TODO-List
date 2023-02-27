import React, { useState } from "react";

import EditModal from '../UI/EditModal';
import deleteIcon from '../../assets/delete-icon.png';
import editIcon from '../../assets/edit-icon.png'
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [isEditing, setIsEditing] = useState(props.text);

    const openEditModalHandler = () => {
        setOpenEditModal(true);
    };

    const editTodoHandler = event => {
        setIsEditing(event.target.value);
    }

    const closeEditHandler = () => {
        setOpenEditModal(false);
    };

    const deleteHandler = () => {
        props.deleteTodo(props.id);
    }



    return (
        <React.Fragment>
            { openEditModal && (
                <EditModal 
                editValue={isEditing} 
                onEditingTodo={editTodoHandler} 
                onCloseEdit={closeEditHandler}
                />
            )

            }
            <li className={`${styles['todo-item']}`}>
                {isEditing}
                <div className={`${styles['todo-buttons']}`}>
                    <button onClick={deleteHandler}><img src={deleteIcon} alt="delete-icon" /></button>
                    <button className={`${styles['edit-button']}`} onClick={openEditModalHandler}><img src={editIcon} alt="edit-icon" /></button>
                </div>
            </li>
        </React.Fragment>
        
    );
};

export default TodoItem;