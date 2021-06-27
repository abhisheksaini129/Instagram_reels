import React, { useState, useEffect } from 'react';
import auth from '../firebase';

export const AuthContext = React.createContext();
export function AuthProvider({ children }) {
    const [currentUser, setUser] = useState();
    const [loading, setLoading] = useState(true);
     function login(email, password) {
        // firebase
        return  auth.signInWithEmailAndPassword(email, password);

    }
    function signOut() {
        // firebase signup
        return  auth.signOut();
    }
     function signup(email,password){
        return  auth.createUserWithEmailAndPassword(email, password);
    }
    useEffect(() => {
        // eventListener
        // console.log("added event Listener")
        let cleanUp = auth.onAuthStateChanged(user => {
            console.log("inside listener", user);
            setUser(user);
            setLoading(false);
        })
        return function (){
            console.log("out");
            cleanUp();
        }
    }, []);
    const value = {
        currentUser,
        signOut,
        login,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
        //jab bhi ye values change hogi isse attach hooks trigger ho jayega 
        // jaise app.js me privateRoute wala hooke  chal jayega

    )
}