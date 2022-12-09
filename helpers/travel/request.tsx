export const getWeatherApiRequest = async (lat: number, lng: number) => {
  const part = 'hourly,daily,minutely';
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=fakeapikey&units=imperial`);
  return await res.json();
}

export default getWeatherApiRequest;
