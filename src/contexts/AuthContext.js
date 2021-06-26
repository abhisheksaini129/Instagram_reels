import React, { useState, useEffect } from 'react';
import auth from '../firebase';

//what is the meaning of this
export const AuthContext = React.createContext();
export function AuthProvider({ children }) {
    const [currentUser, setUser] = useState();
    const [loading, setLoading] = useState(true);
    async function login(email, password) {
        // firebase
        return await auth.signInWithEmailAndPassword(email, password);

    }
    async function signOut() {
        // firebase signup
        return await auth.signOut();
    }
    async function signUp(email,password){
        return await auth.createUserWithEmailAndPassword(email, password);
    }
    useEffect(() => {
        // eventListener
        // console.log("added event Listener")
        let cleanUp = auth.onAuthStateChanged(user => {
            console.log("inside listener", user);
            setUser(user);
            setLoading(false)
        })
        return cleanUp;
    }, []);
    const value = {
        login,
        signUp,
        signOut, currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
        //jab bhi ye values change hogi isse attach hooks tigger ho jayega 
        // jaise app.js me privateRoute wala hooke  chal jayega

    )
}