import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";

interface Props {
  handleCloseModal: () => void;
  options: Array<Opitions> | [];
  selectedItem: (item: Opitions) => void;
}

type Opitions = {
  id: string;
  name: string;
};

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
export default function ModalPicked({
  handleCloseModal,
  options,
  selectedItem,
}: Props) {
  const onPressItem = (item: Opitions) => {
    selectedItem(item);
    handleCloseModal();
  };

  const optionsArray = options.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.options}
      onPress={() => onPressItem(item)}
    >
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  ));

  return (
    <TouchableOpacity onPress={handleCloseModal} style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {optionsArray}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#8a8a8a",
  },
  options: {
    alignItems: "flex-start",
    borderTopWidth: 0.8,
    borderTopColor: "#8a8a8a",
  },
  item: {
    margin: 16,
    fontSize: 15,
    fontWeight: "bold",
    color: "#101026",
  },
});
