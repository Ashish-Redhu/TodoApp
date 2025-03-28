import TodoInput from './components/TodoInput/TodoInput'
import TodosList from './components/TodosList/TodosList'
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <h2 className='mb-2 p-4 w-full text-center text-3xl font-bold bg-neutral-500 shadow-md sticky top-0 z-10'>Manage Your Todos</h2>
      <div className='flex flex-col mt-4 w-[100vw] md:w-[70vw] lg:w-[60vw] min-h-screen h-auto mx-auto p-4'>
        
        <div className='sticky top-[69px] z-10 shadow-md p-4'
         style={{
          backgroundImage: "url('/images/appbackground.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
         }}>
          <TodoInput/>
        </div>
        
        <TodosList />
      <ToastContainer /> 
      {/* Toastcontainer is used to show good quality notifications. */}
    </div>
    </div>
    
  )
}

export default App


// DND implementation.
// https://chatgpt.com/share/67e68fba-650c-800c-a6a2-9e1dc0a9a1b0
