import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import SignIn from "../pages/SignIn";

const Stack = createNativeStackNavigator();

function authRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default authRoutes;
