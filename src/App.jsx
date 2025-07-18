import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import Reactlogo from './assets/react.svg'

const App = () => {

  return (
    <div className='todo-container'>
      <div className='todo-title'>
        Todo App
      </div>
      <TodoNew />
      <TodoData />
      <div className='todo-image logo'>
        <img src={Reactlogo} />
      </div>
    </div>
  )
}

export default App
