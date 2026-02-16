import {useState} from "react";
import TodoList from "./TodoList.jsx";


function TodoApp(){
    const [todos, setTodos] = useState([
        {id: 1, title: 'Nettoyer les écuries d\'Augias', done: false },
        {id: 2, title: 'Tuer le lion de Némée', done: true },
        {id: 3, title: 'Délivrer Thésée des enfers', done: false },
    ]);

    const toggleDone = (id) => {
        setTodos(todos.map((item)=> {
            const newItem = item.id === id? { ...item, done: !item.done } : item;
            return newItem;
        }));
    }

    console.log(todos);

    return (
        <>
            <TodoList todos={todos} toggleDone={toggleDone} />
        </>
    );
}

export default TodoApp;
