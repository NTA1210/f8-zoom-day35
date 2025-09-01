import React, { useState } from "react";
import styles from "./Weather.module.scss";
import clsx from "clsx";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
    hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
    danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
  });

  const icons = {
    Nắng: "☀️",
    "Có mây": "🌤️",
    "Mưa nhẹ": "🌧️",
    "Mưa to": "⛈️",
    Bão: "🌪️",
  };

  const [city, setCity] = useState("hcm");

  const setBackground = (temp) => {
    if (temp > 30) {
      return "sunny";
    } else if (temp > 20) {
      return "cloudy";
    } else {
      return "rainy";
    }
  };

  const handleRandom = () => {
    const cur = weatherData[city];
    const temp = cur.temp + Math.floor(Math.random() * 11) - 5;
    const humidity = cur.humidity + Math.floor(Math.random() * 11) - 5;

    setWeatherData({
      ...weatherData,
      [city]: { ...cur, temp, humidity },
    });
  };

  return (
    <div className={clsx(styles.weather)}>
      <h1 className="title">Weather App</h1>
      <div
        className={clsx(
          styles[setBackground(weatherData[city].temp)],
          styles["weather-card"]
        )}
      >
        <div className={clsx(styles.header)}>
          Choose your location
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={clsx(styles.select)}
          >
            {Object.keys(weatherData).map((key) => (
              <option key={key} value={key}>
                {weatherData[key].city}
              </option>
            ))}
          </select>
        </div>

        <div className={clsx(styles.body)}>
          <div className={clsx(styles.temp)}>
            {weatherData[city].temp}°C
            <div className={clsx(styles.icon)}>
              {icons[weatherData[city].weather]}
            </div>
          </div>
          <div className={clsx(styles["weather-status"])}>
            {weatherData[city].weather}
          </div>
          <div className={clsx(styles.humidity)}>
            Humidity: {weatherData[city].humidity}%
          </div>
        </div>

        <button className={clsx(styles.refresh, "btn")} onClick={handleRandom}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default WeatherApp;
