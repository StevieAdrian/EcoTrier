import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types';

type MapViewScreenProps = {
  route: RouteProp<RootStackParamList, 'NearbyStationMap'>;
};

export default function MapViewScreen({ route }: MapViewScreenProps) {
  const { userLocation, recycleStations } = route.params;

  return (
    <MapView style={{ flex: 1 }} region={userLocation} showsUserLocation={true}>
      <Marker coordinate={userLocation} title="You are here" />
      {recycleStations.map(station => (
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
