import React from 'react'
import {useState} from "react"
import { createContext } from 'react'

export const Authcontext = createContext()


export default function AuthContextProvider({children}) {

  const[state,setstate]=useState({
    isAuth:false,token:null
  });

const [adminlogin,setadminlogin]=useState(false)

  const login1=(token)=>{
    setstate({...state,isAuth:true,token,})
}
  const logout1=()=>{
    setstate({...state,isAuth:false})
  }

  return(
    <Authcontext.Provider  value={{authState:state,login1,logout1 ,adminlogin}}>
    {children}
  </Authcontext.Provider>
  )

    
   
  
}
