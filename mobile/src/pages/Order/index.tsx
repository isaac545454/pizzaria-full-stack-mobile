import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

type Props = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

type OrderRuteProps = RouteProp<Props, "Order">;

export default function Order() {
  const route = useRoute<OrderRuteProps>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        <TouchableOpacity>
          <Feather name="trash-2" size={29} color="#ff3f4b" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.select}>
        <Text style={{ color: "#fff" }}>Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.select}>
        <Text style={{ color: "#fff" }}>Pizza</Text>
      </TouchableOpacity>
      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          placeholder="1"
          placeholderTextColor="#f0f0f0"
          keyboardType="numeric"
          style={[styles.select, { width: "60%", textAlign: "center" }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    paddingVertical: "5%",
    paddingHorizontal: "4%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 14,
  },
  select: {
    backgroundColor: "#101026",
    borderRadius: 4,
    width: "100%",
    height: 40,
    marginBottom: 12,
    justifyContent: "center",
    paddingHorizontal: 8,
    color: "#FFFFFF",
    fontSize: 20,
  },
  qtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtdText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
