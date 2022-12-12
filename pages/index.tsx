// 3rd party libraries
import Head from 'next/head';

// Components and styles
import styles from '../styles/Home.module.css';
import CityCard from '../components/CityCard';

// Helpers
import cities from '../helpers/cities';
import { getExclusions } from '../helpers/travel/travelRules';
import { useEffect, useState } from 'react';
import getWeatherRequest from '../helpers/travel/request';

type Props = {
  citiesExclusions: CityExclusion[];
}

export default function Home({ citiesExclusions }: Props) {
  const [userTemp, setUserTemp] = useState<number | null>(null);

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
        <div className="nav-right">
          Your current temperature: {userTemp}
        </div>
        <h1 className={styles.title}>
          Find your next vacation
        </h1>
        <div className="d-flex flex-wrap">
          {citiesExclusions.map(({ name, exclusions, type }: CityExclusion): JSX.Element => (
            <CityCard key={name} name={name} exclusions={exclusions} type={type} />
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
    return { name, exclusions, type };
  });

  return {
    props: {
      citiesExclusions: await Promise.all(result),
    },
  }
}
