import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from 'antd';
import './addtodo.css';
import { useState } from 'react';
export default function AddTodo() {
    const [newTodo, setNewTodo] = useState('');
   
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };
    
    return (
        <div className="Add">
            <label htmlFor="todo">Input Todo</label>
            <Input placeholder="New Todo" size="small" id="todo" onChange={handleChange} />
            <Tooltip title="Add">
                <Button
                    type="primary"
                    shape="circle"
                    icon={<PlusCircleOutlined />}
                />
            </Tooltip>
        </div>
    );
}
