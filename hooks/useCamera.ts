import * as ImagePicker from "expo-image-picker";
import handleUpData from "@/hooks/useCloudinary";
import { Alert } from "react-native";
import { useState } from "react";
import useOpenAI from "./useOpenAI";

export default function useCamera() {
    const [image, setImage] = useState<string | null>(null);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const { requestToOpenAI, response, loading, error } = useOpenAI();
    
    const takePhoto = async () => {
        console.log("Minta izin kamera...");
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permission Denied", "You need to enable camera permissions.");
            return;
        }

        console.log("Membuka kamera...");
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const fileUri = result.assets[0].uri;
            console.log("Foto diambil:", fileUri);
            setImage(fileUri);
            console.log("Mengupload gambar...");
            const uploadedImageUrl = await handleUpData(fileUri);

            if (uploadedImageUrl) {
                setUploadedUrl(uploadedImageUrl);
                Alert.alert("Upload Success", "Image uploaded successfully!");
                await requestToOpenAI(uploadedImageUrl);
            } else {
                console.log("Upload gagal.");
            }
        } else {
            console.log("Pengambilan foto dibatalkan.");
        }
    };

    return { takePhoto, image, response, loading, error };
}