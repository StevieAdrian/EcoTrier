import { useEffect, useState } from "react";
import { auth } from "../constants/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { ActivityIndicator, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllCategories from "./categories";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomePage from "./home";
import ScanPage from "./scan";
import SignPage from "./sign";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import ProfilePage from "./profile";
import ScanHistory from "./scanHistory";
import EditProfile from "./editProfile";
import AccountProfile from "@/components/AccountProfile";
import CameraScreen from "@/components/CameraScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged", user);
      setUser(user);
      setInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  if (initializing) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="AllCategories" component={AllCategories} />
              <Stack.Screen name="ScanPage" component={ScanPage} />
              <Stack.Screen name="CameraScreen" component={CameraScreen} />
              <Stack.Screen name="ProfilePage" component={ProfilePage}/>
              <Stack.Screen name="ScanHistory" component={ScanHistory} />
              <Stack.Screen name="AccountProfile" component={AccountProfile}/>
              <Stack.Screen name="EditProfile" component={EditProfile} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignPage" component={SignPage} options={{ headerShown: false }} />
              <Stack.Screen name="SignIn" component={SignIn}/>
              <Stack.Screen name="SignUp" component={SignUp}/>
            </>
          )}
        </Stack.Navigator>
    </GestureHandlerRootView>
  );
}