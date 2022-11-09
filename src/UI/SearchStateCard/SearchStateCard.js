import React from 'react';

import classes from './SearchStateCard.module.css';

const SearchStateCard = ({ children }) => {
  return <div className={classes['card__info']}>{children}</div>;
};

export default SearchStateCard;
