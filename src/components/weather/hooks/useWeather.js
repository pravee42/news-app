import React, { useState, useEffect } from "react";
import axios from "axios";

import API_KEY from "./_credentials.js"; //Get API_KEY from https://openweathermap.org/api

const useWeather = () => {
	const [weatherData, setWeatherData] = useState();
	const [error, setError] = useState();
	const [isLoadingRequest, setIsLoadingRequest] = useState(false);
	const [lat, setLat] = useState();
	const [lon, setLon] = useState();

	// const getUserLocation = async () => {
	// 	try {
	// 		const response = await axios.get('http://ip-api.com/json/');
	// 		return response;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		if (navigator.geolocation.getCurrentPosition) {
			getPosition();
		} else {
			navigator.geolocation.getCurrentPosition(function (pos) {
				setLat(pos);
				setLon(pos);
				getPosition();
			});
		}
	}, []);

	const getPosition = () => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLat(position.coords.latitude);
			setLon(position.coords.longitude);
		});
		updateWeather();
	};

	useEffect(() => {
		updateWeather();
	}, [lat, lon]);

	const updateWeather = async () => {
		// const userLocation = await getUserLocation();
		const config = {
			params: {
				appid: API_KEY,
				lat: lat,
				lon: lon,
				exclude: "minutely,hourly",
				units: "metric",
			},
		};

		try {
			setIsLoadingRequest(true);
			const response = await axios.get(
				"https://api.openweathermap.org/data/2.5/onecall",
				config
			);
			const data = {
				// city: userLocation.data.city,
				// region: userLocation.data.region,
				lat: lat,
				lon: lon,
				current: {
					icon: `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`,
					temp: `${Math.round(
						response.data.current.temp
					).toString()}°C`,
					main: response.data.current.weather[0].main,
					feelsLike: `Feels like ${Math.round(
						response.data.current.feels_like
					).toString()}°C`,
					uvi: response.data.current.uvi,
					wind: `${Math.round(
						response.data.current.wind_speed * 3.6
					)}  km/h`,
					humidity: `${response.data.current.humidity}%`,
					visibility: `${response.data.current.visibility / 1000} km`,
					pressure: `${response.data.current.pressure} mb`,
				},
				daily: [
					response.data.daily.map((item) => {
						return {
							date: new Date(item.dt * 1000),
							pop: `${Math.round(item.pop * 100)}%`,
							tempMin: `${Math.round(item.temp.min)} °C`,
							tempMax: `${Math.round(item.temp.max)} °C`,
							icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
							main: item.weather[0].main,
						};
					}),
				],
			};
			setWeatherData(data);
			setError(null);
			setIsLoadingRequest(false);
		} catch (error) {
			setError(error);
			setIsLoadingRequest(false);
		}
	};

	return [updateWeather, isLoadingRequest, weatherData, error];
};

export default useWeather;
