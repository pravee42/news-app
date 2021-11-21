import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCardComponent from "../cards/newscard";

export default function SportsNewsLatestComponent() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    await axios
      .get("http://newsapi-abipravi.herokuapp.com/sports/latest")
      .then((res) => setNews(res.data))
      .then((err) => console.error(err));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      {news.length === 0 && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "100px",
          }}
        >
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
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
  );
}
