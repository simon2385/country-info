import React from 'react';

import CountryContextProvider from '../../context/context-country';
import InputSearch from '../InputSearch.js/InputSearch';

const Search = () => {
  return (
    <CountryContextProvider>
      <InputSearch />
    </CountryContextProvider>
  );
};

export default Search;
