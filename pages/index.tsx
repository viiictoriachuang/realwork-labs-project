import { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cities from '../helpers/cities';
import CityExclusion from '../components/CityExclusion';
import CityOption from '../components/CityOption';

export default function Home() {
  const getWeatherApiRequest = async (lat: number, lng: number) => {
    const part = 'hourly';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=375e69dff55d38833b47d85506d7ca9c&units=imperial`);
    return await res.json();
  }
  const initialCity = { name: '', exclusions: [] };
  const [citiesWithExclusions, setCitiesWithExclusions] = useState<CityExclusion[]>([initialCity]);
  useEffect(() => {
    setCitiesWithExclusions(cities.map((city: CityConfig): CityExclusion => {
      const exclusions:string[] = [];
      const { lat, lng, name } = city;
      // make weather request
      const data = getWeatherApiRequest(lat, lng);
      const { current, daily, alerts } = data;
      // check exclusions
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
          {citiesWithExclusions.map(({ name, exclusions }: CityExclusion): JSX.Element => {
            return !!exclusions.length ? <CityExclusion name={name} exclusions={exclusions} /> : <CityOption name={name} />
          })}
        </div>
        <div>
        </div>
      </main>
    </div>
  );
}
