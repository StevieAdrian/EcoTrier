import { ReactNode } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface actionProp {
    children: ReactNode;
    onPress?: () => void;
    disabled?: boolean;
}

export default function ActionButton({ children, onPress, disabled = false }: actionProp) {
    
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={{ backgroundColor: "black", borderRadius: 22, padding: 20, width: "90%", alignSelf: "center", marginTop: 12 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 800, textAlign: "center", letterSpacing: 3}}>{children}</Text>
        </TouchableOpacity>
    )
}