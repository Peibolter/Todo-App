import { FILTER_VALUE } from "../types/Todo"
import { Filters } from "./Filters"

interface Props {
    activeCount: number,
    completedCount : number,
    filterSelected : FILTER_VALUE,
    handleFilterChange:(filter: FILTER_VALUE) => void 
    onClearCompleted : () =>void
}
export const Footer =({activeCount=0, completedCount=0, filterSelected, handleFilterChange, onClearCompleted} : Props) =>{
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
             filterSelected={filterSelected}
             onFilterSelected={handleFilterChange}
             />
             {
                completedCount >0 && (
                    <button
                    className='clear-completed'
                    onClick={onClearCompleted}
                    >
                        Borrar completadas
                    </button>
                )
             }
        </footer>

    )


}