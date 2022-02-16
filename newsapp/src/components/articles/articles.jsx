import React, { useState, useEffect } from "react";
import axios from "axios";
import marked from "marked";
import ArticlesCardComponent from "./articlesCard";

const ArticlesComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    CallArticles();
  }, []);

  const CallArticles = () => {
    axios.get("https://newsapi-abipravi.herokuapp.com/articles").then((res) => {
      setArticles(res.data);
    });
  };

  // setInterval(CallArticles(), 100000);

  return (
    <div style={articlestyle} className="gap-3">
      {articles.map((data) => (
        <ArticlesCardComponent articledata={data} />
      ))}
    </div>
  );
};
export default ArticlesComponent;

const articlestyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "30px",
  flexWrap: "wrap",
  justifyContent: "space-between",
};
