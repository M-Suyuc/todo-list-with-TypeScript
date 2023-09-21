import React from 'react'
import { Filters } from './Filters'
import { type FilterValues } from '../types'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValues
  onclearCompleted: () => void
  handleFilterChange: (filter: FilterValues) => void
}

const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, onclearCompleted, filterSelected, handleFilterChange }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
      filterSelected={filterSelected}
      onFilterOnchange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button className='clear-completed' onClick={onclearCompleted}>Borar Completadas</button>
        )
      }
    </footer>
  )
}

export default Footer
