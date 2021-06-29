import React,{ useEffect,useState} from 'react'

import auth from './firebase';

export const Auth=React.createContext();

export function AuthWala({children}) {
    const[currentUser,setCurrentUser]=useState();
    const[loading,setLoading]=useState(true);

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }
    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            setCurrentUser(user);
            setLoading(false);
        })
        return "ho gya khatam";
    },[]);
    const value={
        currentUser,login
    };
    return (
        <Auth.Provider value={value}>
            {!loading,children}
        </Auth.Provider>
            
    )
}
