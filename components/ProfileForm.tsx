import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextInputField from "@/components/TextInputField";
import useUserData from "@/hooks/useUserData";
import { useEffect, useState } from "react";
import { countries } from "@/data/countries";
import { useUpdateProfile } from "@/hooks/useUpdateProfile";
import { NavigationProp } from "@/constants/types";

type prop = {
    navigation: NavigationProp;
}

export default function ProfileForm({ navigation }: prop) {
    const { userData, loading } = useUserData();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        country: "",
    })
    const { updateProfile } = useUpdateProfile();
    const [modal, setModal] = useState(false); 

    useEffect(() => {
        if (userData){
            setFormData({
                name: userData.name || "",
                email: userData.email || "",
                dob: userData.dob || "",
                country: userData.country || "",
            });
        }
    }, [userData]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    function handleSave() {
        updateProfile({name: formData.name, country: formData.country}).then(() => {
            setModal(true);
        });
    }

    return (
        <View style={styles.container}>
            <TextInputField label="Name" value={formData.name} onChangeText={(q) => setFormData({...formData, name: q})}/>
            <DisabledField label="Email" value={formData.email} />
            <DropdownField label="Date of Birth" value={formData.dob} disabled />
            <DropdownField label="Country/Region" value={formData.country} onSelect={(q) => setFormData({...formData, country: q})} />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>

            <Modal visible={modal} animationType="fade" transparent={true} onRequestClose={() => setModal(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Profile updated successfully!</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => {setModal(false); navigation.navigate("Home")}}>
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function DisabledField({ label, value }: { label: string; value: string }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputDropdown, styles.disabledDropdown]}>
                <Text>{value}</Text>
            </View>
        </View>
    );
}

function DropdownField({ label, value, onSelect, disabled = false }: { label: string; value: string, onSelect?: (q: string) => void; disabled?: boolean }) {
    const [modal, setModal] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [country, setCountry] = useState(value);

    useEffect(() => {
            setCountry(value);
    }, [value]);

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={[styles.inputDropdown, disabled && styles.disabledDropdown]} onPress={() => setDropdown((prev) => !prev)} disabled={disabled}>
                <Text>{value || "Selected Date"}</Text>
                <Ionicons name="chevron-down" size={16} color="black" />
            </TouchableOpacity>

            {dropdown && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={countries}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.dropdownItem} onPress={() => { onSelect?.(item.name); setDropdown(false); }}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 100,
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
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    disabledDropdown: {
        backgroundColor: "#cccccc",
        borderColor: "#ccc",
    },
    disabledText: {
        color: "#888",
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        backgroundColor: "#fff",
        marginTop: 5,
        maxHeight: 150, 
        overflow: "hidden",
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },  
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
    },
    modalButton: {
        backgroundColor: "black",
        marginTop: 10,
        paddingVertical: 10, 
        paddingHorizontal: 30, 
        borderRadius: 5,
        minWidth: 100, 
        alignItems: "center",
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});
