import React from 'react';

const CityExclusion = ({ name, exclusions }: CityExclusion): JSX.Element => {
  return (
    <div>
      <p>{name}</p>
      <p>Excluded because:</p>
      <ul>
        {exclusions.map((exclusion => (
          <li>{exclusion}</li>
        )))}
      </ul>
    </div>
  );
}

export default CityExclusion;
