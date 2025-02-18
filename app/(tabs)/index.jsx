import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Card = ({ text }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const FoodMarker = ({ title, description, coordinate }) => {
  return (
    <View
      style={[
        styles.foodMarker,
        { top: coordinate.top, left: coordinate.left },
      ]}
    >
      <Text style={styles.foodMarkerTitle}>{title}</Text>
      <Text style={styles.foodMarkerText}>{description}</Text>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#D32F2F" />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#EFE7F7" }}>
      <Card text="Bagi Makan" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -7.742612,
          longitude: 110.390492,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: -7.742612, longitude: 110.390492 }}
          title="Lokasi Anda"
          description="Ini adalah lokasi Anda saat ini"
        />
      </MapView>

      <FoodMarker
        title="Snack Event"
        description="Arem-arem, Lumpia, dll"
        coordinate={{ top: 200, left: 50 }}
      />
      <FoodMarker
        title="Dibutuhkan Makanan"
        description="Panti Asuhan Mutiara"
        coordinate={{ top: 300, left: 220 }}
      />
      <FoodMarker
        title="Bagi Makan #4"
        description="Nasi Ayam Goreng + Es Teh"
        coordinate={{ top: 400, left: 120 }}
      />

      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Tambahkan Aksi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F8F9FA",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
    maxWidth: width * 0.9,
    minWidth: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: "#D32F2F",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  map: {
    width: "100%",
    height: height,
  },
  foodMarker: {
    position: "absolute",
    backgroundColor: "#FFA726",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  foodMarkerTitle: {
    fontWeight: "bold",
    color: "white",
  },
  foodMarkerText: {
    color: "white",
  },
  addButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    flexDirection: "row",
    backgroundColor: "#D32F2F",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
