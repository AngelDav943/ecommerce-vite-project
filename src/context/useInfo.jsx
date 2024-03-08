import { createContext, useContext, useEffect, useState } from "react";

const infoContext = createContext()

export const useInfo = () => {
    return useContext(infoContext);
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env["VITE_API_KEY"],
    authDomain: import.meta.env["VITE_AUTH_DOMAIN"],
    projectId: import.meta.env["VITE_PROJECT_ID"],
    storageBucket: import.meta.env["VITE_STORAGE_BUCKET"],
    messagingSenderId: import.meta.env["VITE_SENDER_ID"],
    appId: import.meta.env["VITE_APP_ID"]
};

export function InfoProvider({ children }) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

    const infoValues = {
        user: userData,
        googleSignIn: async () => {
            try {
                console.log("logging...")
                const user = await signInWithPopup(auth, provider);
                if (user && user.user) {
                    setUserData(user.user)
                    console.log(user.user)
                }
            } catch (err) {
                console.log("error..", err)
            }
            navigate('/')
        },
        setUser: (data) => {

        },
        logout: () => {

        },
    }

    useEffect(() => {

    }, [])

    return (
        <infoContext.Provider value={{ ...infoValues }}>
            {children}
        </infoContext.Provider>
    )
}