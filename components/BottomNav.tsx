import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { NavigationProp } from "@/constants/types";

type prop = {
    navigation: NavigationProp;
}

export default function BottomNav({ navigation }: prop) {
    const route = useRoute();

    const activeButt = (currScreen: string[]) => {
        // return route?.name === currScreen;
        return currScreen.includes(route.name);
    }

    return (
        <>
            <View style={{ position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "white", alignItems: "center", padding: 20, borderTopLeftRadius: 20,borderTopRightRadius: 20 }}>  
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={{ backgroundColor: activeButt(["Home", "AllCategories"]) ? "black" : "transparent", width: 45, height: 45, alignItems: "center", justifyContent: "center", borderRadius: 10 }} >
                        <Ionicons name="home-outline" size={30} color={activeButt(["Home", "AllCategories"]) ? "white" : "black"} />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                    <View style={{ backgroundColor: activeButt(["Notification"]) ? "black" : "transparent" ,width: 45, height: 45, alignItems: "center", justifyContent: "center", borderRadius: 10 }} >
                        <Ionicons name="notifications-outline" size={30} color={activeButt(["Notification"]) ? "white" : "black"}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ScanPage")}>
                    <View style={{ backgroundColor: activeButt(["ScanPage"]) ? "black" : "transparent", width: 45, height: 45, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                        <Ionicons name="scan" size={30} color={activeButt(["ScanPage"]) ? "white" : "black"} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ScanHistory")}>
                    <View style={{ backgroundColor: activeButt(["ScanHistory"]) ? "black" : "transparent", width: 45, height: 45, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                        <Ionicons name="time-outline" size={30} color={activeButt(["ScanHistory"]) ? "white" : "black"} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
                    <View style={{ backgroundColor: activeButt(["ProfilePage", "EditProfile"]) ? "black" : "transparent", width: 45, height: 45, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                        <Ionicons name="person-outline" size={30} color={activeButt(["ProfilePage", "EditProfile"]) ? "white" : "black"}/>
                    </View>
                </TouchableOpacity>

            </View>
        </>
    );
}
