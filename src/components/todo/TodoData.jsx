const TodoData = (props) => {
    const { TodoList } = props;
    console.log(props)
    return (
        <div className='todo-data'>
            {TodoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;