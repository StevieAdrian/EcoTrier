import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator  } from "react-native";
import { Feather } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../constants/firebaseConfig";
import { router } from "expo-router";
import { NavigationProp } from "@/constants/types";

type prop = {
    navigation: NavigationProp;
}

export default function SignIn({ navigation }: prop) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const signIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.replace('/');
        } catch (e: any) {
            const err = e as FirebaseError;
            alert('Sign in failed: ' + err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 2 }}>Login</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 30 }}>Welcome Back!</Text>

            <TextInput placeholder="Enter Your Username / Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" style={{ height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 }} />

            <View style={{ flexDirection: "row" as const, alignItems: "center" as const, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, height: 50, marginBottom: 15 }}>
                <TextInput placeholder="Enter Your Password" value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible} style={{ flex: 1 }} />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Feather name={passwordVisible ? "eye" : "eye-off"} size={20} />
                </TouchableOpacity>
            </View>

            <Text style={{ textAlign: "center", marginTop: 2, marginBottom: 15, fontWeight: "bold", color: "blue" }} onPress={() => navigation.navigate("ForgotPassword")}> Forgot Password? {""} </Text>

            <TouchableOpacity 
                style={{ backgroundColor: "black", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 8, marginBottom: 6 }} 
                onPress={signIn} 
                disabled={loading}
            >
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Login</Text>}
            </TouchableOpacity>

            <Text style={{ textAlign: "center", marginTop: 15 }}> Don't have an account?{" "}
                <Text style={{ fontWeight: "bold", color: "blue" }} onPress={() => navigation.navigate("SignUp")}>Signup</Text>
            </Text>

            {/* <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
                <Text style={{ marginHorizontal: 10, fontSize: 18 }}>Or</Text>
                <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
            </View> */}
        </View>
    );
};
