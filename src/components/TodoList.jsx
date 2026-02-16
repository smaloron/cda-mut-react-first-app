import TodoItem from "./TodoItem.jsx";


function TodoList({todos, toggleDone, deleteTodo}) {
    return (
        <>
            {todos.map((task) => <TodoItem item={task}
                                           key={task.id}
                                           toggleDone={toggleDone}
                                           deleteTodo={deleteTodo} />)}
        </>
    )
}

export default TodoList;
