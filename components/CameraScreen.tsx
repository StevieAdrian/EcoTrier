import { useState } from 'react';
import { View, Button, Image, Alert, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import useOpenAI from '@/hooks/useOpenAI';

export default function CameraScreen() {
    const [image, setImage] = useState<string | null>(null);
    const { requestToOpenAI, response, loading, error } = useOpenAI();

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'You need to enable camera permissions.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const photoUri = result.assets[0].uri;
            setImage(photoUri);
            requestToOpenAI(photoUri); 
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title={loading ? "Processing..." : "Take a Photo"} onPress={takePhoto} disabled={loading} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
            {response && <Text style={{ marginTop: 10 }}>Result: {response}</Text>}
            {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
        </View>
    );
}
