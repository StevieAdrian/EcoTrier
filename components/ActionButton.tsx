import { ReactNode } from "react";
import { TouchableOpacity, Text } from "react-native";

interface actionProp {
    children: ReactNode;
    onPress?: () => void;
}

export default function ActionButton(props: actionProp) {
    const { children, onPress } = props;
    
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: "black", borderRadius: 22, padding: 20, width: "90%", alignSelf: "center", marginTop: 12 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "800", textAlign: "center", letterSpacing: 3}}>{children}</Text>
        </TouchableOpacity>
    )
}