import {useState} from "react";
import TodoList from "../components/TodoList.jsx";

// Constante pour les états du filtre
const FILTERS = {
    ALL: 'all',
    DONE: 'done',
    PENDING: 'pending',
}

function TodoApp(){
    const [todos, setTodos] = useState([
        {id: 1, title: 'Nettoyer les écuries d\'Augias', done: false },
        {id: 2, title: 'Tuer le lion de Némée', done: true },
        {id: 3, title: 'Délivrer Thésée des enfers', done: false },
    ]);
    const [filter, setFilter] = useState(FILTERS.ALL);

    const filterFunctions = {
        [FILTERS.ALL]: (todos) => todos,
        [FILTERS.DONE]: (todos) => todos.filter((item) => item.done),
        [FILTERS.PENDING]: (todos) => todos.filter((item) => !item.done),
    }

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

    // Exécution du filtre
    const filteredTodos = (filterFunctions[filter] || filterFunctions[FILTERS.ALL])(todos);

    return (
        <>
            <form onSubmit={addItem}>
                <input type="text"
                       onChange={(e) => setInputTitle(e.target.value)}
                       value={inputTitle}
                       placeholder="Ajouter une tâche"/>
                <button type="submit">Ajouter</button>
            </form>

            <div>
                <button onClick={()=>setFilter(FILTERS.ALL)}>Toutes</button>
                <button onClick={()=>setFilter(FILTERS.DONE)}>Terminées</button>
                <button onClick={()=>setFilter(FILTERS.PENDING)}>En cours</button>
            </div>
            <TodoList todos={filteredTodos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        </>
    );
}

export default TodoApp;
