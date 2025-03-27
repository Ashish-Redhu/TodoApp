import { useState } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodosList from './components/TodosList/TodosList'
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='w-full sm:w-full sm:m-0'>
      <h1>Todo App using Redux</h1>
      <hr />
      <TodoInput />
      <TodosList />
      <ToastContainer /> 
      {/* Toastcontainer is used to show good quality notifications. */}
    </div>
  )
}

export default App
