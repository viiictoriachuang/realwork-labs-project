// 3rd party libraries
import Head from 'next/head';

// Components and styles
import styles from '../styles/Home.module.css';
import CityExclusion from '../components/CityExclusion';
import CityOption from '../components/CityOption';

// Helpers
import cities from '../helpers/cities';
import { getExclusions } from '../helpers/travel/travelRules';

type Props {
  citiesExclusions: CityExclusion[];
}

export default function Home({ citiesExclusions }: Props) {
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
          {citiesExclusions.map(({ name, exclusions }: CityExclusion): JSX.Element => (
            !!exclusions.length ? <CityExclusion key={name} name={name} exclusions={exclusions} /> : <CityOption key={name} name={name} />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let citiesWithExclusions: CityExclusion[] = [];

  const fetchData = async ({ lat, lng, type, name }: CityConfig) => {
    const part = 'hourly,daily,minutely';
    const apiKey = 'asdf';
    const data = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=${apiKey}&units=imperial`);
    const json = await data.json();
    const { current: { temp, wind_speed: windSpeed, weather }, alerts } = json;
    const forecast = weather[0].main;
    const exclusions = getExclusions({ type, temp, windSpeed, forecast, alerts });
    return citiesWithExclusions.push({ name, exclusions });
  }

  cities.forEach((city: CityConfig) => {
    fetchData(city).catch((error) => { console.log(error) });
  });

  return {
    props: {
      // filter null values
      citiesExclusions: citiesWithExclusions.filter((c) => !!c),
    },
  }
}
