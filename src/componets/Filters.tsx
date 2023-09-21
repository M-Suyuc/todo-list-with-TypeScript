import { FILTERS_BUTTONS } from '../consts'
import { type FilterValues } from '../types'

interface Props {
  // filterSelected: 'all' | 'active' | 'completed' // Es lo mismo de abajo
  filterSelected: FilterValues
  onFilterOnchange: (filter: FilterValues) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterOnchange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const clasName = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a href={href} className={clasName} onClick={(event) => {
                event.preventDefault()
                onFilterOnchange(key as FilterValues)
              }}
                >
                {literal}</a>
            </li>
          )
        })
      }
    </ul>
  )
}
