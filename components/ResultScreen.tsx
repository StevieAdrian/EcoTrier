import { View, Image, Text, Modal, TouchableOpacity, Animated, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";

export default function ResultScreen({ visible, onClose, image, loading, response, error }: any) {
    const slideAnim = useRef(new Animated.Value(300)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current; 

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 300,
                    duration: 200,
                    easing: Easing.in(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible]);

    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <View style={{ flex: 1, backgroundColor: "", justifyContent: "flex-end", alignItems: "center" }}>
                <Animated.View style={{ transform: [{ translateY: slideAnim }], opacity: fadeAnim, backgroundColor: "black", padding: 20, borderRadius: 15, elevation: 8, width: "90%" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", textAlign: "center", marginBottom: 10 }}>
                        Information of the item
                    </Text>

                    <TouchableOpacity onPress={onClose} style={{ position: "absolute", top: 15, right: 15 }}>
                        <Ionicons name="close" size={24} color="white" />
                    </TouchableOpacity>

                    <View style={{ marginVertical: 10 }}>
                        {response && response.split("\n").map((line: string, index: number) => {
                            const [key, value] = line.split(":");
                            return (
                                <View key={index} style={{ flexDirection: "row", marginBottom: 4 }}>
                                    <Text style={{ fontSize: 16, fontWeight: "700", color: "white", flex: 1 }}>{key?.trim()} :</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "400", color: "white", flex: 1 }}>{value?.trim()}</Text>
                                </View>
                            );
                        })}
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center", gap: 20, marginBottom: 15 }}>
                        <View style={{ width: 80, height: 80, backgroundColor: "white", borderRadius: 10, opacity: 0.5 }} />
                        <View style={{ width: 80, height: 80, backgroundColor: "white", borderRadius: 10, opacity: 0.5 }} />
                    </View>

                    <Text style={{ textAlign: "center", color: "white", marginBottom: 10, fontWeight: "700" }}>Want to know more about plastic waste?</Text>

                    <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 16, alignItems: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "800", color: "black" }}>Click Here</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
}
