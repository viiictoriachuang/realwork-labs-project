export enum CityType {
  BEACH = 'beach',
  SKI = 'ski',
}

const cities: CityConfig[] = [{
  name: 'Miami, FL',
  lat: 25.7617,
  lng: 80.1918,
  type: CityType.BEACH,
},
{
  name: 'Maui, HI',
  lat: 20.7984,
  lng: 156.3319,
  type: CityType.BEACH,
},
{
  name: 'Destin, FL',
  lat: 30.3935,
  lng: 86.4958,
  type: CityType.BEACH,
},
{
  name: 'Clearwater, FL',
  lat: 27.9659,
  lng: 82.8001,
  type: CityType.BEACH,
},
{
  name: 'South Padre Island, TX',
  lat: 26.1118,
  lng: 97.1681,
  type: CityType.BEACH,
},
{
  name: 'Port Aransas, Tx',
  lat: 27.8339,
  lng: 97.0611,
  type: CityType.BEACH,
},
{
  name: 'Santa Monica, CA',
  lat: 34.0195,
  lng: 118.4912,
  type: CityType.BEACH,
},
{
  name: 'Panama City, FL',
  lat: 30.1588,
  lng: 85.6602,
  type: CityType.BEACH,
},
{
  name: 'Laguna Beach, CA',
  lat: 33.5427,
  lng: 117.7854,
  type: CityType.BEACH,
},
{
  name: 'Cape Cod, MA',
  lat: 41.6688,
  lng: 70.2962,
  type: CityType.BEACH,
},
{
  name: 'Breckenridge, Co',
  lat: 39.4817,
  lng: 106.0384,
  type: CityType.SKI,
},
{
  name: 'Angel Fire, NM',
  lat: 36.3931,
  lng: 105.2850,
  type: CityType.SKI,
},
{
  name: 'Durango, Co',
  lat: 37.2753,
  lng: 107.8801,
  type: CityType.SKI,
},
{
  name: 'Winter Park, Co',
  lat: 39.8917,
  lng: 105.7631,
  type: CityType.SKI,
},
{
  name: 'Taos, NM',
  lat: 36.4072,
  lng: 105.5734,
  type: CityType.SKI,
},
{
  name: 'Vail, Co',
  lat: 39.6433,
  lng: 106.3781,
  type: CityType.SKI,
},
{
  name: 'Aspen, Co',
  lat: 39.1911,
  lng: 106.8175,
  type: CityType.SKI,
},
{
  name: 'Snowbird, UT',
  lat: 40.5830,
  lng: 111.6538,
  type: CityType.SKI,
},
{
  name: 'Park City, UT',
  lat: 40.6461,
  lng: 111.4980,
  type: CityType.SKI,
},
{
  name: 'Telluride, Co',
  lat: 37.9375,
  lng: 107.8123,
  type: CityType.SKI,
}];

export default cities;
