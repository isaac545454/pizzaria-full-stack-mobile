import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { stackPromiseList } from "../../Routes/app.routes";
import { api } from "../../services";

type Props = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type RouteProps = RouteProp<Props, "FinishOrder">;

export default function FinishOrder() {
  const route = useRoute<RouteProps>();
  const navigation =
    useNavigation<NativeStackNavigationProp<stackPromiseList>>();

  const handleFinish = async () => {
    try {
      await api.patch("order/send", {
        order_id: route.params.order_id,
      });
      navigation.popToTop();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
      <Text style={styles.Title}>Mesa {route.params.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
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
