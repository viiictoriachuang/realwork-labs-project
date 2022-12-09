interface CityExclusion {
  name: string;
  exclusions: string[];
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
  value: string | number | null;
  exclusion: string;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface CityData {
  type: CityType;
  temp: number;
  windSpeed: number;
  forecast: string;
  alerts: number;
}
