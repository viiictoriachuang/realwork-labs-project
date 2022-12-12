// 3rd party libraries
import Head from 'next/head';

// Components and styles
import styles from '../styles/Home.module.css';
import CityExclusion from '../components/CityExclusion';
import CityOption from '../components/CityOption';

// Helpers
import cities from '../helpers/cities';
import { getExclusions } from '../helpers/travel/travelRules';
import { useEffect, useState } from 'react';
import getWeatherRequest from '../helpers/travel/request';

type Props = {
  citiesExclusions: CityExclusion[];
}

export default function Home({ citiesExclusions }: Props) {
  const [userTemp, setUserTemp] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { coords: { latitude, longitude } } = position;
        const part = 'hourly,daily,minutely,alerts';
        const json = await getWeatherRequest({ part, lat: latitude, lon: longitude });
        const { current: { temp } } = json;
        setUserTemp(temp);
      });
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Find your vacation</title>
      </Head>

      <main className={styles.main}>
        <div>
          Your current temperature: {userTemp}
        </div>
        <h1 className={styles.title}>
          Find your next vacation
        </h1>
        <div>
          {citiesExclusions.map(({ name, exclusions }: CityExclusion): JSX.Element => (
            !!exclusions.length ?
              <CityExclusion key={name} name={name} exclusions={exclusions} /> :
              <CityOption key={name} name={name} />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = cities.map(async (city: CityConfig) => {
    const { lat, lng, type, name } = city;
    const part = 'hourly,daily,minutely';
    const json = await getWeatherRequest({ part, lat, lon: lng });
    const { current: { temp, wind_speed: windSpeed, weather }, alerts } = json;
    const forecast = weather[0].main;
    const exclusions = getExclusions({ type, temp, windSpeed, forecast, alerts });
    return { name, exclusions };
  });

  return {
    props: {
      citiesExclusions: await Promise.all(result),
    },
  }
}
