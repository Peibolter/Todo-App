import { type TodoTitle } from "../types/Todo"
import { useState}  from 'react'
interface Props {
    saveTodo: ({title}: TodoTitle)=>void
}

export const CreateTodo = ({saveTodo} : Props) =>{
    const [inputValue,setInputValue]= useState('')
    
    const handleSubmit =(event:React.FormEvent<HTMLFormElement>) :void =>{
        event.preventDefault()
        saveTodo({title:inputValue})
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
             className="new-todo"
             value={inputValue}
             onChange={(event)=>{setInputValue(event.target.value)}}
             placeholder="Que quieres planear?"
             autoFocus
             />
        </form>
    )
}