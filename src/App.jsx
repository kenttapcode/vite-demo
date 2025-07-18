import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import Reactlogo from './assets/react.svg'

const App = () => {

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
      <TodoData name={name} age={age} data={data} />
      <div className='todo-image logo'>
        <img src={Reactlogo} />
      </div>
    </div>
  )
}

export default App
