import React from 'react';

import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes['loading__container']}>
      <div className="ui active centered inline loader"></div>
      <h2 className={classes.loading}>Loading</h2>
    </div>
  );
};

export default Loading;
