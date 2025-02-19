import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BalanceCard() {
    return (
        <View style={{ backgroundColor: "black", borderRadius: 12, padding: 20, width: "90%", alignSelf: "center", marginTop: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("@/assets/images/indonesia.png")} style={{ width: 22, height: 14, marginRight: 5 }} />
                    <Text style={{ color: "white", fontSize: 16 }}>Rupiah ▼</Text>
                </View>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>BCA</Text>
            </View>

            <Text style={{ color: "white", marginTop: 10 }}>Total balance</Text>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Rp 420.888.25</Text>

            <Text style={{ color: "white", fontSize: 12, marginTop: 5 }}>Stevie Adrian • 18/02/2025</Text>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <Ionicons name="arrow-down-circle-outline" size={24} color="white" />
                <Text style={{ color: "white", marginLeft: 5 }}>Withdraw</Text>
            </View>
        </View>
        
    );
}
