import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("Quoc");
    console.log(props)
    const { AddNewTodo } = props;
    // AddNewTodo('Quoc')
    const handleClick = () => {
        console.log("Check gia tri", valueInput)
    }

    const hanldeOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type='text' onChange={(e) => hanldeOnChange(e.target.value)} />
            <button onClick={handleClick}>Add</button>
            <div>Gia tri input: {valueInput}</div>
        </div>
    )
}

export default TodoNew;