import { type TodoId, type ListOfTodos, TodoCompleted } from "../types/Todo"
import { Todo } from "./Todo"

interface Props{   //defino los props con la variable que le llega
    todos: ListOfTodos
    onRemoveTodo: ({id} :TodoId) => void
    onToogleCompleted:({ id } : TodoId, {completed} : TodoCompleted) => void
}

export const Todos = ({onToogleCompleted, onRemoveTodo,todos } : Props) => {
    return ( 
        <ul className="todo-list">
            {todos.map(todo => ( 
                <li key={todo.id} className={`${ todo.completed?'completed': ''}`}>
                <Todo
                 key={todo.id}
                 id={todo.id}
                 title={todo.title}
                 completed={todo.completed}
                 handleCompleted={onToogleCompleted}
                 onRemoveTodo={onRemoveTodo}
                 />
                </li>
            ))}
        </ul> 

    )


}