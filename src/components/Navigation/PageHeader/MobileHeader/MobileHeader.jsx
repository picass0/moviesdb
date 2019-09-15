import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import HeaderContainer from '../HeaderContainer';
import Logo from '../../../UI/Logo/Logo';
import Hamburger from '../../../UI/Hamburger/Hamburger';
import SideDrawer from './SideDrawer/SideDrawer';

const styles = (theme) => ({
  container: {
    display: 'flex',
    '@media(min-width: 40rem)': {
      display: 'none',
    },
  },
  hamburger: {
    marginRight: theme.spacing(2),
  },
});

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
    this.sideDrawerOpenedHandler = this.sideDrawerOpenedHandler.bind(this);
    this.state = {
      sideDrawerActive: false,
    };
  }

  sideDrawerClosedHandler() {
    this.setState({
      sideDrawerActive: false,
    });
  }

  sideDrawerOpenedHandler() {
    this.setState({
      sideDrawerActive: true,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <HeaderContainer className={classes.container}>
        <Hamburger
          className={classes.hamburger}
          clicked={this.sideDrawerOpenedHandler}
        />
        <Logo />
        <SideDrawer
          active={this.state.sideDrawerActive}
          backdropClicked={this.sideDrawerClosedHandler}
        />
      </HeaderContainer>
    );
  }
}

export default withStyles(styles)(MobileHeader);
