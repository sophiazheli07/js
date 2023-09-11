import React, { useState, useEffect } from 'react';
import { Title } from '../services/styled'

const Weather = () => {
  const [weatherData, setWeatherData] = useState<any>(null); 
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'bb71f6d0a5msh8bea47b10b6fd85p1e95cbjsnac5a7c3dc7df'; 

  const fetchData = async () => {
    try {
      if (!location) {
        return;
      }

      setLoading(true);

      const apiUrl = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    fetchData();
  };

  return (
    <div>
      <Title>Weather</Title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div>
          <h2>Weather for {location}</h2>
          <p>Temperature: {weatherData.current_observation.condition.temperature}°C</p>
          <p>Wind: {weatherData.current_observation.wind.speed} kph</p>
          <p>Humidity: {weatherData.current_observation.atmosphere.humidity}%</p>
        </div>
      )}
      {weatherData && (
        <div>
          <h2>7-Day Forecast</h2>
          <ul>
            {weatherData.forecasts.slice(0, 7).map((forecast: any) => ( 
              <li key={forecast.date}>
                <span>{forecast.day}</span>
                <span>{forecast.text}</span>
                <span>High: {forecast.high}°C</span>
                <span>Low: {forecast.low}°C</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Weather;
