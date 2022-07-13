import React from 'react';
import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRequest, updateRequest } from '../../saga/Todos/todos.action';
import { todosSelector } from '../../saga/Todos/todos.selector';
import todoHooks from './todo.hooks';
import { toast } from 'react-toastify';
export default function Todo(props) {
    const dispatch = useDispatch();
    const { title, id } = props;
    const { showEdit, setShowEdit, todo, setTodo } = todoHooks();
    const listTodo = useSelector(todosSelector);
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleSaveClick = () => {
        switch (todo) {
            case '':
                return toast.error('This field is required!!!');
            case todo:
                const check = listTodo?.findIndex((value) => value.title === todo);
                if (check === -1) {
                    return dispatch(
                        updateRequest({ id: id, title: todo }, () => {
                            toast.success('Update Success!!!');
                            setTodo('');
                            setShowEdit(!showEdit);
                        }),
                    );
                }
                return toast.error('This to do already exits!!!');
            default:
        }
    };
    const handleDeleteClick = () => {
        dispatch(
            deleteRequest(id, () => {
                toast.success('Delete Success!!!');
            }),
        );
    };
    return (
        <>
            {!showEdit ? (
                <div className="todo">
                    <p className="test">{title}</p>

                    <div className="button">
                        <Tooltip title="Delete">
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                                onClick={handleDeleteClick}
                            />
                        </Tooltip>
                        <Tooltip title="Edit">
                            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={handleEditClick} />
                        </Tooltip>
                    </div>
                </div>
            ) : (
                <div className="todo">
                    <Input size="small" placeholder={title} onChange={handleChange} />
                    <div className="button">
                        <Tooltip title="Save">
                            <Button type="primary" shape="circle" icon={<CheckOutlined />} onClick={handleSaveClick} />
                        </Tooltip>
                    </div>
                </div>
            )}
        </>
    );
}
