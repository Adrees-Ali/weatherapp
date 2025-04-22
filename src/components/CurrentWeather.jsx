function CurrentWeather({ current }) {
  return (
    <div className="weather-container">
      <h1 className="location">Your Location</h1>
      <div className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
      
      <div className="current-container">
        <div className="current-weather">
          <div className="current-weather-icon">
            <img src="/images/cloudy.png" alt="Weather" width="50" />
          </div>
          <div className="current-weather-det">
            <div className="current-temp">{current.temperature_2m}°</div>
            <div className="weather-condition">
              Wind: {current.wind_speed_10m} km/h
            </div>
          </div>
        </div>
        
        <div class="weather-details">
        <table class="detail-table">
          <tr>
            <td class="detail-value">23°</td>
            <td class="detail-value">7mph</td>
            <td class="detail-value">05:27</td>
          </tr>
          <tr>
            <td class="detail-label">High</td>
            <td class="detail-label">Wind</td>
            <td class="detail-label">Sunrise</td>
          </tr>
          <tr>
            <td class="detail-value">14°</td>
            <td class="detail-value">0%</td>
            <td class="detail-value">20:57</td>
        </tr>
        <tr>
          <td class="detail-label">Low</td>
          <td class="detail-label">Rain</td>
          <td class="detail-label">Sunset</td>
        </tr>   
      </table>
      </div>
    </div>
  </div>
  );
}
export default CurrentWeather;