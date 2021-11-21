import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCardComponent from "../cards/newscard";

export default function EducationalNews() {
  const [news, setNews] = useState([]);
  const [news_array, setnews_array] = useState([]);
  const [school, setSchool] = useState([]);

  const getNews = async () => {
    await axios
      .get("https://newsapi-abipravi.herokuapp.com/search/education zee news")
      .then((res) => setNews(res.data))
      .then((err) => console.error(err));

    await axios
      .get("https://newsapi-abipravi.herokuapp.com/search/education exams")
      .then((res) => {
        setnews_array(res.data);
      });

    await axios
      .get(
        "https://newsapi-abipravi.herokuapp.com/search/education times of india"
      )
      .then((res) => {
        setSchool(res.data);
      });
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
      {school.map((data) => {
        return (
          <NewsCardComponent
            image={data.image}
            news={data.news}
            link={data.link}
            shortnews={data.shortnews}
          />
        );
      })}
      {news_array.map((data) => {
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
