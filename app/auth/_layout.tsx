import { Stack } from "expo-router"
import { View, Text } from "react-native"
import { AuthProvider } from "@/context/AuthProvider"

const Layout = () => {
    return (
        <AuthProvider>
            <Stack />
        </AuthProvider>
    )
}

export default Layout;