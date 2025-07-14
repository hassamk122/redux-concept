import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {


  return (
    <div className="flex items-center flex-col">
    <AddTodo/>
    <Todos/>
    </div>
  )
}

export default App
