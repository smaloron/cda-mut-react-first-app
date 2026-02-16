function TodoItem({ item, toggleDone }) {

    const handleChange = () => {
        toggleDone(item.id);
    }

    return (
        <div>
            <input type="checkbox" onChange={handleChange} checked={item.done} />
            <label htmlFor={item.id}>{item.title}</label>
        </div>
    )
}

export default TodoItem;
