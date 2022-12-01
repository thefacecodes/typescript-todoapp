import React, {useState} from 'react'
import EditTodo from './EditTodo';
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    index: number,
}

const SingleTodo = ({todo, todos, setTodo, setTodos, index}:Props) => {
    
  const [edit, setEdit] = useState<boolean>(false)

    
  const markCompleted = (todo: Todo) => {
    setTodos(todos.map(each => each.id === todo.id ? {
      ...todo, completed: !todo.completed
    } :
      each))
  }

  
  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter(each => each.id !== todo.id))
  }

  return (
    <div key={todo.id} onDoubleClick={(e) => markCompleted(todo)} className={todo.completed ? "each completed" : "each"}>
          {edit && !todo.completed ? <EditTodo todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} edit={edit} setEdit={setEdit} /> : <p>{index + 1}. &nbsp; {todo.todo}</p>}

          <div className="buttons">
            { (!todo.completed && !edit) && <button onClick={() => setEdit(true)}><AiFillEdit /></button>}
            <button onClick={() => deleteTodo(todo)}><AiFillDelete /></button>
          </div>
    </div>
  )
}

export default SingleTodo