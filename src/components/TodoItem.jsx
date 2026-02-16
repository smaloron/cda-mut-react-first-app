function TodoItem({ item, toggleDone, deleteTodo }) {

    const handleChange = () => {
        toggleDone(item.id);
    }

    return (
        <div>
            <input type="checkbox" onChange={handleChange} checked={item.done} />
            <label htmlFor={item.id}>{item.title}</label>
            <button onClick={()=> deleteTodo(item.id)}>X</button>
        </div>
    )
}

export default TodoItem;
