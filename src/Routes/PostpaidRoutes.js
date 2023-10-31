import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isPostpaidUser } from '../Authentication'


export default function PostpaidRoutes() {
    const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))
    let auth = { "token": isPostpaidUser(OnlineUSerDetails) }

    return (
        auth.token ? <Outlet /> : <Navigate to="/portal/dashboard" />
    )
}
