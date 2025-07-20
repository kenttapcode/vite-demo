const TodoData = (props) => {
    const { TodoList, deleteTodo } = props;

    const handleClickDelete = (id) => {
        deleteTodo(id)
    }
    console.log(props)
    return (
        <div className='todo-data'>
            {TodoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => handleClickDelete(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;