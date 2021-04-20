import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Search from './Search';
import WeatherCard from './WeatherCard';

const Home = () => {
  const [citySearched, setCitySearched] = useState('');
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: citySearched },
  });

  if (citySearched === '') {
    setCitySearched('Kyiv');
  }
  if (error) return <h1>Error found</h1>;
  if (data) {
    console.log(data);
  }
  const setCity = (e) => {
    setCitySearched(e.target.value);
  };

  return (
    <div className="home">
      <h1>Search For Weather</h1>
      {/* <div> 
  <TextField error={false} id="standard-basic" label="City name..." onBlur={setCity}/>
  <Button size="large" variant="contained" color="primary" onClick={getWeather}><Icon>search</Icon>Search</Button>
  </div>   */}
      <Search setCity={setCity} getWeather={getWeather} />
      <div>
        {data ? (
          <>
            {/* <h1>{data.getCityByName.name}</h1>
            <h1>{data.getCityByName.weather.temperature.actual}</h1>
            <h1>{data.getCityByName.weather.summary.description}</h1>
            <h1>{data.getCityByName.weather.wind.speed}</h1> */}
            <WeatherCard
              city={data.getCityByName.name}
              country={data.getCityByName.country}
              temperature={data.getCityByName.weather.temperature.actual}
              description={data.getCityByName.weather.summary.description}
              wind={data.getCityByName.weather.wind.speed}
              icon={data.getCityByName.weather.summary.icon}

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
