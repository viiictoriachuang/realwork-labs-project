import { CityType } from "../cities";

enum Operator {
  LESS = 'less',
  GREATER = 'greater',
  EQUALS = 'equals',
  NOT = 'not',
}

export const travelRules: TravelRule[] = [
  {
    type: [CityType.BEACH],
    field: 'temp',
    operator: Operator.LESS,
    value: 70,
    exclusion: 'temperature below 70',
  },
  {
    type: [CityType.BEACH],
    field: 'windSpeed',
    operator: Operator.GREATER,
    value: 20,
    exclusion: 'wind speed over 20mph',
  },
  {
    type: [CityType.BEACH],
    field: 'main',
    operator: Operator.EQUALS,
    value: 'Clouds',
    exclusion: 'day is cloudy',
  },
  {
    type: [CityType.BEACH, CityType.SKI],
    field: 'alerts',
    operator: Operator.NOT,
    value: undefined,
    exclusion: 'has weather alert',
  },
  {
    type: [CityType.SKI],
    field: 'temp',
    operator: Operator.GREATER,
    value: 50,
    exclusion: 'temperature over 50',
  },
];

export const getExclusions = (cityData: CityData) => {
  const { type } = cityData;
  const exclusions = travelRules.map((rule) => {
    const { type: ruleType, field, operator, value, exclusion } = rule;
    const cityDataValue = cityData[field];
    // rule applies to the city
    if (ruleType.includes(type)) {
      // get operator
      if (operator === Operator.LESS && !!value) {
        if (cityDataValue < value) {
          return exclusion;
        }
      } else if (operator === Operator.GREATER && !!value) {
        if (cityDataValue > value) {
          return exclusion;
        }
      } else if (operator === Operator.EQUALS) {
        if (cityDataValue === value) {
          return exclusion;
        }
      } else if (operator === Operator.NOT) {
        if (cityDataValue !== value) {
          return exclusion;
        }
      }
    }
    return null;
  });
  return exclusions.filter((value) => !!value);
}
