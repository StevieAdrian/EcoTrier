import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "../constants/types";
import BottomNav from "@/components/BottomNav";
import AccountProfile from "@/components/AccountProfile";
import ActionProfile from "@/components/ActionProfile";
type prop = {
    navigation: NavigationProp;
};

export default function ProfilePage({ navigation }: prop) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }} showsVerticalScrollIndicator={false}>             
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
                            <Ionicons name="arrow-back" size={30} color="black" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Settings</Text>
                    </View>

                    {/* temp image, will be changed to profile later */}
                    <View style={{ width: "25%", height: 80, alignSelf: "center", marginTop: 15, borderRadius: 12, overflow: "hidden" }}>
                        <Image source={require("@/assets/images/ads.png")} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                    </View>

                    <AccountProfile />
                    <ActionProfile />
                </View>
            </ ScrollView>
            <BottomNav navigation={navigation}/>
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