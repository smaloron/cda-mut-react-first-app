import {useState} from "react";
import TodoList from "./TodoList.jsx";


function TodoApp(){
    const [todos, setTodos] = useState([
        {id: 1, title: 'Nettoyer les écuries d\'Augias', done: false },
        {id: 2, title: 'Tuer le lion de Némée', done: true },
        {id: 3, title: 'Délivrer Thésée des enfers', done: false },
    ]);

    const [inputTitle, setInputTitle] = useState("");

    const toggleDone = (id) => {
        setTodos(todos.map((item)=> {
            const newItem = item.id === id? { ...item, done: !item.done } : item;
            return newItem;
        }));
    }

    const deleteTodo = (id) => {
        /*
        let index = todos.findIndex((item)=> item.id === id);
        let newTodos = todos.splice(index, 1);
        setTodos([...newTodos]);
        */
        setTodos(todos.filter((item)=> item.id !== id));
    }

    const addItem = (event) => {
        event.preventDefault();
        if (inputTitle.trim()) {
           const newTodo = {
               id: new Date().getTime(),
               title: inputTitle.trim(),
               done: false,
           }
           setTodos([...todos, newTodo]);
           setInputTitle("");
        }
    }

    console.log(todos);

    return (
        <>
            <form onSubmit={addItem}>
                <input type="text"
                       onChange={(e) => setInputTitle(e.target.value)}
                       value={inputTitle}
                       placeholder="Ajouter une tâche"/>
                <button type="submit">Ajouter</button>
            </form>
            <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        </>
    );
}

export default TodoApp;
