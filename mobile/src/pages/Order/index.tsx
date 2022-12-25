import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";

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
      <Text>index {route.params.number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
