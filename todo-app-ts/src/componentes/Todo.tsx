import { type TodoCompleted, type TodoId, type Todo as TodoType} from "../types/Todo"

interface Props extends TodoType{
    onRemoveTodo: ({id} :TodoId) => void
    handleCompleted:({ id } : TodoId, {completed} : TodoCompleted) => void
}

export const Todo = ({id, title, completed, onRemoveTodo, handleCompleted} : Props) => {
    
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        handleCompleted(
         {id},
         {completed:event.target.checked}
         )
    }

    return (
        <div className="view"> 
            <input
             className="toggle"
             type="checkbox"
             checked={completed}
             onChange={handleChangeCheckbox}
             />
            <label>{title}</label>
            <button 
             className="destroy"
             onClick={()=>{
                onRemoveTodo({id})
            }}
        />
        </div>
        
    )

}