import React, { useState, useEffect } from "react";
import NewsCardComponent1 from "./../cards/newscard1";
import axios from "axios";

export default function ViewBookmark() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://newsapi-abipravi.herokuapp.com/bookmark/get/${localStorage.getItem(
    "user"
  )}`;

  const getNews = async () => {
    setLoading(true);
    await axios.get(url).then(
      (res) => setNews(res.data),
      (err) => console.log("error", err)
    );
    setLoading(false);
  };

  useEffect(async () => {
    await getNews();
  }, []);

  return (
    <div>
      {!loading ? (
        news.length !== 0 ? (
          news.map((data) => (
            <NewsCardComponent1
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
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>No Bookmarks Added</h4>
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
          }}
        >
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
