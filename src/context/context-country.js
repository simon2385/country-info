import React from 'react';

const CountryAppContext = React.createContext({
  enteredCountry: '',
  isLoading: false,
  hasError: false,
  countryData: {},
  isSubmited: false,
  showCountry: false,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT-VALUE-ENTERED': {
      return { ...state, enteredCountry: action.countryValue };
    }
    case 'LOADING-DATA': {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        countryData: {},
        showCountry: false,
      };
    }
    case 'INPUT EMPTY': {
      return;
    }
    case 'FETCH-COUNTRY': {
      return { ...state, isSubmited: true, enteredCountry: '' };
    }
    case 'FETCH UNSUCCES': {
      return { ...state, hasError: true, isLoading: false, countryData: {} };
    }
    case 'FETCH SUCCES': {
      return {
        ...state,
        hasError: false,
        countryData: action.data,
        showCountry: true,
        isLoading: false,
      };
    }
    default: {
      throw new Error(`Type d'action non supporté: ${action.type}`);
    }
  }
};

const CountryContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    enteredCountry: '',
    isLoading: false,
    hasError: false,
    countryData: {},
    showCountry: false,
    isSubmited: false,
  });

  return (
    <CountryAppContext.Provider value={[state, dispatch]}>
      {children}
    </CountryAppContext.Provider>
  );
};

export { CountryContextProvider, CountryAppContext };
