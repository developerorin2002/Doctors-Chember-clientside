import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();


const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const Authprovider = ({children}) => {
    const [user , setUser ] = useState(null);

    const handleSignUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfileName = (name) =>{
        return updateProfile(auth.currentUser,{
            displayName:name
        })
    };
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth,provider)
    }
    const userLogOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currenuser)=>{
            setUser(currenuser)
        });
        return ()=> unsubscribe();
    },[])
    const authMethod = {
        handleSignUp,
        updateUserProfileName,
        googleSignIn,
        user,
        userLogOut,
        loginUser


    }

    return (
        <AuthContext.Provider value={authMethod}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;