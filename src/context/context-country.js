import React from 'react';

const CountryAppContext = React.createContext({
  enteredCountry: '',
  isLoading: false,
  hasError: false,
  countryData: {},
  isSubmited: false,
  fetchCountryHandler: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT-VALUE-ENTERED': {
      return { ...state, enteredCountry: action.countryValue };
    }
    case 'LOADING-DATA': {
      return { ...state, isLoading: true };
    }
    case 'FETCH-COUNTRY': {
      //state.fetchCountryHandler(action.value);
      return { ...state,isSubmited: true, enteredCountry: '' };
    }
    default: {
      throw new Error(`Type d'action non supporté: ${action.type}`);
    }
  }
};

/* const fetchCountryHandler = async country => {
  console.log(`fetching ${country}`);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const [data] = await response.json();
  return data
}; */

const CountryContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    enteredCountry: '',
    isLoading: false,
    hasError: false,
    //fetchCountryHandler,
  });

  return (
    <CountryAppContext.Provider value={[state, dispatch]}>
      {children}
    </CountryAppContext.Provider>
  );
};

export { CountryContextProvider, CountryAppContext };
