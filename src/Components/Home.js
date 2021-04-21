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
});

const Home = () => {
  const classes = useStyles();
  const [citySearched, setCitySearched] = useState('');
  const [getWeather, { data }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: citySearched },
  });

  if (citySearched === '') {
    setCitySearched('Kyiv');
  }

  const setCity = (e) => {
    setCitySearched(e.target.value);
  };

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
      <Search setCity={setCity} getWeather={getWeather} />
      <div>
        {data ? (
          <>
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
          </>
        ) : (
          <h1>Please enter your city or press button Search </h1>
        )}
      </div>
    </div>
  );
};
export default Home;
