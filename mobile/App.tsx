import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#1D1D2E"
        barStyle="light-content"
        translucent={false}
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
