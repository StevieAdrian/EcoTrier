import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    label: string;
}

export default function TextInputField({ label, ...props }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
});
