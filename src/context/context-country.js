import React from 'react';

const CountryAppContext = React.createContext({
  enteredCountry: '',
  isLoading: false,
  hasError: false,
  countryData: {},
  isSubmited: false,
  showCountry: false,
  message: '',
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT-VALUE-ENTERED': {
      return {
        ...state,
        enteredCountry: action.countryValue,
        hasError: false,
        message: '',
        isSubmited: false,
        isLoading: false,
      };
    }
    case 'LOADING-DATA': {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        message: '',
        isSubmited: false,
      };
    }
    case 'INPUT-EMPTY': {
      return {
        ...state,
        hasError: true,
        message: 'The input field is empty. Please enter a country',
        isSubmited: false,
        isLoading: false,
        showCountry: false,
      };
    }
    case 'FETCH-COUNTRY': {
      return {
        ...state,
        isSubmited: true,
        enteredCountry: '',
        hasError: false,
      };
    }
    case 'FETCH-UNSUCCESS': {
      return {
        ...state,
        hasError: true,
        isLoading: false,
        countryData: {},
        message: 'Country not Found',
        showCountry: false,
      };
    }
    case 'FETCH-SUCCESS': {
      return {
        ...state,
        hasError: false,
        countryData: action.data,
        showCountry: true,
        isLoading: false,
        message: '',
      };
    }
    default: {
      throw new Error(`Action type not supported: ${action.type}`);
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
