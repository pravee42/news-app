import React, { useState, useEffect } from "react";
import axios from "axios";
import SharedNewsCardComponent from "../../cards/share_news_card";

export const SharedNewsComponent = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const pathname = await window.location.pathname.slice(7);
    await axios
      .get(
        `https://newsapi-abipravi.herokuapp.com/share/${window.atob(pathname)}`
      )
      .then((res) => {
        setNews(res.data);
      });
  };

  useEffect(async () => {
    await getNews();
  }, []);

  return (
    <div>
      <div className="container">
        {news.map((data) => {
          return (
            <SharedNewsCardComponent
              news={data.news}
              image={data.image}
              source={data.source}
            />
          );
        })}
      </div>
    </div>
  );
};
