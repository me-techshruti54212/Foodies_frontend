import { onAuthStateChanged } from 'firebase/auth';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../../firebase/firebase';
export const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);

    useEffect(() => {
      const unsub = onAuthStateChanged(auth,(user)=>{
        if(user)
        {
          console.log(user)
        setCurrentUser({...user});

        }
        else
      setCurrentUser(null)
      })
    
      return () => {
        unsub();
      }
    },[])
    

  return (
    <StateContext.Provider value={{
        setCurrentUser,
        currentUser,
    }}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
