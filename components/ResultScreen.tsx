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
            <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.6)", justifyContent: "flex-end" }}>
                <Animated.View style={{ transform: [{ translateY: slideAnim }], opacity: fadeAnim, backgroundColor: "#E2EEF1", padding: 20, borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 8, width: "100%", shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.3, shadowRadius: 8, }}>
                    <TouchableOpacity onPress={onClose} style={{ position: "absolute", top: 15, right: 20 }}>
                        <Ionicons name="close" size={30} color="black" />
                    </TouchableOpacity>

                    {image && (
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={{ uri: image }} style={{ width: 250, height: 300, borderRadius: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 }} />
                        </View>
                    )}

                    <View style={{ marginTop: 20, padding: 15, borderRadius: 15, backgroundColor: "white", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5, }}>
                        {loading && <Text style={{ fontSize: 18, fontWeight: "bold", color: "#555" }}>Processing Image...</Text>}

                        {response && (
                            <View style={{ padding: 15, borderRadius: 10, backgroundColor: "#FFFFFF", borderLeftWidth: 5, borderLeftColor: "#4CAF50", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, }} >
                                {response.split("\n").map((line: string, index: number) => (
                                    <Text key={index} style={{ fontSize: 16, fontWeight: "600", color: "#333", marginBottom: 3, }} >
                                        {line}
                                    </Text>
                                ))}
                            </View>
                        )}
                    </View>

                    {error && <Text style={{ color: "red", marginTop: 15, textAlign: "center", fontWeight: "bold" }}>{error}</Text>}
                </Animated.View>
            </View>
        </Modal>
    );
}
