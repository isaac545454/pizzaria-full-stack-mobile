import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

interface Props {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: number | string;
  };
  deleteItem: (item_id: string) => void;
}

export default function ListItem({ data, deleteItem }: Props) {
  const handleDelete = (id: string) => {
    deleteItem(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        {data.amount} - {data.name}
      </Text>
      <TouchableOpacity onPress={() => handleDelete(data.id)}>
        <Feather name="trash-2" color="#ff3f4b" size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101026",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 0.4,
    paddingHorizontal: 12,
    borderColor: "#8A8A8A",
  },
  item: {
    color: "#fff",
  },
});
