import {React, useState, useEffect, useContext} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    //handling logged in users
    const [currentUser, setcurrentUser] = useState(null);
    const [userLoggedIn, setuserLoggedIn] = useState(false);
    const [Loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user) {
        if (user) {
            setcurrentUser({...user});
            setLoading(true);
        } else {
            setcurrentUser(null);
            setLoading(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        Loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!Loading && children}
        </AuthContext.Provider>
    )
}