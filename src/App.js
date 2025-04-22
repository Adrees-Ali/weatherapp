import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import { fetchWeatherData } from './Api/weatherApi';
import './App.css';


const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation not supported"));
    }
  });
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
       
        const location = await getUserLocation();
        

        const data = await fetchWeatherData(location.lat, location.lon);
        setWeatherData(data);
      } catch (err) {
        setError("Location access denied. Using default location.");
        
     
        const defaultData = await fetchWeatherData(52.52, 13.41);
        setWeatherData(defaultData);
      }
    };
    
    loadWeather();
  }, []);

  if (!weatherData) return <div className="app-container">Loading...</div>;

  return (
    <div className="app-container">
      {error && <div className="error-message">{error}</div>}
      <CurrentWeather current={weatherData.current} />
      <HourlyForecast hourly={weatherData.hourly} />
      <DailyForecast daily={weatherData.daily} />
    </div>
  );
}

export default App;