import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import ExpandButton from '../../ExpandButton/ExpandButton';

const styles = (theme) => ({
  container: {
    padding: theme.spacing(2),
    display: 'block',
    '@media(min-width: 40rem)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1,
    },
  },
  buttonsDesktopContainer: {
    '& button': {
      margin: theme.spacing(0, 1, 0, 0),
      textAlign: 'left',
    },

    display: 'none',
    '@media(min-width: 40rem)': {
      display: 'block',
    },
  },

  buttonsMobileContainer: {
    '& button': {
      margin: theme.spacing(1, 0, 0),
      width: '100%',
    },

    display: 'block',
    '@media(min-width: 40rem)': {
      display: 'none',
    },
  },
  year: {
    fontSize: '0.8rem',
  },
  link: {
    textDecoration: 'none',
    marginLeft: theme.spacing(10),
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',

    '&:hover, &:active': {
      textDecoration: 'underline',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleButton: {
    '@media(min-width: 40rem)': {
      display: 'none',
    },
  },
});

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileButtonsHandler = this.toggleMobileButtonsHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      mobileButtonsActive: false,
      offset: 0,
    };
  }

  toggleMobileButtonsHandler() {
    this.setState((prevState) => ({
      ...prevState,
      mobileButtonsActive: !prevState.mobileButtonsActive,
    }));
  }

  handleClick(offset) {
    this.setState({ offset });
  }

  render() {
    const { classes, item, buttons } = this.props;
    return (
      <li className={classes.container}>
        <div className={classes.content}>
          <div>
            <span className={classes.year}>{item.year} г.</span>
            <NavLink
              to={item.link}
              className={classes.link}
            >
              {item.name}
            </NavLink>
          </div>
          <div>
            <ExpandButton
              expanded={this.state.mobileButtonsActive}
              className={classes.toggleButton}
              clicked={this.toggleMobileButtonsHandler}
            />
          </div>
        </div>
        <div className={classes.buttonsDesktopContainer}>
          <div>
            {buttons}
          </div>
        </div>
        <div
          className={classes.buttonsMobileContainer}
        >
          { this.state.mobileButtonsActive ? buttons : null}
        </div>
      </li>
    );
  }
}

ResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  buttons: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(styles)(ResultItem);
