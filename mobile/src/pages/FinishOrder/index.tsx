import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function FinishOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
      <Text style={styles.Title}>Mesa 40</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.TextButton}>Finalizar pedido</Text>
        <Feather size={20} color="#1d1d2e" name="shopping-cart" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    paddingHorizontal: "4%",
    paddingVertical: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 12,
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#3fffa3",
    flexDirection: "row",
    width: "65%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  TextButton: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1d1d2e",
  },
});
