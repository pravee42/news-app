import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCardComponent from "../cards/newscard";
import "./../styles/App.css";
export default function SearchNews() {
  const [news, setNews] = useState([]);
  const [search, setsearch] = useState([]);

  const getNews = async () => {
    await axios
      .get(`https://newsapi-abipravi.herokuapp.com/search/${search}`)
      .then((res) => setNews(res.data))
      .then((err) => console.error(err));
  };

  return (
    <div>
      <div className="searchtop">
        <input
          type="text"
          className="search_textbox inputs"
          placeholder="search"
          onChange={(e) => setsearch(e.target.value)}
        />
        <button
          value="Search"
          class="btn btn-primary search_button"
          onClick={getNews}
        ></button>
      </div>
      <div style={{ height: "80vh", overflowY: "scroll" }}>
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
    </div>
  );
}
