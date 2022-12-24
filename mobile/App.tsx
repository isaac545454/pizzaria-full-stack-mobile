import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import { AuthProvider } from "./src/context/Auth";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          backgroundColor="#1D1D2E"
          barStyle="light-content"
          translucent={false}
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
