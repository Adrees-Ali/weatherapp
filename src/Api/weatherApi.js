// Weather Data API
export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weather_code&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max`
    );
    const data = await response.json();

    if (!data.daily) {
      throw new Error("Daily forecast data not available");
    }

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};




// Get user's location from the browser
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => reject(error)
      );
    } else {
      reject(new Error("Geolocation not supported"));
    }
  });
};


// Get city name from coordinates
export const getCityName = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await res.json();
    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.county ||
      `${data.address?.state}, ${data.address?.country}`
    );
  } catch (err) {
    console.error("Error fetching city name:", err);
    return null;
  }
};



