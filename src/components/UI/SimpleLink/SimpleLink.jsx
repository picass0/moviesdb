import React from 'react';
import { NavLink } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


function SimpleLink(props) {
  const classes = useStyles();

  const { to } = props;
  let { className } = props;
  if (!className) {
    className = classes.link;
  }

  if (!to) {
    return (<a {...props} className={className}>{props.children}</a>);
  }

  return (<NavLink {...props} className={className}>{props.children}</NavLink>);
}

SimpleLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SimpleLink;
