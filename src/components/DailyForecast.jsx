import React from 'react';

function DailyForecast() {
  const dailyData = [
    { day: 'Tue', date: '30/7', icon: '🌤️', low: '10°', high: '21°', wind: '12mph', rain: '0%' },
    { day: 'Wed', date: '31/7', icon: '🌤️', low: '9°', high: '18°', wind: '7mph', rain: '3%' },
    { day: 'Thur', date: '1/8', icon: '🌤️', low: '7°', high: '15°', wind: '11mph', rain: '75%' },
    { day: 'Fri', date: '2/8', icon: '🌤️', low: '10°', high: '21°', wind: '3mph', rain: '5%' },
    { day: 'Sat', date: '30/7', icon: '🌤️', low: '12°', high: '24°', wind: '8mph', rain: '2%' },
  ];

  return (
    <div className="forecast">
      <div className="section-title">Next 5 days</div>
      {dailyData.map((day, index) => (
        <div key={index} className="day-row">
          <div className="top-line">
            <span className="day">{day.day}</span>
            <span className="icon">{day.icon}</span>
            <span className="value">{day.low}</span>
            <span className="value">{day.high}</span>
            <span className="value">{day.wind}</span>
            <span className="value">{day.rain}</span>
          </div>
          <div className="bottom-line">
            <span className="date">{day.date}</span>
            <span className="label"></span>
            <span className="label">Low</span>
            <span className="label">High</span>
            <span className="label">Wind</span>
            <span className="label">Rain</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyForecast;