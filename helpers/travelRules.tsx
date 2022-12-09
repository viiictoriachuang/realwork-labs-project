export const travelRules: TravelRule[] = [
  {
    cityType: ['beach'],
    field: 'temp',
    operator: Operator.LESS,
    value: 70,
    exclusion: 'temperature below 70',
  },
  {
    cityType: ['beach'],
    field: 'wind_speed',
    operator: Operator.GREATER,
    value: 20,
    exclusion: 'wind speed over 20mph',
  },
  {
    cityType: ['beach'],
    field: 'weather.main',
    operator: Operator.EQUALS,
    value: 'Clouds',
    exclusion: 'day is cloudy',
  },
  {
    cityType: ['beach', 'ski'],
    field: 'alerts',
    operator: Operator.NOT,
    value: null,
    exclusion: 'has weather alert',
  },
  {
    cityType: ['ski'],
    field: 'temp',
    operator: Operator.GREATER,
    value: 50,
    exclusion: 'temperature over 50',
  },
];
