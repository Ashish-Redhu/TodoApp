import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleEdit} from '../../features/todo/todoSlice';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function EachTodo({id, title, isEditing}) {
  const dispatch = useDispatch();

 const [isChecked, setIsChecked] = React.useState(false);
 const handleCheckboxChange = (event) => {
   setIsChecked(event.target.checked);
 };

 const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id,});

 const style = {
  transform: CSS.Transform.toString(transform),
  transition,
  backgroundColor: isChecked ? '#81C784' : '#a0aec0',
 }

 // Prevent dragging when clicking buttons or checkboxes
 // This is very important otherwise, you have to double-click on each button to triger onclick() function. 
const handlePointerDown = (event) => {
  if (event.target.dataset.noDnd === "true") {
    event.stopPropagation();
  }
};

 
 const handleDeleteClick = () =>{
     dispatch(removeTodo({
        id: id
     }))
    }

  const handleEditClick = () =>{
    dispatch(toggleEdit({
      id: id
    }))
  }

  return (
      <div 
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className='flex flex-col sm:flex-row justify-between items-center p-2 rounded-md w-full break-words overflow-auto bg-gray-500 shadow-md mb-2'
         style={style}
        >
         <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}  onPointerDown={handlePointerDown} data-no-dnd="true"/>
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
            { isEditing ? "Editing" : <button className='px-3 py-1 !bg-blue-500 text-white rounded-md !hover:bg-blue-600' onClick={handleEditClick} onPointerDown={handlePointerDown} data-no-dnd="true">Edit</button>} 
            <button className='px-3 py-1 !bg-red-500 text-white rounded-md !hover:bg-red-600' onClick={handleDeleteClick} onPointerDown={handlePointerDown} data-no-dnd="true">Delete</button>
          </div>

           }
          
      </div>
  )
}

export default EachTodo

//  data-no-dnd="true" :
//  Set this property to the part of component where you want that you dont' want to apply DND and else you have to double click on buttons to access their fucntionality.
