import BottomNav from "@/components/BottomNav";
import { NavigationProp } from "@/constants/types";
import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import { ScanHistoryProp } from "@/constants/types";
import useFetch from "@/hooks/useFetch";
import { FlatList } from "react-native-gesture-handler";
import HistoryCard from "@/components/HistoryCard";
import BalanceCard from "@/components/BalanceCard";
type prop = {
    navigation: NavigationProp;
}

export default function ScanHistory({ navigation }: prop) {
    const { history, loading, error } = useFetch();

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                <BalanceCard />
                <Text style={{ fontWeight: "800", fontSize: 20, margin: 10 }}>Scan History</Text>
                
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : error ? (
                    <Text style={{ color: "red" }}>{error}</Text>
                ) : (
                    history.map((item) => <HistoryCard key={item.id} item={item} />)
                )}
            </ScrollView>

            <BottomNav navigation={navigation} />
        </View>
    )
}