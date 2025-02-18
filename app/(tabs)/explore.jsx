import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const foodData = [
  { id: "1", title: "MAKAN SEPUASNYA", description: "Nasi Balap + Gudeg" },
  { id: "2", title: "Foodgiving #4", description: "Nasi Ayam Goreng + Es Teh" },
  { id: "3", title: "Peduli Sesama", description: "Salad Buah" },
  { id: "4", title: "Bungkus Berkah", description: "Nasi Bungkus Wagyu" },
];

const FoodListScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.icon}></View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 100,
    paddingHorizontal: 15,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "#ffab00", // Icon color
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});

export default FoodListScreen;
