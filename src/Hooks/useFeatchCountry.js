import React from "react";

const useFetchCountry = async country => {
  console.log(`fetching ${country}`);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const [data] = await response.json();
  return data;
};

export default useFetchCountry;