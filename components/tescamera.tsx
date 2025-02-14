// import React, { useState, useRef, useEffect } from "react";
// import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
// import { Camera } from "expo-camera"; 
// import { Ionicons } from "@expo/vector-icons";
// import useCamera from "../hooks/useCamera";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// const ExpoCamera = Camera;

// type CameraScreenProps = NativeStackScreenProps<any, "CameraScreen">;

// export default function TesCamera({ navigation }: CameraScreenProps) {
//     const cameraRef = useRef(null);
//     const { takePhoto, image, response, loading, error } = useCamera();
//     const [hasPermission, setHasPermission] = useState<boolean | null>(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting camera permission...</Text>
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text>No access to camera</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {!image ? (
//         <>
//           <Camera ref={cameraRef} style={styles.camera} type={Camera.Constants.Type.back} />

//           <View style={styles.overlay}>
//             <View style={styles.cornerTopLeft} />
//             <View style={styles.cornerTopRight} />
//             <View style={styles.cornerBottomLeft} />
//             <View style={styles.cornerBottomRight} />
//           </View>

//           <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={30} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.captureButton}
//             onPress={async () => {
//               if (cameraRef.current) {
//                 await takePhoto();
//               }
//             }}
//           >
//             <Ionicons name="scan" size={40} color="black" />
//           </TouchableOpacity>
//         </>
//       ) : (

//         <View style={styles.resultContainer}>
//           <Image source={{ uri: image }} style={styles.previewImage} />
//           <View style={styles.resultBox}>
//             <Image source={{ uri: "https://via.placeholder.com/30" }} style={styles.resultIcon} />
//             <Text style={styles.resultText}>{response || "Processing..."}</Text>
//           </View>
//           <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={30} color="white" />
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },
//   camera: {
//     flex: 1,
//   },
//   overlay: {
//     position: "absolute",
//     top: "30%",
//     left: "10%",
//     width: "80%",
//     height: "40%",
//     borderWidth: 2,
//     borderColor: "rgba(255,255,255,0.5)",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cornerTopLeft: {
//     position: "absolute",
//     top: -10,
//     left: -10,
//     width: 30,
//     height: 30,
//     borderLeftWidth: 3,
//     borderTopWidth: 3,
//     borderColor: "white",
//   },
//   cornerTopRight: {
//     position: "absolute",
//     top: -10,
//     right: -10,
//     width: 30,
//     height: 30,
//     borderRightWidth: 3,
//     borderTopWidth: 3,
//     borderColor: "white",
//   },
//   cornerBottomLeft: {
//     position: "absolute",
//     bottom: -10,
//     left: -10,
//     width: 30,
//     height: 30,
//     borderLeftWidth: 3,
//     borderBottomWidth: 3,
//     borderColor: "white",
//   },
//   cornerBottomRight: {
//     position: "absolute",
//     bottom: -10,
//     right: -10,
//     width: 30,
//     height: 30,
//     borderRightWidth: 3,
//     borderBottomWidth: 3,
//     borderColor: "white",
//   },
//   backButton: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     padding: 10,
//     borderRadius: 20,
//   },
//   captureButton: {
//     position: "absolute",
//     bottom: 50,
//     alignSelf: "center",
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 50,
//     elevation: 5,
//   },
//   resultContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//   },
//   previewImage: {
//     width: "80%",
//     height: "50%",
//     borderRadius: 10,
//   },
//   resultBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "white",
//     padding: 10,
//     borderRadius: 20,
//     marginTop: 20,
//     elevation: 5,
//   },
//   resultIcon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   resultText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   closeButton: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     padding: 10,
//     borderRadius: 20,
//   },
// });
