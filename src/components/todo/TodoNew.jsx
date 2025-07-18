const TodoNew = (props) => {
    console.log(props)
    const { AddNewTodo } = props;
    AddNewTodo('Quoc')
    return (
        <div className='todo-new'>
            <input type='text' />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;