import React from 'react'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    edit: boolean,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditTodo = ({todo, todos, setTodo, setTodos, edit, setEdit}:Props) => {
    

    const editTodo = (e:React.FormEvent) => {
        e.preventDefault()
        setEdit(false)
      }



  return (
    <form onSubmit={editTodo} className="edit">
    <input type="text" autoFocus name="todo" id="todo" value={todo.todo} onChange={(e) => setTodos(todos.map(each => each.id === todo.id ? {
  ...todo, todo: e.target.value
}:each))} />
  </form>
  )
}

export default EditTodo