import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isPrepaidUser } from '../Authentication'


export default function PrepaidRoutes() {
    const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))
    console.log("authXX", OnlineUSerDetails)

    let auth = { "token": isPrepaidUser(OnlineUSerDetails) }


    return (
        
        auth.token ? <Outlet /> : <Navigate to="/portal/dashboard" />
    )
}
