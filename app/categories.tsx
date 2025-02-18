import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { NavigationProp } from "../constants/types";
import { Ionicons } from "@expo/vector-icons";

type prop = {
    navigation: NavigationProp;
}

const wasteCategories = [
    { id: "1", name: "Plastic", icon: require("@/assets/images/plastic.png") },
    { id: "2", name: "Metal", icon: require("@/assets/images/metal.png") },
    { id: "3", name: "Glass", icon: require("@/assets/images/glass.png") },
    { id: "4", name: "Fabric", icon: require("@/assets/images/fabric.png") },
    { id: "5", name: "Organic", icon: require("@/assets/images/organic.png") },
    { id: "6", name: "Paper", icon: require("@/assets/images/paper.png") },
];


export default function AllCategories({ navigation }: prop) {
    return (
        <View style={{ flex: 1, backgroundColor: "#D2DBDE", padding: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Waste Category</Text>
            </View>
            
            <FlatList
                data={wasteCategories}
                numColumns={3}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: "center" }}
                renderItem={({ item }) => (
                    <View style={{ alignItems: "center", margin: 10 }}>
                        <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <Image source={item.icon} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={{ marginTop: 5, fontWeight: "bold" }}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}
