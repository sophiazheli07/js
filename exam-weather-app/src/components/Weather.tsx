import React, { useState, useEffect } from "react";
import {
  Title,
  GlobalStyles,
  FlexComponent,
  Input,
  IconHolder,
  Button,
  Span,
  SpanMain,
  TimeP,
  TimeDiv,
} from "../services/styled";
import { FaWind } from "react-icons/fa";
import { WiDaySunny, WiDayRain, WiCloudy } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { PiWindBold } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  const convertToFahrenheit = (fahrenheit: number) => {
    return Math.round(((fahrenheit - 32) * 5) / 9);
  };

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
      case "sunny":
        return <WiDaySunny size="60px" />;
      case "rainy":
        return <WiDayRain size="60px" />;
      case "cloudy":
        return <WiCloudy size="60px" />;
      default:
        return null;
    }
  };

  return (
    <GlobalStyles>
      <FlexComponent>
        <IconHolder>
          <FaWind size="20px" color="#5b759a" />
        </IconHolder>
        <TimeDiv>
          <TimeP>
            Kyiv <br /> Time
          </TimeP>
          <TimeP>{currentTime.toLocaleTimeString()}</TimeP>
        </TimeDiv>
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
            <div>
              {weatherData &&
                getWeatherIcon(weatherData.current_observation.condition.text)}
            </div>

            <p>
              <FaTemperatureHigh
                style={{ marginRight: "10px", height: "30px", width: "30px" }}
              />
              {convertToFahrenheit(
                weatherData.current_observation.condition.temperature
              )}{" "}
              °C
            </p>
            <p>
              <PiWindBold
                style={{ marginRight: "10px", height: "30px", width: "30px" }}
              />
              {weatherData.current_observation.wind.speed} kph
            </p>
            <p>
              <WiHumidity
                style={{ marginRight: "10px", height: "30px", width: "30px" }}
              />
              {weatherData.current_observation.atmosphere.humidity}%
            </p>
          </div>
        )}
      </FlexComponent>
      <FlexComponent>
        {weatherData && (
          <div>
            <Title>7-Day Forecast</Title>
            {weatherData.forecasts.slice(0, 7).map((forecast: any) => (
              <div key={forecast.date}>
                <SpanMain>{forecast.day}</SpanMain>
                <br />

                <Span>
                  <FaTemperatureHigh
                    style={{
                      marginRight: "10px",
                      height: "20px",
                      width: "20px",
                      marginBottom: "-5px",
                      marginLeft: "10px",
                    }}
                  />{" "}
                  {convertToFahrenheit(forecast.high)}°C
                </Span>
                <Span>
                  <FaTemperatureLow
                    style={{
                      marginRight: "10px",
                      height: "20px",
                      width: "20px",
                      marginBottom: "-5px",
                      marginLeft: "10px",
                    }}
                  />{" "}
                  {convertToFahrenheit(forecast.low)}°C
                </Span>
                <hr
                  style={{ border: "2px solid #0B121E", borderRadius: "2px" }}
                />
              </div>
            ))}
          </div>
        )}
      </FlexComponent>
    </GlobalStyles>
  );
};

export default Weather;
