import { combineReducers } from 'redux';
import todosReducer from '../saga/Todos/todos.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['todo'],
};

const authPersistConfig = {
    key: 'todo',
    storage: storage,
    blacklist: ['todolist'],
};
const rootReducer = () =>
    combineReducers({
        todos: persistReducer(authPersistConfig, todosReducer),
    });

export default persistReducer(rootPersistConfig, rootReducer());
