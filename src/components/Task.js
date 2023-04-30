import { FaTimes } from 'react-icons/fa'

const Task = ({ tasks, onDelete }) => {
  return (
    <div className='task'>
        <h3>{ tasks.text } <FaTimes style={{ color: 'red', cursor: 'pointer' } } onClick={() => onDelete(tasks.id)}/></h3>
        <p>{ tasks.day }</p>
    </div> 
  )
}

export default Task