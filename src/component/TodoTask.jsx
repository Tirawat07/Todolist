import React, { useState } from 'react'

function TodoTask(props) {
    const { hdlDelete, item, index,updateList } = props
    const [isEdit, setIsEdit] = useState(false)
    const [input, setInput] = useState(item.todolist)
    const [done, setDone] = useState(false)
    console.log(item.todolist)
    

    const hdlEdit = () => {
        if(isEdit){
            updateList(input,item.id)
        }
        setIsEdit(!isEdit)
    }
    const hdlDone =()=>{
        setDone(!done)
    }
    return (
        <div className='flex w-12/12 justify-between items-center '>
            {
                  isEdit
                  ?<input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border rounded-lg w-40 h-10 pl-5'/>
                  :done
                  ?<p className='cursor-pointer pl-5 pb-5 text-slate-700 text-[17px] line-through pt-5' onClick={hdlDone}>{item.todolist}</p>
                  :<p className='cursor-pointer pl-5 pb-5 text-slate-700 text-[17px] pt-4'onClick={hdlDone}>{item.todolist}</p>
                  
            }
            <div className='flex gap-4'>
                {
                    isEdit
                        ? <button onClick={hdlEdit} className='btn w-15 text-slate-500'>Confirm</button>
                        : <button onClick={hdlEdit} disabled={done ?true : false} className='btn w-15 text-slate-500'>Edit</button>

                }
                <button className='btn w-15'>

                    <img src='./src/assets/delete.png' alt="" onClick={() => hdlDelete(item.id)} className='w-5 cursor-pointer' />
                </button>


            </div>
        </div>

    )
}

export default TodoTask