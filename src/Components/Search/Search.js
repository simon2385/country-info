import React from 'react';

import useCountryContext from '../../Hooks/useCountryContext';
import InputSearch from '../InputSearch.js/InputSearch';
import SearchStateCard from '../../UI/SearchStateCard/SearchStateCard';

import classes from './Search.module.css';

const Search = () => {
  const [state] = useCountryContext();
  const { countryData } = state;
  console.log(state);

  return (
    <section className={classes['search-component__container']}>
      <InputSearch />
      <SearchStateCard>
        {state.isLoading && <p>Loading</p>}
        {state.hasError && <p>Country not found</p>}
        {state.showCountry && <p>{countryData.name.official}</p>}
      </SearchStateCard>
    </section>
  );
};

export default Search;
