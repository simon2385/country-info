import React from 'react';

import useCountryContext from '../../Hooks/useCountryContext';

import classes from './ErrorMessage.module.css';

const ErrorMessage = () => {
  const [state] = useCountryContext();

  return (
    <div data-testid="errorMessage" className={classes['error-message__container']}>
      <h2 className={classes['error-message']}>{state.message}</h2>
    </div>
  );
};

export default ErrorMessage;
