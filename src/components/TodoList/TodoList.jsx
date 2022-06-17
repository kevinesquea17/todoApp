import React, { useReducer, useState, useEffect } from 'react'
import todoReducer, { initialTodos } from '../../reducer/todoReducer'
import Todo from '../Todo/Todo'
import './todolist.css'
import { days , months, dayN, dayName, monthName, yearName} from '../../helpers/date'

const TodoList = () => {

    
    const [edit, setEdit] = useState(false);
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState({});
    const [activeOption, setActiveOption] = useState('all');

    useEffect(() => {
        const toLocalStorage = () => {
            localStorage.setItem('tasks', JSON.stringify(todos));
            console.log('sin dependencia');
        }

        toLocalStorage();
    }, [todos]);    

   
    const handleSubmit = e => {

        e.preventDefault();
        if(title === '') return;

        if(edit){
            dispatch({
                type: 'update',
                payload: {...todo, title}
            })
            setEdit(false);
        }else{
            const newTodo = {
                id: Date.now(),
                title,
                completed: false
            }
    
            dispatch({
                type: 'add',
                payload: newTodo
            });
          
        }
        
        setTitle('');
    }

    return (
        <div className='todo-list'>
            <div className="date">
                <div className="date-complete">
                    <div className="number-day">
                        <span>{dayN}</span>
                    </div>
                    <div className="rest-date">
                        <span>{months[monthName]}</span>
                        <span>{yearName}</span>
                    </div>
                </div>
                <div className="day-name">
                    <span>{days[dayName]}</span>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    className='input'
                    type="text" 
                    placeholder='Title for todo'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    className='button f-button'
                    type="submit" 
                    value={edit ? 'update' : 'add'} 
                />
            </form>
            <div className="options">
                <span 
                    className={activeOption === 'all' ? 'active' : ''}
                    onClick={() => {
                        setActiveOption('all');
                    }}
                >all</span>
                <span 
                    className={activeOption === 'completed' ? 'active' : ''}
                    onClick={() => {
                        setActiveOption('completed');
                    }}
                >completed</span>
                <span 
                    className={activeOption === 'incompleted' ? 'active' : ''}
                    onClick={() => {
                        setActiveOption('incompleted');
                    }}
                >Incompleted</span>
            </div>
            <ul className='todos'>
                {activeOption === 'all' && todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                        setEdit={setEdit}
                        setTodo={setTodo}
                        setTitle={setTitle}
                    />
                ))}
                 {activeOption === 'completed' && todos.filter(todo => todo.completed).map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                        setEdit={setEdit}
                        setTodo={setTodo}
                        setTitle={setTitle}
                    />
                ))}
                 {activeOption === 'incompleted' && todos.filter(todo => !todo.completed).map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                        setEdit={setEdit}
                        setTodo={setTodo}
                        setTitle={setTitle}
                    />
                ))}
            </ul>

            {todos.length > 0 && 
                <button className='button'>Remove all the tasks</button>
            }
        </div>
    )
}

export default TodoList