import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const PrivateRoute = ({ children }) => {
  const [cookies] = useCookies()
  if(cookies.user) return children
  return <Navigate to="/login" />
}

export default PrivateRoute