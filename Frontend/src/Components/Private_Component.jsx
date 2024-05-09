import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
const Private_Component = () => {
    const auth = localStorage.getItem("token");
    return auth && auth !== null ? <Outlet/> : <Navigate to="/login"/>
}

export default Private_Component