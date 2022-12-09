import React from 'react';

const CityExclusion = ({ name, exclusions }: CityExclusion): JSX.Element => {
  return (
    <div style={{ border: '1px solid black'}}>
      <p style={{textDecoration: 'line-through'}}>{name}</p>
      <p>Excluded because:</p>
      <ul>
        {exclusions.map(((exclusion, i) => (
          <li key={i}>{exclusion}</li>
        )))}
      </ul>
    </div>
  );
}

export default CityExclusion;
