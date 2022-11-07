import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes['title-app__box']}>
      <h1 className={classes['title-app']}>Country Info App</h1>
    </div>
  );
};

export default Header;
