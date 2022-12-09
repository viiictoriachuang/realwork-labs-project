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

export const sampleData = {"lat": 33.44,
"lon": -94.04,
"timezone": "America/Chicago",
"timezone_offset": -21600,
"current": {
  "dt": 1618317040,
  "sunrise": 1618282134,
  "sunset": 1618333901,
  "temp": 284.07,
  "feels_like": 282.84,
  "pressure": 1019,
  "humidity": 62,
  "dew_point": 277.08,
  "uvi": 0.89,
  "clouds": 0,
  "visibility": 10000,
  "wind_speed": 50,
  "wind_deg": 300,
  "weather": [
    {
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }
  ],
  "rain": {
    "1h": 0.21
  }
},
  "alerts": [
  {
    "sender_name": "NWS Tulsa",
    "event": "Heat Advisory",
    "start": 1597341600,
    "end": 1597366800,
    "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.",
    "tags": [
      "Extreme temperature value"
      ]
  }]}