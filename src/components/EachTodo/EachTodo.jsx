import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, enableEdit, markAsDone} from '../../features/todo/todoSlice';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function EachTodo({id, title, isEditing}) {
  const dispatch = useDispatch();

//  const [isChecked, setIsChecked] = React.useState(false);
  const isDone = useSelector((state) => {
    const todo = state.todos.find((todo) => todo.id === id);
    return todo ? todo.isDone : false; // Return the isChecked value or false if not found
  });
 const handleCheckboxChange = (event) => {
   dispatch(markAsDone({
      id:id,
   }));
 };

 const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id,});

 const style = {
  transform: CSS.Transform.toString(transform),
  transition,
  borderRadius: "8px",
  padding: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  background: isDone
  ? "linear-gradient(to right, #2E7D32, #81C784)" // Darker green for contrast
  : "linear-gradient(to right, #4A5568, #A0AEC0)", // More professional gray gradient
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
    dispatch(enableEdit({
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
         <input 
            type='checkbox' 
            checked={isDone} 
            onChange={handleCheckboxChange}  
            onPointerDown={handlePointerDown} 
            data-no-dnd="true"
            className="w-3 h-3 accent-green-500 cursor-pointer transition-all"
          />
          <h3 className='flex-1 m-1 whitespace-pre-wrap break-words overflow-auto max-h-60 mb-4 sm:mb-0'
           style={{
            textDecoration: isDone ? 'line-through' : 'none',
            color: 'black'
           }}
           >{title}</h3>
           {
            isDone ? 
            <p className='text-xl  text-gray-700 font-bold m-2'>Completed</p>
            :
            <div className='flex gap-2 ml-1'>
            { isEditing ? "Editing" : 
              <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md' 
                onClick={handleEditClick} 
                onPointerDown={handlePointerDown} 
                data-no-dnd="true">
              Edit</button>} 
            
            <button 
              className='px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-md' 
              onClick={handleDeleteClick} 
              onPointerDown={handlePointerDown} 
              data-no-dnd="true"
              >
              Delete</button>
          </div>

           }
          
      </div>
  )
}

export default EachTodo

//  data-no-dnd="true" :
//  Set this property to the part of component where you want that you dont' want to apply DND and else you have to double click on buttons to access their fucntionality.
