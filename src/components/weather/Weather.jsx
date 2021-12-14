import React, { useState } from "react";
import { createPortal } from "react-dom";

import styles from "./Weather.module.css";
import WeatherDetailsModal from "./modal/WeatherDetails";

const Weather = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onWeatherClickHandler = (e) => {
    e.stopPropagation();
    setIsModalOpened(true);
  };

  const onCloseHandler = () => {
    setIsModalOpened(false);
    props.close();
  };

  return (
    <>
      {isModalOpened &&
        createPortal(
          <WeatherDetailsModal onClose={onCloseHandler} />,
          document.getElementById("modalPortal")
        )}
      <div className={styles.weatherContainer} onClick={onWeatherClickHandler}>
        Hello World
      </div>
    </>
  );
};

export default Weather;
