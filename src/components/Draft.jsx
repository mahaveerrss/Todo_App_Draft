import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll } from '../../store/DataSlice'
import Card from './Card'

function Draft() {
   
    const dispatcher = useDispatch()
    const selector = useSelector(state => state.Todos.datas)
    const drafts = selector.filter((item, index) => item.isDraft);
   
   

    

    if (drafts.length == Number(0)) {
      return (
        <div className="mx-5 flex flex-col gap-3">
            <h1 className='text-white bg-gray-600 text-center rounded-md'> Drafts</h1>
          <h1 className='text-center text-slate-400'>No Drafts Check Todos</h1>
        </div>
      );
    }
  
    return (
      <div className='mx-5 flex flex-col gap-3'>
       <h1 className='text-white bg-gray-600 text-center rounded-md'> Drafts</h1>
      
      <div className='flex items-center justify-center'>
      <button
          onClick={()=>{const conf = confirm('Delete All ?')
          conf && dispatcher(deleteAll()) 
          }
          }
         className="  bg-red-500   text-white ml-2   flex flex-wrap  rounded-sm   px-2 py-0 hover:bg-red-600 active:bg-red-500">
          Permanently Delete All
        </button>
      </div>
     <div className='flex flex-col items-center'>
     {selector.map((item,index)=>{
     if(item.isDraft){ return <Card key={index} isDraft={item.isDraft}  todo={item.todo} index={index}></Card>}
    })}
     </div>
        
      </div>
    )
  
}

export default Draft
