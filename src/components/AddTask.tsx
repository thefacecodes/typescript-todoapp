import React, { FormEvent } from 'react'

interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    addTodo: (e:FormEvent) => void
}

const AddTask = ({todo, setTodo, addTodo}:Props) => {

    
      return (
            <form onSubmit={addTodo}>
                <input placeholder='Enter to-do...' required type="text" name="todo" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add</button>
            </form>

      )
}

export default AddTask