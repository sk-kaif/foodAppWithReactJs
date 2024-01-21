import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({children}) => {
  const cartLen = useSelector(state=>state.cart.cart)
  return cartLen.length > 0 ? children : <Navigate to='/'/>
  
}

export default ProtectedRoute