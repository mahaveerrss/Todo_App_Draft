 import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {updateUserName,updateUserStatus} from '../../store/DataSlice';

 
 function Demo( ) {
 
  const data = useSelector((store)=> store.DataSliceReducer)
  console.log(data)
  
    const dispatch = useDispatch()
 
  
   return (
    <div>
      'Helo': {data.user}
      
      <button onClick={e=>{dispatch(updateUserName('testName'))}}>Click</button>
    </div>
   )
 }
 
 export default Demo
