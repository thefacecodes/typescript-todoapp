import React, { useEffect } from 'react'
import SingleTodo from './SingleTodo'

interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
}



export const Todos: React.FC<Props> = ({ todos, setTodos, setTodo }) => {


  return (
    <div className='todolist'>
      {todos.map((todo, index) =>
        <SingleTodo todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} index={index} key={todo.id} />
      )}
    </div>
  )
}
