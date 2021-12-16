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

  return (
    <>
      <div className={backdropClasses} onClick={onCloseHandler} />
      <div className={modalClasses} onClick={stopPropagationHandler}>
        <p>{`${props.weatherData.city}, ${props.weatherData.region}`}</p>
        <div className={styles.icon_temp}>
          <img src={props.weatherData.current.icon} />
          <span className={styles.temp}>{props.weatherData.current.temp}</span>
          <div className={styles.feels_like}>
            <span className={styles.main}>
              {props.weatherData.current.main}
            </span>
            <span>{props.weatherData.current.feelsLike}</span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>UVI</span>
            <span className={styles.data}>{props.weatherData.current.uvi}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>WIND</span>
            <span className={styles.data}>
              {props.weatherData.current.wind}
            </span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>HUMIDITY</span>
            <span className={styles.data}>
              {props.weatherData.current.humidity}
            </span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>VISIBILITY</span>
            <span className={styles.data}>
              {props.weatherData.current.visibility}
            </span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.desc}>PRESSURE</span>
            <span className={styles.data}>
              {props.weatherData.current.pressure}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetailsModal;
