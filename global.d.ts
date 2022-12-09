interface CityExclusion {
  name: string;
  exclusions: string[];
}

enum Operator {
  LESS = 'less',
  GREATER = 'greater',
  EQUALS = 'equals',
  NOT = 'not',
}

enum CityType {
  BEACH = 'beach',
  SKI = 'ski',
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
  weather: Weather[];
  alerts: Alert[];
}