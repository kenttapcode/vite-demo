import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("");

    const { AddNewTodo } = props;

    const handleClick = () => {
        AddNewTodo(valueInput)
        setValueInput("")
    }
    const hanldeOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type='text' value={valueInput} onChange={(e) => hanldeOnChange(e.target.value)} />
            <button onClick={handleClick}>Add</button>
            <div>Gia tri input: {valueInput}</div>
        </div>
    )
}

export default TodoNew;