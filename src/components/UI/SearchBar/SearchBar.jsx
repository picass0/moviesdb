import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const styles = (theme) => ({
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
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: this.props.searchStr,
    };
  }

  render() {
    const { submitHandler, classes, disableFindButton = false } = this.props;

    const disabled = disableFindButton || !this.state.searchStr.trim();

    return (
      <form onSubmit={(e) => { e.preventDefault(); submitHandler(this.state.searchStr.trim()); }} className={classes.container}>
        <TextField
          className={classes.textFieldContainer}
          variant="outlined"
          inputProps={{
            'aria-label': 'bare',
            className: classes.textField,
          }}
          onChange={(event) => { this.setState({ searchStr: event.target.value }); }}
          value={this.state.searchStr}
        />
        <Button className={classes.button} type="submit" disabled={disabled}>
          Find
        </Button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  searchStr: PropTypes.string.isRequired,
  disableFindButton: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SearchBar);
