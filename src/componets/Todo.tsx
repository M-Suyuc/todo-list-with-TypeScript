import { type Todo as Todotype } from '../types'

interface Props extends Todotype {
  // onRemoveTodo: (id: string) => void
  onRemoveTodo: () => void
  onToggleCompleted: ({
    id,
    completed
  }: Pick<Todotype, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleted
}) => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onToggleCompleted({ id, completed: event.target.checked })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        // onClick={() => {
        //   onRemoveTodo(id)
        // }}
        onClick={onRemoveTodo}
      ></button>
    </div>
  )
}
