import React, { useState, useEffect } from "react";

import useWeather from "./hooks/useWeather";
import styles from "./Weather.module.css";
import WeatherDetailsModal from "./modal/WeatherDetails";
import LoadingSpinner from "./ui/LoadingSpinner";

const Weather = (props) => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	const [updateWeather, isLoadingRequest, weatherData, error] = useWeather();

	//update weather each x minutes
	useEffect(() => {
		updateWeather()
	}, [weatherData, isModalOpened]);

	// useEffect(() => {
	// 	const interval = setInterval(async () => {
	// 		await updateWeather();
	// 	}, 180000);
	// 	return () => clearInterval(interval);
	// }, [updateWeather]);

	const onWeatherClickHandler = (e) => {
		e.stopPropagation();
		setIsModalOpened(true);
	};

	const onCloseHandler = () => {
		setIsModalOpened(false);
	};

	return (
		<>
			{isModalOpened && (
				<WeatherDetailsModal
					onClose={onCloseHandler}
					weatherData={
						weatherData /* ? weatherData : props.weatherData */
					}
					error={error}
					loading={isLoadingRequest}
				/>
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
						lazy
						src={weatherData && weatherData.current.icon}
					/>
					<span>{weatherData && weatherData.current.temp}</span>
				</div>
			) : (
				<p className={styles.loading}>Loading</p>
			)}
		</>
	);
};

export default Weather;
