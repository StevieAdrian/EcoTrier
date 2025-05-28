import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View, Text, Image, Alert } from "react-native";
import React from "react";
import WasteCategory from "@/components/WasteCategory";
import BalanceCard from "@/components/BalanceCard";
import { ScrollView } from "react-native-gesture-handler";
import BottomNav from "@/components/BottomNav";
import AdsCard from "@/components/AdsCard";
import Cards from "@/components/Cards";
import ActionButton from "@/components/ActionButton";
import * as Location from 'expo-location';

export default function HomePage({ navigation }: { navigation: any }) {
    const [userLocation, setUserLocation] = useState<any>(null);
    const [recycleStations, setRecycleStations] = useState<any[]>([]);

    const handleNearbyStation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
        }
        const location = await Location.getCurrentPositionAsync({});
        const userLoc = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        };
        setUserLocation(userLoc);
        
        const stations = [
            {
                id: 1,
                name: 'Bank Sampah Induk',
                latitude: location.coords.latitude + 0.001,
                longitude: location.coords.longitude + 0.001,
            },
            {
                id: 2,
                name: 'TPS 3R',
                latitude: location.coords.latitude - 0.0015,
                longitude: location.coords.longitude - 0.0012,
            }
        ];
        setRecycleStations(stations);
        navigation.navigate('NearbyStationMap', { userLocation: userLoc, recycleStations: stations });
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#F0F0F0", alignItems: "center" }}> 
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", paddingBottom: 100 }} showsVerticalScrollIndicator={false}>             
                <Cards />
                <WasteCategory navigation={navigation} />
                <ActionButton onPress={handleNearbyStation}>Nearby Station</ActionButton>
            </ScrollView>

            <BottomNav navigation={navigation} />                      
        </View>
    );
}