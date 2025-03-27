import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleEdit} from '../../features/todo/todoSlice';
function EachTodo({id, title}) {
  
 const dispatch = useDispatch();
 const gisEditing = useSelector(state => state.gisEditing);
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


  return (
      <div className='flex flex-col sm:flex-row justify-between items-center p-2 rounded-md w-full break-words overflow-auto bg-gray-500 shadow-md mb-2'>
          <h3 className='flex-1 mr-4 whitespace-pre-wrap break-words overflow-auto max-h-60 mb-4 sm:mb-0'>{title}</h3>
          <div className='flex gap-2'>
            { gisEditing ? "Editing" : <button className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600' onClick={handleEditClick}>Edit</button>}
            <button className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600' onClick={handleDeleteClick}>Delete</button>
          </div>
      </div>
  )
}

export default EachTodo