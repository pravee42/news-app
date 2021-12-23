import React, { useState } from "react";

import styles from "./DailyList.module.css";

const DailyList = (props) => {
  const [showDetails, setShowDetails] = useState(0);

  const onNextHandler = (e) => {
    const element = document.getElementById("daily");
    element.scrollLeft = element.scrollLeft += 153;
  };
  const onPreviousHandler = (e) => {
    const element = document.getElementById("daily");
    element.scrollLeft = element.scrollLeft -= 153;
  };

  const onItemClickHandler = (e, index) => {
    setShowDetails(index);
  };

  const dailyItem = props.data[0].map((item, index) => {
    return (
      <li
        key={index}
        onClick={(e) => onItemClickHandler(e, index)}
        className={styles.dailyItem}
      >
        <span>{item.date.toUTCString().slice(0, 7)}</span>
        <div className={styles.tempContainer}>
          <img className={styles.icon} src={item.icon} />
          <div className={styles.temp}>
            <span className={styles.temp_max}>{item.tempMax}</span>
            <span>{item.tempMin}</span>
          </div>
          <div
            style={
              showDetails == index ? { display: "flex" } : { display: "none" }
            }
            className={styles.details}
          >
            <span>{item.main}</span>
            <span>
              <svg
                className={styles.pop}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="tint"
                className={`${styles.pop} svg-inline--fa fa-tint fa-w-11`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"
                ></path>
              </svg>
              {item.pop}
            </span>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.dailyContainer}>
      <svg
        onClick={onPreviousHandler}
        className={styles.nextArrow}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-right"
        className={`${styles.nextArrow} svg-inline--fa fa-angle-right fa-w-8`}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path
          fill="currentColor"
          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
        ></path>
      </svg>
      <ul id="daily" className={styles.dailyList}>
        {dailyItem}
      </ul>
      <svg
        onClick={onNextHandler}
        className={styles.nextArrow}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-right"
        className={`${styles.nextArrow} svg-inline--fa fa-angle-right fa-w-8`}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path
          fill="currentColor"
          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
        ></path>
      </svg>
    </div>
  );
};

export default DailyList;
