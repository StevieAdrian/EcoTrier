import { useState } from "react";
import { View, Image, Text, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useCamera from "@/hooks/useCamera";
import React from "react";

export default function CameraScreen({ visible, onClose, image, loading, response, error }: any) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, backgroundColor: "#D2DBDE", justifyContent: "center", alignItems: "center", padding: 20 }}>
        <TouchableOpacity onPress={onClose} style={{ position: "absolute", top: 40, right: 20 }}>
          <Ionicons name="close" size={30} color="black" />
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }} />}
        {loading && <Text>Processing Image...</Text>}
        {response && (
          <View style={{ backgroundColor: "white", padding: 15, borderRadius: 10, marginTop: 10 }}>
            <Text>{response}</Text>
          </View>
        )}
        {error && <Text style={{ color: "red" }}>{error}</Text>}
      </View>
    </Modal>
  );
}
