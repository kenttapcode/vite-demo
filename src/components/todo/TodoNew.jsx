const TodoNew = (props) => {
    console.log(props)
    const { AddNewTodo } = props;
    // AddNewTodo('Quoc')
    const handleClick = () => {
        alert('click')
    }

    const hanldeOnChange = (name) => {
        console.log("gia tri: ", name)
    }
    return (
        <div className='todo-new'>
            <input type='text' onChange={(e) => hanldeOnChange(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew;