import React from 'react';
import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from 'antd';
import './todo.css';
import { useState } from 'react';
export default function Todo() {

    const [showInput, setShowInput] = useState(true);
    const [todo, setTodo] = useState('');
    
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
   
    return (
        <>
            {showInput ? (
                <div className="todo">
                    {/* <p className="test"></p> */}

                    <div className="button">
                        <Tooltip title="Delete">
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            />
                        </Tooltip>
                        <Tooltip title="Edit">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<EditOutlined />}
                            />
                        </Tooltip>
                    </div>
                </div>
            ) : (
                <div className="todo">
                    <Input  size="small" onChange={handleChange} />
                    <div className="button">
                        <Tooltip title="Delete">
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            />
                        </Tooltip>
                        <Tooltip title="Save">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<CheckOutlined />}
                            />
                        </Tooltip>
                    </div>
                </div>
            )}
        </>
    );
}
