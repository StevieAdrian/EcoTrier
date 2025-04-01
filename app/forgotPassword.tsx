import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationProp } from "@/constants/types";
import useForgotPassword from "@/hooks/useForgotPassword";

type Prop = {
    navigation: NavigationProp;
};

export default function ForgotPassword({ navigation }: Prop) {
    const [email, setEmail] = useState("");
    const { handleForgotPassword, loading } = useForgotPassword();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Enter your email to reset your password</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={() => handleForgotPassword(email)} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? "Sending..." : "Send Reset Link"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "gray",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "black",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: "100%",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    backText: {
        marginTop: 15,
        fontSize: 14,
        color: "blue",
        fontWeight: "bold",
    },
});