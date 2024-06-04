import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adder ,allToDraft } from "../../store/DataSlice";
import { useRef } from "react";
import Card from "./Card";

function Todos() {
  const dispatcher = useDispatch();
  const inputRef = useRef()

  const [srNo,setSrNo] = useState(0)
  
  const selector = useSelector((state) => state.Todos.datas);
  const todos = selector.filter((item, index) => !item.isDraft);

  const [newTodo,setNewTodo] = useState('')


  const addNew = () => {
    dispatcher(adder({newTd:{isDraft:false,todo:newTodo.trimStart()}}))
    setNewTodo("")
  }
  

 

  return (
    <div className="flex flex-col gap-2 w-full ">
    <h1 className="text-center text-lg text-indigo-300">Note Todos</h1>
      <div className="flex gap-0 justify-center w-full mb-5 ">
       
       
        <input ref={inputRef}
          className="w-1/3 flex flex-nowrap px-2 py-1 focus:outline outline-slate-500 focus:border-none   bg-slate-600 rounded-sm text-white "
          placeholder="gym,dance,singing..."
          value={newTodo}
          onChange={(e)=>{setNewTodo(e.target.value)}}
        />
        <button
          onClick={()=>{inputRef.current.value.trim().length > 0 ? addNew() : null}}
         className="w-1/6 bg-green-500 text-black  rounded-r-sm text-center text-sm px-2 py-0 hover:bg-green-600 active:bg-green-500">
          Create
        </button>
       {todos.length > 0 &&  <button
          onClick={()=>{const conf = confirm('Delete All ?')
          conf && dispatcher(allToDraft()) 
          }
          }
         className="w-1/6 bg-red-500 text-white ml-2 text-center text-sm  rounded-sm   px-2 py-0 hover:bg-red-600 active:bg-red-500">
          Delete All
        </button>}
      </div>

      <h1 className="text-white w-full bg-gray-600 text-center rounded-md"> Todos</h1>

      {todos.length == Number(0) && (
        <div className="mx-5 flex flex-col gap-3">
          <h1 className="text-center text-slate-400">
            No Todos Check Draft or Create
          </h1>
        </div>
      )}

      <div className=" px-5 flex-wrap  flex-col w-full gap-3">
        <div className="flex flex-col  w-full gap-2 items-center">
          {selector.map((item, index) => {
            if (!item.isDraft) {
              return (
                <Card
                  key={index}
                  isImp={item.isImp}
                  isDraft={item.isDraft}
                  todo={item.todo}
                  index={index}
                ></Card>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Todos;
