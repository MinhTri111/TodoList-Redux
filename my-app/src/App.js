import TodoList from '../src/pages/TodoList/TodoList.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => (
    <>
        <TodoList />;
        <ToastContainer />
    </>
);

export default App;
