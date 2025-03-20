import * as ImagePicker from "expo-image-picker";
import handleUpData from "@/hooks/useCloudinary";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import useOpenAI from "./useOpenAI";
import { auth, firestore } from "@/constants/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigation } from "expo-router";
import { NavigationProp, RootStackParamList } from "@/constants/types";


export default function useCamera(navigation: NavigationProp) {
    const [image, setImage] = useState<string | null>(null);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const { requestToOpenAI, response, loading, error } = useOpenAI();

    const parseResult = (response: string) => {
        const result: Record<string, string> = {};
        const lines = response.split("\n").map(line => line.trim()).filter(line => line.length > 0);

        for (const line of lines){
            const [key, ...valueParts] = line.split(":");
            
            if (key && valueParts.length > 0) {
                result[key.trim()] = valueParts.join(":").trim();
            }
        }

        return {
            kategoriSampah: result["Kategori Sampah"] || "",
            berbahaya: result["Berbahaya"] || "",
            sumberSampah: result["Sumber Sampah"] || "",
            waktuTerurai: result["Waktu Terurai"] || "",
            jenisBahan: result["Jenis Bahan"] || "",
            dampakLingkungan: result["Dampak Lingkungan"] || "",
            daurUlang: result["Daur ulang"] || "",
            solusiPengelolaan: result["Solusi pengelolaan"] || "",
        }
    }

    const saveFirestore = async (scanData: Record<string, string>, imageUrl: string) => {
        if (!auth.currentUser) {
            return;
        }

        const uid = auth.currentUser.uid;
        const allData = {
            uid,
            imageUrl,
            createdAt: serverTimestamp(),
            ...scanData,
        };

        try {
            await addDoc(collection(firestore, "scanhistory"), allData);
            console.log("masuk db");
        } catch (err){
            console.error(err);
        }
    }

    useEffect(() => {
        if (response && uploadedUrl) {
            const parsedData = parseResult(response);
            saveFirestore(parsedData, uploadedUrl);
        }
    }, [response, uploadedUrl]);

    const handlePhotoTaken = async (photoUri: string) => {
        console.log("camera screen uri : ", photoUri);
        setImage(photoUri);
    
        console.log("Mengupload gambar...");
        const uploadedImageUrl = await handleUpData(photoUri);
    
        if (uploadedImageUrl) {
            setUploadedUrl(uploadedImageUrl);
            Alert.alert("Upload Success", "Image uploaded successfully!");
            await requestToOpenAI(uploadedImageUrl);
        } else {
            console.log("Upload gagal.");
        }
    };    

    const openCameraScreen = async () => {
        navigation.navigate("CameraScreen", { onPhotoTaken: handlePhotoTaken });
    };

    return { image, response, loading, error, openCameraScreen };
}