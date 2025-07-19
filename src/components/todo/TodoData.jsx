const TodoData = (props) => {
    const { name } = props;
    console.log(props)
    return (
        <div className='todo-data'>
            <div>NAME IS: {name}</div>
            <div>Learning React</div>
            <div>{JSON.stringify(props.TodoList)}</div>
        </div>
    )
}

export default TodoData;