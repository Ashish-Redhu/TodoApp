import { useState } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodosList from './components/TodosList/TodosList'
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='flex flex-col mt-4 w-[90vw] md:w-[70vw] lg:w-[60vw] min-h-screen h-auto'>
      <h2 className='mt-4 mb-2 text-center text-2xl font-bold border-b border-white'>Todo App</h2>
        <TodoInput />
        <TodosList />
      <ToastContainer /> 
      {/* Toastcontainer is used to show good quality notifications. */}
    </div>
  )
}

export default App
