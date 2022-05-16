import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { PrivateRoute } from './routes/PrivateRoute'
// import { MoviesGrid } from './pages/MoviesGrid/MoviesGrid'



export const App = () => {
  return (
    <>
      
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateRoute><Home /></PrivateRoute> } />

        </Routes>
      
    </>
  )
}
