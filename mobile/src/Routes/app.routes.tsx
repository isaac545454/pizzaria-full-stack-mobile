import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Deshboard from "../pages/Deshboard";
import Order from "../pages/Order";

export type stackPromiseList = {
  Deshboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
};

const Stack = createNativeStackNavigator<stackPromiseList>();

function appRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Deshboard"
        component={Deshboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default appRoutes;
