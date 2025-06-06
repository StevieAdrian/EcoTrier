import { useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { generateNearbyStations, Station } from '@/data/stations';

export interface UserLocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function useLocation() {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [recycleStations, setRecycleStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(false);

  const handleNearbyStation = async () => {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const userLoc: UserLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      
      setUserLocation(userLoc);
      const stations = generateNearbyStations(location.coords.latitude, location.coords.longitude);
      setRecycleStations(stations);
      
      return { userLocation: userLoc, recycleStations: stations };
    } catch (error) {
      Alert.alert('Error', 'Failed to get location');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    userLocation,
    recycleStations,
    loading,
    handleNearbyStation
  };
} 