import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from 'antd';
import { v4 as uuid } from 'uuid';
import { addRequest } from '../../saga/Todos/todos.action';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelector } from '../../saga/Todos/todos.selector';
import 'react-toastify/dist/ReactToastify.css';
import addTodoHook from './addTodo.hooks';
import { toast } from 'react-toastify';
export default function AddTodo() {
    const dispatch = useDispatch();
    const { newTodo, setNewTodo } = addTodoHook();
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };
    const listTodo = useSelector(todosSelector);
    const handleClickAdd = () => {
        switch (newTodo) {
            case '':
                return toast.error('This field is required!!!');
            case newTodo:
                const check = listTodo?.findIndex((value) => value.title === newTodo);
                if (check === -1) {
                    return dispatch(
                        addRequest({ id: uuid(), title: newTodo }, () => {
                            toast.success('Add Success!');
                            setNewTodo('');
                        }),
                    );
                }
                return toast.error('This to do already exits!!!');
            default:
        }
    };

    return (
        <div className="Add">
            <label htmlFor="todo">Input Todo</label>
            <Input placeholder="New Todo" size="small" id="todo" onChange={handleChange} value={newTodo} />
            <Tooltip title="Add">
                <Button type="primary" shape="circle" icon={<PlusCircleOutlined />} onClick={handleClickAdd} />
            </Tooltip>
        </div>
    );
}
