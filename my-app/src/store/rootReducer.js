import { combineReducers } from 'redux';
import todosReducer from '../saga/Todos/todos.reducer';
const rootReducer = () =>
    combineReducers({
        todos: todosReducer,
    });

export default rootReducer;
