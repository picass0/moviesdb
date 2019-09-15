import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeadLink from '../HeadLink/HeadLink';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.common.black,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: '1.2rem',

    '@media(min-width: 40rem)': {
      fontSize: '1rem',
      flexDirection: 'row',
      color: theme.palette.common.white,
    },
  },
}));

function NavigationItems() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <HeadLink to="/">Поиск</HeadLink>
      <HeadLink to="/">Просмотренные</HeadLink>
      <HeadLink to="/">Избранное</HeadLink>
    </div>
  );
}

export default NavigationItems;
