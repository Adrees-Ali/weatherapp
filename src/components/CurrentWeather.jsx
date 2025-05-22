function CurrentWeather({ weatherData, cityName }) {
  if (!weatherData?.current || !weatherData?.daily) {
    return <div className="app-container">Loading weather...</div>;
  }

  const current = weatherData.current;
  const daily = weatherData.daily;
  const currentTemp = current.temperature_2m;
  const maxTemp = daily.temperature_2m_max[0];
  const minTemp = daily.temperature_2m_min[0];
  const windSpeed = current.wind_speed_10m;
  const rain = daily.precipitation_probability_max[0];

  //  time without AM or PM
  const formatTime = (timeStr) => {
    const time = new Date(timeStr);
    let hours = time.getHours();
    let minutes = time.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
  };

  // Get weather condition text
  const getWeatherCondition = (code) => {
    const conditions = {
      0: 'Clear sky',
      1: 'Mostly sunny',
      2: 'Partly cloudy',
      3: 'Overcast'
    };
    return conditions[code] || '';
  };

  return (
    <div className="app-container">
      <div className="weather-container">
        <h1 className="location">{cityName}</h1>
        <div className="date">{new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })}
        
        </div>

      <div className="container">
        <div className="current-container">
          <div className="current-weather">
            <div className="current-weather-icon">
            <img src="/images/cloudy.png" alt="Weather" width="50" />
          </div>
            <div className="current-temp">{currentTemp}°</div>
            <div className="weather-condition">{getWeatherCondition(current.weather_code)}</div>
          </div>
        </div>

        <div className="weather-details">
          <div className="detail-row">
            <div className="detail-item">
              <strong>{maxTemp}°</strong>
              <span>High</span>
            </div>
            <div className="detail-item">
              <strong>{windSpeed} mph</strong>
              <span>Wind</span>
            </div>
            <div className="detail-item">
              <strong>{formatTime(daily.sunrise[0])}</strong>
              <span>Sunrise</span>
            </div>
          </div>
          
          <div className="detail-row">
            <div className="detail-item">
              <strong>{minTemp}°</strong>
              <span>Low</span>
            </div>
            <div className="detail-item">
              <strong>{rain}%</strong>
              <span>Rain</span>
            </div>
            <div className="detail-item">
              <strong>{formatTime(daily.sunset[0])}</strong>
              <span>Sunset</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CurrentWeather;