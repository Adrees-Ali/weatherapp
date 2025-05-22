import React from 'react';

function HourlyForecast({ hourly }) {
  // Time ko 3am, 12pm jaise format me convert 
  const formatTime = (timeStr) => {
    const time = new Date(timeStr);
    let hours = time.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours || 12;
    return `${hours}${ampm}`;
  };

  const today = new Date().toISOString().split('T')[0];

  //  aaj ke liye hourly data filter
  const todayHours = hourly.time
  .reduce((acc, time, i) => {
    if (time.startsWith(today)) {
      acc.push({ time, temp: hourly.temperature_2m[i] });
    }
    return acc;
  }, []);

  return (
    <>
      <div className="section-title">Today's Weather</div>
      <div className="todays-weather">
        {todayHours.slice(3, 22).map((item, i) => {
          if (i % 3 !== 0) return null; 

          return (
            <div key={i} className="weather-card">
              <div className="time">{formatTime(item.time)}</div>
              <div>
                <img src="/images/cloudy.png" alt="weather icon" className="weather-icon" />
              </div>
              <div className="temp">{item.temp}°</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HourlyForecast;
