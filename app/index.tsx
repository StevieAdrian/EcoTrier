import AppNavigator from "./AppNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./home";
import AllCategories from "./categories";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ScanPage from "./scan";

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    // <HomePage />
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AllCategories" component={AllCategories} />
        <Stack.Screen name="ScanPage" component={ScanPage} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
