import React from 'react';
import { capitalizeFirstLetter } from '../utils/casing';

const CityCard = ({ name, exclusions, type }: CityExclusion): JSX.Element => {
  const hasExclusions = !!exclusions.length;
  return (
    <div className="card">
      <p className={hasExclusions ? 'strikethrough' : ''}>{name}</p>
      <p>{capitalizeFirstLetter(type)} city</p>
      {hasExclusions && (
        <>
          <p>Excluded because:</p>
          <ul>
            {exclusions.map(((exclusion, i) => (
              <li key={i}>{exclusion}</li>
            )))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CityCard;
