export const todosSelector = (state) => {
    if (state.todos.search !== '') {
        return state.todos.todoList.filter((value) => value.title.includes(state.todos.search));
    }
    return state.todos.todoList;
};
export const sortSelector = (state) => state.todos.isSortSuccess;
