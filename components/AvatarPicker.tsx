import { useEffect, useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from "@expo/vector-icons";
import handleUpData from "@/hooks/useCloudinary";

interface AvatarPickerProps {
    imageUrl?: string;
    onChangeImage: (url: string) => void;
}

export default function AvatarPicker({ onChangeImage, imageUrl }: AvatarPickerProps) {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if (imageUrl) {
            setImage(imageUrl);
        }
    }, [imageUrl]);

    const pickPhoto = async (type: "camera" | "gallery") => {
        let result: ImagePicker.ImagePickerResult;

        if (type === "camera") {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1,
            });
        } else {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1,
            });
        }

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImage(uri);
        
            const url = await handleUpData(uri);
            if (url) {
                setImage(url);
                onChangeImage(url);
            }
        }
    };

    const choosePhoto = () => {
        Alert.alert("Change Profile Picture", "Choose Photo", [
            { text: "Take a photo", onPress: () => pickPhoto("camera") },
            { text: "Choose from gallery", onPress: () => pickPhoto("gallery") },
            { text: "Cancel", style: "cancel" }
        ]);
    };

    return (
        <View style={styles.container}>
            <Image
                source={image ? { uri: image } : require('@/assets/images/organic.png')}
                style={styles.avatar}
            />
            <TouchableOpacity style={styles.cameraButton} onPress={choosePhoto}>
                <Ionicons name="camera" size={18} color="white" />
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
        bottom: 5,
        right: 5,
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
