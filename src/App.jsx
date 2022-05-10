import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
// import { MoviesGrid } from './pages/MoviesGrid/MoviesGrid'



export const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />

        </Routes>
      
    </>
  )
}
