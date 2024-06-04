import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Draft,Todos} from './components'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App></App>,
    children: [
      {
        path: "",
        element:  <Todos></Todos>,
      },
      {
        path: "drafts",
        element: <Draft></Draft> ,
      },
      {
        path: "todos",
        element:  <Todos></Todos>,
      },
    ]
  },



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
     <RouterProvider router={router}>

     </RouterProvider>
   </Provider>
  </React.StrictMode>,
)
