import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCardComponent from '../cards/newscard';
import './../styles/App.css'; 
export default function SearchNews() {
    const [news, setNews] = useState([]);
    const [search, setsearch] = useState([])

	const getNews = async () => {
		await axios
			.get(`https://newsapi-abipravi.herokuapp.com/search/${search}`)
			.then((res) => setNews(res.data))
			.then((err) => console.error(err));
	};

    return (
        <div>
            <div className="searchtop" >
                <input type="text" style={{height: '5vh'}} className="inputs" placeholder="search" onChange={(e) => setsearch(e.target.value)}  />
                <button style={{height: '5vh'}} class="btn btn-primary" onClick={getNews}>Search</button>
            </div>
		<div style={{height: '80vh', overflowY: 'scroll'}}>
			{news.length === 0 && (
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						padding: '100px',
					}}>
					<div class='spinner-border text-primary' role='status'>
						<span class='visually-hidden'>Loading...</span>
					</div>
				</div>
			)}
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
            </div>
	);
}
