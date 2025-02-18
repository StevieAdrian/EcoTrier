import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { NavigationProp } from "../constants/types";

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

export default function WasteCategory({ navigation }: prop) {
    const [showAll, setShowAll] = useState(false);

    return (
        <View style={{ position: "absolute", width: "100%", padding: 20, top: 5  }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Waste Category</Text>
                <TouchableOpacity onPress={() => navigation.navigate("AllCategories")}>
                    <Text style={{ color: "green", fontWeight: "bold", marginRight: 11 }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={showAll ? wasteCategories : wasteCategories.slice(0, 4)}
                numColumns={4}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ alignItems: "center", margin: 10 }}>
                        <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <Image source={item.icon} style={{ width: 40, height: 40 }} />
                        </View>
                        <Text style={{ marginTop: 5, fontWeight: "bold" }}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}
