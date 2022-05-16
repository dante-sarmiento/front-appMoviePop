import React from 'react'
import { Navigate } from 'react-router-dom'


export const PrivateRoute = ({children}) => {
  return (
    JSON.parse(localStorage.getItem('currentUser')) ? children : <Navigate to="/login" replace/> 
  )
}
