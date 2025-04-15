import logo from './logo.svg';
import './App.css';

function App() {
 return (
    <div class="weather-container">
      <h1 class="location">London, UK</h1>
        <div class="date">Monday 29 August</div>
    
      <div class="current-container">
      <div class="current-weather">
        <div class="current-weather-icon"><img src="ChatGPT Image Apr 11, 2025, 02_58_08 AM.png" alt="Daytime Cloud and Sun" width="50" />
        </div>
        <div class="current-weather-det">
           <div class="current-temp">21°</div>
          <div class="weather-condition">Mostly sunny</div>
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
    <div class="section-title">Todays weather</div>
        <div class="todays-weather">
          <div class="weather-card">
            <div class="time">3am</div>
            <img src="cloudy.png" alt="cloud" class="weather-icon"/>
            <div class="temp">14°</div>
          </div>
        <div class="weather-card">
          <div class="time">6am</div>
          <img src="cloudy.png" alt="cloud" class="weather-icon"/>
          <div class="temp">16°</div>
        </div>
        <div class="weather-card">
            <div class="time">9am</div>
            <img src="cloudy.png" alt="cloud" class="weather-icon"/>
            <div class="temp">17°</div>
        </div>
        <div class="weather-card">
          <div class="time">12pm</div>
          <img src="cloudy.png" alt="cloud" class="weather-icon"/>
          <div class="temp">19°</div>
        </div>
        <div class="weather-card">
          <div class="time">3pm</div>
          <img src="sunny.png" alt="sun" class="weather-icon"/>
          <div class="temp">21°</div>
        </div>
        <div class="weather-card">
          <div class="time">6pm</div>
          <img src="sunny.png" alt="sun" class="weather-icon"/>
          <div class="temp">20°</div>
        </div>
        <div class="weather-card">
          <div class="time">9pm</div>
          <img src="sunny.png" alt="sun" class="weather-icon"/>
          <div class="temp">18°</div>
        </div>
        </div>

        <div class="forecast"> Next 5 days
          <div class="day-row">
            <div class="top-line">
              <span class="day">Tue</span>
              <span class="icon">🌤️</span>
              <span class="value">10°</span>
              <span class="value">21°</span>
              <span class="value">12mph</span>
              <span class="value">0%</span>
            </div>
            <div class="bottom-line">
              <span class="date">30/7</span>
              <span class="label"></span>
              <span class="label">Low</span>
              <span class="label">High</span>
              <span class="label">Wind</span>
              <span class="label">Rain</span>
            </div>
          </div>
          <div class="day-row">
            <div class="top-line">
              <span class="day">Wed</span>
              <span class="icon">🌤️</span>
              <span class="value">9°</span>
              <span class="value">18°</span>
              <span class="value">7mph</span>
              <span class="value">3%</span>
            </div>
            <div class="bottom-line">
              <span class="date">31/7</span>
              <span class="label"></span>
              <span class="label">Low</span>
              <span class="label">High</span>
              <span class="label">Wind</span>
              <span class="label">Rain</span>
            </div>
          </div>
          <div class="day-row">
            <div class="top-line">
              <span class="day">Thur</span>
              <span class="icon">🌧️</span>
              <span class="value">7°</span>
              <span class="value">15°</span>
              <span class="value">11mph</span>
              <span class="value">75%</span>
            </div>
            <div class="bottom-line">
              <span class="date">1/8</span>
              <span class="label"></span>
              <span class="label">Low</span>
              <span class="label">High</span>
              <span class="label">Wind</span>
              <span class="label">Rain</span>
            </div>
          </div>
          <div class="day-row">
            <div class="top-line">
              <span class="day">Fri</span>
              <span class="icon">🌤️</span>
              <span class="value">10°</span>
              <span class="value">21°</span>
              <span class="value">3mph</span>
              <span class="value">5%</span>
            </div>
            <div class="bottom-line">
              <span class="date">2/8</span>
              <span class="label"></span>
              <span class="label">Low</span>
              <span class="label">High</span>
              <span class="label">Wind</span>
              <span class="label">Rain</span>
          </div>
        </div>
          <div class="day-row">
            <div class="top-line">
              <span class="day">Sat</span>
              <span class="icon">☀️</span>
              <span class="value">12°</span>
              <span class="value">24°</span>
              <span class="value">8mph</span>
              <span class="value">2%</span>
            </div>
            <div class="bottom-line">
              <span class="date">3/8</span>
              <span class="label"></span>
              <span class="label">Low</span>
              <span class="label">High</span>
              <span class="label">Wind</span>
              <span class="label">Rain</span>
            </div>
          </div>
         
        </div>
        
  </div>

 );
}

export default App;
