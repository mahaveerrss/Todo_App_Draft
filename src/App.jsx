 import React from 'react'
 import { Nav  } from './components'
import { Outlet } from 'react-router-dom'
 
 function App() {
   return (
     <div className='w-full h-full bg-gray-800'>
       <Nav></Nav>
       <Outlet></Outlet>
     </div>
   )
 }
 
 export default App
 