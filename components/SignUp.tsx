import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../constants/firebaseConfig";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";
import { NavigationProp } from "@/constants/types";

type prop = {
    navigation: NavigationProp;
}

export default function SignUp({ navigation }: prop) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const signUp = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                username,
                phone,
                email,
                createdAt: new Date(),
            });

            alert('Check your emails!');
            router.replace('/SignInPage');
        } catch (e: any) {
            const err = e as FirebaseError;
            alert('Registration failed: ' + err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>Signup</Text>            
            
            <TextInput placeholder="Enter Your Username" value={username} onChangeText={setUsername} keyboardType="email-address" style={{ height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 }} />
            <TextInput placeholder="Enter Your Email" value={email} onChangeText={setEmail} autoCapitalize="none"  keyboardType="email-address" style={{ height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 }} />
            <TextInput placeholder="Enter Your Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={{ height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 }} />

            <View style={{ flexDirection: "row" as const, alignItems: "center" as const, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, height: 50, marginBottom: 15 }}>
                <TextInput placeholder="Enter Your Password" value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible} style={{ flex: 1 }} />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Feather name={passwordVisible ? "eye" : "eye-off"} size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ backgroundColor: "black", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 8 }} onPress={signUp} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Signup</Text>}
            </TouchableOpacity>

            <Text style={{ textAlign: "center", marginTop: 15 }}>
                Already have an account?{" "}
                <Text style={{ fontWeight: "bold", color: "blue" }} onPress={() => navigation.navigate("SignIn")}>Login</Text>
            </Text>

            {/* <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
                <Text style={{ marginHorizontal: 10, fontSize: 18 }}>Or</Text>
                <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
            </View> */}
        </View>
    );
};
