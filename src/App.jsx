import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import Reactlogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

const App = () => {

  const [TodoList, setTodoList] = useState([])

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
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App
