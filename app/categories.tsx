import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { NavigationProp } from "../constants/types";
import { Ionicons } from "@expo/vector-icons";
import { WasteCategories } from "../data/wasteCategory";
import useCategoryModal from "../hooks/useCategoryModal";
import CategoryModal from "../components/CategoryModal";

type prop = {
    navigation: NavigationProp;
};

export default function AllCategories({ navigation }: prop) {
    const { selectedCategory, modal, openModal, closeModal } = useCategoryModal();

    return (
        <View style={{ flex: 1, backgroundColor: "#D2DBDE", padding: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Waste Category</Text>
            </View>

            <FlatList
                data={WasteCategories}
                numColumns={4}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: "center" }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => openModal(item)} style={{ alignItems: "center", margin: 10 }}>
                        <View style={{ width: 65, height: 65, borderRadius: 50, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <Image source={item.icon} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={{ marginTop: 5, fontWeight: "bold" }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            <CategoryModal visible={modal} category={selectedCategory} onClose={closeModal} />
        </View>
    );
}
