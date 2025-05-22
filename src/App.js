import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import { fetchWeatherData, getUserLocation, getCityName } from './Api/weatherApi';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("Detecting location...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const location = await getUserLocation();
        const city = await getCityName(location.lat, location.lon);
        const data = await fetchWeatherData(location.lat, location.lon);
        
        setCityName(city || "Your Location");
        setWeatherData(data);
      } catch (err) {
        setError("Using default location (Berlin)");
        const berlinData = await fetchWeatherData(52.52, 13.41);
        setWeatherData(berlinData);
        setCityName("Berlin, Germany");
      }
    };

    loadData();
  }, []);

  if (!weatherData) {
    return <div className="app-container">Loading...</div>;
  }

  return (
    <div className="app-container">
      {error && <div className="error-message">{error}</div>}
      <CurrentWeather weatherData={weatherData} cityName={cityName} />
      <HourlyForecast hourly={weatherData.hourly} />
      <DailyForecast daily={weatherData.daily} />
    </div>
  );
}

export default App;