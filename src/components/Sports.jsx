import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCardComponent1 from '../cards/newscard1';


export default function SportsNewsComponent() {
	const [news, setNews] = useState([]);

	const getNews = async () => {
		await axios
			.get('https://newsapi-abipravi.herokuapp.com/sports')
			.then((res) => setNews(res.data))
			.then((err) => console.error(err));
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<div>
			{news.length === 0 && <h1>Loading</h1>}
			{news.map((data) => {
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
