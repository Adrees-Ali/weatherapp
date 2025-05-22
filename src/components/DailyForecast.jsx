import React, { useEffect, useState } from 'react';

function DailyForecast({ daily }) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
  if (!daily || !daily.time) return;

  const days = daily.time.slice(0, 5).map((dateStr, i) => {
    const date = new Date(dateStr);

    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }); 
    const day = date.getDate();   
    const month = date.getMonth() + 1; // 4+1 = 5 like may
    const formattedDate = `${day}/${month}`; 

    return {
      day: dayName,
      date: formattedDate,
      icon: '🌤️',
      low: `${daily.temperature_2m_min[i]}°`,
      high: `${daily.temperature_2m_max[i]}°`,
      wind: `${daily.windspeed_10m_max[i]} mph`,
      rain: `${daily.precipitation_probability_max[i]}%`
    };
  });

  setDailyData(days);
}, [daily]);


  
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
