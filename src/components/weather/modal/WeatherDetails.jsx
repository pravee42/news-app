import React, { useState } from "react";

import styles from "./WeatherDetails.module.css";

const WeatherDetailsModal = (props) => {
  const [isClosing, setIsClosing] = useState(false);

  const stopPropagationHandler = (e) => {
    e.stopPropagation();
  };

  const onCloseHandler = (e) => {
    e.stopPropagation();

    //starting close fade animation
    setIsClosing(true);

    //waiting until close animation ends to deliver onClose();
    setTimeout(() => {
      props.onClose();
    }, 200);
  };

  //handling classes animation on open/close states
  const modalClasses = isClosing
    ? `${styles.modalContainer} ${styles.closeModal}`
    : `${styles.modalContainer}`;

  const backdropClasses = isClosing
    ? `${styles.backdropContainer} ${styles.closeBackdrop}`
    : `${styles.backdropContainer}`;

  //handling data
  const weatherIcon = `http://openweathermap.org/img/wn/${props.weatherData.data.current.weather[0].icon}@2x.png`;
  const weatherTemp = `${Math.round(
    props.weatherData.data.current.temp
  ).toString()}°C`;
  const weatherMain = props.weatherData.data.current.weather[0].main;
  const weatherFeelsLike = `Feels like ${Math.round(
    props.weatherData.data.current.feels_like
  ).toString()}°C`;
  const weatherUiv = props.weatherData.data.current.uvi;
  const weatherWind = `${props.weatherData.data.current.wind_speed} km/h`;
  const weatherHumidity = `${props.weatherData.data.current.humidity}%`;
  const weatherVisibility = `${
    props.weatherData.data.current.visibility / 1000
  } km`;
  const weatherPressure = `${props.weatherData.data.current.pressure} mb`;

  return (
    <>
      <div className={backdropClasses} onClick={onCloseHandler} />
      <div className={modalClasses} onClick={stopPropagationHandler}>
        <p>City Name, Code</p>
        <div className={styles.icon_temp}>
          <img src={weatherIcon} />
          <span className={styles.temp}>{weatherTemp}</span>
          <div className={styles.feels_like}>
            <span className={styles.main}>{weatherMain}</span>
            <span>{weatherFeelsLike}</span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>UVI</span>
            <span className={styles.data}>{weatherUiv}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>WIND</span>
            <span className={styles.data}>{weatherWind}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>HUMIDITY</span>
            <span className={styles.data}>{weatherHumidity}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>VISIBILITY</span>
            <span className={styles.data}>{weatherVisibility}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>PRESSURE</span>
            <span className={styles.data}>{weatherPressure}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetailsModal;
