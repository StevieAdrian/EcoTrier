import { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() {
const [image, setImage] = useState<string | null>(null);

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
        setImage(result.assets[0].uri);
    }
};

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Take a Photo" onPress={takePhoto} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
        </View>
    );
}
