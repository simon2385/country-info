import React from 'react';

export const CountryAppContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'OK') console.log('ok')
};

const CountryContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {});

  return (
    <CountryAppContext.Provider value={[state, dispatch]}>
      {children}
    </CountryAppContext.Provider>
  );
};

export default CountryContextProvider;
