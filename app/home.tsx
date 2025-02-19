import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import WasteCategory from "@/components/WasteCategory";
import BalanceCard from "@/components/BalanceCard";
import { ScrollView } from "react-native-gesture-handler";
import BottomNav from "@/components/BottomNav";
import AdsCard from "@/components/AdsCard";
import Cards from "@/components/Cards";
import ActionButton from "@/components/ActionButton";

export default function HomePage({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#F0F0F0", alignItems: "center" }}> 
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", paddingBottom: 100 }} showsVerticalScrollIndicator={false}>             
                <Cards />
                <WasteCategory navigation={navigation} />
                <ActionButton>Nearby Station</ActionButton>
            </ScrollView>

            <BottomNav navigation={navigation} />                      
        </View>
    );
}