import React from 'react';

function HourlyForecast() {
  const hourlyData = [
    { time: '3am', icon: 'cloudy.png', temp: '14°' },
    { time: '6am', icon: 'cloudy.png', temp: '16°' },
    { time: '9am', icon: 'cloudy.png', temp: '17°' },
    { time: '12pm', icon: 'cloudy.png', temp: '19°' },
    { time: '3pm', icon: 'cloudy.png', temp: '21°' },
    { time: '6pm', icon: 'cloudy.png', temp: '20°' },
    { time: '9pm', icon: 'cloudy.png', temp: '18°' },
  ];

  return (
    <>
      <div className="section-title">Today's weather</div>
      <div className="todays-weather">
        {hourlyData.map((hour, index) => (
          <div key={index} className="weather-card">
            <div className="time">{hour.time}</div>
            <img src={`/images/${hour.icon}`} alt="weather" className="weather-icon" />
            <div className="temp">{hour.temp}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HourlyForecast;