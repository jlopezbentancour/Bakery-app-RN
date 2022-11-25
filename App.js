import ShopNavigator from "./src/navigation/ShopNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RubikMonoOne: require("./src/assets/fonts/RubikMonoOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ShopNavigator />;
}
