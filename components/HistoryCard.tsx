import ScanHistory from "@/app/scanHistory";
import { ScanHistoryProp } from "@/constants/types";
import { View, Text, Image } from "react-native";

export default function HistoryCard({ item }: { item: ScanHistoryProp}){
    return (
        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
            <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{item.sumberSampah}</Text>
                <Text>{item.kategoriSampah}</Text>
                <Text>{item.createdAt.toLocaleString()}</Text>
            </View>
        </View>
    )
}