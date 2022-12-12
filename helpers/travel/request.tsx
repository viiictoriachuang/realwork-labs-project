type Props = {
  part: string,
  lat: number,
  lon: number,
}

const getWeatherRequest = async ({ part, lat, lon }: Props) => {
  const apiKey = 'asdf';
  const data = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=imperial`);
  return await data.json();
};

export default getWeatherRequest;
