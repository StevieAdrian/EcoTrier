import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/constants/firebaseConfig";
import { Alert } from "react-native";

export default function useForgotPassword() {
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async (email: string) => {
        if (!email) {
            Alert.alert("Error", "Email is required.");
            return;
        }

        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert("Success", "Reset link has been sent to your email.");
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return { handleForgotPassword, loading };
}
