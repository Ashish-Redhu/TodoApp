import { useState } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodosList from './components/TodosList/TodosList'
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      
      <h2 className='mb-2 p-4 w-full text-center text-2xl font-bold border-b border-white bg-neutral-500'>Manage Your Todos</h2>
      
      <div className='flex flex-col mt-4 w-[90vw] md:w-[70vw] lg:w-[60vw] min-h-screen h-auto mx-auto'>
        <TodoInput />
        <TodosList />
      <ToastContainer /> 
      {/* Toastcontainer is used to show good quality notifications. */}
    </div>
    </div>
    
  )
}

export default App
