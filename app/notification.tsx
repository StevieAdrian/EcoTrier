import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { NavigationProp } from "@/constants/types";
import useUserData from "@/hooks/useUserData";
import BottomNav from "@/components/BottomNav";
type Prop = {
    navigation: NavigationProp;
};

type NotificationItem = {
    id: string;
    message: string;
    date: string;
};

const mockNotifications: NotificationItem[] = [
{
    id: "1",
    message: "Sampah plastik berhasil dikenali ✅",
    date: "09 Juni 2025",
},
{
    id: "2",
    message: "Kamu mendapatkan 10 poin dari unggahan hari ini 🎉",
    date: "08 Juni 2025",
},
{
    id: "3",
    message: "Tips: Pisahkan sampah basah & kering ya! ♻️",
    date: "08 Juni 2025",
},
];

export default function Notification({ navigation }: Prop) {
const { userData } = useUserData();
const name = userData?.name || "Pengguna";

const renderItem = ({ item }: { item: NotificationItem }) => (
    <View style={styles.notificationItem}>
    <Text style={styles.message}>{item.message}</Text>
    <Text style={styles.date}>{item.date}</Text>
    </View>
);

return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
        <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
            <Text style={styles.header}>Halo {name}, ini pesan untukmu 📬</Text>
            <FlatList
                data={mockNotifications}
                keyExtractor={(item: { id: any; }) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
        </View>
            <BottomNav navigation={navigation}/>
    </View>

    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
},
header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
},
notificationItem: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
},
message: {
    fontSize: 16,
    color: "#333",
},
date: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
},
});