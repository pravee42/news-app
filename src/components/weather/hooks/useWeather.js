import React from "react";
import axios from "axios";

import API_KEY from "./_credentials.js"; //Get API_KEY from https://openweathermap.org/api

const useWeather = () => {
  const userLatitude = "40.745807";
  const userLongitude = "-74.061418";
  const exclude = "minutely,hourly,daily";
  const units = "metric";

  const updateWeather = async () => {
    const config = {
      params: {
        appid: API_KEY,
        lat: userLatitude,
        lon: userLongitude,
        exclude: exclude,
        units: units,
      },
    };

    try {
      console.log("sending request...");
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall",
        config
      );

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return updateWeather;
};

export default useWeather;
