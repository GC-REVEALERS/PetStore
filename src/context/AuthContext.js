import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../Firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState() 

    function signup(email,password){
        console.log(email,password)
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        console.log(email, password)
        return auth.signInWithEmailAndPassword(email,password)
    }

   useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user => {
        console.log(user)
           setCurrentUser(user)
       })
       return unsubscribe
   },[])

    const value ={
        currentUser,
        signup,
        login
    }

  return (
      <AuthContext.Provider value={value}>
      {children}
      </AuthContext.Provider>
  )
}
