import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/constants/types';
import { useRoute, RouteProp } from '@react-navigation/native';

type MapViewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NearbyStationMap'>;

type Props = {
  navigation: MapViewScreenNavigationProp;
};

export default function MapViewScreen({ navigation }: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'NearbyStationMap'>>();

  const { userLocation, recycleStations } = route.params;

  return (
    <MapView style={{ flex: 1 }} region={userLocation} showsUserLocation>
      <Marker coordinate={userLocation} title="You are here" />
      {recycleStations.map((station) => (
        <Marker
          key={station.id}
          coordinate={{ latitude: station.latitude, longitude: station.longitude }}
          title={station.name}
          pinColor="green"
        />
      ))}
    </MapView>
  );
}
