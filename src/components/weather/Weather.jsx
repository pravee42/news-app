import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import useWeather from "./hooks/useWeather";
import styles from "./Weather.module.css";
import WeatherDetailsModal from "./modal/WeatherDetails";

const Weather = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const updateWeather = useWeather();

  //update weather each x minutes
  useEffect(() => {
    const interval = setInterval(() => {
      const sendingRequest = async () => {
        const response = await updateWeather();
        response.statusText === "OK"
          ? setWeatherData(response)
          : console.log("error");
      };
      /* sendingRequest(); */
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  console.log(weatherData);

  const weatherIcon = weatherData
    ? `http://openweathermap.org/img/wn/${weatherData.data.current.weather[0].icon}@2x.png`
    : "http://openweathermap.org/img/wn/10n@2x.png";

  const weatherTemp = weatherData
    ? `${Math.round(weatherData.data.current.temp).toString()}°C`
    : "10°C";

  const onWeatherClickHandler = (e) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };

  const onCloseHandler = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      {isModalOpened &&
        createPortal(
          <WeatherDetailsModal
            onClose={onCloseHandler}
            weatherData={weatherData}
          />,
          document.getElementById("modalPortal")
        )}
      <div className={styles.weatherContainer} onClick={onWeatherClickHandler}>
        <img className={styles.iconWeather} src={weatherIcon}></img>
        <span>{weatherTemp}</span>
      </div>
    </>
  );
};

export default Weather;
