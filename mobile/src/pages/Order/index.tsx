import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { api } from "../../services";
import ModalPicker from "../../components/Modal";

type Props = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

type OrderRuteProps = RouteProp<Props, "Order">;

interface Category {
  id: string;
  name: string;
}
type Product = {
  id: string;
  name: string;
  // price: string;
  // description: string;
  // banner: string;
  // created_at: string;
  // updated_at: string;
  // category_id: string;
};

export default function Order() {
  const route = useRoute<OrderRuteProps>();
  const navigation = useNavigation();
  const [category, setCategory] = useState<Category[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<Category>({
    id: "1",
    name: "pizza",
  });
  const [product, setProduct] = useState<Product[] | []>([]);
  const [productSelected, setProductSelected] = useState<Product>({
    id: "",
    name: "",
  });
  const [modalProductVisible, setModalProductVisible] =
    useState<boolean>(false);
  const [amount, setAmount] = useState<string>("1");
  const [modalCategoryVisible, setModalCategoryVisible] =
    useState<boolean>(false);

  useEffect(() => {
    async function LoadingInfo() {
      const response = await api.get("/category");
      setCategory(response.data);
      setCategorySelected(response.data[0]);
    }
    LoadingInfo();
  }, []);

  useEffect(() => {
    async function loadingProducts() {
      const response = await api.get("/category/products", {
        params: {
          category_id: categorySelected?.id,
        },
      });
      setProduct(response.data);
      setProductSelected(response.data[0]);
    }

    loadingProducts();
  }, [categorySelected]);

  const CloseOrder = async () => {
    try {
      await api.delete("/order", {
        params: {
          order_id: route.params?.order_id,
        },
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert("ops...");
    }
  };

  const handleTangeCategory = (item: Category) => {
    setCategorySelected(item);
  };

  const handleChangeProduct = (item: Product) => {
    setProductSelected(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        <TouchableOpacity onPress={CloseOrder}>
          <Feather name="trash-2" size={29} color="#ff3f4b" />
        </TouchableOpacity>
      </View>

      {category.length !== 0 && (
        <TouchableOpacity
          style={styles.select}
          onPress={() => setModalCategoryVisible(true)}
        >
          <Text style={{ color: "#fff" }}>{categorySelected?.name}</Text>
        </TouchableOpacity>
      )}

      {product.length !== 0 && (
        <TouchableOpacity
          style={styles.select}
          onPress={() => setModalProductVisible(true)}
        >
          <Text style={{ color: "#fff" }}>{productSelected?.name}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          value={amount}
          onChangeText={(text) => setAmount(text)}
          placeholderTextColor="#f0f0f0"
          keyboardType="numeric"
          style={[styles.select, { width: "60%", textAlign: "center" }]}
        />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.btnAddText}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnFinish}>
          <Text style={styles.btnText}>Avançar</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={modalCategoryVisible}
        animationType="slide"
      >
        <ModalPicker
          handleCloseModal={() => setModalCategoryVisible(false)}
          options={category}
          selectedItem={handleTangeCategory}
        />
      </Modal>
      <Modal
        transparent={true}
        visible={modalProductVisible}
        animationType="slide"
      >
        <ModalPicker
          handleCloseModal={() => setModalProductVisible(false)}
          options={product}
          selectedItem={handleChangeProduct}
        />
      </Modal>
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
    color: "#fff",
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btnAdd: {
    backgroundColor: "#3fd1ff",
    borderRadius: 4,
    height: 40,
    justifyContent: "center",

    width: "24%",
    alignItems: "center",
  },
  btnAddText: {
    color: "#101026",
    fontWeight: "bold",
    fontSize: 24,
  },
  btnFinish: {
    backgroundColor: "#3fffa3",
    height: 40,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  btnText: {
    color: "#101026",
    fontWeight: "bold",
    fontSize: 20,
  },
});
