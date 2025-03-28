import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, disableEdit, editTodo } from '../../features/todo/todoSlice'

function TodoInput() {
  const [title, setTitle] = useState('')

  const dispatch = useDispatch();
  const gisEditing = useSelector(state => state.gisEditing);
  const gEditingTitle = useSelector(state => state.gEditingTitle);
  const gEditingId = useSelector(state => state.gEditingId);
   
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(gisEditing){
      handleEdit();
    }
    else{
      handleAdd();
    }
  }
  const handleAdd = () =>{
    dispatch(addTodo(title)) // Here we are sending some particular data to a particular reducer. 
    setTitle('')
  }

  const handleEdit = () =>{
    dispatch(editTodo({
      id: gEditingId, 
      title: title
    }))
    
    dispatch(disableEdit({
      id: gEditingId,
    }))
    setTitle('');
  }
  const handleCancel = (e) =>{  
    e.preventDefault();
    if(gisEditing){
      setTitle(gEditingTitle);
    }
    else{
      setTitle('');
    }
  }

  // Below useEffect is used so that we can use a single useState variable "title".
  useEffect(() => {
    if(gisEditing){
      setTitle(gEditingTitle)
    }
  }, [gisEditing, gEditingTitle])

  return (
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row items-center justify-between m-2">
          <div className='border-b border-teal-500 py-2 w-full'>
            {/* <input 
              class="appearance-none bg-transparent w-full md:w-96 lg:w-[500px] text-gray-400 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                placeholder="Enter todo..." 
                aria-label="Todo" 
                value={title}  
                onChange={(e)=>setTitle(e.target.value)}
              /> */}

          <textarea 
            className="appearance-none bg-transparent w-full md:w-96 lg:w-[500px] text-gray-200 text-xl py-1 px-2 leading-tight focus:outline-none resize-none overflow-x-hidden min-h-[3rem] max-h-[12rem]"
            placeholder="Enter todo..." 
            aria-label="Todo" 
            value={title}  
            onChange={(e) => setTitle(e.target.value)}
            rows={1} 
          />
          </div>
          <div className='flex flex-row justify-center items-center w-full sm:w-auto gap-2 m-2'>
            {
              gisEditing ?
              <>
                <button className="flex-shrink-0 !bg-teal-500 !hover:bg-teal-700 !border-teal-500 !hover:border-teal-700 text-sm border-4 !text-white py-1 px-2 rounded" type='Submit'>Edit</button>
                <button className="flex-shrink-0 border-transparent border-4 !text-teal-500 !hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={handleCancel}>Cancel</button>
              </>
              :
              <>
                <button className="flex-shrink-0 !bg-teal-500 !hover:bg-teal-700 !border-teal-500 !hover:border-teal-700 text-sm border-4 !text-white py-1 px-2 rounded" type='Submit'>Add</button>
                <button className="flex-shrink-0 border-transparent border-4 !text-teal-500 !hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={handleCancel}>Cancel</button>
              </>
              }
            </div>
        </div>
      </form>
  )
}

export default TodoInput


// Whenever we want to send data to Redux store, we use useDispatch hook.
// Whenever we want to get data from Redux store, we use useSelector hook.

// But as the data of a particular slice of store will be updated by it's methods only. So, we have to import those methods also. We will use useDispatch hook to use those methods.