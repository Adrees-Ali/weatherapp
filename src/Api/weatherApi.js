export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};