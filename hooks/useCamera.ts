import * as ImagePicker from "expo-image-picker";
import handleUpData from "@/hooks/useCloudinary";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import useOpenAI from "./useOpenAI";
import { auth, firestore } from "@/constants/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function useCamera() {
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