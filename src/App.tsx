import React, { FormEvent, useState, useEffect} from 'react'
import AddTask from "./components/AddTask"
import { Todos } from './components/Todos'







function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  useEffect(() => {
    const saved = localStorage.getItem("todos")
    if(saved) {
      setTodos(JSON.parse(saved))        
    } 
  }, [])



  const addTodo = (e:FormEvent) => {
    e.preventDefault()
    console.log(todo);
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, completed:false}])
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    setTodo("")
}
  
  return (
    <div className='todo-app'>
        <h1>TO-DO APP</h1>
        <AddTask todo={todo} addTodo={addTodo} setTodo={setTodo}/>
        <Todos todos={todos} setTodos={setTodos} setTodo={setTodo}/>
        <p className='credit'>&copy; 2022, All rights reserved, The Face</p>
    </div>
  )
}

export default App