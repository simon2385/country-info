import React from 'react';

import ButtonPrimary from '../../UI/buttons/ButtonPrimary/ButtonPrimary';
import useCountryContext from '../../Hooks/useCountryContext';

import classes from './InputSearch.module.css';

const InputSearch = () => {
  const [state, dispatch] = useCountryContext();

  const inputChangeHandler = e =>
    dispatch({ type: 'INPUT-VALUE-ENTERED', countryValue: e.target.value });

  const onFetchCountry = async country => {
    if (country === '') return;
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );

      console.log({ response });
      if (!response.ok) {
        dispatch({ type: 'FETCH-UNSUCCESS' });
      }
      if (response.ok) {
        const [data] = await response.json();
        dispatch({ type: 'FETCH-SUCCESS', data: data });
      }
    } catch (error) {
      console.error(`We have an error ${error} try again`);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch({ type: 'LOADING-DATA' });

    if (state.enteredCountry === '' && state.showCountry) return;

    if (state.enteredCountry === '') {
      //state.isSubmited = false;
      dispatch({ type: 'INPUT-EMPTY' });
      return;
    }
    dispatch({ type: 'FETCH-COUNTRY' });

    onFetchCountry(state.enteredCountry);
    console.log('submited');
  };

  return (
    <div className={classes['form__container']}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input__box']}>
          <input
            maxLength="38"
            className={classes['input']}
            type="text"
            placeholder="Type a country..."
            onChange={inputChangeHandler}
            value={state.enteredCountry}
          />
        </div>
        <div className={classes['btn__box']}>
          <ButtonPrimary>Search</ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default InputSearch;
