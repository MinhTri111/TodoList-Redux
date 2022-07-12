import 'antd/dist/antd.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import { List } from 'antd';
import AddTodo from './component/AddTodo/AddTodo';
import Todo from './component/Todo/Todo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [listTodo, setListTodo] = useState([]);
    console.log('renderlai');
    console.log('List', listTodo);
    const regex = /^\w/;
    useEffect(() => {
        if (localStorage.getItem('todos')) {
            setListTodo(JSON.parse(localStorage.getItem('todos')));
        }
    }, []);

    useEffect(() => {
        if (listTodo.length > 0) {
            localStorage.setItem('todos', JSON.stringify(listTodo));
        }
    }, [listTodo]);

    const checkItemExist = (check) => {
        if (listTodo.filter((value) => value.title === check).length > 0) {
            return false;
        }
        return true;
    };

    const addNewItem = (value, callback) => {
        if (value) {
            if (!checkItemExist(value)) {
                toast.error('This to do already exits!!!');
            } else {
                if (!regex.test(value)) {
                    toast.error('The beginning of character must be a character or a number!!!');
                } else {
                    const list = [...listTodo];
                    console.log('list', list);
                    const id = list.length + 1;
                    list.push({ id: id, title: value });
                    setListTodo(list);
                    callback();
                    toast.success('Add Success!!!');
                }
            }
        } else {
            toast.error('This field is required!!!');
        }
    };

    const deleteItem = (id, callback) => {
        const list = [...listTodo];
        list.splice(id - 1, 1);
        setListTodo(list);
        callback();
        toast.success('Delete Success!!!');
    };

    const updateItem = (id, value, callback) => {
        console.log(value);
        // eslint-disable-next-line default-case
        switch (value) {
            case '':
                toast.error('This field is required!!!');
                break;
            case value:
                // eslint-disable-next-line default-case
                switch (checkItemExist(value)) {
                    case false:
                        toast.error('This to do already exits!!!');
                        break;
                    case true:
                        if (!regex.test(value)) {
                            toast.error('The beginning of character must be a character or a number!!!');
                        } else {
                            const list = [...listTodo];
                            const indexItemEdit = list.findIndex((value) => value.id === id);
                            const newItemEdit = { ...list[indexItemEdit], title: value };
                            list[indexItemEdit] = newItemEdit;
                            setListTodo(list);
                            callback();
                            toast.success('Edit Success!!!');
                        }
                        break;
                }

                break;
        }

        // if (value) {
        //     if (!checkItemExist(value)) {
        //         toast.error('This to do already exits!!!');
        //     } else {
        //         if (!regex.test(value)) {
        //             toast.error('The beginning of character must be a character or a number!!!');
        //         } else {
        //             const list = [...listTodo];
        //             const indexItemEdit = list.findIndex((value) => value.id === id);
        //             const newItemEdit = { ...list[indexItemEdit], title: value };
        //             list[indexItemEdit] = newItemEdit;
        //             setListTodo(list);
        //             callback();
        //             toast.success('Edit Success!!!');
        //         }
        //     }
        // } else {
        //     toast.error('This field is required!!!');
        // }
    };
    return (
        <>
            <h1>Todo App</h1>
            <div className="App">
                <div className="TodoList">
                    <div className="AddTodo">
                        <AddTodo addNewItem={addNewItem} />
                    </div>
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
                                <Todo value={item.title} id={item.id} deleteItem={deleteItem} updateItem={updateItem} />
                            </List.Item>
                        )}
                    />
                </div>
            </div>

            <ToastContainer />
        </>
    );
}

export default App;
