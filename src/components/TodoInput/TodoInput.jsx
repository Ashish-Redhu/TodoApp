import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleEdit, editTodo } from '../../features/todo/todoSlice'

function TodoInput() {
  const [title, setTitle] = useState('')

  const dispatch = useDispatch();
  const gisEditing = useSelector(state => state.gisEditing);
  const gEditingTitle = useSelector(state => state.gEditingTitle);
  const gEditingId = useSelector(state => state.gEditingId);

  const handleAdd = (e) =>{
    e.preventDefault();
    dispatch(addTodo(title)) // Here we are sending some particular data to a particular reducer. 
    setTitle('')
  }

  const handleEdit = (e) =>{
    e.preventDefault();
    dispatch(editTodo({
      id: gEditingId, 
      title: title
    }))
    
    dispatch(toggleEdit({
      id: gEditingId,
      title: title
    }))
    setTitle('')
  }

  // Below useEffect is used so that we can use a single useState variable "title".
  useEffect(() => {
    if(gisEditing){
      setTitle(gEditingTitle)
    }
  }, [gisEditing])

  return (
    <>
      <form>

        <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
        {/* <button onSubmit={handleSubmit}>Add</button> */}

        {
          gisEditing ? <button onClick={handleEdit}>Edit</button>
          :
          <button onClick={handleAdd}>Add</button>
        }

      </form>
    </>
  )
}

export default TodoInput


// Whenever we want to send data to Redux store, we use useDispatch hook.
// Whenever we want to get data from Redux store, we use useSelector hook.

// But as the data of a particular slice of store will be updated by it's methods only. So, we have to import those methods also. We will use useDispatch hook to use those methods.