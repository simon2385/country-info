import React from 'react';

import useCountryContext from '../../Hooks/useCountryContext';
import InputSearch from '../InputSearch.js/InputSearch';
import Loading from '../../UI/Loading/Loading';
import ErrorMessage from '../../Errors/ErrorMessage/ErrorMessage';
import CountryCard from '../CountryCard./CountryCard';
import SearchStateCard from '../../UI/SearchStateCard/SearchStateCard';

import classes from './Search.module.css';

const Search = () => {
  const [state] = useCountryContext();

  return (
    <section className={classes['search-component__container']}>
      <InputSearch />
      <SearchStateCard>
        { state?.isLoading && <Loading />}
        {state?.hasError && <ErrorMessage />}
        {state?.showCountry && !state?.isLoading && <CountryCard />}
      </SearchStateCard>
    </section>
  );
};

export default Search;
