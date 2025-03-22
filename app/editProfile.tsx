import AvatarPicker from "@/components/AvatarPicker";
import BottomNav from "@/components/BottomNav";
import { NavigationProp } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

type prop = {
    navigation: NavigationProp;
}

export default function EditProfile({ navigation }: prop) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
                    <Ionicons name="arrow-back" size={30} color="black" style={{ marginLeft: 15 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Edit Profile</Text>
            
                <AvatarPicker />
            
            </View>

            <BottomNav navigation={navigation}/>
        </View>
    )
}