import React, {useState, useEffect} from 'react'
import NewsCardComponent1 from './../cards/newscard1';
import axios from 'axios';


export default function ViewBookmark() {
    const [news, setNews] = useState([]);
    const url = `https://newsapi-abipravi.herokuapp.com/bookmark/get/${localStorage.getItem('user')}`

    const getNews = async () => {
        await axios.get(url).then(res => setNews(res.data), err => setNews(""))
    }

    useEffect(() => {getNews()},[])
 
    return (
        <div>
            {news.map(data => <NewsCardComponent1 news={data.news} image={data.image} link={data.source} />)}
            {news.length === 0 && <h3>No News Found</h3>}
        </div>
    )
}
