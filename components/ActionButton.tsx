import { ReactNode } from "react";
import { View, Text } from "react-native";

interface actionProp {
    children: ReactNode;
}

export default function ActionButton(props: actionProp) {
    const { children } = props;
    
    return (
        <View style={{ backgroundColor: "black", borderRadius: 22, padding: 20, width: "90%", alignSelf: "center", marginTop: 12 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 800, textAlign: "center", letterSpacing: 3}}>{children}</Text>
        </View>
    )
}