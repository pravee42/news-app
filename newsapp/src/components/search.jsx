import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCardComponent from "../cards/newscard";
import loadingImage from "../assests/loading-splash.gif";
import "./../styles/App.css";
export default function SearchNews() {
  const [news, setNews] = useState([]);
  const [search, setsearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    await setLoading(true);
    await axios
      .get(`https://newsapi-abipravi.herokuapp.com/search/${search}`)
      .then((res) => setNews(res.data))
      .then((err) => console.error(err));
    await setLoading(false);
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
          className="btn btn-primary search_button"
          onClick={getNews}
        ></button>
      </div>
      <div style={{ height: "80vh", overflowY: "scroll" }}>
        {loading === true && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "100px",
              backgroundColor: "#fcfefc",
            }}
          >
            <img src={loadingImage} alt="loading" />
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
