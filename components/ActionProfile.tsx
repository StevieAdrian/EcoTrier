import useLogoutModal from "@/hooks/useLogoutModal";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { auth } from "../constants/firebaseConfig";

export default function ActionProfile() {
    const { isVisible, openModal, closeModal } = useLogoutModal();
    const [user, setUser] = useState<User | null>(auth.currentUser);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (!user) {
                router.replace("/"); 
            }
        });
        return () => unsubscribe();
    }, []);
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            closeModal();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <View style={{ marginTop: 22 }}>
            <Text style={{ fontSize: 18, fontWeight: 500}}>Actions</Text>
            <View style={{ backgroundColor: "#F7F7F8", borderRadius: 10, paddingVertical: 10, marginTop: 10 }}>
                <TouchableOpacity style={styles.container}>
                    <MaterialCommunityIcons name="flag-outline" size={24} color="black" />
                    <Text style={styles.text}>Report a problem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <Ionicons name="person-add-outline" size={24} color="black" />
                    <Text style={styles.text}>Add account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} onPress={openModal}>
                    <Ionicons name="log-out-outline" size={24} color="black" />
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>

                <Modal visible={isVisible} transparent animationType="fade">
                    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" }}>
                        <View style={{backgroundColor: "white", padding: 20, borderRadius: 12, width: "80%", alignItems: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>Are you sure want to log out?</Text>
                            <TouchableOpacity style={{ backgroundColor: "black", paddingVertical: 10, width: "100%", alignItems: "center", borderRadius: 8, marginBottom: 10 }} onPress={handleLogout}>
                                <Text style={{ color: "white", fontWeight: "700" }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "#D1D1D6", paddingVertical: 10, width: "100%", alignItems: "center", borderRadius: 8 }} onPress={() => closeModal()}>
                                <Text style={{ color: "black", fontWeight: "700" }}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>            
            </View>
        </View>
    )
}

const styles = {
    container: {
        flexDirection: "row" as const,
        alignItems: "center" as const,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    text: {
        fontSize: 16,
        marginLeft: 12,
        fontWeight: 600 as const
    },
};