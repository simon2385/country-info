import React from 'react';

import useCountryContext from '../../Hooks/useCountryContext';

import classes from './CountryCard.module.css';

const CountryCard = () => {
  const [state] = useCountryContext();
  const data = state.countryData;
  return (
    <div className={classes['country__card']}>
      <h2 className={classes['country__info country__info--name']}>
        {data?.name?.common}
      </h2>
      <img
        className={classes['country__flag']}
        src={data?.flags?.png}
        alt={`${data?.name?.common} flag`}
      ></img>
      <div
        className={classes['country__info']}
      >{`Population:  ${data.population}`}</div>
      <div
        className={classes['country__info']}
      >{`Capital:  ${data.capital?.[0]}`}</div>
    </div>
  );
};

export default CountryCard;
