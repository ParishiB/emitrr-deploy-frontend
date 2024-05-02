import React from 'react'
import {Routes , Route, Navigate  } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import English from '../pages/English'
import English2 from '../pages/English2'
import English3 from '../pages/English3'
import About from '../pages/About'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/signup' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/english' element={<English/>} />
        <Route path='/english2' element={<English2/>} />
        <Route path='/english3' element={<English3/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default Router
