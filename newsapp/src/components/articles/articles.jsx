import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonary from "react-masonry-css";
import ArticlesCardComponent from "./articlesCard";

const ArticlesComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    CallArticles();
  }, []);

  const breakpointObj = {
    default: 2,
    3000: 5,
    2000: 4,
    1200: 3,
    1000: 2,
    500: 1,
  };

  const CallArticles = () => {
    axios.get("https://newsapi-abipravi.herokuapp.com/articles").then((res) => {
      setArticles(res.data);
    });
  };

  return (
    <Masonary
      className="d-flex p-3 gap-3"
      style={{ flexWrap: "wrap" }}
      breakpointCols={breakpointObj}
    >
      {articles?.map((data) => (
        <ArticlesCardComponent key={data.id} articledata={data} />
      ))}
    </Masonary>
  );
};
export default ArticlesComponent;
