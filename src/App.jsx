import { useState } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodosList from './components/TodosList/TodosList'
import './App.css'

function App() {
  return (
    <>
    <h1>Todo App using Redux</h1>
    <hr />
    <TodoInput />
    <TodosList />
    </>
  )
}

export default App
