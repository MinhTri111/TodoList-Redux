import * as Types from './todos.type';
const initState = {
    todoList: [],
    isAddSuccess: false,
    isDeleteSucces: false,
    isUpdateSuccess: false,
    isSetCompletedSuccess: false,
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
            const list_Update = [...state.todoList];
            const getIndex_Update = list_Update.findIndex((value) => value.id === action.payload.id);
            list_Update[getIndex_Update] = { ...list_Update[getIndex_Update], title: action.payload.title };
            return {
                ...state,
                todoList: [...list_Update],
                isUpdateSuccess: true,
            };
        case Types.UPDATE_ERROR:
            return {
                ...state,
                isUpdateSuccess: false,
                error: action.error,
            };

        case Types.COMPLETED_REQUEST:
            return {
                ...state,
                isSetCompletedSuccess: false,
            };
        case Types.COMPLETED_SUCCESS:
            const list_Completed = [...state.todoList];
            const getIndex_Completed = list_Completed.findIndex((value) => value.id === action.payload.id);
            console.log('thu', action.payload.id);
            list_Completed[getIndex_Completed] = {
                ...list_Completed[getIndex_Completed],
                completed: action.payload.completed,
            };
            return {
                ...state,
                todoList: [...list_Completed],
                isUpdateSuccess: true,
            };
        case Types.COMPLETED_ERROR:
            return {
                ...state,
                isSetCompletedSuccess: false,
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
