import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Deshboard from "../pages/Deshboard";

const Stack = createNativeStackNavigator();

function appRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Deshboard"
        component={Deshboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default appRoutes;
