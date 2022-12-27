import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { useNavigation } from "@react-navigation/native";
import { stackPromiseList } from "../../Routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { api } from "../../services/index";

interface ReqTable {
  created_at: string;
  draft: boolean;
  id: string;
  name: string | null;
  status: boolean;
  table: number;
  updated_at: string;
}

export default function Deshboard() {
  const [newTable, setNewTable] = useState<string>("");
  const { signOut } = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<stackPromiseList>>();

  const OpenOrder = async () => {
    if (newTable === "") return;

    const { data } = await api.post<ReqTable>("/order", {
      table: Number(newTable),
    });

    console.log(data.id);

    navigation.navigate("Order", {
      number: data.table,
      order_id: data.id,
    });
    setNewTable("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput
        placeholder="Numero da mesa"
        placeholderTextColor="#f0f0f0"
        style={styles.input}
        keyboardType="numeric"
        value={newTable}
        onChangeText={(text) => setNewTable(text)}
      />
      <TouchableOpacity style={styles.button} onPress={OpenOrder}>
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
