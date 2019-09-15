import React from 'react';
import { makeStyles } from '@material-ui/core';
import Logo from '../../../UI/Logo/Logo';
import NavigationItems from '../../NavigationItems/NavigationItems';
import HeaderContainer from '../HeaderContainer';

const useStyles = makeStyles({
  container: {
    display: 'none',
    '@media(min-width: 40rem)': {
      display: 'flex',
    },
  },
});


function DesktopHeader() {
  const classes = useStyles();
  return (
    <HeaderContainer className={classes.container}>
      <Logo />
      <NavigationItems />
    </HeaderContainer>
  );
}

export default DesktopHeader;
