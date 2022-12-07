import { COLORS } from "../constants/colors";
import CartScreen from "../screens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Carrito" }}
      />
    </Stack.Navigator>
  );
};
