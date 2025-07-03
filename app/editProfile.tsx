import AvatarPicker from "@/components/AvatarPicker";
import BottomNav from "@/components/BottomNav";
import ProfileForm from "@/components/ProfileForm";
import { NavigationProp } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";

type prop = {
    navigation: NavigationProp;
}

export default function EditProfile({ navigation }: prop) {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center", width: "100%", paddingTop: 25 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 15 }}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", flex: 1 }}>Edit Profile</Text>
            </View>

            <AvatarPicker />
            <ScrollView style={{ width: "100%" }}>
                <ProfileForm navigation={navigation}/>
            </ScrollView>

            <BottomNav navigation={navigation}/>
        </View>
    )
}