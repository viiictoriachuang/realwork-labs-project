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
  cityType: string[];
  field: string;
  operator: Operator;
  value: string | number | null;
  exclusion: string;
}
