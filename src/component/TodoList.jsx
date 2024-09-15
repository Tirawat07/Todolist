import React, { useState } from 'react'
import useStore from '../store/Teestore'
import { toast } from 'react-toastify'
import TodoTask from './TodoTask'



function TodoList() {
    const [text, setText] = useState('')
    const { list, addList,delList,updateList } = useStore((state) => ({
        list: state.list,
        addList: state.addList,
        delList: state.delList,
        updateList: state.updateList
    }))
    console.log(list)
    

    const hdlInputList = (e) => {
        setText(e.target.value)
    }
    const submitList = () => {
        addList(text)
        toast.success('Added Successfully')
    }
    const hdlDelete = (id) => {
        delList(id)
    }

    return (
        <div className='bg-red-500 mx-auto w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl mt-10'>
            <h1 className=' text-center font-semibold text-[70px] bg-orange-400 rounded-xl'>TODOLIST</h1>
            <div className='flex items-center my-5 bg-gray-300 rounded-full'>
                <input type="text" className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2' onChange={hdlInputList} placeholder='Add your list' />
                <button className='border-none rounded-full bg-blue-950 text-white h-14 w-20' onClick={submitList}>Addlist</button>
            </div>

            {list.map((item, index) => (
             <TodoTask hdlDelete={hdlDelete} item={item} index={index} updateList={updateList}/>
            ))}
        </div>
    )
}

export default TodoList

