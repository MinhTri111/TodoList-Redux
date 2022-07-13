import 'antd/dist/antd.min.css';
import { List } from 'antd';
import { AddTodo, Todo } from '../../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../saga/Todos/todos.selector';
import React from 'react';
const TodoList = () => {
    const listTodo = useSelector(todosSelector);
    return (
        <>
            <h1>Todo App</h1>
            <div className="App">
                <div className="TodoList">
                    <div className="AddTodo">
                        <AddTodo />
                    </div>
                    {
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 4,
                            }}
                            dataSource={listTodo}
                            renderItem={(item) => (
                                <List.Item>
                                    <Todo title={item.title} id={item.id} key={item.id} />
                                </List.Item>
                            )}
                        />
                    }
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default TodoList;
