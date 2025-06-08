import ActionButton from "@/components/ActionButton";
import BottomNav from "@/components/BottomNav";
import Cards from "@/components/Cards";
import ResultScreen from "@/components/ResultScreen";
import { NavigationProp } from "@/constants/types";
import useCamera from "@/hooks/useCamera";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type prop = {
    navigation: NavigationProp;
}

export default function ScanPage({ navigation }: prop) {
    const { image, response, loading, error, openCameraScreen, pickImage } = useCamera(navigation);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (response) {
            setModal(true);
        }
    }, [response]);

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", paddingBottom: 100 }} showsVerticalScrollIndicator={false}>             
                <Cards />
                
                <TouchableOpacity onPress={openCameraScreen} style={{ width: "100%", marginTop: 15 }}>
                    <ActionButton>Scan Now</ActionButton>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                    <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
                    <Text style={{ marginHorizontal: 10, fontSize: 18 }}>Or</Text>
                    <View style={{ flex: 0.4, height: 1, backgroundColor: "black" }} />
                </View>
                <TouchableOpacity onPress={pickImage} style={{ width: "100%" }}>
                    <ActionButton>Choose From Gallery</ActionButton>
                </TouchableOpacity>
            </ScrollView>

            {image && (
                <ResultScreen visible={modal} onClose={() => setModal(false)} onNavigate={() => {setModal(false); setTimeout(() => { navigation.navigate("AllCategories"); }, 300); }} image={image} loading={loading} response={response} error={error}/>
            )} 
            
            <BottomNav navigation={navigation} />
        </>
    )
}