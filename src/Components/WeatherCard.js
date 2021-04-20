import React from 'react';
import Thermometer from 'react-thermometer-component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    minWidth: 275,
    minHeight: 300,

    background: 'rgba(255, 255, 255, 0.3)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    opacity: 1,
  },
  pos: {
    marginBottom: 12,
    opacity: 1,
    color: 'black',
  },
  term: {
    marginTop: 20,
  },
  temp: {
    fontSize: '20px',
  },
});

const WeatherCard = ({
  city,
  temperature,
  wind,
  description,
  country,
  icon,
}) => {
  const convertToCelsium = (K) => {
    return Math.trunc(K - 273.15);
  };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <CardContent>
              <Typography variant="h4" component="h2">
                {city}
                {bull}
                {country}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {description}
              </Typography>
              <Typography variant="body2" component="p">
                Wind Speed: {wind}per/second
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            container
            item
            xs={3}
            className={classes.term}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Thermometer
              theme="light"
              value={convertToCelsium(temperature)}
              max="100"
              format="°C"
              size="large"
              height="250"
              className={classes.temp}
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
