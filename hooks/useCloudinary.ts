import { Alert } from "react-native";
import cloudinaryConfig from "../constants/cloudinaryConfig"

const handleUpData = async (photoUri: string) => {
    const data = new FormData();
    data.append("file", {
        uri: photoUri,
        type: "image/jpeg",
        name: "upload.jpg",
    } as any);
    data.append("upload_preset", cloudinaryConfig.uploadPreset);
    data.append("cloud_name", cloudinaryConfig.cloudName);

    try {
        console.log("Uploading image to Cloudinary...");

        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`, {
            method: "POST",
            body: data,
            headers: {
                "Accept": "application/json",
            },
        });

        const result = await response.json();

        if (response.ok && result.secure_url) {
            console.log("Upload success, public url:", result.secure_url);
            return result.secure_url;
        } else {
            console.error("Upload failed:", result);
            Alert.alert("Upload Error", result.error?.message || "Failed to upload image.");
            return null;
        }
    } catch (error: any) {
        console.error("Upload error:", error);
        Alert.alert("Upload Error", "Something went wrong. Please try again.");
        return null;
    }
};

export default handleUpData;
