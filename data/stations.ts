export interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export const generateNearbyStations = (userLat: number, userLng: number): Station[] => {
  return [
    {
      id: 1,
      name: 'Bank Sampah Induk',
      latitude: userLat + 0.001,
      longitude: userLng + 0.001,
    },
    {
      id: 2,
      name: 'TPS 3R',
      latitude: userLat - 0.0015,
      longitude: userLng - 0.0012,
    }
  ];
}; 