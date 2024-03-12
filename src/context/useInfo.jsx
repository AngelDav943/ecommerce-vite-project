import { createContext, useContext, useEffect, useState } from "react";

const infoContext = createContext()

export const useInfo = () => {
    return useContext(infoContext);
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useLocation, useNavigate } from "react-router-dom";

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
    const location = useLocation();

    const infoValues = {
        user: userData,
        setUser: (data) => {
            if (data == null){
                setUserData(null);
                return;
            }

            const newUserData = {
                photoURL: data["photoURL"],
                displayName: data["displayName"],
                email: data["email"],
                providerData: data["providerData"],
                metadata: data["metadata"],
                accessToken: data["accessToken"],
                uid: data["uid"]
            }

            localStorage.setItem("ecom_user", JSON.stringify(newUserData));
            setUserData(newUserData);
        },
        googleSignIn: async () => {
            try {
                const user = await signInWithPopup(auth, provider);
                if (user && user.user) {
                    infoValues.setUser(user)
                    if (location.state["last"]) {
                        navigate(location.state["last"])
                        return;
                    }
                }
            } catch (err) {
                console.log("error..", err)
            }
            navigate('/')
        },
        logout: () => {

        },
    }

    useEffect(() => {
        if (userData == null) {
            try {
                const savedUser = JSON.parse(localStorage.getItem("ecom_user"))
                if (savedUser && savedUser["email"]) setUserData(savedUser)
            } catch (err) {
                console.log("A!")
                console.error(err)
            }
        }
    }, [])

    return (
        <infoContext.Provider value={{ ...infoValues }}>
            {children}
        </infoContext.Provider>
    )
}