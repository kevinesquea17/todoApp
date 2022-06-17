import React from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css';


const App = () => {
  return (
    <div className="app">
      <div className="blur" style={{top: '1rem', right: '1rem'}}></div>
      <div className="blur"  style={{top: '18rem', left: '2rem'}}></div>
      <TodoList />
    </div>
  )
}

export default App