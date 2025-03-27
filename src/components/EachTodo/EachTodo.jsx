import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleEdit} from '../../features/todo/todoSlice';
function EachTodo({id, title, isEditing}) {
  
 const dispatch = useDispatch();
 const handleDeleteClick = () =>{
     dispatch(removeTodo({
        id: id
     }))
    }

  const handleEditClick = (e) =>{
    dispatch(toggleEdit({
      id: id
    }))
  }

  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
      <div className='flex flex-col sm:flex-row justify-between items-center p-2 rounded-md w-full break-words overflow-auto bg-gray-500 shadow-md mb-2'
          style={{
              backgroundColor: isChecked ? '#81C784' : '#a0aec0'
          }}>
         <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
          <h3 className='flex-1 m-1 whitespace-pre-wrap break-words overflow-auto max-h-60 mb-4 sm:mb-0'
           style={{
            textDecoration: isChecked ? 'line-through' : 'none',
            color: 'black'
           }}
           >{title}</h3>
           {
            isChecked ? 
            <p className='text-sm  text-gray-700 font-bold'>Completed</p>
            :
            <div className='flex gap-2 ml-1'>
            { isEditing ? "Editing" : <button className='px-3 py-1 !bg-blue-500 text-white rounded-md !hover:bg-blue-600' onClick={handleEditClick}>Edit</button>}
            <button className='px-3 py-1 !bg-red-500 text-white rounded-md !hover:bg-red-600' onClick={handleDeleteClick}>Delete</button>
          </div>

           }
          
      </div>
  )
}

export default EachTodo