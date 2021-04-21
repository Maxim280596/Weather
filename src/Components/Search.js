import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const Search = ({ setCity, getData, error }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <TextField
          fullWidth
          error={error}
          data-testid="custom-input"
          id="standard-basic"
          label="City name..."
          onBlur={(e) => setCity(e)}
          // value= ""
        />
      </Grid>
      <Grid item xs={2}>
        <StyledButton
          size="large"
          variant="contained"
          color="primary"
          onClick={getData}
        >
          <Icon>search</Icon>Search
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default Search;
