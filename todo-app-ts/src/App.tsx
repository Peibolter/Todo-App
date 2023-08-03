import { useState } from "react"
import { Todos } from "./componentes/Todos";
import { type TodoId, type TodoCompleted, FILTER_VALUE, TodoTitle } from "./types/Todo";
import { TODO_FILTERS } from "./types/consts";
import { Footer } from "./componentes/Footer";
import { Header } from "./componentes/Header";
const mockTodos=[
  {
    id:'1',
    title:'Ver twich',
    completed:true
  },
  {
    id:'2',
    title:'Aprender curso',
    completed:false
  },
  {
    id:'3',
    title:'Ir al gym',
    completed:false
  },
]

const App = () => {

  const[todos,setTodos]= useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FILTER_VALUE>(TODO_FILTERS.ALL)

  const handleRemove=({id} : TodoId) =>{
    const newTodos=todos.filter(todo=> todo.id!==id)
    setTodos(newTodos)
  }
  const handleCompleted =(
    { id } : TodoId, {completed} : TodoCompleted // Pick<TodoType,'id' | 'completed'>{ }//
    ):void =>{
      const newTodos= todos.map(todo =>{
        if(todo.id == id){
          return { 
            ... todo,
            completed
        }
        }

        return todo
      })

      setTodos(newTodos)
  }

  const handleFilterChange = (filter:  FILTER_VALUE ) :void =>{

    setFilterSelected(filter)
  }
  const handleRemoveAllCompleted = (): void  =>{
    const newTodos= todos.filter(todo=>!todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo= ({title}:TodoTitle) :void =>{
    const newTodo={
      id:crypto.randomUUID(),
      title,
      completed:false
    }
    const newTodos= [...todos,newTodo]
    setTodos(newTodos)
  }
  const activeCount= todos.filter(todo=> !todo.completed).length
  const completedCount= todos.length-activeCount

  const filteredTodos= todos.filter(todo=>{
    if(filterSelected===TODO_FILTERS.ACTIVE){
      return !todo.completed
    }
    if(filterSelected===TODO_FILTERS.COMPLETED){
      return todo.completed
    }
    if(filterSelected===TODO_FILTERS.ALL){
      return todo
    }
  })
  
  return (
    <div className="todoapp"> 
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
       onToogleCompleted={handleCompleted}
       onRemoveTodo={handleRemove}
       todos={filteredTodos} />
       <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
        />
    </div>
  )
}

export default App
