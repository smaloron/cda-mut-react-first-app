import TodoItem from "./TodoItem.jsx";


function TodoList({todos, toggleDone}) {
    return (
        <>
            {todos.map((task) => <TodoItem item={task} key={task.id} toggleDone={toggleDone} />)}
        </>
    )
}

export default TodoList;
