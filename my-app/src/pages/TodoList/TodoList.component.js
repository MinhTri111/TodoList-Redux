import 'antd/dist/antd.min.css';
import { List, Row, Col, Divider } from 'antd';
import { AddTodo, Todo } from '../../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../saga/Todos/todos.selector';
import React from 'react';
const TodoList = () => {
    const listTodo = useSelector(todosSelector);
    return (
        <div className="App">
            <div className="TodoList">
                <Row>
                    <Col span={24}>
                        <h1>Todo App</h1>
                    </Col>
                    <Col span={24}>
                        <AddTodo />
                    </Col>
                    <Divider plan="true">LIST TODO</Divider>
                    <Col span={24}>
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
                                        <Todo title={item.title} id={item.id} key={item.id} complete={item.completed} />
                                    </List.Item>
                                )}
                            />
                        }
                    </Col>
                </Row>
                <ToastContainer />
            </div>
        </div>
    );
};

export default TodoList;
