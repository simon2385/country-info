import React from 'react';

import useCountryContext from '../../Hooks/useCountryContext';

import classes from './CountryCard.module.css';

export function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

export const isEmptyObject = value =>
  isObject(value) && !Object.keys(value).length;

const CountryCard = () => {
  const [state] = useCountryContext();
  const data = state.countryData;
  return !isEmptyObject(data) ? (
    <div className={classes['country__card']}>
      <h2 className={classes['country__info country__info--name']}>
        {data?.name?.common}
      </h2>
      <img
        className={classes['country__flag']}
        src={data?.flags?.png}
        alt={`${data?.name?.common} flag`}
      />
      <div
        className={classes['country__info']}
      >{`Population:  ${data.population}`}</div>
      <div
        className={classes['country__info']}
      >{`Capital:  ${data.capital?.[0]}`}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default CountryCard;
