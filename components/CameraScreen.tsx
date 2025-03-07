import { Camera, CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp } from '@/constants/types';
import { useRoute } from "@react-navigation/native";

type prop = {
    navigation: NavigationProp;
}

export default function CameraScreen({ navigation }: prop) {
    const route = useRoute();
    const { onPhotoTaken } = route.params as { onPhotoTaken: (photoUri: string) => void };    
    const [facing, setFacing] = useState<'back' | 'front'>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const cameraRef = useRef<CameraView | null>(null);
    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need camera permissions</Text>
            <TouchableOpacity onPress={requestPermission} style={styles.button}>
            <Text style={styles.text}>Grant Permission</Text>
            </TouchableOpacity>
        </View>
        );
    }

    const takePicture = async () => {
        if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo && photo.uri) {
            setPhotoUri(photo.uri);
            onPhotoTaken(photo.uri);
            // navigation.goBack();
        } else {
            console.error('Failed to capture image');
        }
        }
    };

    return (
        <View style={styles.container}>
        {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.camera} />
        ) : (
            <CameraView ref={cameraRef} style={styles.camera} facing={facing}>  
            <View style={styles.scannerFrameContainer}>
                <View style={styles.scannerFrame}>
                <View style={styles.cornerTopLeft} />
                <View style={styles.cornerTopRight} />
                <View style={styles.cornerBottomLeft} />
                <View style={styles.cornerBottomRight} />
                </View>
            </View>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <Text style={styles.captureText}>Start Recognition</Text>
            </TouchableOpacity>
            </CameraView>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    scannerFrameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scannerFrame: {
        width: '80%',
        height: '50%',
        position: 'absolute',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cornerTopLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        borderTopWidth: 4,
        borderLeftWidth: 4,
        borderColor: 'white',
    },
    cornerTopRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        borderTopWidth: 4,
        borderRightWidth: 4,
        borderColor: 'white',
    },
    cornerBottomLeft: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 50,
        height: 50,
        borderBottomWidth: 4,
        borderLeftWidth: 4,
        borderColor: 'white',
    },
    cornerBottomRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: 'white',
    },
    captureButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    captureText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    text: {
        color: 'white',
    },
});
