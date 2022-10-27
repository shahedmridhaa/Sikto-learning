import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase.config"
import { useState } from 'react';
import { useEffect } from 'react';

export const Mycontext = createContext()
const auth = getAuth(app)

const Authcontext = ({children}) => {


        const [darkMode, setDarkMode] = useState(true);

        const handleLightTheme = () => {
            setDarkMode(true);
         };
      
        const handleDarkTheme = () => {
        setDarkMode(false);
        };

       



    const [loading, setLoading] = useState(true);


    // === Create User ===
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // === Login User ===
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword( auth, email, password)
    }


    // === Updet User Profile ===
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    // === SignOut USer ===
    const userSignOut = () =>{
      return signOut (auth)
    }


    // === Create User with Google ===
    const googleUser = (provider ) =>{
        return signInWithPopup(auth, provider)
    }

    //== create user with github==
    const githubUser =(provider)=>{
        return signInWithPopup(auth, provider)
    }


    // === User Control ===
    const [user, setUser] = useState(null)
    useEffect(() =>{
       const rejectedUser =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            rejectedUser()
        }
    })




    const allInfo = {createUser, loginUser, googleUser, updateUserProfile, userSignOut, githubUser,user, loading, darkMode, handleDarkTheme, handleLightTheme}
    return (
       <Mycontext.Provider value={allInfo}>
         {children}
       </Mycontext.Provider>
    );
};

export default Authcontext;