import React from 'react';

type Props = {
  name: string;
}

const CityExclusion = ({ name }: Props): JSX.Element => {
  return (
      <p>{name}</p>
  );
}

export default CityExclusion;
