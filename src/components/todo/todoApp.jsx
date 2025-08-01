import './todo.css'
import TodoData from './TodoData'
import TodoNew from './TodoNew'
import Reactlogo from '../../assets/react.svg'
import { useEffect, useState } from 'react'

const TodoApp = () => {
    const [TodoList, setTodoList] = useState([])
    useEffect(
        () => {
            if (localStorage.getItem('todolist')) {

                setTodoList(JSON.parse(localStorage.getItem('todolist')))
            } else {
                setTodoList([])
            }
        }
        , [])
    useEffect(
        () => {

            console.log('check after 1', TodoList)
            console.log('check after 2', JSON.stringify(TodoList))
            localStorage.setItem('todolist', JSON.stringify(TodoList))
        }
        , [TodoList])
    const AddNewTodo = (name) => {
        const maxId = TodoList.length > 0 ? Math.max(...TodoList.map(todo => todo.id)) : 0;
        const newTodo = { id: maxId + 1, name: name }
        setTodoList([...TodoList, newTodo])
    }

    const deleteTodo = (id) => {
        const newTodoDelete = TodoList.filter((item) => item.id !== id)
        setTodoList(newTodoDelete)
    }
    return (
        <div className='todo-container'>
            <div className='todo-title'>
                Todo App
            </div>
            <TodoNew AddNewTodo={AddNewTodo} />

            {TodoList.length > 0 ?
                <TodoData TodoList={TodoList} setTodoList={setTodoList} deleteTodo={deleteTodo} />
                :
                <div className='todo-image logo'>
                    <img src={Reactlogo} />
                </div>
            }
        </div>
    )
}

export default TodoApp;