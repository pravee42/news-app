import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCardComponent1 from '../cards/newscard1';
import NewsCardComponent from '../cards/newscard';

export default function EducationalNews() {
	const [news, setNews] = useState([]);
	const [news_array, setnews_array] = useState([]);
	const [school, setSchool] = useState([]);

	const getNews = async () => {
		await axios
			.get('https://newsapi-abipravi.herokuapp.com/search/educationreaserch')
			.then((res) => setNews(res.data))
			.then((err) => console.error(err));

		await axios
			.get('https://newsapi-abipravi.herokuapp.com/search/school')
			.then((res) => {
				setnews_array(res.data);
			});

		await axios
			.get('https://newsapi-abipravi.herokuapp.com/search/schoolindia')
			.then((res) => {
				setSchool(res.data);
			});
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<div>
			{news.length === 0 && <h1>Loading</h1>}
			{news.map((data) => {
				return (
					<NewsCardComponent
						image={data.image}
						news={data.news}
						link={data.link}
						shortnews={data.shortnews}
					/>
				);
			})}
			{school.map((data) => {
				return (
					<NewsCardComponent1
						image={data.image}
						news={data.news}
						link={data.link}
						shortnews={data.shortnews}
					/>
				);
			})}
			{news_array.map((data) => {
				return (
					<NewsCardComponent1
						image={data.image}
						news={data.news}
						link={data.link}
						shortnews={data.shortnews}
					/>
				);
			})}
		</div>
	);
}
