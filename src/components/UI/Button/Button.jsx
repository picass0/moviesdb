import React from 'react';
import MaterialUiButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
  },
}));

function Button(props) {
  let color; let variant; let className; let other; let children; let to; let component;
  ({
    // eslint-disable-next-line prefer-const
    color, variant, className, children, to, ...other
  } = props);

  const classes = useStyles();
  const resultClasses = [classes.button];
  if (className) {
    resultClasses.push(className);
  }

  if (!variant) {
    variant = 'contained';
  }

  if (!color) {
    color = 'secondary';
  }

  if (to) {
    component = AdapterLink;
  }

  return (
    <MaterialUiButton
      color={color}
      variant={variant}
      className={resultClasses.join(' ')}
      to={to}
      component={component}

      {...other}
    >
      {children}
    </MaterialUiButton>
  );
}

export default Button;
