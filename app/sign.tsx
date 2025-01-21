import { useEffect, useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ActivityIndicator, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import auth from '@react-native-firebase/auth';
import { auth } from "../constants/firebaseConfig";
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { useRouter, useSegments } from "expo-router";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

export default function SignPage({ navigation }: { navigation: any }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [initializing, setInitializing] = useState(true);
    const router = useRouter();
    const segments = useSegments();
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (initializing) setInitializing(false);
        });

        return () => unsubscribe();
    })

    useEffect(() => {
        if (initializing) {
            return;
        } 
        const inAuthGroup = segments[0] && segments[0].startsWith("auth");
        
        if (user && !inAuthGroup) {
            router.replace("/auth/home2tes");
        } else if (!user && inAuthGroup) {
            router.replace('/');
        }

    }, [user, initializing]);

    const signUp = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Check your emails!');
        } catch (e: any) {
            const err = e as FirebaseError;
            alert('Registration failed: ' + err.message);
        } finally {
            setLoading(false);
        }
    }

    const signIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (e: any) {
            const err = e as FirebaseError;
            alert('Sign in failed: ' + err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <SignIn navigation={navigation}></SignIn>
    )
}

const styles =  StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: "center",
    },

    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#fff"
    }
})