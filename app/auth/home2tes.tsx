import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { auth } from "../../constants/firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "expo-router";

const Page = () => {
    const [user, setUser] = useState<User | null>(auth.currentUser);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (!user) {
                router.replace("/"); 
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome back {user?.email}</Text>
            <Button title="Sign out" onPress={() => signOut(auth)} />
        </View>
    );
};

export default Page;
