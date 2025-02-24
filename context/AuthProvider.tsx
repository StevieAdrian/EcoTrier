import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../constants/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter, useSegments } from "expo-router";
import tes from "../app/auth/home2tes"

interface AuthContextProp {
    user: User | null;
    initializing: boolean;
}

const AuthContext = createContext<AuthContextProp>({ user: null, initializing: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [initializing, setInitializing] = useState(true);
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (initializing) setInitializing(false);
        });

        return () => unsubscribe(); 
    }, []);

    useEffect(() => {
        if (initializing) return; 

        const inAuthGroup = segments[0] && segments[0].startsWith("auth");
        console.log("Current segments:", segments);

        if (user && !inAuthGroup) {
            router.replace("/auth/home2tes"); 
        } else if (!user && inAuthGroup) {
            router.replace("/");
        }
    }, [user, initializing, segments]);

    return <AuthContext.Provider value={{ user, initializing }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
