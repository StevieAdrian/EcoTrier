import { View, Image } from "react-native";

export default function AdsCard() {
    return(
        <View style={{ width: "90%", height: 180, alignSelf: "center", marginTop: 15, borderRadius: 12, overflow: "hidden" }}>
            <Image source={require("@/assets/images/ads.png")} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
        </View>
    )
}