import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EachTodo from '../EachTodo/EachTodo'
import { DndContext, closestCenter } from "@dnd-kit/core";  // The list of elements where we want to apply DND functionality. We have to wrap that list in dnd context. "closestCenter" helps to determine where the item has to be dropped (closest place).
import {
  arrayMove, // This is a helper function that reorders an array when an item is dragged to a new position. It moves an item from its old index to a new index.
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";


function TodosList() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const handleDragEnd = (event) => {
    const { active, over } = event; // active: the item that is being dragged, over: the item that is being hovered over.
    if(active?.id && over?.id && active.id !== over.id) { // Means we will do something if element is dropped somewhere else from it's starting position. 
      const oldIndex = todos.findIndex((todo) => todo.id === active.id); 
      const newIndex = todos.findIndex((todo) => todo.id === over.id);

      const updatedTodos = arrayMove(todos, oldIndex, newIndex);
      // dispatch(renderTodos{updatedTodos});
      dispatch({ type: "ashish/reorderTodos", payload: updatedTodos });
    }
  }

  // Fetch todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      dispatch({ type: "ashish/setTodos", payload: JSON.parse(savedTodos) });
    }
  }, [dispatch]);


  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={todos.map((todo) => todo.id)} strategy={verticalListSortingStrategy}>
        <div>
          {
            todos.map((todo) =>
              <EachTodo key={todo.id} id={todo.id} title={todo.title} isEditing={todo.isEditing}
            />)
          }
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default TodosList


// Some important methods of DND context are:
//1. drag ( the item that user is dragging)
//2. dragStart: 
//3. dragEnd: drag ends, reason can be anything.
//4. dropEffect: (Use with dragEnd, it helps to check either the element has been successfully dropped on some new location or the drag ends because user releases mouse at some wrong place or press ESC).
//5. drop: successfully dropped at some target.
//6. dragenter: when drag(dragged item) enters a valid drop location.
