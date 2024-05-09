import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Addblog from './Components/Addblog'
import Addcategory from './Components/Addcategory'
import Register from './Components/Register'
import Login from './Components/Login'
import Private_Component from './Components/Private_Component'
import SinglePage from './Components/SinglePage'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Private_Component/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Addblog/>}/>
      <Route path='/category' element={<Addcategory/>}/>
      <Route path='/single/:id' element={<SinglePage/>}/>
      </Route>

      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App