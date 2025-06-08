  // import * as Location from 'expo-location';
  // import MapView, { Marker } from 'react-native-maps';
  // import useLocation from '../hooks/useLocation';

  // const handleNearbyStation = async () => {
  //   const { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     alert('Permission to access location was denied');
  //     return;
  //   }

  //   const location = await Location.getCurrentPositionAsync({});
  //   setUserLocation({
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //     latitudeDelta: 0.01,
  //     longitudeDelta: 0.01,
  //   });

  //   setRecycleStations([
  //     {
  //       id: 1,
  //       name: 'Bank Sampah Induk',
  //       latitude: location.coords.latitude + 0.001,  
  //       longitude: location.coords.longitude + 0.001, 
  //     },
  //     {
  //       id: 2,
  //       name: 'TPS 3R',
  //       latitude: location.coords.latitude - 0.0015,
  //       longitude: location.coords.longitude - 0.0012,
  //     }
  //   ]);
  // };
