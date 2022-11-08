import React from "react";

import { CountryAppContext } from "../context/context-country";

const useCountryContext = () => {
  const context = React.useContext(CountryAppContext);
  if (context === undefined) {
    throw new Error(
      'useCountryContext must be used with CountryContextProvider'
    );
  }
  return context;
};

export default useCountryContext