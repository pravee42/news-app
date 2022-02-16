import React, { useState, useEffect } from "react";
import NewsCardComponent1 from "./../cards/newscard1";
import axios from "axios";
import loadingImage from "../assests/loading-splash.gif";
import noBookMarkimage from "../assests/no-bookmark.webp";

export default function ViewBookmark() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://newsapi-abipravi.herokuapp.com/bookmark/get/${localStorage.getItem(
    "user"
  )}`;

  const getNews = async () => {
    await setLoading(true);
    await axios.get(url).then(
      (res) => setNews(res.data),
      (err) => console.log("error", err)
    );
    await setLoading(false);
  };

  useEffect(async () => {
    await getNews();
  }, []);

  return (
    <div>
      {loading === false ? (
        news.length >= 1 ? (
          news.map((data) => (
            <NewsCardComponent1
              key={data.id}
              news={data.news}
              image={data.image}
              link={data.source}
              bkid={data.id}
              reload={getNews}
            />
          ))
        ) : (
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
        )
      ) : (
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
    </div>
  );
}
