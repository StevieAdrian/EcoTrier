export interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export const generateNearbyStations = (userLat: number, userLng: number): Station[] => {

  const binusLat = -6.2014;
  const binusLng = 106.7826;

  return [
    {
      id: 1,
      name: 'EcoStation Binus',
      latitude: binusLat,
      longitude: binusLng
    },
    {
      id: 2,
      name: 'Green Point Anggrek',
      latitude: binusLat + 0.0004,
      longitude: binusLng + 0.0004
    },
    {
      id: 3,
      name: 'Recycle Hub Binus',
      latitude: binusLat - 0.0005,
      longitude: binusLng - 0.0004
    }
  ];
};