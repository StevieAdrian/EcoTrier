import { useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from "@expo/vector-icons";

export default function AvatarPicker() {
    const [image, setImage] = useState<string | null>(null);

    const pickPhoto = async (type: "camera" | "gallery") => {
        let result: ImagePicker.ImagePickerResult;

        if (type === "camera") {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1,
            })
        } else {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1,
            })
        }

        if (!result.canceled){
            setImage(result.assets[0].uri)
        }
    }
    const choosePhoto = async () => {
        const options = ["Take a photo", "Choose from gallery", "Back"];
        const cancelButton = 2;

        Alert.alert("Change Profile Picture", "Choose Photo", [
            {
                text: "Take a photo",
                onPress: () => pickPhoto("camera"),
            },
            {
                text: "Choose from gallery",
                onPress: () => pickPhoto("gallery"),
            },
            {
                text: "Back",
                style: "cancel",
            }
        ])
    }

    return (
        <View style={styles.container}>
            {/* <Image
                source={image ? { uri: image } : require('@/assets/default-avatar.png')}
                style={styles.avatar}
            /> */}
            <TouchableOpacity style={styles.cameraButton} onPress={choosePhoto}>
                <Ionicons name="camera" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignSelf: 'center',
        width: 120,
        height: 120,
        marginVertical: 16,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#E0E0E0',
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#4F46E5',
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    }
});