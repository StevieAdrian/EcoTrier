import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function MapViewScreen({ route }) {
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
