import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export default function Deshboard() {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput
        placeholder="Numero da mesa"
        placeholderTextColor="#f0f0f0"
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Abrir Mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1d2e",
    paddingVertical: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#101026",
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 22,
    color: "#FFF",
    borderRadius: 4,
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#2fffa3",
    marginVertical: 12,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#101026",
  },
});
