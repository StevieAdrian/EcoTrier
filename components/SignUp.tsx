import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>Signup</Text>            
            
            <TextInput placeholder="Enter Your Username" style={{ height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 }} />
            <TextInput placeholder="Enter Your Email" keyboardType="email-address" style={{ height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 }} />
            <TextInput placeholder="Enter Your Phone Number" keyboardType="phone-pad" style={{ height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 }} />

            <View style={{ flexDirection: "row" as const, alignItems: "center" as const, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, height: 50, marginBottom: 15 }}>
                <TextInput placeholder="Enter Your Password" secureTextEntry={!passwordVisible} style={{ flex: 1 }} />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Feather name={passwordVisible ? "eye" : "eye-off"} size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ backgroundColor: "black", height: 50, justifyContent: "center", alignItems: "center" as const, borderRadius: 8 }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Signup</Text>
            </TouchableOpacity>

            <Text style={{ textAlign: "center", marginTop: 15 }}>
                Already have an account?{" "}
                <Text style={{ fontWeight: "bold" }}>Login</Text>
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
                <Text style={{ marginHorizontal: 10, fontSize: 18 }}>Or</Text>
                <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
            </View>
        </View>
    );
};
