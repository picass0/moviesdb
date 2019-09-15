import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '../Button/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#e4e4e4',
    display: 'flex',
    padding: theme.spacing(4, 6),
  },
  textFieldContainer: {
    flexGrow: 1,
  },
  textField: {
    padding: theme.spacing(3),
    borderRadius: '4px',
    background: theme.palette.common.white,
  },
  button: {
    marginLeft: theme.spacing(4),
  },
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        className={classes.textFieldContainer}
        variant="outlined"
        inputProps={{
          'aria-label': 'bare',
          className: classes.textField,
        }}
      />
      <Button className={classes.button}>
        Найти
      </Button>
    </div>
  );
}

export default SearchBar;
