import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RubikMonoOne: require("./src/assets/fonts/RubikMonoOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}
