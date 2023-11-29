import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import UseAxiosPublic from "../Hooks/useAxiosPublic";
import UseAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const axiosSecure=UseAxiosSecure()
    const axiosPublic= UseAxiosPublic()
    // createuser
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // createuser
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sign in
    const googleProvider= new GoogleAuthProvider()
    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            const userInfo={email: currentUser?.email}
            if(currentUser){
                
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                   console.log(res.data);
                    if(res.data.token){
                        localStorage.setItem('contest-token', res.data.token)
                    }
                })
                
            }else{
                
                localStorage.removeItem('contest-token')
            }
            setLoading(false)
            console.log(currentUser);
        });return()=>{
            return unsubcribe()
        }
    },[axiosPublic])

    // logout
    const logOut=()=>{
        return signOut(auth)
    }




    const userInfo={user,createUser, logIn,logOut,loading,google}
  return (
    <AuthContext.Provider value={userInfo}>
           {children}
    </AuthContext.Provider>
  );
};

export default AuthProvaider;