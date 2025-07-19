import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import Reactlogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [TodoList, setTodoList] = useState([
    { id: 1, name: "Learning" },
    { id: 2, name: "Watch movie" }
  ])
  const name = "Quoc"
  const age = 29;
  const data = { adress: "HCM", country: "VN" }

  const AddNewTodo = (name) => {
    alert(`Call me ${name}`)
  }
  return (
    <div className='todo-container'>
      <div className='todo-title'>
        Todo App
      </div>
      <TodoNew AddNewTodo={AddNewTodo} />
      <TodoData name={name} age={age} data={data} TodoList={TodoList} />
      <div className='todo-image logo'>
        <img src={Reactlogo} />
      </div>
    </div>
  )
}

export default App
