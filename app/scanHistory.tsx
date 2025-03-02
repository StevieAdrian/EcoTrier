import BottomNav from "@/components/BottomNav";
import { NavigationProp } from "@/constants/types";
import { ActivityIndicator, Text, View } from "react-native";
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
        <View style={{flex: 1}}>
            <BalanceCard />
            <Text style={{ fontWeight: "bold", fontSize: 18, margin: 10 }}>Scan History</Text>
            { loading ? (
                <ActivityIndicator size="large"/>
            ) : error ? (
                <Text style={{ color: "red" }}>{error}</Text>
            ) : (
                <FlatList data={history} keyExtractor={(item) => item.id} renderItem={({item}) => <HistoryCard item={item}/>} />
            )}
            <BottomNav navigation={navigation} />
        </View>
    )
}