import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs';
import './todo.css'

const Todo = ({todo, dispatch, setEdit, setTodo, setTitle}) => {

    return (
        <div className='todo-widget'>
            <li className={`${todo.completed ? 'inactive' : 'active'} todo`} onClick={() => dispatch({type: 'toggle', payload: todo})}>
                {todo.title}
            </li>
            <div className='buttons'>
                <BsPencil className='icons-update' onClick={() => {
                    setEdit(true);
                    setTodo(todo);
                    setTitle(todo.title)
                }}/>
                <AiOutlineDelete className='icons-delete' onClick={() => dispatch({
                    type: 'delete',
                    payload: todo.id
                })}/>
            </div>
        </div>
    
    
    )
}

export default Todo