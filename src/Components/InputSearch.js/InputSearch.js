import React from 'react';

import ButtonPrimary from '../../UI/buttons/ButtonPrimary/ButtonPrimary';
import useCountryContext from '../../Hooks/useCountryContext';
import useFetchCountry from '../../Hooks/useFeatchCountry';

import classes from './InputSearch.module.css';

const InputSearch = () => {
  const [state, dispatch] = useCountryContext();

  const inputChangeHandler = e =>
    dispatch({ type: 'INPUT-VALUE-ENTERED', countryValue: e.target.value });

  const submitHandler = e => {
    e.preventDefault();
    dispatch({ type: 'LOADING-DATA' });
    if (state.enteredCountry === '') {
      state.isSubmited = false;
      return;
    }
    dispatch({ type: 'FETCH-COUNTRY', value: state.enteredCountry ?? '' });
    console.log('submited');
  };

  return (
    <div className={classes['form__container']} onSubmit={submitHandler}>
      <form className={classes.form}>
        <div className={classes['input__box']}>
          <input
            maxLength="18"
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
