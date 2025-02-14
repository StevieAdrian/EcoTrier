import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import useCamera from "@/hooks/useCamera";
import ResultScreen from "@/components/ResultScreen";
import WasteCategory from "@/components/WasteCategory";

export default function HomePage({ navigation }: { navigation: any }) {
    const { takePhoto, image, response, loading, error } = useCamera();
    const [modal, setModal] = useState(false);

    const handleTakePhoto = async () => {
        await takePhoto();
        setModal(true);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#D2DBDE", justifyContent: "center", alignItems: "center" }}>  
            <WasteCategory navigation={navigation} />
            
            <View style={{ position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "#BCC3C3", alignItems: "center", padding: 15 }}>             
                <Ionicons name="home" size={30} color="black" />
                <Ionicons name="person" size={30} color="black" />
            </View>

            <TouchableOpacity onPress={handleTakePhoto} style={{ position: "absolute", bottom: 25, left: "50%", transform: [{ translateX: -30 }], backgroundColor: "white", padding: 15, borderRadius: 50, elevation: 5 }} >
                <Ionicons name="scan" size={30} color="black" />
            </TouchableOpacity>
            
            {image && (
                <ResultScreen visible={modal} onClose={() => setModal(false)} image={image} loading={loading} response={response} error={error} />
            )}
            
        </View>
    );
}