import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import useWeather from "./hooks/useWeather";
import styles from "./Weather.module.css";
import WeatherDetailsModal from "./modal/WeatherDetails";
import LoadingSpinner from "./ui/LoadingSpinner";

const Weather = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [updateWeather, isLoadingRequest, weatherData, error] = useWeather();

  //update weather each x minutes
  useEffect(() => {
    const sendFirstRequest = async () => {
      await updateWeather();
    };
    sendFirstRequest();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      await updateWeather();
    }, 180000);
    return () => clearInterval(interval);
  }, []);

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
            weatherData={weatherData /* ? weatherData : props.weatherData */}
            error={error}
            loading={isLoadingRequest}
          />,
          document.getElementById("modalPortal")
        )}
      {isLoadingRequest ? (
        <div className={styles.loading}>
          <LoadingSpinner />
        </div>
      ) : !error ? (
        <div
          className={styles.weatherContainer}
          onClick={onWeatherClickHandler}
        >
          <img
            className={styles.iconWeather}
            src={weatherData && weatherData.current.icon}
          />
          <span>{weatherData && weatherData.current.temp}</span>
        </div>
      ) : (
        <p className={styles.loading}>Try again...</p>
      )}
    </>
  );
};

export default Weather;
