import React from 'react'
import { useSelector } from 'react-redux'
import EachTodo from '../EachTodo/EachTodo'
function TodosList() {
  const todos = useSelector((state) => state.todos)
  return (
    <>
    {
      todos.map((todo, index) =>
         <EachTodo key={index} id={todo.id} title={todo.title} 
      />)
    }
    </>
  )
}

export default TodosList