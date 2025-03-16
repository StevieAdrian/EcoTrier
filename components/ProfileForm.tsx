import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextInputField from "@/components/TextInputField"; 

export default function ProfileForm() {
    const [name, setName] = useState("Stevie");
    const [email, setEmail] = useState("Stevie@gmail.com");
    const [password, setPassword] = useState("**********");
    const [dob, setDob] = useState("05/09/2007");
    const [country, setCountry] = useState("Palembang");

    return (
        <View style={styles.container}>
            <TextInputField label="Name" value={name} onChangeText={setName} />
            <TextInputField label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInputField label="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <DropdownField label="Date of Birth" value={dob} />
            <DropdownField label="Country/Region" value={country} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>
        </View>
    );
}

function DropdownField({ label, value }: { label: string; value: string }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.inputDropdown}>
                <Text>{value}</Text>
                <Ionicons name="chevron-down" size={16} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 100
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    inputDropdown: {
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "black",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
