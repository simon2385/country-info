import React from 'react';

import classes from './ButtonPrimary.module.css';

const ButtonPrimary = ({ children, onclick = () => null }) => {
  return (
      <button className={classes['btn-primary']} onClick={onclick}>{children}</button>
  );
};

export default ButtonPrimary;
