import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from "./Signin"
import SignIn from "./Sign"
import PageNotFound from './Errorpage'
const  App= () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App