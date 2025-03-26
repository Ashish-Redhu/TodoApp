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
    <>
        <div style={
            {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                border: '1px solid red',
                margin: '5px'
            }
        }>
            <h3>{title}</h3>
            {
                gisEditing ? 'Editing' : 
                <button onClick={handleEditClick}>Edit</button>
            }
            
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    </>
  )
}

export default EachTodo