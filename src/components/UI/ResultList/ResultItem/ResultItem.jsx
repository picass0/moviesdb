import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import ExpandButton from '../../ExpandButton/ExpandButton';

const styles = (theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  buttonsDesktopContainer: {
    '& button': {
      margin: theme.spacing(0, 2, 0, 0),
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

    display: 'table-row',
    width: '100%',
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
  toggleButton: {
    '@media(min-width: 40rem)': {
      display: 'none',
    },
  },
  buttonsContainer: {
    '@media(min-width: 40rem)': {
      width: '30%',
    },
    '@media(min-width: 91rem)': {
      width: '25%',
    },
  },
});

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileButtonsHandler = this.toggleMobileButtonsHandler.bind(this);
    this.state = {
      mobileButtonsActive: false,
    };
  }

  toggleMobileButtonsHandler() {
    this.setState((prevState) => ({
      ...prevState,
      mobileButtonsActive: !prevState.mobileButtonsActive,
    }));
  }

  render() {
    const { classes, item, buttons } = this.props;
    const link = `/movie/${item.id}`;
    return (
      <>
        <tr className={classes.container}>
          <td className={classes.year}>{item.year}
          </td>
          <td>
            <NavLink
              to={link}
              className={classes.link}
            >
              {item.name}
            </NavLink>
          </td>
          <td className={classes.buttonsContainer}>
            <ExpandButton
              expanded={this.state.mobileButtonsActive}
              className={classes.toggleButton}
              clicked={this.toggleMobileButtonsHandler}
            />
            <div className={classes.buttonsDesktopContainer}>
              <div>
                {buttons}
              </div>
            </div>
          </td>
        </tr>
        <tr className={classes.buttonsMobileContainer}>
          <td colSpan="3">
            { this.state.mobileButtonsActive ? buttons : null}
          </td>
        </tr>
      </>
    );
  }
}

ResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  buttons: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(styles)(ResultItem);
