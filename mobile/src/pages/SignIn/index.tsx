import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#f0f0f0"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          placeholderTextColor="#f0f0f0"
        />

        <TouchableOpacity style={styles.AreaBtn}>
          <Text style={styles.textBtn}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1d2e",
  },
  logo: {
    marginBottom: 18,
  },
  InputContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input: {
    width: "95%",
    height: 40,
    backgroundColor: "#101026",
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#fff",
  },
  AreaBtn: {
    width: "95%",
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#101026",
  },
});
