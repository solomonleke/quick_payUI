import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../Authentication'



export default function ProtectedRoutes() {


  let auth = {"token": isAuthenticated(true)}

   return (
   auth.token ? <Outlet/> : <Navigate to="/cus-login"/>
  )
}
