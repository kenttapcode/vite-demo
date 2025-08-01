const TodoData = (props) => {
    const { TodoList, deleteTodo } = props;

    console.log('check after 3', TodoList)
    const handleClickDelete = (id) => {
        deleteTodo(id)
    }
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