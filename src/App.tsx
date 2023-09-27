import { useState } from 'react'
import { Todos } from './componets/Todos'
import {
  type Todo as TodoType,
  type TodoId,
  type FilterValues,
  type TodoTitle
} from './types'
import { TODO_FILTERS } from './consts'
import Footer from './componets/Footer'
import { Header } from './componets/Header'

const mocksTodos = [
  {
    id: '1',
    title: '1',
    completed: false
  },
  {
    id: '2',
    title: '2',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mocksTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValues>(
    TODO_FILTERS.ALL
  )
  // useState<FilterValues>(TODO_FILTERS.ALL) // Esto es un estado "GENERICO" en typeScript

  const handleRemove = ({ id }: TodoId): void => {
    // console.log(id)
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): //
  // {
  //   id: TodoId
  //   completed: TodoCompleted
  // }
  void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValues): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todos) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todos.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todos.completed
    return todos
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>Todo</h1>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onclearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
