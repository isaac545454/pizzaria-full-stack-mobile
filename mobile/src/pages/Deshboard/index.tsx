import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export default function Deshboard() {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity onPress={signOut}>
        <Text>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
