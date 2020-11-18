import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Axios from 'axios'
import jwtDecode from 'jwt-decode'

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    signed = false,
    admin = false,
    ...rest
}){
    const token = window.localStorage.getItem('token') 
    const isSigned =  token ? true : false
    const isAdmin = isSigned ? jwtDecode(token).data.isAdmin : 0;
    if (!isSigned && isPrivate){
        return <Redirect to="/login" />
    }
    else if(isSigned && signed){
        return <Redirect to="/home"/>
    }
    else if(!isAdmin && admin ){
        return <Redirect to="/"/>
    }
    return <Route {...rest} component={Component}/>
}
