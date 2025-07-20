const TodoData = (props) => {
    const { TodoList } = props;
    console.log(props)
    return (
        <div className='todo-data'>
            {TodoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
            <div>Learning React {JSON.stringify(TodoList)}</div>
            <div>{JSON.stringify(props.TodoList)}</div>
        </div>
    )
}

export default TodoData;