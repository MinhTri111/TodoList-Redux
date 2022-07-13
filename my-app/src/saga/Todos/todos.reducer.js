import * as Types from './todos.type';
const initState = {
    todoList: [],
    isAddSuccess: false,
    isDeleteSucces: false,
    isUpdateSuccess: false,
    error: null,
};

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.ADD_REQUEST:
            return {
                ...state,
                isAddSuccess: false,
            };
        case Types.ADD_SUCCESS:
            return {
                ...state,
                todoList: [...state.todoList, action?.payload],
                isAddSuccess: true,
            };
        case Types.ADD_ERROR:
            return {
                ...state,
                isAddSuccess: false,
                error: action.error,
            };
        case Types.UPDATE_REQUEST:
            return {
                ...state,
                isUpdateSuccess: false,
            };
        case Types.UPDATE_SUCCESS:
            const todos = [...state.todoList];
            const todoIndex = todos.findIndex((value) => value.id === action.payload.id);
            todos[todoIndex] = { ...todos[todoIndex], title: action.payload.title };
            return {
                ...state,
                todoList: [...todos],
                isUpdateSuccess: true,
            };
        case Types.UPDATE_ERROR:
            return {
                ...state,
                isUpdateSuccess: false,
                error: action.error,
            };
        case Types.DELETE_REQUEST:
            return {
                ...state,
                isDeleteSucces: false,
            };

        case Types.DELETE_SUCCESS:
            const todoList = [...state.todoList];
            const todoIndexDelete = todoList.findIndex((value) => value.id === action.payload);
            todoList.splice(todoIndexDelete, 1);
            return {
                ...state,
                todoList: [...todoList],
                isDeleteSucces: true,
            };
        case Types.DELETE_ERROR:
            return {
                ...state,
                isDeleteSucces: false,
                error: action.error,
            };

        default:
            return state;
    }
};
export default todosReducer;
