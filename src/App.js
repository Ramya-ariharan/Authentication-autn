import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Nav from './components/Nav'

const App = () => {
  return (
  <BrowserRouter>
  <Nav />
  <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/signin' element={<Signin />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/about' element={<About />}/>

  </Routes>
  
  </BrowserRouter>
  )
}

export default App
