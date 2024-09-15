import { useState } from 'react'
import Navbar from './component/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './Component/Todolist';

function App() {


  return (
    <div className='bg-slate-300 py-4 min-h-screen' >
      <ToastContainer/>
      <Navbar />
      <TodoList/>
    </div>
  )
}

export default App
