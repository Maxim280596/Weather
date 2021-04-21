import React from 'react';
import Thermometer from 'react-thermometer-component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '30px 0',
    minWidth: 275,
    minHeight: 280,

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
    marginTop: 20,
    paddingsLeft: 10,
    fontSize: 20,
  },
  term: {
    marginTop: 10,
    marginBottom: 10,
  },
  info: {
    paddingsLeft: 10,
  },
  temp: {
    paddingTop: -15,
  },
});

const WeatherCard = ({
  city,
  temperature,
  wind,
  description,
  country,
  icon,
  min,
  max,
  feelsLike,
  all,
  humidity,
  visibility,
}) => {
  const convertToCelsium = (K) => {
    return Math.trunc(K - 273.15);
  };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={8} className={classes.info}>
            <CardContent>
              <Typography variant="h4" component="h2" align="center">
                {city}
                {bull}
                {country}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                <b>Temperature: </b>
                actual: {convertToCelsium(temperature)}°C, feelsLike:{' '}
                {convertToCelsium(feelsLike)}°C, min: {convertToCelsium(min)}°C,
                max: {convertToCelsium(max)}°C
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                <b>Description:</b> {description}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                <b>Wind Speed:</b> {wind}km per/hour
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                <b>Clouds: </b>
                all: {all} %, humidity: {humidity}%, visibility: {visibility}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            container
            item
            xs={4}
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
              height="230"
              className={classes.temp}
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
