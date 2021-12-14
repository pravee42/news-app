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
        <h1>Weather Details</h1>
        <p>Details here.</p>
      </div>
    </>
  );
};

export default WeatherDetailsModal;
