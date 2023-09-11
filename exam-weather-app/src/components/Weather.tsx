import React, { useState, useEffect } from "react";
import {
  Title,
  GlobalStyles,
  FlexComponent,
  Input,
  IconHolder,
  Button
} from "../services/styled";
import { FaWind } from "react-icons/fa";
import { WiDaySunny, WiDayRain, WiCloudy } from 'react-icons/wi';

const Weather = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "16559c5f6amsh3dd37f0e2c50eeap167a45jsn9df86031c244";

  const fetchData = async () => {
    try {
      if (!location) {
        return;
      }

      setLoading(true);

      const apiUrl = `  https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;
    

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <WiDaySunny size='60px'/>;
      case 'rainy':
        return <WiDayRain size='60px'/>;
      case 'cloudy':
        return <WiCloudy size='60px'/>;
      default:
        return null;
    }
  };

  return (
    <GlobalStyles>
      <FlexComponent>
        <IconHolder>
            <FaWind size='20px' color='#5b759a'/>
            </IconHolder>
      </FlexComponent>

      <FlexComponent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
        
        {loading && <p>Loading...</p>}
        {weatherData && (
          <div>
          <h2>Weather for {location}</h2>
          <div>{weatherData && getWeatherIcon(weatherData.current_observation.condition.text)}</div>
          <p>Temperature: {weatherData.current_observation.condition.temperature}°F</p>
          <p>Wind: {weatherData.current_observation.wind.speed} kph</p>
          <p>Humidity: {weatherData.current_observation.atmosphere.humidity}%</p>
          
        </div>
        )}
        </FlexComponent>
        <FlexComponent>
        {weatherData && (
          <div>
            <h2>7-Day Forecast</h2>
            <ul>
              {weatherData.forecasts.slice(0, 7).map((forecast: any) => (
                <li key={forecast.date}>
                  <span>{forecast.day}</span>
                  <span>{forecast.text}</span>
                  <span>High: {forecast.high}°F</span>
                  <span>Low: {forecast.low}°F</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </FlexComponent>
    </GlobalStyles>
  );
};

export default Weather;
