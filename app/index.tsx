import AppNavigator from "./AppNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./home";

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <HomePage />
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={HomePage} />
    //   <Stack.Screen name="CameraScreen" component={TesCamera} />
    // </Stack.Navigator>
  );
}
