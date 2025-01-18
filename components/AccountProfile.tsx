import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function AccountProfile(){
    return (
        <View style={{ marginTop: 28 }}>
            <Text style={{ fontSize: 18, fontWeight: 500}}>Account</Text>
            <View style={{ backgroundColor: "#F7F7F8", borderRadius: 10, paddingVertical: 10, marginTop: 10 }}>
                <TouchableOpacity style={styles.container}>
                    <Ionicons name="person-outline" size={24} color="black" />
                    <Text style={styles.text}>Edit profile</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.container}>
                    <Ionicons name="shield-checkmark-outline" size={24} color="black" />
                    <Text style={styles.text}>Security</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Text style={styles.text}>Notifications</Text>
                </TouchableOpacity>
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