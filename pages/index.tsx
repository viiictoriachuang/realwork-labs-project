// 3rd party libraries
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Components and styles
import styles from '../styles/Home.module.css';
import CityExclusion from '../components/CityExclusion';
import CityOption from '../components/CityOption';

// Helpers
import cities from '../helpers/cities';
import { getExclusions, sampleData } from '../helpers/travel/travelRules';
import getWeatherApiRequest from '../helpers/travel/request';

export default function Home() {
  const initialCity = { name: '', exclusions: [] };
  const [citiesWithExclusions, setCitiesWithExclusions] = useState<CityExclusion[]>([initialCity]);
  useEffect(() => {
    setCitiesWithExclusions(cities.map((city: CityConfig): CityExclusion => {
      let exclusions:string[] = [];
      const { type, lat, lng, name } = city;
      // make weather request
      const data = getWeatherApiRequest(lat, lng);
      // const data = sampleData;
      const {
        current: { temp, wind_speed: windSpeed, weather },
        alerts,
      } = data;
      const forecast = weather[0].main;
      exclusions = getExclusions({ type, temp, windSpeed, forecast, alerts: alerts.length })
      return { name, exclusions };
    }));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Find your vacation</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Find your next vacation
        </h1>
        <div>
          {citiesWithExclusions.map(({ name, exclusions }: CityExclusion): JSX.Element => (!!exclusions.length ? <CityExclusion key={name} name={name} exclusions={exclusions} /> : <CityOption key={name} name={name} />
          ))}
        </div>
        <div>
        </div>
      </main>
    </div>
  );
}
