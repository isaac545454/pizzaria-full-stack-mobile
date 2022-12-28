import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Deshboard from "../pages/Deshboard";
import Order from "../pages/Order";
import FinishOrder from "../pages/FinishOrder";

export type stackPromiseList = {
  Deshboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
  FinishOrder: {
    number: number;
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
      <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{
          title: "Finalizando",
          headerStyle: {
            backgroundColor: "#1d1d2e",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}

export default appRoutes;
