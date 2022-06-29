const initialTodos = JSON.parse(localStorage.getItem('tasks')) || [];


const todoReducer = (state, action) => {
    let temp;
    switch(action.type){
        case 'add':
            return  [...state, action.payload]; 
        case 'toggle':
            return state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo); 
        case 'update':
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);   
        default:
            return state;
    }
}

export {
    initialTodos
};
export default todoReducer;
