import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

// export type TodoTitle = Todo['id'] // De esta manera o la otra de abajo
export type TodoId = Pick<Todo, 'id'>
// export type TodoId = Pick<Todo, 'id' | 'completed'> // para poder pasar mas paramentros
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

export type FilterValues = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
