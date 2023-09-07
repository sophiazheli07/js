interface WeatherData {
    location: {
      city: string;
      woeid: number;
      country: string;
      lat: number;
      long: number;
      timezone_id: string;
    };
    current_observation: {
      pubDate: number;
      wind: {
        chill: number;
        direction: string;
        speed: number;
      };
      atmosphere: {
        humidity: number;
        visibility: number;
        pressure: number;
      };
      astronomy: {
        sunrise: string;
        sunset: string;
      };
      condition: {
        temperature: number;
        text: string;
        code: number;
      };
    };
    forecasts: {
      day: string;
      date: number;
      high: number;
      low: number;
      text: string;
      code: number;
    }[];
  }
  
  
  const apiKey = 'bb71f6d0a5msh8bea47b10b6fd85p1e95cbjsnac5a7c3dc7df'; 
  const apiUrl = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
    },
  };
  
  export const fetchWeatherData = async (): Promise<WeatherData> => {
    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Error fetching weather data`);
    }
  };
  