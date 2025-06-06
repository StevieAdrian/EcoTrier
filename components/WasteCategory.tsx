import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/constants/types";
import { WasteCategories } from "../data/wasteCategory";

type WasteCategoryProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function WasteCategory({ navigation }: WasteCategoryProps) {
    const [showAll, setShowAll] = useState(false);

    return (
        <View style={{ width: "100%", padding: 20}}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Waste Category</Text>
                <TouchableOpacity onPress={() => navigation.navigate("AllCategories")}>
                    <Text style={{ color: "black", fontWeight: "bold", marginRight: 11 }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={showAll ? WasteCategories : WasteCategories.slice(0, 4)}
                numColumns={4}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
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
