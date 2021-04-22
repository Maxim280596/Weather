import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { GET_WEATHER_QUERY } from '../graphql/Queries';
import Search from './Search';
import WeatherCard from './WeatherCard';

const useStyles = makeStyles({
  center: {
    margin: '20px 0',
  },
  err: {
    color: 'red'
  }
});

const Home = () => {
  const classes = useStyles();
  const [citySearched, setCitySearched] = useState('');
  const [error, setErrors] = useState(false);
  const [getWeather, { data }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: citySearched },
  });

  if (citySearched === '') {
    setCitySearched('Kyiv');
  }

  const setCity = (e) => {
    if (!e.target.value) {
      setErrors(true);
    } else {
      setErrors(false);
    }
    setCitySearched(e.target.value);
  };

  const getData = () => {
    getWeather()
  }

  return (
    <div className="home">
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.center}
      >
        <h1>Search For Weather</h1>
      </Grid>
      <Search setCity={setCity} getData={getData} error={error} />
      <div>
        {data ? (
          <>
            {data.getCityByName === null ? (
              <h2 className={classes.err}>Error! Please, enter the correct city name!</h2>
            ) : (
              <WeatherCard
                city={data.getCityByName.name}
                country={data.getCityByName.country}
                temperature={data.getCityByName.weather.temperature.actual}
                description={data.getCityByName.weather.summary.description}
                wind={data.getCityByName.weather.wind.speed}
                icon={data.getCityByName.weather.summary.icon}
                max={data.getCityByName.weather.temperature.max}
                min={data.getCityByName.weather.temperature.min}
                feelsLike={data.getCityByName.weather.temperature.feelsLike}
                all={data.getCityByName.weather.clouds.all}
                humidity={data.getCityByName.weather.clouds.humidity}
                visibility={data.getCityByName.weather.clouds.visibility}
              />
            )}
          </>
        ) : (
          <h2>Please enter your city and press button Search </h2>
        )}
      </div>
    </div>
  );
};
export default Home;
