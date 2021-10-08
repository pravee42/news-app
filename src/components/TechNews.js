import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCardComponent from '../cards/newscard';

export default function TechNews() {
	const [news, setNews] = useState([]);

	const getNews = async () => {
		await axios
			.get('https://newsapi-abipravi.herokuapp.com/tech')
			.then((res) => setNews(res.data))
			.then((err) => console.error(err));
		console.log(news);
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
		</div>
	);
}
