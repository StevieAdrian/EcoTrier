import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, Alert } from "react-native";
import React from "react";
import WasteCategory from "@/components/WasteCategory";
import BalanceCard from "@/components/BalanceCard";
import { ScrollView } from "react-native-gesture-handler";
import BottomNav from "@/components/BottomNav";
import Cards from "@/components/Cards";
import ActionButton from "@/components/ActionButton";
import useLocation from "@/hooks/useLocation";
import { NavigationProp, RootStackParamList } from "@/constants/types";

type HomePageProps = {
    navigation: NavigationProp;
};

export default function HomePage({ navigation }: HomePageProps) {
    const { handleNearbyStation, loading } = useLocation();

    const onNearbyStationPress = async () => {
        const result = await handleNearbyStation();
        if (result) {
            navigation.navigate('NearbyStationMap', result);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#F0F0F0", alignItems: "center" }}> 
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", paddingBottom: 100 }} showsVerticalScrollIndicator={false}>             
                <Cards />
                <WasteCategory navigation={navigation} />
                <ActionButton onPress={onNearbyStationPress} disabled={loading}>
                    {loading ? 'Loading...' : 'Nearby Station'}
                </ActionButton>
            </ScrollView>

            <BottomNav navigation={navigation} />                      
        </View>
    );
}