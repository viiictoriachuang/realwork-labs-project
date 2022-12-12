interface CityExclusion {
  name: string;
  exclusions: (string | null)[];
  type: CityType;
}

interface CityConfig {
  name: string;
  lat: number;
  lng: number;
  type: CityType;
}

interface TravelRule {
  type: string[];
  field: string;
  operator: Operator;
  value: string | number | undefined;
  exclusion: string;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Alert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}

interface CityData {
  type: CityType;
  temp: number;
  windSpeed: number;
  forecast: string;
  alerts?: Alert[];
}
