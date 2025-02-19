import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import useCamera from "@/hooks/useCamera";
import ResultScreen from "@/components/ResultScreen";
import WasteCategory from "@/components/WasteCategory";
import BalanceCard from "@/components/Balance";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ScrollView } from "react-native-gesture-handler";

export default function HomePage({ navigation }: { navigation: any }) {
    const { takePhoto, image, response, loading, error } = useCamera();
    const [modal, setModal] = useState(false);

    const handleTakePhoto = async () => {
        await takePhoto();
        setModal(true);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}> 
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", paddingBottom: 100 }} showsVerticalScrollIndicator={false}>             
                <BalanceCard />
                <View style={{ width: "90%", height: 180, alignSelf: "center", marginTop: 15, borderRadius: 12, overflow: "hidden" }}>
                    <Image source={require("@/assets/images/ads.png")} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                </View>
                <WasteCategory navigation={navigation} />
                <View style={{ backgroundColor: "black", borderRadius: 22, padding: 20, width: "90%", alignSelf: "center", marginTop: 12 }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: 800, textAlign: "center", letterSpacing: 3}}>Nearby Station</Text>
                </View>
            </ScrollView>
            
            
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