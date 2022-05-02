export interface Mountain {
    id: number;
    name: string;
    vertical: number;
    address: string;
    skiableArea: number;
    coordinates: {
      latitude: number;
      longitude: number
    }
  }