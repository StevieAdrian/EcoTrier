import AppNavigator from "./AppNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./home";
import AllCategories from "./categories";

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    // <HomePage />
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
    </Stack.Navigator>
  );
}
