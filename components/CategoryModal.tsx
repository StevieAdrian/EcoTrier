import React from "react";
import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CategoryModalProps {
    visible: boolean;
    category: any;
    onClose: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ visible, category, onClose }) => {
    return (
        <Modal visible={visible} animationType="fade" transparent>
            <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "85%", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 20, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{category?.name}</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={26} color="black" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{ maxHeight: 350 }}>
                        {category?.description.split("\n").map((line: string, index: number) => (
                            <Text key={index} style={{ fontSize: 16, lineHeight: 24, marginBottom: 8, textAlign: "justify" }}>
                                {line}
                            </Text>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default CategoryModal;
