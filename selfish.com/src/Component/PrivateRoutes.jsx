import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContext ,useState} from 'react';
import { Authcontext } from '../Context/AuthContext';
const PrivateRoutes = ({children}) => {

  const{authState} =useContext(Authcontext)

  if(!authState.isAuth){
    return <Navigate to="/"/>
  }
  return children
  
}

export default PrivateRoutes
