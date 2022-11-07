import React from 'react';

import ButtonPrimary from '../../UI/buttons/ButtonPrimary/ButtonPrimary';
import useCountryContext from '../../Hooks/useCountryContext';

import classes from './InputSearch.module.css';

const InputSearch = () => {
  const [dispatch] = useCountryContext();
  return (
    <div className={classes['form__container']}>
      <form className={classes.form}>
        <div className={classes['input__box']}>
          <input
            maxLength="18"
            className={classes['input']}
            type="text"
            placeholder="Type a country..."
            onChange={() => dispatch({ type: 'OK' })}
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
